import React from "react";
import { toggleBtn, active } from "./toggle.module.css";

const Toggle = ({ onClick, mobile }) => (
  <button className={toggleBtn} onClick={onClick}>
    <span className={mobile ? active : null}>+</span>
  </button>
);

export default Toggle;
