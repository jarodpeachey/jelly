import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql, withPrefix } from "gatsby";
import { useLocation } from "@gatsbyjs/reach-router";
import { PHONE, EMAIL } from "./Footer";
import "../styles/_layout.scss";

// Cities we serve; also used for the areaServed schema below.
export const SERVICE_AREAS = [
  "Orlando",
  "Kissimmee",
  "Sanford",
  "Altamonte Springs",
  "Winter Park",
  "Winter Garden",
  "Lake Mary",
  "Oviedo",
  "Clermont",
  "Apopka",
  "Deltona",
];

// Builds FAQPage schema from a page's existing FAQ list ({ q, a }).
export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

function SEO({ description, title, bodyClass, image = null, noindex = false, schema = [] }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );
  const { pathname } = useLocation();

  const siteUrl = site.siteMetadata.siteUrl;
  const metaTitle = title || site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || `${siteUrl}/media/img/SEO.png`;
  const canonical = `${siteUrl}${pathname.endsWith("/") ? pathname : `${pathname}/`}`;

  // Sitewide business + website schema
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: "Jelly Development",
    url: `${siteUrl}/`,
    logo: `${siteUrl}/media/img/logo.png`,
    image: `${siteUrl}/media/img/SEO.png`,
    description: site.siteMetadata.description,
    telephone: `+1-${PHONE}`,
    email: EMAIL,
    priceRange: "$500 - $3,000",
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name: `${name}, FL` })),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Jelly Development",
    url: `${siteUrl}/`,
    publisher: { "@id": `${siteUrl}/#business` },
  };
  const schemas = [business, website, ...[].concat(schema)];

  return (
    <Helmet bodyAttributes={{ class: bodyClass }} title={metaTitle}>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <link rel="icon" type="image/svg+xml" href="/media/img/Logo Solid.png"></link>
      {/* Preload the weights used above the fold (h1 and body) so the hero renders sooner */}
      <link rel="preload" href="/media/fonts/poppins/poppins-latin-800.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/media/fonts/poppins/poppins-latin-300.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}

      <script src={withPrefix("js/main.js")} type="text/javascript" defer="true" />
    </Helmet>
  );
}

export default SEO;
