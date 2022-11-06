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
          <li className="music__nav-paginate">
            <div>PREV</div>
            <div className="pagination">
              {new Array(3).fill("").map((item, i) => (
                <div>{i + 1}</div>
              ))}
            </div>
            <div>NEXT</div>
          </li>
        </ul>
      </div>
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
        <h1 className="brand__text">BOSE</h1>
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
