import React from "react";
import { toggleBtn, active } from "./toggle.module.css";

const Toggle = ({ onClick, mobile }) => (
  <button
    className={mobile ? `${toggleBtn} ${active}` : toggleBtn}
    onClick={onClick}
  >
    {"+"}
  </button>
);

export default Toggle;
