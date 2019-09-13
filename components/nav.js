import React from "react";
import Link from "next/link";

import "./scss/nav.scss";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="nav">
    <div className="nav__logo"></div>
    <ul className="nav__links">
      {links.map(({ key, href, label }) => (
        <li className="nav__link" key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
