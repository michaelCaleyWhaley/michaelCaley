import React, { Component } from "react";
import Link from "next/link";

import "./scss/nav.scss";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      navClass: "",
      navCheckRunning: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const { navCheckRunning } = this.state;
    if (navCheckRunning) {
      this.setState({ navCheckRunning: false });
      let scrollInterval = setInterval(() => {
        if (window.scrollY > 10) {
          this.setState({ navClass: "nav__active" });
        } else {
          this.setState({ navClass: "" });
        }
      }, 10);
      setTimeout(() => {
        clearInterval(scrollInterval);
      }, 100);
    } else {
      this.setState({ navCheckRunning: true });
    }
  };

  render() {
    const { navClass } = this.state;

    return (
      <nav className={`nav ${navClass}`}>
        <h1 className="nav__logo">
          <span className="nav__logo--underline">MICHAEL CALEY</span>
        </h1>
        <ul className="nav__links">
          {links.map(({ key, href, label }) => (
            <li className="nav__link" key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
