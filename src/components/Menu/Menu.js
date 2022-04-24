import React from "react";
import { Link } from "react-router-dom";
import options from "./MenuOptions";

const Menu = () => {
  return (
    <div className="menu-container">
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
