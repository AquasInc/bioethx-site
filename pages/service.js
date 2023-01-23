import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import {
  articleAside,
  mainArticle,
  hr,
} from "../styles/article-aside.module.css";
import styles from "../styles/Home.module.css";
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
      <div className={articleAside}>
        <Sidebar
          features={features}
          feature={feature}
          setFeature={setFeature}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <main className={styles.container}>
          <h1 className={styles.mainHeading}>Service</h1>
          <hr className={hr} />
          <article className={mainArticle}>
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
  const files = fs.readdirSync(path.join("content"));

  const features = files
    .map((file) => {
      const contents = fs.readFileSync(path.join("content", file), "utf-8");
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
