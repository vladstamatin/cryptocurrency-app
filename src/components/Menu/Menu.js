import React from "react";
import { Link } from "react-router-dom";
import options from "./MenuOptions";
import croissant from "../../assets/croissant-logo.png";
import LinkList from "../../utils/LinkList";

const Menu = () => {
  return (
    <div className="menu-container">
      <Link className="logo-cointainer" to={"/"}>
        <img src={croissant} className="logo-homepage" />
        <p>Krypto Kroissant</p>
      </Link>

      <LinkList options={options} />
    </div>
  );
};

export default Menu;
