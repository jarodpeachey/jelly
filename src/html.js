import React from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby";

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes} lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {props.headComponents}
                    {/* Initial full-screen overlay to prevent flash of unstyled text (FOUST). */}
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                '#site-overlay{position:fixed;inset:0;margin:0;padding:0;width:100%;height:100%;background:#ecf2ff;z-index:2147483647;transition:opacity .35s ease,visibility .35s ease;opacity:1;visibility:visible}#site-overlay.overlay-hidden{opacity:0;visibility:hidden;pointer-events:none}#site-overlay *{visibility:hidden}',
                        }}
                    />
                    <noscript>
                        <style dangerouslySetInnerHTML={{ __html: '#site-overlay{display:none!important}' }} />
                    </noscript>
                    <script
                        // remove the overlay after first paint / DOM ready; keep a fallback timeout
                        dangerouslySetInnerHTML={{
                            __html:
                                "(function(){var id='site-overlay';function remove(){var el=document.getElementById(id);if(!el) return;el.classList.add('overlay-hidden');setTimeout(function(){if(el&&el.parentNode) el.parentNode.removeChild(el);},450);}function onReady(){if('requestAnimationFrame' in window){requestAnimationFrame(function(){requestAnimationFrame(remove);});}else{remove();}}if(document.readyState!=='loading'){onReady();}else{document.addEventListener('DOMContentLoaded', onReady);window.addEventListener('load', onReady);}setTimeout(remove,2000);})();",
                        }}
                    />
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
                {/* The overlay must be present immediately in the body so it renders before site markup */}
                <div id="site-overlay" role="presentation" aria-hidden="true"></div>
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
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
