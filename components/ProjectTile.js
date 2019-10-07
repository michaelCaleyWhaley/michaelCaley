import React, { Component } from "react";
import "custom-event-polyfill";
import "./scss/projectTile.scss";

class ProjectTile extends Component {
  constructor() {
    super();
  }

  handleOnClick = () => {
    const { sidebarData } = this.props;
    var event = new CustomEvent("open-sidebar", {
      detail: sidebarData,
    });
    document.dispatchEvent(event);
  };

  render() {
    const { imgSrc, imgAlt, title, desc } = this.props;
    return (
      <div className="project-tile" onClick={this.handleOnClick}>
        <img className="project-tile__img" src={imgSrc} alt={imgAlt} />
        <h1 className="project-tile__title">{title}</h1>
        <p className="project-tile__desc">{desc}</p>
      </div>
    );
  }
}

export default ProjectTile;
