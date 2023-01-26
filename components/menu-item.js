import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/menu-item.module.css";

const MenuItem = ({ href, text, handleClick }) => {
  const router = useRouter();

  return (
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
          <Link
            href={href}
            className={`${styles.navLinkText} ${
              router.asPath === href ? styles.active : ""
            }`}
          >
            {text}
          </Link>
        )}
      </span>
    </li>
  );
};

export default MenuItem;
