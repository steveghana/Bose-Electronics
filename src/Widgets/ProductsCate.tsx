import React from "react";
import Headset from "../assets/designs/headset.png";
import Earbuds from "../assets/designs/cq5dam.web.320.320.png";
import BluetoothSpeaker from "../assets/designs/wireless-speaker-loudspeaker-jbl-headphones-bose-soundlink-bluetooth-5fb7839b7d8056574bef2caef9280e11.png";
import Button from "./Button";
function Text() {
  return (
    <div className="text">
      <p>Lorem ipsum</p>
      <h2>
        Sounduch 300 <br />
        soundbar{" "}
      </h2>
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
              <h2>
                Shock wave <br /> audio
              </h2>
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
          <div className="music__player-img"></div>
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
