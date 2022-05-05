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

    let string = "abcabcjkabcabhabc";
    console.log("MY STRING: ", string);
    let i = string.length;
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      count = 0;
      for (let j = 0; j < string.length; j++) {
        // console.log(i, ":", string[i], " : ", j, ":", string[j]);
        if (string[i] === string[j]) {
          count++;
          // console.log(
          //   i,
          //   ":",
          //   string[i],
          //   " : ",
          //   j,
          //   ":",
          //   string[j],
          //   " -> ",
          //   count
          // );
        }
      }
      if (count === 1) console.log("i found it");
    }
    // console.log(count);
  }, []);

  const coin = useSelector((state) =>
    state.allCryptoApis.cryptocurrencies.filter((item) => item.id === id)
  );
  // console.log(coin);

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
