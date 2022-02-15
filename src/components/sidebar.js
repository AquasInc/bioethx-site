import React from "react";
import { sidebar } from "./sidebar.module.css";

const Sidebar = () => (
  <aside className={sidebar}>
    <ul>
      <li>Overview & Features</li>
      <li>Users and Roles</li>
      <li>Collaboration</li>
      <li>Workflow Guidance</li>
      <li>Classification</li>
      <li>Evaluation</li>
      <li>Reporting</li>
      <li>Support Tools</li>
      <li>Security</li>
    </ul>
  </aside>
);

export default Sidebar;
