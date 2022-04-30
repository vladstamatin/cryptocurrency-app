import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCryptocurrencies } from "../../redux/actions/apiActions";
import LinkList from "../../utils/LinkList";

const navbarOptions = [
  {
    name: "Cryptocurrencies",
    //   icon: <Help className={svgStyle} />,
    url: "/",
  },
  {
    name: "Exchanges",
    //   icon: <Dashboard className={svgStyle} />,
    url: "/exchanges",
  },
];

const Navbar = () => {
  return (
    <div className="nabar-container">
      <div className="sidebar-container">
        <LinkList options={navbarOptions} />
      </div>
    </div>
  );
};

export default Navbar;
