import React, { Component } from 'react';
import { Howl, Howler } from 'howler';
import Layout from '../components/Layout';

import './scss/projects.scss';

class Projects extends Component {
  constructor() {
    super();
    this.sound = new Howl({
      src: ['/static/By_Miles_explainer_VOaudio.mp3'],
    });
  }
  render() {
    return (
      <Layout pageClass="nav--projects">
        <div className="container">
          <button
            onClick={() => {
              this.sound.play();
            }}
          >
            play
          </button>
          <button
            onClick={() => {
              this.sound.pause();
            }}
          >
            pause
          </button>
          <button
            onClick={() => {
              this.sound.mute(true);
            }}
          >
            mute
          </button>
          <button
            onClick={() => {
              this.sound.mute(false);
            }}
          >
            unmute
          </button>
        </div>
      </Layout>
    );
  }
}

export default Projects;
