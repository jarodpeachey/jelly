module.exports = {
  siteMetadata: {
    title: `Small business website design & development in Orlando`,
    description: `Get the perfect website for your small business, designed to feel like home for your local customers in Orlando and Winter Garden`,
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
          "script-src": "'self' 'unsafe-inline' data: plausible.io cdn.splitbee.io d33wubrfki0l68.cloudfront.net",
          "style-src": "'self' 'unsafe-inline'",
          // you can add your directives or override defaults
        },
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
    },
  ],
};
