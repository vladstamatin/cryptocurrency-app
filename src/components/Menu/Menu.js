import React from "react";
import { Link } from "react-router-dom";
import options from "./MenuOptions";
import croissant from "../../assets/croissant-logo.png";
import LinkList from "../../utils/LinkList";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo-cointainer">
        <img src={croissant} className="logo-homepage" />
        <p>Krypto Kroissant</p>
      </div>

      <LinkList options={options} />
    </div>
  );
};

export default Menu;
