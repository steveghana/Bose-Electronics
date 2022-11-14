import React from "react";
import { PlayArrow } from "@material-ui/icons";
import Disk from "../assets/designs/1755220.png";
import Play from "./Play";
import CommonNav from "./commonNav";
function MusicRecord() {
  return (
    <div className="music__icon-container">
      <CommonNav padding="5rem" />
      <div className="music__record-section">
        <h2 className="super__strong">
          sup <br /> erstro <br /> ng
        </h2>
        <Play />
        <div className="playlist">
          <li>Soundlink</li>
          <li>
            <span></span> Quiet
          </li>
          <li>Soundlink</li>
          <li>Soundlink</li>
        </div>
        <div className="line"></div>
        <div className="brand__text">
          <h1>BOSE</h1>
        </div>
        <div className="music__concert"></div>
        <div className="disk__img">
          <img src={Disk} alt="Disk" />
        </div>
        <div className="disk__innerText">
          <div className="text-wrapper">
            <div>
              Original styling music <span>soul</span>
            </div>
            <div>Believe that spirit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicRecord;
