// import React from "react";
// import SEO from "../components/SEO";
// import Navigation from "../components/Navigation";
// import "../styles/partials/pages/_blog.scss";
// import Footer from "../components/Footer";

// const Blog = ({ pageContext }) => {
//   const {
//     posts: { edges: posts },
//   } = pageContext;

//   console.log(posts);
//   return (
//     <>
//       <SEO
//         title="Blog | Jelly Development"
//         description="Tips, tricks and articles related to JAMstack and custom website design"
//         // image="/images/blog/seo.png"
//         bodyClass="blog"
//       />
//       <header>
//         <Navigation />
//       </header>
//       <div id="wrapper" className="wrapper">
//         <section className="hero">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-8 offset-lg-2">
//                 <h1>Blog</h1>
//               </div>
//             </div>
//           </div>
//         </section>
//         <main>
//           <section className="posts">
//             <img role="presentation" alt="" src="/media/img/backgrounds/circle.svg" alt="" />
//             <div className="white">
//               <div className="container">
//                 <div className="infinite">
//                   <div className="row">
//                     {posts.map(({ node }, index) => {
//                       if (index <= 10) {
//                         return (
//                           <div className="col-sm-6 col-lg-4  infinite__item" data-index={index}>
//                             <a href={`/blog/${node.slug}`} className="post-card">
//                               <img src={node.metadata.featured_image.url} alt="" />
//                               <h3>{node.title}</h3>
//                               <p>{node.meta_description}</p>
//                               <small>{node.published_at}</small>
//                             </a>
//                           </div>
//                         );
//                       } else {
//                         return (
//                           <div className="col-sm-6 col-lg-4  infinite__item hidden" data-index={index}>
//                             <a href={`/blog/${node.slug}`} className="post-card">
//                               <img src={node.metadata.featured_image.url} alt="" />
//                               <h3>{node.title}</h3>
//                               <p>{node.meta_description}</p>
//                               <small>{node.published_at}</small>
//                             </a>
//                           </div>
//                         );
//                       }
//                     })}
//                   </div>
//                   {posts.length > 11 && <div className="btn infinite__button outlined secondary">Load More</div>}
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="cta">
//             <img role="presentation" src="/media/img/backgrounds/wave--dark.svg" alt="" className="wave" />
//             <img role="presentation" alt="" className="blob" src="/media/img/backgrounds/blob--dark.svg" />
//             <img role="presentation" alt="" className="blobs" src="/media/img/backgrounds/blobs--dark.svg" />
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-8 offset-lg-2 max-560">
//                   <p className="display">CONTACT US</p>
//                   <h2 className="section-heading">Let's discuss your new website.</h2>
//                   <div className="card">
//                     <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
//                                             <p class="hidden">
//                         <label>
//                           Don't fill this out if you're human: <input name="bot-field" />
//                         </label>
//                       </p>
//                       <div className="row">
//                         <div className="col-lg-12">
//                           <label name="name">
//                             Name <span>*</span>
//                             <input required type="text" id="name" name="name" placeholder="Name" />
//                           </label>
//                         </div>
//                         <div className="col-lg-12">
//                           <label name="email">
//                             Email <span>*</span>
//                             <input required type="email" id="email" name="email" placeholder="Email" />
//                           </label>
//                         </div>
//                         <div className="col-lg-12">
//                           <label name="message">
//                             Message? <span>*</span>
//                             <textarea required id="message" name="message" placeholder="I've got some questions about a new website" />
//                           </label>
//                         </div>
//                         <div className="col-lg-12">
//                           <input type="submit" value="Let's chat!" className="btn" />
//                         </div>
//                       </div>
//                       <p className="subtext">
//                         or email us at <a href="mailto:jarod@jellydevelopment.com">jarod@jellydevelopment.com</a>
//                       </p>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Blog;
