import React from "react";
import { Helmet } from "react-helmet";
import Nav from "./nav";
import Footer from "./footer";
import favicon from "../../static/favicon.ico";
import { pageContainer, pageWrap } from "./layout.module.css";

const Layout = ({ title, children, location }) => (
  <div className={pageContainer}>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <title>{"staging | " + title}</title>
    <Nav location={location} />
    <div className={pageWrap}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
