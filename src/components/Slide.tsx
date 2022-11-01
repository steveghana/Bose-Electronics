import React from "react";
import { PlayArrow } from "@material-ui/icons";
import Disk from "../../assets/designs/1755220.png";
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
      <div className="music__icon-container">
        <div className="music__nav">
          <ul className="music__nav-wrapper">
            <li className="music__nav-item">Quiet</li>
            <li className="music__nav-item">Soundlink</li>
            <li className="music__nav-item">Comfort</li>
            <li className="music__nav-item">Accesories</li>
            <li className="music__nav-item">Prev</li>
          </ul>
        </div>
        <div className="music__record-section">
          <h2 className="super__strong">
            sup <br /> erstro <br /> ng
          </h2>
          <div className="music__play-btn">
            <PlayArrow fontSize="large" />
          </div>
          <h1 className="brand__text">BOSE</h1>
          <div className="music__concert"></div>
          <img src={Disk} alt="Disk" />
          <div className="disk__innerText">
            <div>
              Original styling music <span>soul</span>
            </div>
            <div>Believe that spirit</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide;
