import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  sidebar,
  mobileMenu,
  list,
  btn,
  btnActive,
} from "./sidebar.module.css";

const Sidebar = ({ onClick, feature, toggleMenu, mobile }) => {
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
    <li key={node.id} className={list}>
      <a
        href="#top"
        className={node.frontmatter.order === feature ? btnActive : btn}
        onClick={() => {
          onClick(node.frontmatter.order);
          if (mobile) {
            toggleMenu();
          }
        }}
      >
        {node.frontmatter.title}
      </a>
    </li>
  ));

  return (
    <aside className={mobile ? mobileMenu : sidebar}>
      <ul>{features}</ul>
    </aside>
  );
};

export default Sidebar;
