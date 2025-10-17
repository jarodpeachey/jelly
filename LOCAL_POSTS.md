This project uses markdown files for blog posts located in `src/content/posts`.

Each post is a Markdown file with YAML frontmatter. Example:

```markdown
---
slug: my-post-slug
title: "My Post Title"
published_at: "2025-10-17"
meta_description: "Short description"
featured_image: "/media/img/blog/my-image.jpg"
---

# Your markdown content

More content here...
```

How it works:
- `gatsby-config.js` includes a `gatsby-source-filesystem` entry for `src/content/posts` and `gatsby-transformer-remark`.
- `gatsby-node.js` queries `allMarkdownRemark` at build time and converts each markdown node into the post shape used by templates.
- It creates the `/blog` listing page and `/blog/:slug` pages, passing the full post object into `pageContext.post`.

Adding a post:
1. Create a `.md` file under `src/content/posts/`, e.g. `2025-10-17-my-post.md`.
2. Provide `slug`, `title`, `published_at`, `meta_description`, and `featured_image` in the frontmatter.
3. Run `npm run develop` or `npm run build`.

Notes:
- `gatsby-transformer-remark` exposes `rawMarkdownBody`, which templates use for rendering via `react-markdown`.
- Featured images can be referenced from `static/media/img` or any public URL.

If you'd like, I can switch templates to use GraphQL queries against `allMarkdownRemark` directly instead of receiving `pageContext.post`.
