import fs from "fs";
import path from "path";
import { marked } from "marked";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Benefits({ content }) {
  return (
    <Layout title="Benefits">
      <main className={styles.container}>
        <h1 className={styles.mainHeading}>Benefits</h1>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = fs.readFileSync(path.join("content", "benefits.md"), "utf-8");
  return {
    props: {
      content,
    },
  };
}
