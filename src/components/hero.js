import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { hero } from "./hero.module.css";

const Hero = () => (
  <StaticImage
    src="https://bioethx.com/img/licensed/iStock_000014737857Medium.jpg"
    alt="A meeting of medical professionals"
    className={hero}
  />
);

export default Hero;
