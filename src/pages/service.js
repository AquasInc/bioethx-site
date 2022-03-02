import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import { articleAside, mainArticle } from "../styles/article-aside.module.css";
import "../styles/index.css";

class ServicePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: 0,
      "mobile-menu": false,
    };
  }

  handleClick = (n) => this.setState({ feature: n });

  toggleMenu = () =>
    this.setState({ "mobile-menu": !this.state["mobile-menu"] });

  render() {
    const section =
      this.props.data.allContentfulSection.nodes[this.state.feature];

    const image = getImage(section.hero.gatsbyImageData);

    return (
      <Layout
        id="top"
        title="Our Service: Overview and Features"
        location={this.props.location.pathname}
      >
        <div className={articleAside}>
          <Sidebar
            feature={this.state.feature}
            onClick={(n) => this.handleClick(n)}
            toggleMenu={this.toggleMenu}
            mobile={this.state["mobile-menu"]}
          />
          <main className="container">
            <h1 className="main-heading">Service</h1>
            <article className={mainArticle}>
              <hr />
              <GatsbyImage image={image} alt={section.hero.description} />
              <MDXRenderer>{section.paragraph.childMdx.body}</MDXRenderer>
            </article>
          </main>
        </div>
        <Toggle mobile={this.state["mobile-menu"]} onClick={this.toggleMenu} />
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allContentfulSection(sort: { fields: order, order: ASC }) {
      nodes {
        hero {
          description
          gatsbyImageData
        }
        paragraph {
          childMdx {
            body
          }
        }
      }
    }
  }
`;

export default ServicePage;
