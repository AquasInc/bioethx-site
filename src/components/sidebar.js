import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { sidebar, btn } from "./sidebar.module.css";

const Sidebar = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "features" } }) {
        nodes {
          name
          id
        }
      }
    }
  `);

  const features = data.allFile.nodes.map((node) => (
    <li key={node.id}>
      <button className={btn} onClick={onClick}>
        {node.name}
      </button>
    </li>
  ));

  return (
    <aside className={sidebar}>
      <ul>{features}</ul>
    </aside>
  );
};

export default Sidebar;
