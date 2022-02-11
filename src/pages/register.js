import React from "react";
import Layout from "../components/layout";
import Form from "../components/form";
import "../styles/index.css";

const RegistrationPage = () => (
  <Layout title="Contact Us">
    <main className="container">
      <h1 className="main-heading">Register Email</h1>
      <hr />
      <Form />
    </main>
  </Layout>
);

export default RegistrationPage;
