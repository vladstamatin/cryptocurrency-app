import React, { useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="main-page-container">
      <Menu />
      <div className="navbar-content-container">
        <Navbar />
        <h1 className="green-text">Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
