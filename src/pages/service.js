import React from "react";
import Layout from "../components/layout";
import {
  articleAside,
  mainArticle,
  sidebar,
} from "../styles/article-aside.module.css";
import "../styles/index.css";

const ServicePage = () => (
  <Layout title="Our Service: Overview and Features">
    <div className={articleAside}>
      <aside className={sidebar}>
        <ul>
          <li>Overview & Features</li>
          <li>Users and Roles</li>
          <li>Collaboration</li>
          <li>Workflow Guidance</li>
          <li>Classification</li>
          <li>Evaluation</li>
          <li>Reporting</li>
          <li>Support Tools</li>
          <li>Security</li>
        </ul>
      </aside>
      <main className="container">
        <h1 className="main-heading">Service</h1>
        <article className={mainArticle}>
          <hr />
          <h2>Overview</h2>
          <p>
            BioEthx™ has conducted research into private sector practices in
            documenting and managing the progression of bioethics cases in the
            clinical setting. BioEthx staff has long been involved in the
            development of software designed to assist ethicists and ethics
            committees in managing clinical and organizational ethics cases.
            Accumulated expertise and evolving software delivery methods have
            now come together to produce the first publicly-available software
            system dedicated to the task of healthcare ethics consultation.
          </p>
          <p>
            The end result is the BioEthx online service for consult management.
            The web-based service is designed to support the management of
            ethics consultations from initial event and information capture
            through resolution and follow-up evaluation. It provides an
            effective and easy-to-use tool for managing the workflow of ethics
            consultations in accordance with established procedures and to fully
            document case history and the analytical process undertaken to
            produce the best possible outcome.
          </p>
          <h2>Features</h2>
          <p>
            The BioEthx™ consult management service provides a centralized
            repository for recording all of the important information related to
            an ethics consultation request and the complete process carried out
            to achieve the most appropriate outcome.
          </p>
          <p>
            With minimal training, hospital and clinic staff can create a record
            of an expressed concern or a request for action. Thereafter, the
            system becomes a valuable tool to guide the workflow required to
            properly handle the issue, supporting the inclusion of additional
            specialists and promoting collaboration among consultation team
            members to work towards an optimal outcome.
          </p>
          <p>
            BioEthx is a complete tool that helps healthcare organizations to
            ensure that appropriate ethics protocols needed to provide quality
            healthcare and mitigate risks are applied to both clinical and
            organizational ethics cases.
          </p>
        </article>
      </main>
    </div>
  </Layout>
);

export default ServicePage;
