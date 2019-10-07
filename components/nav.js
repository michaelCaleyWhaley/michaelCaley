import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthernet } from "@fortawesome/free-solid-svg-icons";

import "./scss/nav.scss";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" }
  // { href: "/contact", label: "Contact" },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      navClass: "",
      navCheckRunning: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const { navClass } = this.state;
    if (window.scrollY > 10 && navClass !== "nav__active") {
      this.setState({ navClass: "nav__active" });
    }

    if (window.scrollY <= 10 && navClass !== "") {
      this.setState({ navClass: "" });
    }
  };

  render() {
    const { navClass } = this.state;
    const { pageClass } = this.props;
    return (
      <nav className={`nav ${navClass} ${pageClass}`}>
        <Link href="/">
          <a className="nav__logo" title="home page">
            <FontAwesomeIcon className="nav__logo--icon" icon={faEthernet} />
          </a>
        </Link>
        <ul className="nav__links">
          {links.map(({ key, href, label }) => (
            <li className="nav__link" key={key}>
              <Link href={href}>
                <a title={label}>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
