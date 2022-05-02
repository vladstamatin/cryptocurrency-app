import React from "react";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";

const News = () => {
  return (
    <div className="main-page-container">
      <Menu />
      <div className="navbar-content-container">
        <Navbar />
        <h1 className="green-text">News Page</h1>
      </div>
    </div>
  );
};

export default News;
