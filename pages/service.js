import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import styles from "../styles/service.module.css";
import utils from "../styles/utils.module.css";
import { useState } from "react";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

const Service = ({ features }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [feature, setFeature] = useState(0);

  return (
    <Layout title="Our Service">
      <div className={styles.articleAside}>
        <Sidebar
          features={features}
          feature={feature}
          setFeature={setFeature}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <main className={utils.container}>
          <h1 className={utils.mainHeading}>Service</h1>
          <hr className={styles.hr} />
          <article className={styles.mainArticle}>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(features[feature].content),
              }}
            />
          </article>
        </main>
      </div>
      <Toggle toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </Layout>
  );
};

export default Service;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content", "service"));

  const features = files
    .map((file) => {
      const contents = fs.readFileSync(
        path.join("content", "service", file),
        "utf-8"
      );
      const { data, content } = matter(contents);

      return { data, content };
    })
    .sort((a, b) => a.data.order - b.data.order);

  return {
    props: {
      features,
    },
  };
}
