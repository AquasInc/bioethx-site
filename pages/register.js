import React from "react";
import Layout from "../components/layout";
import Form from "../components/form";
import utils from "../styles/utils.module.css";
import styles from "../styles/register.module.css";

const RegistrationPage = ({ location }) => (
  <Layout title="Register">
    <main className={utils.container}>
      <h1 className={utils.mainHeading}>Register</h1>
      <div className={styles.twoColumnLayout}>
        <div className={styles.columnDiv}>
          <h2>Please register so we can keep you up to date via email.</h2>
        </div>
        <Form />
      </div>
    </main>
  </Layout>
);

export default RegistrationPage;
