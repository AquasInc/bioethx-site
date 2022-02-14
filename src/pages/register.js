import React from "react";
import Layout from "../components/layout";
import Form from "../components/form";
import "../styles/index.css";

const RegistrationPage = () => (
  <Layout title="Contact Us">
    <main className="container">
      <h1 className="main-heading">Register</h1>
      <div className="two-column-layout">
        <div className="text-div">
          <h2>Please register so we can keep you up to date via email.</h2>
        </div>
        <Form />
      </div>
    </main>
  </Layout>
);

export default RegistrationPage;
