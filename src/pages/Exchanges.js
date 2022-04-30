import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";

const Exchanges = () => {
  return (
    <div className="main-page-container">
      <Menu />
      <div className="navbar-content-container">
        <Navbar />
        <h1 className="green-text">Exchanges Page</h1>
      </div>
    </div>
  );
};

export default Exchanges;
