import React from "react";
import Soundbar from "../assets/designs/Bose-middle.jpg";
import Garret from "../assets/designs/pexels-garrett-morrow-1649771.jpg";
import SinglePiece from "../assets/designs/jack.jpg";
import Play from "../Widgets/Play";
import { Circle, Number } from "../Widgets/Icons";
function Accesories() {
  return (
    <div className="accesories__container">
      <div className="accesories__left">
        <div className="accesories__top">
          <div className="accesories__images">
            <img className="jack" src={SinglePiece} alt="" />
          </div>
          <div className="accesories__images">
            <Number numb="07" />
            <div className="icon">
              <Circle />
            </div>
            <img src={Garret} alt="" />{" "}
          </div>
        </div>
        <div className="accesories__bottom">
          <div className="text-wrapper">
            <Circle />
            <p>
              Unprecedented <br /> ear cup
            </p>
          </div>
        </div>
      </div>
      <div className="accesories__right">
        <Play />
        <img src={Soundbar} alt="" />
      </div>
    </div>
  );
}

export default Accesories;
