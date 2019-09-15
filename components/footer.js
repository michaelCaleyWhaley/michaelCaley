import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="social">
        <div className="social__icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="social__icon social__icon--padded">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className="social__icon">
          <FontAwesomeIcon icon={faGithubAlt} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
