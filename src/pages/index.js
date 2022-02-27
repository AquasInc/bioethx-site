import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import "../styles/index.css";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const IndexPage = ({ data, location }) => (
  <Layout
    title="Online Medical Ethics consult Management System"
    location={location.pathname}
  >
    <h1 className="main-heading">
      Advancing the Practice of Healthcare Ethics
    </h1>
    <Hero />
    <main className="container">
      <section className="about">
        <MDXRenderer>{data.contentfulHomePage.body.childMdx.body}</MDXRenderer>
      </section>
    </main>
  </Layout>
);

export const query = graphql`
  query {
    contentfulHomePage {
      body {
        childMdx {
          body
        }
      }
    }
  }
`;

export default IndexPage;
