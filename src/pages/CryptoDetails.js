import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCryptocurrencies } from "../redux/actions/apiActions";

import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";

const CryptoDetails = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptocurrencies());
  }, []);

  const coin = useSelector((state) =>
    state.allCryptoApis.cryptocurrencies.filter((item) => item.id === id)
  );
  console.log(coin);

  return (
    <div className="main-page-container">
      <Menu />
      <div className="navbar-content-container">
        <Navbar />
        <div>
          {coin.map((item, key) => {
            return <div key={key}>{item.id}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
