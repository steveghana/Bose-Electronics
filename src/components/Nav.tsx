import React from "react";
import { Search } from "@material-ui/icons";
import Logo from "../../assets/designs/favpng_bose-corporation-audio-loudspeaker-logo.png";
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__list-logo">
          <img src={Logo} alt="logo" />
        </li>
        <li className="nav__list-search">
          <Search />
        </li>
        <div className="nav__list-container">
          <li className="nav__list-item">
            item
            <div className="nav_dot">.</div>
          </li>
          <li className="nav__list-item">
            item
            <div className="nav_dot">.</div>
          </li>
          <li className="nav__list-item">
            item
            <div className="nav_dot">.</div>
          </li>
          <li className="nav__list-item">
            Boss <span>item</span>
          </li>
          <li className="nav__list-item">item</li>
          <li className="nav__list-message-icon">icon</li>
          <li className="nav__list-location-icon">icon</li>
          <li className="nav__list-lang">Eng</li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
