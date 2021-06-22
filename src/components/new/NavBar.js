import React from "react";
import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.svg";
import Menu from "./Menu";
import ShortInto from "./ShortInto";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  setActive = (active) => {
    console.log("Setting active " + active);
    this.setState({ active });
  };

  render() {
    const { active } = this.state;

    return (
      <>
        <nav className="navbar is-fixed-top-desktop desktop-navbar">
          <div>
            <FontAwesomeIcon
              onClick={() => this.setActive(true)}
              className="is-text"
              icon={faBars}
              size="2x"
            />
          </div>
          <div>
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </div>
          <div> </div>
        </nav>
        <CSSTransition
          in={active}
          timeout={1000}
          classNames="slide"
          unmountOnExit
        >
          <div className="side-panel-desktop">
            <div className="side-panel-desktop-close">
              <FontAwesomeIcon
                onClick={() => this.setActive(false)}
                className="is-text"
                icon={faTimes}
                size="2x"
              />
            </div>
            <Menu />
            <ShortInto />
          </div>
        </CSSTransition>
      </>
    );
  }
};

export default Navbar;
