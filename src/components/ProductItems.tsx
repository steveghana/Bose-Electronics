import React from "react";
import set from "../assets/designs/clikcase.jpg";
import Mpow from "../assets/designs/Mymanu-Clik-Translation-Earbuds-06-1024x768.jpg";
import Single from "../assets/designs/copy.jpg";
import Dualheadphones from "../assets/designs/kindpng_995599.png";
import Headphones from "../assets/designs/bulb.jpg";
import Button from "../Widgets/Button";
import { Number, Square } from "../Widgets/Icons";
function ProductItems() {
  return (
    <>
      <div className="product__container">
        <div className="product__text-wrapper">
          <div className="product__text-left">
            <h2>
              Small and <br /> Wisdom <div>Extraordinary?</div>
            </h2>
            <p>Boss Soundtach20</p>
            <div>Lorem Ipsum</div>
          </div>
          <div className="product__text-right">
            <p>
              Better sound quality is only the beginning. <br /> We are sincere
              engineers, developers,
            </p>
            <p>
              researchers, retailers, marketing personnel, And dreamers. One
              goal converges us our customers can't get anywhere else.
            </p>
            <Button color={"#503af5"} />
          </div>
          <div className="product__image-container">
            <div className="imgcontainer">
              <div className="img1">
                <Number numb="08" />
                <div className="img1__square">
                  <Square />
                </div>
                <img src={set} alt="" />
              </div>
              <div className="img2">
                <Number numb="09" />
                <img src={Single} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__image-box-container">
        <div className="img3">
          <Number numb="10" />
          <div className="img3__text">
            Unprecedented <br /> ear cup <br /> headphones
          </div>
          <img src={Mpow} alt="" />
        </div>
        <div className="img4">
          <img src={Headphones} alt="" />
          <Number numb="11" />
        </div>
      </div>
      <div className="headphones__container">
        <div className="headphones__text-wrapper">
          <h1>
            High end <br /> original <br /> headphones
          </h1>
          <div>LOREM IPSUM</div>
          <p>Feel excited a place or</p>
          <Button color="white" />
        </div>
        <img src={Dualheadphones} alt="Headphone" />
        <div className="headphones__text-right">
          <p>LOREM IPSUM</p>
          <div>
            Make you Feel <br /> excited with sound
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItems;
