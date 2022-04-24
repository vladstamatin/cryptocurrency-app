import React from "react";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar";

const Analytics = () => {
  return (
    <div className="main-page-container">
      <Menu />
      <div className="navbar-content-container">
        <Navbar />
        <h1 className="green-text">Analytics Page</h1>
      </div>
    </div>
  );
};

export default Analytics;
