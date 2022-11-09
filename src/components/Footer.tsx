import {
  Close,
  Search,
  Facebook,
  Twitter,
  Instagram,
} from "@material-ui/icons";
import React from "react";
import Icon1 from "../assets/designs/kindpng_4415553.png";
import Headset from "../assets/designs/qc-35-wl-hp-2-side.png";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__content-wrapper">
        <div className="footer__text-input">
          <div className="footer__text-input-wrapper">
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
          <div className="footer__nav">
            {new Array(6).fill("").map((item, i) => (
              <ul key={i}>
                <h4>Header</h4>
                <li>Ipsum</li>
                <li>Ipsum</li>
                <li>Ipsum</li>
              </ul>
            ))}
          </div>
          <img src={Headset} alt="headset" />
        </div>
      </div>
      <div className="footer__bottom">
        <div className="logo">
          <img src={Icon1} alt="" />
        </div>
        <div className="copyright">
          <div>c Bose 2017</div>
          <h5>All right reserved</h5>
        </div>
        <div className="social__icons">
          <Facebook fontSize="small" />
          <Twitter fontSize="small" />
          <Instagram fontSize="small" />
        </div>
        <div>
          <span>Bose</span> ride ipusm
        </div>
        <div>
          <span>Bose</span> ride ipusm
        </div>
        <div>
          <span>Bose</span> ride ipusm
        </div>
      </div>
    </div>
  );
}

export default Footer;
