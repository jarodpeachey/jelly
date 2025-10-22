module.exports = {
    siteMetadata: {
        title: `Jelly Development | Website design & management agency in Orlando`,
        description: `Website design & management agency for small businesses in Orlando and Winter Garden - specializing in WordPress, Shopify, Squarespace and custom solutions.`,
        author: `Jelly Development`,
        siteUrl: "https://jellydevelopment.com",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        // {
        //   resolve: "gatsby-source-cosmicjs",
        //   options: {
        //     bucketSlug: "jelly-development-production", // Bucket Slug
        //     objectTypes: ["posts"], // List of the Object Types you want to be able to request from Gatsby.
        //     apiAccess: {
        //       read_key: "vA17oFFhuUlFosf6AJhSjW0J9u3cyA63XgYEe7NzSYEJr5vpn9",
        //     },
        //   },
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/media/img`,
            },
        },
        // posts are read directly from src/content/posts by gatsby-node.js
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-purgecss",
            options: {
                printRejected: true,
                develop: false,
                tailwind: false,
                // Whitelist dynamic classes that are added/removed by JS at runtime
                whitelist: ["scrolled", "open", "blur", "middle", "edge", "outer"],
            },
        },
        // "gatsby-plugin-split-css",
        // {
        //   resolve: "gatsby-plugin-no-javascript-utils",
        //   options: {
        //     noSourcemaps: true,
        //     removeGeneratorTag: true,
        //     removeReactHelmetAttrs: true,
        //     noInlineStyles: false,
        //     removeGatsbyAnnouncer: true,
        //     removeFocusWrapper: false,
        //     removePreloadLinks: false,
        //   },
        // },
        // {
        //   resolve: "gatsby-plugin-no-javascript",
        //   options: {
        //     excludeFiles: "request",
        //   },
        // },
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
                    // Allowing 'unsafe-eval' here unblocks code that relies on eval/new Function
                    // (for example webpack runtime in some builds). This is the pragmatic fix.
                    "script-src": "'self' 'unsafe-inline' 'unsafe-eval' data: googletagmanager.com",
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
