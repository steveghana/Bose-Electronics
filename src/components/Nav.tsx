import React from "react";
import { Search } from "@material-ui/icons";
import { Shop, MessageOutlined, LocationOnOutlined } from "@material-ui/icons";
import Logo from "../assets/designs/favpng_bose-corporation-audio-loudspeaker-logo.png";
function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__list-logo">
          <img src={Logo} alt="logo" />
        </li>
        <button className="nav__list-search button button--calypso">
          <span>
            <Search />
          </span>
        </button>
        <div className="nav__list-container">
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>
                item
                <div className="nav_dot">+</div>
              </span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>
                item
                <div className="nav_dot">+</div>
              </span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>
                item
                <div className="nav_dot">+</div>
              </span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>
                item
                <div className="nav_dot">+</div>
              </span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>Bose item</span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>item</span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>
                <MessageOutlined fontSize="small" />
              </span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>
                <LocationOnOutlined fontSize="small" />
              </span>
            </span>
          </button>
          <button className="nav__list-item letstalk_btn_button button--telesto  hide_cursor">
            <span>
              <span>En / Ch</span>
            </span>
          </button>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
