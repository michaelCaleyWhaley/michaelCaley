import React, { Component, createRef } from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

import './scss/layout.scss';

class Layout extends Component {
  constructor() {
    super();

    this.layoutPreload = createRef();
  }

  componentDidMount() {
    this.addTransitionsAfterLoad();
  }

  addTransitionsAfterLoad = () => {
    setTimeout(() => {
      this.layoutPreload.current.classList.remove('layout-preload');
    }, 100);
  };

  render() {
    const {
      children,
      title = 'Michael Caley Web Developer',
      pageClass = '',
    } = this.props;
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
        </Head>
        <header></header>
        <Nav active={true} pageClass={pageClass} />
        <div ref={this.layoutPreload} className="layout-preload">
          {children}
        </div>

        <Footer />
      </>
    );
  }
}
export default Layout;
