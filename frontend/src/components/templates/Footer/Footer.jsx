import React from "react";
import Constants from "../../../utils/js/Constants";
import "./Footer.css";
const Footer = (props) => {
  return (
    <footer>
      <div className="footer__details">
        <span className="footer__label">{Constants.FOOTER.LABEL}</span>
        <span className="footer__dev-name">
          {Constants.FOOTER.DEVELOPER_NAME}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
