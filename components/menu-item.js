import Link from "next/link";
import styles from "../styles/menu-item.module.css";

const MenuItem = ({ href, text, handleClick }) => (
  <li className={styles.navLinkItem}>
    <span onClick={handleClick}>
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
    </span>
  </li>
);

export default MenuItem;
