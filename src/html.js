import React from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16889901199"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-16889901199');
  `,
          }}
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jelly Development | Website design & management agency in Orlando" />
        <meta
          property="og:description"
          content="Website design & management agency for small businesses in Orlando and Winter Garden - specializing in WordPress, Shopify, Squarespace and custom solutions."
        />
        <meta property="og:url" content="https://jellydevelopment.com" />
        <meta property="og:site_name" content="Jelly Development" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Jelly Development | Website design & management agency in Orlando" />
        <meta
          name="twitter:description"
          content="Website design & management agency for small businesses in Orlando and Winter Garden - specializing in WordPress, Shopify, Squarespace and custom solutions."
        />
        <meta name="author" content="Jelly Development" />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Orlando" />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
