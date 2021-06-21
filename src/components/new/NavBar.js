import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.svg";
import Menu from "./Menu";
import ShortInto from "./ShortInto";

const Navbar = class extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar is-fixed-top-desktop desktop-navbar">
          <div>
            <FontAwesomeIcon className="is-text" icon={faBars} size="2x" />
          </div>
          <div>
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </div>
          <div> </div>
        </nav>
        <div className="side-panel-desktop side-panel-desktop-active">
          <div className="side-panel-desktop-close">
            <FontAwesomeIcon className="is-text" icon={faTimes} size="2x" />
          </div>
          <Menu />
          <ShortInto />
        </div>
      </>
    );
  }
};

export default Navbar;
