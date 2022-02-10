import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import { pageContainer, pageWrap } from "./layout.module.css";

const Layout = ({ title, children }) => (
  <div className={pageContainer}>
    <title>{"BioethX | " + title}</title>
    <Nav />
    <div className={pageWrap}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
