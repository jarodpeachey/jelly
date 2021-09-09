module.exports = {
  siteMetadata: {
    title: `Custom website design & development`,
    description: `Get the perfect custom website for your business. We specialize in custom website design, SEO, accessibility and copywriting. Our websites are crafted to be beautiful, easy-to-use and optimized for increasing your business's revenue.`,
    author: `@jarodpeachey`,
    siteUrl: "https://jellydevelopment.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-cosmicjs",
      options: {
        bucketSlug: "jelly-development-production", // Bucket Slug
        objectTypes: ["posts"], // List of the Object Types you want to be able to request from Gatsby.
        apiAccess: {
          read_key: "vA17oFFhuUlFosf6AJhSjW0J9u3cyA63XgYEe7NzSYEJr5vpn9",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/media/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
        develop: false,
        tailwind: false,
        whitelist: ["scrolled", "open", "blur"],
      },
    },
    "gatsby-plugin-split-css",
    {
      resolve: "gatsby-plugin-no-javascript-utils",
      options: {
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeReactHelmetAttrs: true,
        noInlineStyles: false,
        removeGatsbyAnnouncer: true,
        removeFocusWrapper: false,
        removePreloadLinks: false,
      },
    },
    {
      resolve: "gatsby-plugin-no-javascript",
      options: {
        excludeFiles: "request",
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeDefaultDirectives: false,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          "script-src": "'self' www.splitbee.io",
          "script-src": "'self' www.plausible.io",
          "style-src": "'self' 'unsafe-inline'",
          // you can add your directives or override defaults
        },
      },
    },
  ],
};
