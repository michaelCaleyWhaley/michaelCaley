import React from "react";

import "./scss/projectTile.scss";

const projectTile = ({ imgSrc, imgAlt, title, desc, href }) => (
  <a target="_blank" href={href} className="project-tile">
    <img className="project-tile__img" src={imgSrc} alt={imgAlt} />
    <h1 className="project-tile__title">{title}</h1>
    <p className="project-tile__desc">{desc}</p>
  </a>
);

export default projectTile;