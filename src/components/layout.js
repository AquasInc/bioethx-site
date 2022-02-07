import React from "react";

const Layout = ({ title, heading, children }) => (
  <div>
    <title>BioethX | {title}</title>
    <main>
      <h1>{heading}</h1>
      {children}
    </main>
  </div>
);

export default Layout;
