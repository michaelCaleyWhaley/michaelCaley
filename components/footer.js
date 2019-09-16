import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthernet } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

import "./scss/footer.scss";
import "../pages/scss/sharedLayout.scss";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-row">
        <FontAwesomeIcon className="footer__title" icon={faEthernet} />
      </div>
      <div className="footer-row footer-row--margin-bottom">
        <div className="footer-row__icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="footer-row__icon footer-row__icon--padded">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className="footer-row__icon">
          <FontAwesomeIcon icon={faGithubAlt} />
        </div>
      </div>
      <div className="footer-row">
        <p>Michael Caley {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
