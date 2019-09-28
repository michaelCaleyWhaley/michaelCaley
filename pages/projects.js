import React, { Component } from "react";
import Layout from "../components/Layout";
import SideBar from "../components/Sidebar";
import ProjectTile from "../components/ProjectTile";
import projectData from "../components/projectData.json";

import "./scss/projects.scss";

class Projects extends Component {
  render() {
    return (
      <Layout className="projects" pageClass="nav--projects">
        <div className="container">
          <h1 className="projects__title">PROJECTS</h1>
          <h2 className="projects__sub-title">
            Anything worth doing takes patience and hard work.
          </h2>
        </div>

        <div className="container">
          <div className="projects__row">
            {projectData.map(({ imgSrc, imgAlt, title, desc, href }, index) => {
              return (
                <ProjectTile
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  title={title}
                  desc={desc}
                  key={title + index}
                  href={href}
                />
              );
            })}
          </div>
        </div>
        <SideBar />
      </Layout>
    );
  }
}

export default Projects;
