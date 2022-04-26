import React from "react";
import { Link } from "react-router-dom";
import options from "./MenuOptions";
import croissant from "../../assets/croissant-logo.png";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo-cointainer">
        <img src={croissant} className="logo-homepage" />
        <p>Krypto Kroissant</p>
      </div>

      <div className="links-container">
        <input></input>
        {Object.keys(options).map((key, index) => {
          return (
            <Link key={key} to={options[key].url} className="link-style">
              <li>{options[key].name}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
