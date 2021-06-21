import React from "react";

const Menu = class extends React.Component {
  render() {
    return (
      <div className="side-menu is-uppercase">
        <a href="#">DIY</a>
        <a href="#">Lifestyle</a>
        <a href="#">Plants</a>
        <a href="#">Travel</a>
        <a href="#">Home</a>
      </div>
    );
  }
};

export default Menu;
