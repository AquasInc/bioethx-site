import React from "react";
import Nav from "./nav";
import { container, mainHeading } from "./layout.module.css";

const Layout = ({ title, heading, children }) => (
  <div>
    <title>BioethX | {title}</title>
    <Nav />
    <main className={container}>
      <h1 className={mainHeading}>{heading}</h1>
      <hr />
      {children}
    </main>
  </div>
);

export default Layout;
