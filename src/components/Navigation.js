import React from "react";
import { Link } from "gatsby";
import "../styles/partials/_navigation.scss";

const Navigation = () => {
  return (
    <nav role="navigation" aria-label="Main" className="nav">
      <div className="container container--wide">
        <div className="menu__wrapper">
          <div className="logo" id="logo">
            <a href="/" aria-label="MindTrust Homepage">
              <svg width="83" height="64" viewBox="0 0 83 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M46.4023 0.35812C42.5626 1.0163 38.8567 2.97892 35.1308 4.95209C33.7656 5.67507 32.3978 6.39946 31.0197 7.06162C27.9587 8.53244 24.543 9.67997 21.1395 10.8234C12.2769 13.8009 3.49618 16.7509 1.27146 25.3095C-2.10756 38.3086 6.05018 52.6767 17.226 60.1263C25.5763 65.6925 35.6601 63.1163 45.6038 60.5759C47.7086 60.0382 49.8071 59.5021 51.8816 59.0452C54.1045 58.5555 56.4632 58.1647 58.8486 57.7694C68.5139 56.168 78.6187 54.4937 81.9091 45.8783C84.8411 38.2013 79.2269 31.3971 73.6206 24.6023C71.572 22.1195 69.5245 19.6379 67.8953 17.1155C67.1443 15.9527 66.4217 14.7527 65.6994 13.5533C63.5205 9.93517 61.3447 6.32208 58.4023 3.75063V26.989V36.0153C58.4023 37.6839 57.7075 39.2771 56.4847 40.4124L49.5403 46.8597C48.4305 47.8901 46.9722 48.4626 45.4579 48.4626H34.3468C32.8325 48.4626 31.3742 47.8901 30.2644 46.8597L23.32 40.4124C22.0972 39.2771 21.4023 37.6839 21.4023 36.0153V26.989C21.4023 23.6753 24.0886 20.989 27.4023 20.989C30.7161 20.989 33.4023 23.6753 33.4023 26.989V33.3986L36.7027 36.4626H43.102L46.4023 33.3986V26.989V0.35812Z"
                  fill="#385DD8"
                />
              </svg>
            </a>
          </div>
          <div className="mobile-menu__toggle">
            <div className="mobile-menu__toggle--mask">
              <span className="mobile-menu__toggle--span"></span>
              <span className="mobile-menu__toggle--span"></span>
              <span className="mobile-menu__toggle--span"></span>
            </div>
          </div>
          <div className="navigation-menu">
            <ul className="menu__main">
              {/* <li>
                <a href="/blog" className="menu__item">
                  Blog
                </a>
              </li> */}
              <li>
                <a href="/contact" className="menu__item">
                  Contact
                </a>
              </li>
              <li>
                <a href="/get-started" className="btn secondary">
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
