import Head from "next/head";
import Nav from "./nav.js";
import Footer from "./footer";
import styles from "../styles/layout.module.css";

const Layout = ({ children, title }) => (
  <div className={styles.pageContainer}>
    <Head>
      <title>{"BioEthX | " + title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Nav />
    <div className={styles.pageWrap}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
