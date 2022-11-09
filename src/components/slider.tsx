import React, { useRef } from "react";
import { Typography } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import Headset from "../assets/designs/quiet.png";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
function Slider() {
  const sliderBar = useRef(null) as React.LegacyRef<HTMLElement> | any;
  return (
    <div ref={sliderBar} className="slide__container">
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="slide__items"
      >
        {new Array(20).fill("").map((name, i) => (
          <SwiperSlide key={i} className="slide__item">
            <img src={Headset} alt="" />
            <div className="price">
              <div>
                Lorem ipsum <div>ipsum</div>{" "}
              </div>
              <h6>$90.00</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
