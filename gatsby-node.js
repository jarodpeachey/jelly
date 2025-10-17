const { node } = require("prop-types");
const path = require("path");
const fs = require("fs");

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = require.resolve(`./src/templates/blog.js`);
  const postTemplate = require.resolve(`./src/templates/post.js`);

  // Read markdown files directly from src/content/posts
  const postsDir = path.resolve(__dirname, 'src/content/posts');
  let posts = [];
  try {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));
    posts = files.map((f) => {
      const raw = fs.readFileSync(path.join(postsDir, f), 'utf8');
      const normalized = raw.replace(/\r\n/g, '\n');
      const m = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
      let front = {};
      let body = '';
      if (m) {
        const fmLines = m[1].split('\n');
        fmLines.forEach((line) => {
          const idx = line.indexOf(':');
          if (idx > 0) {
            const k = line.slice(0, idx).trim();
            const v = line.slice(idx + 1).trim().replace(/^"|"$/g, '');
            front[k] = v;
          }
        });
        body = m[2] || '';
      } else {
        body = normalized;
      }

      return {
        slug: front.slug || path.basename(f, '.md'),
        status: 'published',
        title: front.title || '',
        published_at: front.published_at || '',
        metadata: {
          markdown_content: body,
          meta_description: front.meta_description || '',
          featured_image: { url: front.featured_image || '' },
        },
      };
    });
  } catch (err) {
    reporter.panicOnBuild(`Error loading markdown posts from ${postsDir}: ${err}`);
    return;
  }

  const edges = posts.map((p) => ({ node: p }));

  createPage({
    path: "/blog",
    component: blogTemplate,
    context: {
      posts: { edges },
    },
  });

  // Create individual post pages and pass the post object
  posts.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: postTemplate,
      context: {
        slug: node.slug,
        post: node,
      },
    });
  });
};
