import React from "react";

const Menu = class extends React.Component {
  render() {
    return (
      <div className="side-menu is-uppercase">
        <a href="/diy">DIY</a>
        <a href="/lifestyle">Lifestyle</a>
        <a href="/plants">Plants</a>
        <a href="/travel">Travel</a>
        <a href="/home">Home</a>
      </div>
    );
  }
};

export default Menu;
