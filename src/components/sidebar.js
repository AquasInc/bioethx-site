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
      allContentfulSection(sort: { fields: order, order: ASC }) {
        nodes {
          order
          title
          id
        }
      }
    }
  `);

  const features = data.allContentfulSection.nodes.map((node) => (
    <li key={node.id} className={list}>
      <a
        href="#top"
        className={node.order === feature ? btnActive : btn}
        onClick={() => {
          onClick(node.order);
          if (mobile) {
            toggleMenu();
          }
        }}
      >
        {node.title}
      </a>
    </li>
  ));

  if (typeof window !== "undefined") {
    document.body.style.overflow = mobile ? "hidden" : "auto";
  }

  return (
    <aside className={mobile ? mobileMenu : sidebar}>
      <ul>{features}</ul>
    </aside>
  );
};

export default Sidebar;
