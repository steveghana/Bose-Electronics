import React from "react";
import MusicRecord from "../Widgets/MusicRecord";
import ProductsCate from "../Widgets/ProductsCate";
function Slide() {
  return (
    <section className="slider">
      <div className="slider__item-wrapper">
        <div className="slider__container">
          <div className="slider__text">
            <div>
              Memory <br />
              Foam
            </div>
            <p>LOREM IPSUM</p>
            <div className="plus">+</div>
            <button> lorem </button>
          </div>
          <div className="slider__img"></div>
        </div>
        <div className="slider__container">
          <div className="slider__text">
            <div>
              Power <br />
              Explorat
            </div>
            <p>LOREM IPSUM</p>
            <div className="plus">+</div>
            <button> lorem </button>
          </div>
          <div className="slider__img"></div>
        </div>
        <div className="slider__container">
          <div className="slider__text">
            <div>
              Ride <br />
              System{" "}
            </div>
            <p>LOREM IPSUM</p>
            <div className="plus">+</div>
            <button> lorem </button>
          </div>
          <div className="slider__img"></div>
        </div>
        <div className="slider__container">
          <div className="slider__text">
            <div>
              Power <br /> appreciate
            </div>
            <p>LOREM IPSUM</p>
            <div className="plus">+</div>
            <button> lorem </button>
          </div>
          <div className="slider__img"></div>
        </div>
      </div>
      <MusicRecord />
      <ProductsCate />
    </section>
  );
}

export default Slide;
