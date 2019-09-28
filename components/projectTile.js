import React from "react";
import "custom-event-polyfill";

import "./scss/projectTile.scss";

const handleOnClick = () => {
  var event = new CustomEvent("open-sidebar");
  document.dispatchEvent(event);
};

const projectTile = ({ imgSrc, imgAlt, title, desc, href }) => (
  <div className="project-tile" onClick={handleOnClick}>
    <img className="project-tile__img" src={imgSrc} alt={imgAlt} />
    <h1 className="project-tile__title">{title}</h1>
    <p className="project-tile__desc">{desc}</p>
  </div>
);

export default projectTile;
