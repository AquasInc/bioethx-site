import React from "react";
import Layout from "../components/layout";
import Article from "../components/article";
import Sidebar from "../components/sidebar";
import "../styles/index.css";

const ServicePage = () => (
  <Layout title="Our Service: Overview and Features">
    <div className="main-aside">
      <Sidebar />
      <main className="container">
        <h1 className="main-heading">Service</h1>
        <hr />
        <Article />
      </main>
    </div>
  </Layout>
);

export default ServicePage;
