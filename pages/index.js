import React, { Component, createRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import Layout from "../components/layout";

import "./scss/index.scss";

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
    const torchPosX = (e.clientX - (this.torchWidth / 2) + this.torchLightWidth / 2);

    const torchPosY =
      e.clientY - this.torchHeight / 2 - this.torchLightHeight / 2;

    this.torchLight.style.transform = `translate(${torchPosX}px, ${torchPosY}px)`;
  };

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
          >
            <div className="torch__light" ref={this.torchLightRef}></div>
          </div>
          <div className="hero__text-area">
            <h1 className="hero__title hero__title--fade-1">Michael Caley</h1>
            <p className="hero__title">
              <span className="hero__title--fade-2">CREATIVE</span> /{" "}
              <span className="hero__title--fade-3">RESPONSIBLE</span> /{" "}
              <span className="hero__title--fade-4">FRIENDLY</span>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}
export default Home;
