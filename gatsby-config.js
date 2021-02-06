module.exports = {
  siteMetadata: {
    title: `Custom websites tailored to grow your business`,
    description: `We create fully custom websites that are SEO-friendly, responsive, fully accessible and blazing fast. Our websites are crafted to target your audience, making them the perfect way to get your business a better online presence.`,
    author: `@jarodpeachey`,
    siteUrl: "https://jellydevelopment.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
  ],
};
