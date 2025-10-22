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

  // --- Sitemap generation (fallback/manual) ---
  // We generate a simple sitemap.xml in public/ using the posts we just read.
  try {
    const siteConfig = require("./gatsby-config.js");
    const siteUrl = (siteConfig && siteConfig.siteMetadata && siteConfig.siteMetadata.siteUrl) || "";
    if (siteUrl) {
      const urls = [];

      // Home
      urls.push({ url: `${siteUrl}/`, priority: 1.0, changefreq: "daily" });

      // Blog listing
      urls.push({ url: `${siteUrl}/blog`, priority: 0.8, changefreq: "weekly" });

      // Posts (use published_at for lastmod if available)
      posts.forEach((p) => {
        const loc = `${siteUrl}/blog/${p.slug}`;
        const lastmod = p.published_at || null;
        urls.push({ url: loc, priority: 0.7, changefreq: "monthly", lastmod });
      });

      // Build XML
      const xmlItems = urls
        .map((u) => {
          const parts = [`<loc>${u.url}</loc>`];
          if (u.lastmod) parts.push(`<lastmod>${u.lastmod}</lastmod>`);
          if (u.changefreq) parts.push(`<changefreq>${u.changefreq}</changefreq>`);
          if (u.priority !== undefined) parts.push(`<priority>${u.priority}</priority>`);
          return `<url>${parts.join("")}</url>`;
        })
        .join("\n");

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlItems}\n</urlset>`;

      const outDir = path.resolve(__dirname, "public");
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemap, "utf8");
      reporter.info(`Wrote sitemap.xml with ${urls.length} URLs to ${outDir}`);
    } else {
      reporter.warn("siteUrl not configured in gatsby-config.js; skipping sitemap generation");
    }
  } catch (err) {
    reporter.warn(`Error generating sitemap.xml: ${err}`);
  }
};

// Keep console.* in production build by disabling Terser's drop_console
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Only adjust during the production JS build
  if (stage === "build-javascript" || stage === "develop") {
    const TerserPlugin = require("terser-webpack-plugin");
    const webpack = require("webpack");

    actions.setWebpackConfig({
      optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                // Ensure console statements are not dropped
                drop_console: false,
              },
            },
            extractComments: false,
          }),
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          // expose as string 'true' so checks like process.env.GATSBY_SHOW_LOGS === 'true' pass
          'process.env.gatsbyshowlogs': JSON.stringify('true'),
          'process.env.GATSBY_SHOW_LOGS': JSON.stringify('true'),
        }),
      ],
    });
  }
};
