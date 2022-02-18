import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { sidebar, btn } from "./sidebar.module.css";

const Sidebar = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(sort: { fields: frontmatter___order, order: ASC }) {
        nodes {
          frontmatter {
            title
            order
          }
          id
        }
      }
    }
  `);

  const features = data.allMdx.nodes.map((node) => (
    <li key={node.id}>
      <button className={btn} onClick={() => onClick(node.frontmatter.order)}>
        {node.frontmatter.title}
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
