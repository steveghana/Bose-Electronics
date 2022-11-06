import React from "react";
import Headset from "../assets/designs/headset.png";
import Earbuds from "../assets/designs/cq5dam.web.320.320.png";
import BluetoothSpeaker from "../assets/designs/Kleeo-increase-productivity.png";
import { PlayArrow } from "@material-ui/icons";
import Button from "./Button";
import { Number } from "./Icons";
function Text() {
  return (
    <div className="text">
      <p>Lorem ipsum</p>
      <h3>
        Sounduch 300 <br />
        soundbar{" "}
      </h3>
      <div>lorem ipsum</div>
      <Button color="white" />
    </div>
  );
}
function ProductsCate() {
  return (
    <div className="product__category">
      <div className="product__grid">
        <div className="product__cat-wrapper">
          <div className="earbuds">
            <div className="text">
              <h3>
                Shock wave <br /> audio
              </h3>
              <p>lorem ipsum</p>
            </div>
            <img src={Earbuds} alt="" />
          </div>
          <div className="soundbach__text">
            <Text />
            <div className="headset">
              <img src={Headset} alt="" />
            </div>
          </div>
        </div>
        <div className="product__cat-wrapper">
          <div className="music__player-img">
            <Number flip={true} numb={"05"} />
            <div className="text-wrapper">
              <div className="border">
                <PlayArrow style={{ fontSize: "10px" }} />
              </div>
              <div>
                Artistery game <br /> had never
              </div>
            </div>
          </div>
          <div className="product__soundbar">
            <div className="soundbar__img">
              {" "}
              <img src={BluetoothSpeaker} alt="" />
            </div>
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCate;
