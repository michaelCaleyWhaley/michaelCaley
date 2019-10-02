import React, { Component, createRef } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import projectData from "../components/projectData.json";

import "./scss/index.scss";
import "./scss/sharedLayout.scss";

class Home extends Component {
  constructor() {
    super();
    this.torchRef = createRef();
    this.torchLightRef = createRef();
  }

  componentDidMount() {
    this.torch = this.torchRef.current;
    this.torchWidth = this.torch.clientWidth;
    this.torchHeight = this.torch.clientHeight;

    this.torchLight = this.torchLightRef.current;
    this.torchLightWidth = this.torchLight.clientWidth;
    this.torchLightHeight = this.torchLight.clientHeight;

    window.addEventListener("resize", this.adjustMeasurements);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.adjustMeasurements);
  }

  adjustMeasurements = () => {
    this.torchWidth = this.torch.clientWidth;
    this.torchHeight = this.torch.clientHeight;

    this.torchLightWidth = this.torchLight.clientWidth;
    this.torchLightHeight = this.torchLight.clientHeight;
  };

  handleLampMove = e => {
    this.clearLampTimeout();
    const torchPosX =
      e.clientX - this.torchWidth / 2 + this.torchLightWidth / 2;

    const torchPosY =
      e.clientY - this.torchHeight / 2 - this.torchLightHeight / 2;

    this.torchLight.style.transform = `translate3d(${torchPosX}px, ${torchPosY}px, 0)`;
  };

  clearLampTimeout = () => clearTimeout(this.lampTimeout);

  handleLampLeave = () => {
    this.lampTimeout = setTimeout(() => {
      this.torchLight.style.transform = `translate3d(50%, -50%, 0)`;
    }, 1500);
  };

  generateMostRecentProjects = () => {
    let recentProjects = [];
    for (let i = 0; i < 3; i++) {
      recentProjects.push(projectData[i]);
    }
    return recentProjects;
  };

  render() {
    return (
      <Layout>
        <div className="hero">
          <div
            className="torch"
            ref={this.torchRef}
            onMouseMove={this.handleLampMove}
            onMouseLeave={this.handleLampLeave}
          >
            <div className="torch__light" ref={this.torchLightRef}></div>
          </div>

          <div className="container">
            <div className="hero__text-area">
              <p className="hero__title hero__title--sub">
                <span className="hero__title--fade-2">RESPONSIBLE</span>{" "}
                <span className="hero__title--fade-3">/ FRIENDLY</span>{" "}
                <span className="hero__title--fade-4">/ DEVELOPMENT</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container__title">
            <h1>About me</h1>
          </div>
          <div className="about">
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              maximus ligula semper metus pellentesque mattis. Maecenas
              volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
              consectetur fermentum nibh volutpat, accumsan purus.
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              maximus ligula semper metus pellentesque mattis. Maecenas
              volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
              consectetur fermentum nibh volutpat, accumsan purus.
            </p>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              maximus ligula semper metus pellentesque mattis. Maecenas
              volutpat, diam enim sagittis quam, id porta quam. Sed id dolor
              consectetur fermentum nibh volutpat, accumsan purus.
            </p>
          </div>
        </div>

        <hr className="hr--default"></hr>

        <div className="container">
          <div className="container__title container__title--centered">
            <h1 className="main-projects__title">Latest projects</h1>
          </div>
          <p className="main-projects__text">
            Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat
            blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget tempus
            sapien ultricies. Donec mollis lorem vehicula.
          </p>

          <div className="main-projects__row">
            {this.generateMostRecentProjects().map((project, index) => (
              <div
                className={index === 1 ? "project project--padded" : "project"}
                key={`project-${index}`}
              >
                <Link href="/projects">
                  <a title={project.title}>
                    <img src={project.imgSrc} alt={project.imgAlt} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home;
