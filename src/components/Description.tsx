import React from "react";
import DescriptionHead from "../Widgets/DescriptionHead";
import Im1 from "../assets/designs/airpods-apple-earbuds.png";
import Im2 from "../assets/designs/pngwing.com.png";
import { Email, QuestionAnswer, Hearing } from "@material-ui/icons";
function Description() {
  return (
    <div className="description__container">
      <div className="description__left">
        <div className="description__left-top"></div>
        <div className="description__left-bottom"></div>
      </div>
      <div className="description__center">
        <DescriptionHead Head="Boss Dynamic" />
        {[Im1, Im2].map((item, i) => (
          <div className="description__text-container" key={i}>
            <img src={item} alt="" />
            <div className="description__text-wrapper">
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
        {new Array(3).fill("").map((item, i) => (
          <div className="description__text-container">
            <h5 style={{ width: "100px" }}>{`. [Bose]`}</h5>
            <div className="description__text-wrapper" key={i}>
              <p>Lorem ipsum dolor sit amet consectetur .</p>
            </div>
          </div>
        ))}
        <DescriptionHead Head="Contact Bose" />
        <div className="description__icons">
          <Icon Type={QuestionAnswer} /> <Icon Type={Email} />{" "}
          <Icon Type={Hearing} />{" "}
        </div>
        <DescriptionHead Head="More Products" />
        <div className="moreproduct__container">
          {new Array(4).fill("").map((item, i) => (
            <div key={i} className="moreproduct__imgs"></div>
          ))}
        </div>
      </div>
      <div className="description__right">
        <div className="absolute"></div>
      </div>
    </div>
  );
}
const Icon: React.FC<{ Type: any }> = ({ Type }) => {
  return (
    <div className="icon-wrapper">
      <div className="contact_icon">
        <Type style={{ fontSize: "13px" }} />
      </div>
      <div className="contact-text">Ipsum</div>
    </div>
  );
};

export default Description;
