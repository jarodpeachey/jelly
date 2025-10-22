import React from "react";

const TalentCarouselSlide = ({ image, className, name, link }) => {
    let clipPathID = `${name.toLowerCase().replace(/ /, "-")}-cutout`;
    return (
        <figure aria-labelledby="themes__title" className={`card carousel__slide ${className}`} id={name}>
            <svg viewBox="0 0 700 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id={clipPathID} clipPathUnits="userSpaceOnUse">
                        <path d="M0 8.00001C0 3.58173 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V442C700 446.418 696.418 450 692 450H8.00002C3.58174 450 0 446.418 0 442V8.00001Z" />
                    </clipPath>
                </defs>
                <image
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMinYMin slice"
                    xlinkHref={image}
                    clipPath={`url(#${clipPathID})`}
                    loading="lazy"
                    y="25"
                />
                <g className="browser-top">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0H692C696.418 0 700 3.58172 700 8V28H0V8Z" fill="black" />
                    <rect x="90" y="9" width="500" height="10" fill="white" fillOpacity="0.2" />
                    <circle cx="15" cy="14" r="4" fill="red" fillOpacity="0.8" />
                    <circle cx="31" cy="14" r="4" fill="yellow" fillOpacity="0.8" />
                    <circle cx="47" cy="14" r="4" fill="green" fillOpacity="0.8" />
                </g>
            </svg>
        </figure>
    );
};

export default TalentCarouselSlide;
