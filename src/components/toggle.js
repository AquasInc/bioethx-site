import React from "react";
import { toggleBtn } from "./toggle.module.css";

const Toggle = ({ onClick }) => (
  <button className={toggleBtn} onClick={onClick}>
    {"< >"}
  </button>
);

export default Toggle;
