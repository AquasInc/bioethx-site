import React from "react";
import { Link } from "gatsby";
import BioEthxInfoSheet from "../assets/BioEthxInfoSheet.pdf";
import BenefitsAtAGlance from "../assets/BenefitsAtAGlance.pdf";
import ManagingHealthcareEthics from "../assets/ManagingHealthcareEthics.pdf";
import { container, footer, column, linkText } from "./footer.module.css";

const Footer = () => (
  <footer className={footer}>
    <div className={container}>
      <div className={column}>
        <p>
          <strong>Email:</strong>
          <br />
          <a href="mailto:ethics@bioethx.org" className={linkText}>
            ethics@bioethx.org
          </a>
        </p>
        <p>
          <strong>Phone:</strong>
          <br />
          (301) 332-2686
        </p>
        <p>
          <strong>Address:</strong>
          <br />
          10400 Connecticut Avenue
          <br />
          Suite 310
          <br />
          Kensington, MD 20895
        </p>
      </div>
      <div className={column}>
        <p>
          <Link to="/policy" className={linkText}>
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link to="/terms" className={linkText}>
            Terms & Conditions
          </Link>
        </p>
        <p>&copy; 2022 BioEthx™</p>
      </div>
      <div className={column}>
        <p>
          <a href="http://bioethxcafe.com/" className={linkText}>
            BioEthx Cafe
          </a>
          <br />
        </p>
        <p>
          <strong>Print & Go Information</strong>
          <br />
          <a
            href={BioEthxInfoSheet}
            target="_blank"
            rel="noreferrer"
            className={linkText}
          >
            BioEthx Information Sheet
          </a>
          <br />
          <a
            href={BenefitsAtAGlance}
            target="_blank"
            rel="noreferrer"
            className={linkText}
          >
            Benefits at a glance
          </a>
        </p>
        <p>
          <strong>White Papers</strong>
          <br />
          <a
            href={ManagingHealthcareEthics}
            target="_blank"
            rel="noreferrer"
            className={linkText}
          >
            Managing Healthcare Ethics
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
