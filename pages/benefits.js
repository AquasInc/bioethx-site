import fs from "fs";
import path from "path";
import { marked } from "marked";
import Layout from "../components/layout";
import utils from "../styles/utils.module.css";

export default function Benefits({ content }) {
  return (
    <Layout title="Benefits">
      <main className={utils.container}>
        <h1 className={utils.mainHeading}>Benefits</h1>
        <hr />
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
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
