import React from "react";
import { Circle, Square, Traingle } from "../Widgets/Icons";
import gsap from "gsap";
function Banner() {
  const container = React.useRef<any>(null);
  React.useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: 1, yoyo: true } });
    tl.to([".name1, .name2"], {
      y: 10,
      opacity: 1,
      stagger: 1,
      ease: "power2.inOut",
      repeatRefresh: true,
    });
  }, []);

  const mouseleave = (e: any) => {
    [...container.current.querySelectorAll(".intro_name")].forEach((el) => {
      el.style.transform = `rotateY($0deg) rotateX(0deg) translateY($0px) translateX(0px)`;
    });
  };
  const mousemove = (e: any) => {
    let xAxisbox = (window.innerWidth / 2 - e.pageX) / 140;
    let yAxisbox = (window.innerHeight / 2 - e.pageY) / 140;
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    [...container.current.querySelectorAll(".intro_name")].forEach((el) => {
      el.style.transform = `rotateY(${-xAxisbox}deg) rotateX(${yAxisbox}deg) translateY(${-yAxis}px) translateX(${-xAxis}px)`;
    });
  };
  return (
    <section
      ref={container}
      onMouseMove={(e) => mousemove(e)}
      onMouseLeave={mouseleave}
      className="banner__container"
    >
      {/* <div className="intro_name_who"> */}

      <div
        // onMouseEnter={(e) =>
        //   mouseenter(box, fadeout, bubble, head, e, littlebubble)
        // }

        className="banner__text-container"
      >
        <div className="intro_name name1">
          <span>Are </span>
          <span>you </span>
          <span>still.</span>
          <br />
          <span>wearing</span>
          <div>headphones?</div>
        </div>
        <div className="intro_name name2">
          <span>Are </span>
          <span>you </span>
          <span>still.</span>
          <br />
          <span>wearing</span>
          <div className="other">headphones?</div>
        </div>
      </div>

      <div className="banner__triangle">
        <div className="triangle">
          <Traingle />
        </div>
        <div className="square">
          <Square />
        </div>
        <div className="circle">
          <Circle />
        </div>
      </div>
      <div className="banner__wrapper"></div>
    </section>
  );
}

export default Banner;
