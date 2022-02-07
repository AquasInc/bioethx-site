import React from "react";
import { container, mainHeading } from "./layout.module.css";

const Layout = ({ title, heading, children }) => (
  <div className={container}>
    <title>BioethX | {title}</title>
    <main>
      <h1 className={mainHeading}>{heading}</h1>
      {children}
    </main>
  </div>
);

export default Layout;
