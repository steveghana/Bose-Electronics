import React from "react";
import Headset from "../assets/designs/sound.png";
function Text() {
  return (
    <div className="text">
      <p>Lorem ipsum</p>
      <h2>
        Sounduch 300 <br />
        soundbar{" "}
      </h2>
      <div>lorem ipsum</div>
      <button>lorem</button>
    </div>
  );
}
function ProductsCate() {
  return (
    <div className="product__category">
      <div className="product__grid">
        <div className="earbuds"></div>
        <div className="soundbach__text">
          <Text />
          <div className="headset"></div>
        </div>
        <div className="music__player-img"></div>
        <div className="product__soundbar">
          <div className="soundbar__img"></div>
          <Text />
        </div>
      </div>
    </div>
  );
}

export default ProductsCate;
