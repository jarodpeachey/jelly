// const { formatURL } = require("./src/utils/formatURL");

// const { node } = require("prop-types");

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions;

//   const blogTemplate = require.resolve(`./src/templates/blog.js`);
//   const postTemplate = require.resolve(`./src/templates/post.js`);

//   const result = await graphql(`
//     {
//       allCosmicjsPosts {
//         edges {
//           node {
//             slug
//             status
//             thumbnail
//             title
//             published_at(formatString: "MM/DD/YYYY")
//             metadata {
//               markdown_content
//               meta_description
//               featured_image {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(result.errors);
//     return;
//   }

//   createPage({
//     path: "/blog",
//     component: blogTemplate,
//     context: {
//       posts: result.data.allCosmicjsPosts,
//     },
//   });

//   result.data.allCosmicjsPosts.edges.forEach(({ node }) => {
//     createPage({
//       path: `/blog/${node.slug}`,
//       component: postTemplate,
//       context: {
//         slug: node.slug,
//       },
//     });
//   });
// };
