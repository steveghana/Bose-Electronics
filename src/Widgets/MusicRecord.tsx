import React from "react";
import { PlayArrow } from "@material-ui/icons";
import Disk from "../assets/designs/1755220.png";
import Play from "./Play";

function MusicRecord() {
  return (
    <div className="music__icon-container">
      <div className="music__nav">
        <ul className="music__nav-wrapper">
          <li className="music__nav-item">Quiet</li>
          <li className="music__nav-item">Soundlink</li>
          <li className="music__nav-item">Comfort</li>
          <li className="music__nav-item">Accesories</li>
          <li className="music__nav-item">Prev</li>
        </ul>
      </div>
      <div className="music__record-section">
        <h2 className="super__strong">
          sup <br /> erstro <br /> ng
        </h2>
        <Play />
        <h1 className="brand__text">BOSE</h1>
        <div className="music__concert"></div>
        <div className="disk__img">
          <img src={Disk} alt="Disk" />
        </div>
        <div className="disk__innerText">
          <div>
            Original styling music <span>soul</span>
          </div>
          <div>Believe that spirit</div>
        </div>
      </div>
    </div>
  );
}

export default MusicRecord;
