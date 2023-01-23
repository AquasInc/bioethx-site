import { toggleBtn, active } from "../styles/toggle.module.css";

export default function Toggle({ toggleMenu, setToggleMenu }) {
  return (
    <button className={toggleBtn} onClick={() => setToggleMenu(!toggleMenu)}>
      <span className={toggleMenu ? active : null}>+</span>
    </button>
  );
}
