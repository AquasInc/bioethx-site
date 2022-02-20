import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import { articleAside, mainArticle } from "../styles/article-aside.module.css";
import "../styles/index.css";

class ServicePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: 0,
    };
  }

  handleClick = (n) => {
    this.setState({
      feature: n,
    });
  };

  render() {
    return (
      <Layout title="Our Service: Overview and Features">
        <div className={articleAside}>
          <Sidebar
            feature={this.state.feature}
            onClick={(n) => this.handleClick(n)}
          />
          <main className="container">
            <h1 className="main-heading">Service</h1>
            <article className={mainArticle}>
              <hr />
              <MDXRenderer>
                {this.props.data.allMdx.nodes[this.state.feature].body}
              </MDXRenderer>
            </article>
          </main>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___order, order: ASC }) {
      nodes {
        body
        frontmatter {
          title
        }
      }
    }
  }
`;

export default ServicePage;
