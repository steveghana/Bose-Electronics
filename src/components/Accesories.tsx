import React from "react";
import Soundbar from "../assets/designs/bose.webp";
import Garret from "../assets/designs/pexels-garrett-morrow-1649771.jpg";
import SinglePiece from "../assets/designs/head.png";
import Play from "../Widgets/Play";
function Accesories() {
  return (
    <div className="accesories__container">
      <div className="accesories__left">
        <div className="accesories__top">
          <div className="accesories__images">
            <img className="jack" src={SinglePiece} alt="" />
          </div>
          <div className="accesories__images">
            <img src={Garret} alt="" />{" "}
          </div>
        </div>
        <div className="accesories__bottom"></div>
      </div>
      <div className="accesories__right">
        <Play />
        <img src={Soundbar} alt="" />
      </div>
    </div>
  );
}

export default Accesories;
