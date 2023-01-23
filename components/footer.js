import Link from "next/link";
import {
  container,
  footer,
  column,
  linkText,
} from "../styles/footer.module.css";

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
          <Link href="/policy" className={linkText}>
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link href="/terms" className={linkText}>
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
          <Link
            href="/BioEthxInfoSheet.pdf"
            target="_blank"
            className={linkText}
          >
            BioEthx Information Sheet
          </Link>
          <br />
          <Link
            href="/BenefitsAtAGlance.pdf"
            target="_blank"
            className={linkText}
          >
            Benefits at a glance
          </Link>
        </p>
        <p>
          <strong>White Papers</strong>
          <br />
          <Link
            href="/ManagingHealthcareEthics.pdf"
            target="_blank"
            className={linkText}
          >
            Managing Healthcare Ethics
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
