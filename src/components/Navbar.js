import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCryptocurrencies } from "../redux/actions/apiActions";

const Navbar = () => {
  return (
    <div className="nabar-container">
      <div className="sidebar-container">
        <p>Cryptocurrencies</p>
        <p>Exchanges</p>
      </div>
    </div>
  );
};

export default Navbar;
