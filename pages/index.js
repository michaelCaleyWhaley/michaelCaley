import React, { Component, createRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SideBar from '../components/Sidebar';
import ProjectTile from '../components/ProjectTile';
import projectData from '../components/projectData.json';
import './scss/index.scss';
import './scss/sharedLayout.scss';

class Home extends Component {
  constructor() {
    super();
    this.torchRef = createRef();
    this.torchLightRef = createRef();

    this.state = { isMobile: false };
  }

  componentDidMount() {
    this.torch = this.torchRef.current;
    this.torchWidth = this.torch.clientWidth;
    this.torchHeight = this.torch.clientHeight;

    this.torchLight = this.torchLightRef.current;
    this.torchLightWidth = this.torchLight.clientWidth;
    this.torchLightHeight = this.torchLight.clientHeight;

    this.window = window;
    this.window.addEventListener('resize', this.adjustMeasurements);
  }

  componentWillUnmount() {
    this.window.removeEventListener(
      'resize',
      this.adjustMeasurements,
    );
  }

  adjustMeasurements = () => {
    this.setState({ isMobile: this.window.innerWidth <= 600 });

    this.torchWidth = this.torch.clientWidth;
    this.torchHeight = this.torch.clientHeight;

    this.torchLightWidth = this.torchLight.clientWidth;
    this.torchLightHeight = this.torchLight.clientHeight;
  };

  handleLampMove = e => {
    const { isMobile } = this.state;
    if (isMobile) return;
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
            onMouseEnter={this.adjustMeasurements}
          >
            <div
              className="torch__light"
              ref={this.torchLightRef}
            ></div>
          </div>

          <div className="container">
            <div className="hero__text-area">
              <p className="hero__title hero__title--sub">
                <span className="hero__title--fade-2">
                  RESPONSIBLE
                </span>{' '}
                <span className="hero__title--fade-3">
                  / FRIENDLY
                </span>{' '}
                <span className="hero__title--fade-4">
                  / DEVELOPMENT
                </span>
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
              Hello, my name is Michael Caley and I am a web developer
              from North East England currently living and working in
              central London. I have a passion for code, an aptitude
              for computers, and over 7 years of experience.
            </p>
            <p className="about__text">
              For the past 3+ years I have been a developer on River
              Islands core team, which means I have had the
              opportunity to work towards their React transformation
              in addition to other interesting projects such as
              reducing API calls by leveraging local storage.
            </p>
            <p className="about__text">
              Outside of RI I have successfully launched projects of
              my own, such as brochure websites, Custom video players,
              ecommerce websites, and games. When it’s time to turn
              off the computer I have been known to spend time
              bouldering, hiking and listening to audiobooks.
            </p>
          </div>
        </div>

        <hr className="hr--default"></hr>

        <div className="container">
          <div className="container__title container__title--centered">
            <h1 className="main-projects__title">Latest projects</h1>
          </div>
          <p className="main-projects__text">
            Below you’ll find a selection of my latest projects with
            links to their source code and/or an example. Please head
            over to the projects page to{' '}
            <Link href="/projects">
              <a title="projects page">see more.</a>
            </Link>
          </p>
          <div className="main-projects__row">
            {this.generateMostRecentProjects().map(
              (project, index) => (
                <ProjectTile
                  imgSrc={project.imgSrc}
                  imgAlt={project.imgAlt}
                  title={project.title}
                  desc={project.desc}
                  sidebarData={project.sidebarData}
                  key={`project-${index}`}
                />
              ),
            )}
          </div>
        </div>
        <SideBar />
      </Layout>
    );
  }
}
export default Home;
