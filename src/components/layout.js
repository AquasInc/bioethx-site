import React from "react";
import { Helmet } from "react-helmet";
import Nav from "./nav";
import Footer from "./footer";
import favicon from "../images/favicon.ico";
import { pageContainer, pageWrap } from "./layout.module.css";

const Layout = ({ title, children }) => (
  <div className={pageContainer}>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    {console.error("Remeber to change consultations to consults")}
    <title>{"BioethX | " + title}</title>
    <Nav />
    <div className={pageWrap}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
