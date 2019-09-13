import Link from "next/link";
import Head from "next/head";
import Nav from "./nav";

import "./scss/layout.scss";

export default ({ children, title = "Michael Caley Web Developer" }) => (
  <div>
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
    <Nav></Nav>
    {children}
    <footer></footer>
  </div>
);
