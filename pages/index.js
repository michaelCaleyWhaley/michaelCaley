import React, { Component, createRef } from "react";
import Layout from "../components/layout";

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
    clearTimeout(this.handleLampLeave);
    const torchPosX =
      e.clientX - this.torchWidth / 2 + this.torchLightWidth / 2;

    const torchPosY =
      e.clientY - this.torchHeight / 2 - this.torchLightHeight / 2;

    this.torchLight.style.transform = `translate(${torchPosX}px, ${torchPosY}px)`;
  };

  handleLampLeave = () =>
    setTimeout(() => {
      this.torchLight.style.transform = `translate(50%, -50%)`;
    }, 1500);

  render() {
    return (
      <Layout>
        <div className="hero">
          <div
            className="torch"
            ref={this.torchRef}
            onMouseMove={this.handleLampMove}
            onTouchStart={this.handleLampMove}
            onTouchEnd={this.handleLampMove}
            onMouseLeave={this.handleLampLeave}
          >
            <div className="torch__light" ref={this.torchLightRef}></div>
          </div>

          <div className="container">
            <div className="hero__text-area">
              <h1 className="hero__title hero__title--fade-1">Michael Caley</h1>
              <p className="hero__title hero__title--sub">
                <span className="hero__title--fade-2">RESPONSIBLE</span>{" "}
                <span className="hero__title--fade-3">/ FRIENDLY</span>
              </p>
              <p className="hero__title hero__title--sub">
                <span className="hero__title--fade-4">DEVELOPMENT</span>
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
            <h1>Latest works</h1>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home;
