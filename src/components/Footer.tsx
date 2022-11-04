import { Close, Search } from "@material-ui/icons";
import React from "react";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__content-wrapper">
        <div className="footer__text-input">
          <div className="text">
            <h4>QuietComfort 365</h4>
            <p>Soundtach 10</p>
          </div>
          <div className="input-text-wrapper">
            <div className="input">
              <Search fontSize="small" />
              <input type="text" />
              <Close fontSize="small" style={{ color: "gray" }} />
            </div>
            <div className="input__bottom-text">
              <p>Sound link mini</p>
              <p>Sound link micro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
