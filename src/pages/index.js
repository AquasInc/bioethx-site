import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import "../styles/index.css";

const IndexPage = () => (
  <Layout title="Online Medical Ethics consult Management System">
    <h1 className="main-heading">
      Advancing the Practice of Healthcare Ethics
    </h1>
    <Hero />
    <main className="container">
      <p className="about">
        BioEthx™ offers the first online web service for assisting in the
        management of medical ethics consults. Our service provides medical
        ethicists significant short-term benefits in improving productivity,
        compliance and quality of care, while serving as a focal point that
        encourages improved ethics consult standards and practices over time.
      </p>
      <p>
        We strive to improve the relevance and value of the service to the
        entire worldwide ethics consulting community. We welcome the opportunity
        to engage you and others in the use of our system and our ongoing
        efforts to best meet the needs of the community.
      </p>
      <p>
        The web-based service is now available to any consultant, through a
        standard web browser and an Internet connection, for a modest monthly or
        annual subscription fee.
      </p>
      <p>
        Please have a look around at the information available here on our site.
        While you're at it, please use the Register button and let us know your
        thoughts. We will keep you informed of upcoming news and events via
        email. We stand ready to engage with you to show you around this
        exciting new service through an online demonstration.
      </p>
      <section className="about">
        <h1 className="main-heading">About Us</h1>
        <hr />
        <h2>Company</h2>
        <p>
          BioEthx™ has designed and developed computer software for the
          management of medical ethics issues in the clinical setting and the
          consult processes conducted to properly address them. The company
          embodies considerable expertise in healthcare information technology
          and secure information service delivery over the Internet. We are able
          to leverage the considerable technical resources that have been
          involved over many years in the development of a custom ethics
          consulting system for a large organization. BioEthx exploits the many
          advantages of the modern Internet-based technology ecosystem to
          deliver reliable secure online services that are easy to adopt and
          easy for medical ethics consultants to use, at a very affordable
          price.
        </p>
        <h2>Management</h2>
        <p>
          BioEthx™ is led by two technology industry veterans who became
          acquainted over thirty years ago. Ben Martindale and Carmen Larsen
          first worked together at American Management Systems providing support
          services to customers of the company’s large mainframe data center.
          Today they enjoy a close working relationship that allows them to
          leverage their highly complementary skill sets and business
          experiences developed over many years in the industry.
        </p>
        <p>
          Carmen Larsen has led AQUAS, Inc. to success in the technology
          services contracting business since its founding in 1990 and has been
          instrumental in the development and support of the core BioEthx
          software over the last ten years.
        </p>
        <p>
          Ben Martindale is a veteran software industry executive with a long
          and successful career at major multi-national software companies as
          well as early stage startups — most recently in the Internet security
          space. He leads day-to-day engineering and marketing efforts for
          BioEthx.
        </p>
        <h2>Mission</h2>
        <p>
          Increased attention is being given, both within healthcare facilities
          and in the public media, to the fair and equitable treatment of
          patients. This requires an increased focus on the ethical validity of
          decisions made by healthcare providers in answering what is best for
          the patient, what is fair to all concerned, and what is financially
          reasonable. As more attention is given to patient rights and quality
          of care, patients, their surrogates, or other advocates may question
          medical and administrative decisions, the processes used in arriving
          at these decisions, or the manner in which related communications are
          conveyed.
        </p>
        <p>
          Traditionally, the healthcare provider has had significant latitude in
          making these decisions, which typically were challenged only in the
          most extreme cases. More often now, healthcare administrators must
          take a look at their ability to demonstrate the compassionate
          responsiveness to the concerns of patients or family members - beyond
          the quick medical and administrative decision. It is imperative now
          more than ever to obtain the patient’s concurrence and family buy-in
          as an integral part of the ethics decision making process and to be in
          a position to defend decisions after the fact.
        </p>
        <p>
          The mission of BioEthx™ is to meet emerging demand for more
          comprehensive medical ethics consult practices by enabling broad use
          of the first publicly-available computer system for managing even the
          most complex cases. We strive to deliver the best quality online
          service, tailored to the evolving requirements of the medical ethics
          community, at the lowest possible price so that the service is
          available and affordable to all ethicists worldwide.
        </p>
      </section>
    </main>
  </Layout>
);

export default IndexPage;
