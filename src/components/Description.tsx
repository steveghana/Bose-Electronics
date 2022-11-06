import React from "react";
import BudsOntable from "../assets/designs/pexels-callum-hilton-7856680.jpg";
import Kelly from "../assets/designs/pexels-philip-boakye-2614384.jpg";
import DescriptionHead from "../Widgets/DescriptionHead";
function Description() {
  return (
    <div className="description__container">
      <div className="description__left">
        <div className="description__left-top"></div>
        <div className="description__left-bottom"></div>
      </div>
      <div className="description__center">
        <DescriptionHead />
        {new Array(2).fill("").map((item, i) => (
          <div className="description__text-container">
            <div className="description__img">.</div>
            <div className="description__text-wrapper" key={i}>
              <h4>Bose something</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, dignissimos deleniti asperiores cum exercitationem
                voluptate.
              </p>
              <div className="date"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="description__right">
        <div className="absolute"></div>
      </div>
    </div>
  );
}

export default Description;
