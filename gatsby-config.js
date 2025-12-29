module.exports = {
    siteMetadata: {
        title: `Jelly Development | Website design agency in Orlando`,
        description: `Website design agency for small businesses in Orlando and Winter Garden - specializing in WordPress, Shopify, Squarespace and custom solutions.`,
        author: `Jelly Development`,
        siteUrl: "https://jellydevelopment.com",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: ["G-NWTZ5EG98G"],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                    // Defaults to https://www.googletagmanager.com
                    // Use the official googletagmanager origin so the plugin loads the gtag script
                    origin: "https://www.googletagmanager.com",
                    // Delays processing pageview events on route update (in milliseconds)
                    delayOnRouteUpdate: 0,
                },
            },
        },
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
                whitelist: ["scrolled", "open", "blur", "middle", "edge", "outer", "request-storage-access"],
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
                    // Add Google tag/ads domains so their conversion/viewthrough scripts can load.
                    // Also allow JotForm for embedded forms.
                        "script-src": "'self' 'unsafe-inline' 'unsafe-eval' data: https://www.googletagmanager.com https://googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.googletagservices.com https://form.jotform.com",
                    // For older browsers and explicit script element loads, set script-src-elem as well.
                    // Also allow JotForm for embedded forms.
                        "script-src-elem": "'self' 'unsafe-inline' 'unsafe-eval' data: https://www.googletagmanager.com https://googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.googletagservices.com https://form.jotform.com",
                    "style-src": "'self' 'unsafe-inline' https://form.jotform.com",
                    // you can add your directives or override defaults
                },
            },
        },
        {
            resolve: "gatsby-plugin-zopfli",
        },
    ],
};
