import React from "react";
import set from "../assets/designs/earphones-477446_1920.jpg";
import Mpow from "../assets/designs/airpods-apple-earbuds.png";
import Single from "../assets/designs/pngwing.com.png";
import Dualheadphones from "../assets/designs/kindpng_995599.png";
import Headphones from "../assets/designs/dualheadphones.png";
import Button from "../Widgets/Button";
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
                <div className="img1__numb">10</div>
                <img src={set} alt="" />
              </div>
              <div className="img2">
                <div className="img2__numb">10</div>
                <img src={Single} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product__image-box-container">
        <div className="img3">
          <div className="img3__numb">10</div>
          <div className="img3__text">
            Unprecedented <br /> ear cup <br /> headphones
          </div>
          <img src={Mpow} alt="" />
        </div>
        <div className="img4">
          <img src={Headphones} alt="" />
          <div className="img4__numb">10</div>
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
