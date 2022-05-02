import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LinkList = ({ options }) => {
  return (
    <div className="links">
      {Object.keys(options).map((key, index) => {
        return (
          <Link key={key} to={options[key].url} className="link-style">
            <li>{options[key].name}</li>
          </Link>
        );
      })}
    </div>
  );
};
export default LinkList;
