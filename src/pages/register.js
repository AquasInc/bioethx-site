import React from "react";
import Layout from "../components/layout";
import Form from "../components/form";
import "../styles/index.css";
import { twoColumnLayout, columnDiv } from "../styles/register.module.css";

const RegistrationPage = ({ location }) => (
  <Layout title="Register" location={location.pathname}>
    <main className="container">
      <h1 className="main-heading">Register</h1>
      <div className={twoColumnLayout}>
        <div className={columnDiv}>
          <h2>Please register so we can keep you up to date via email.</h2>
        </div>
        <Form />
      </div>
    </main>
  </Layout>
);

export default RegistrationPage;
