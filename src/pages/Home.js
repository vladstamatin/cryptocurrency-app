import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptocurrencies } from "../redux/actions/apiActions";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import TableList from "../components/DataTable/TableList";
import GlobalData from "./../components/GlobalData";

const headerCryptoTable = [
  {
    name: "#",
  },
  {
    name: "Name",
  },
  {
    name: "Price",
  },
];
const Home = () => {
  return (
    <div className="main-page-container">
      <Menu />
      <div className="navbar-content-container">
        <Navbar />
        <div className="right-side-container">
          <GlobalData />
          <TableList />
        </div>
      </div>
    </div>
  );
};

export default Home;
