import React from "react";
import Nav from "./nav";

const Layout = ({ title, children }) => (
  <div>
    <title>{"BioethX | " + title}</title>
    <Nav />
    {children}
  </div>
);

export default Layout;
