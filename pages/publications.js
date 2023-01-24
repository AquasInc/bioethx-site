import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { linkText } from "../styles/footer.module.css";

export default function Publications() {
  return (
    <Layout title="Publications">
      <main className={styles.container}>
        <h1 className={styles.mainHeading}>Publications</h1>
        <hr />
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
      </main>
    </Layout>
  );
}
