import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthernet } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
} from '@fortawesome/free-brands-svg-icons';

import './scss/footer.scss';
import '../pages/scss/sharedLayout.scss';

const Footer = () => (
  <footer>
    <div className="container">
      {/* <div className="footer-row">
        <FontAwesomeIcon
          className="footer__title"
          icon={faEthernet}
        />
      </div> */}
      <div className="footer-row footer-row--margin-bottom">
        <div className="footer-row__icon">
          <a
            className="footer-row__icon--link"
            href="https://www.linkedin.com/in/michael-caley-132245a9/"
            title="Michael Caleys LinkedIn page"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="footer-row__icon footer-row__icon--padded">
          <a
            className="footer-row__icon--link"
            href="https://github.com/michaelCaleyWhaley"
            title="Michael Caleys GitHub"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
        </div>
        <div className="footer-row__icon">
          <a
            className="footer-row__icon--link"
            href="https://www.facebook.com/SirCaley"
            title="Michael Caleys facebook page"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
      </div>
      <div className="footer-row">
        <p className="footer-row__signature">
          Michael Caley &middot; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
