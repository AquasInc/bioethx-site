import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout
    title="Online Medical Ethics Consultation Management System"
    heading="Advancing the Practice of Healthcare Ethics Consultation"
  >
    <StaticImage
      alt="A meeting of medical professionals"
      src="https://bioethx.com/img/licensed/iStock_000014737857Medium.jpg"
    />
    <p>
      BioEthx™ offers the first online web service for assisting in the
      management of medical ethics consultations. Our service provides medical
      ethicists significant short-term benefits in improving productivity,
      compliance and quality of care, while serving as a focal point that
      encourages improved ethics consultation standards and practices over time.
    </p>
    <p>
      We strive to improve the relevance and value of the service to the entire
      worldwide ethics consulting community. We welcome the opportunity to
      engage you and others in the use of our system and our ongoing efforts to
      best meet the needs of the community.
    </p>
    <p>
      The web-based service is now available to any consultant, through a
      standard web browser and an Internet connection, for a modest monthly or
      annual subscription fee.
    </p>
    <p>
      Please have a look around at the information available here on our site.
      While you're at it, please use the Register button and let us know your
      thoughts. We will keep you informed of upcoming news and events via email.
      We stand ready to engage with you to show you around this exciting new
      service through an online demonstration.
    </p>
  </Layout>
);

export default IndexPage;
