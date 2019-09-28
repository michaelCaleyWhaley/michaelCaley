import React from "react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

import "./scss/layout.scss";

export default ({
  children,
  title = "Michael Caley Web Developer",
  pageClass = "",
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <header></header>
    <Nav active={true} pageClass={pageClass} />
    <div className="layoutClass">{children}</div>

    <Footer />
  </>
);
