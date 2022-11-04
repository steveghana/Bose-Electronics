import React from "react";
import Headphones from "../assets/designs/headcont.png";
import Single from "../assets/designs/image.jpg";
import Dualheadphones from "../assets/designs/dualheadphones.png";
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
            <button>
              <span>-</span> Ipsum
            </button>
          </div>
          <div className="product__image-container">
            <div>
              <img src={Headphones} alt="" />
              <img src={Single} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="product__image-box-container">
        <img src={Headphones} alt="" />
        <img src={Headphones} alt="" />
      </div>
      <div className="headphones__container">
        <div className="headphones__text-wrapper">
          <h1>
            High end <br /> original <br /> headphones
          </h1>
          <div>LOREM IPSUM</div>
          <p>Feel excited a place or</p>
          <button>lorem</button>
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
