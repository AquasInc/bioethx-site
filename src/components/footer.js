import { Link } from "gatsby";
import React from "react";
import { container, footer, column, linkText } from "./footer.module.css";

const Footer = () => (
  <footer className={footer}>
    <div className={container}>
      <div className={column}>
        <p>
          <strong>Email:</strong>
          <br />
          info@BioEthx.net
        </p>
        <p>
          <strong>Phone:</strong>
          <br />
          (301) 654-4000
        </p>
        <p>
          <strong>Email:</strong>
          <br />
          10400 Connecticut Avenue
          <br />
          Suite 310
          <br />
          Kensington, MD 20895
        </p>
      </div>
      <div className={column}>
        <p>
          <Link to="#" className={linkText}>
            Privacy Policy
          </Link>
        </p>
        <p>
          <Link to="#" className={linkText}>
            Terms & Conditions
          </Link>
        </p>
        <p>&copy; 2022 BioEthx™</p>
      </div>
      <div className={column}></div>
    </div>
  </footer>
);

export default Footer;
