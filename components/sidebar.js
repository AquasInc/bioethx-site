import styles from "../styles/sidebar.module.css";

const Sidebar = ({
  features,
  feature,
  setFeature,
  toggleMenu,
  setToggleMenu,
}) => (
  <aside className={toggleMenu ? styles.mobileMenu : styles.sidebar}>
    <ul className={styles.list}>
      {features.map((f) => (
        <li
          key={f.data.order}
          onClick={() => {
            setFeature(f.data.order);
            if (toggleMenu) setToggleMenu(!toggleMenu);
          }}
        >
          <span
            className={f.data.order === feature ? styles.btnActive : styles.btn}
          >
            {f.data.title}
          </span>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
