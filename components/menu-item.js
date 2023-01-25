import Link from "next/link";
import styles from "../styles/menu-item.module.css";

const MenuItem = ({ href, text }) => (
  <li className={styles.navLinkItem}>
    {/^http/.test(href) ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={styles.navLinkText}
      >
        {text}
      </a>
    ) : (
      <Link href={href} className={styles.navLinkText}>
        {text}
      </Link>
    )}
  </li>
);

export default MenuItem;
