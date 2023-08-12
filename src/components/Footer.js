import React from "react";
import { Link } from "gatsby";
import "../styles/partials/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex">
          <img width="83" height="64" src="/media/img/Logo White.svg" alt="Jelly Development logo" />
        </div>
        <div className="d-flex">
          <a aria-label="Jelly Development Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/jellydevelop">
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23 1.9998C22.0424 2.67528 20.9821 3.19191 19.86 3.5298C19.2577 2.83731 18.4573 2.34649 17.567 2.12373C16.6767 1.90096 15.7395 1.957 14.8821 2.28426C14.0247 2.61151 13.2884 3.1942 12.773 3.95352C12.2575 4.71283 11.9877 5.61214 12 6.5298V7.5298C10.2426 7.57537 8.50127 7.18561 6.93101 6.39525C5.36074 5.60488 4.01032 4.43844 3 2.9998C3 2.9998 -1 11.9998 8 15.9998C5.94053 17.3978 3.48716 18.0987 1 17.9998C10 22.9998 21 17.9998 21 6.4998C20.9991 6.22126 20.9723 5.9434 20.92 5.6698C21.9406 4.6633 22.6608 3.39251 23 1.9998V1.9998Z"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a aria-label="Jelly Development Linkedin" target="_blank" rel="noreferrer" href="https://linkedin.com/company/jelly-development/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M6 9H2V21H6V9Z" stroke="white" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="white"
                stroke-opacity="0.8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="d-flex">
          <p>© 2021 Jelly Development LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
