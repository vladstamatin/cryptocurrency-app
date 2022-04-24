import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCryptocurrencies } from "../redux/actions/apiActions";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptocurrencies());
  }, []);

  const cryptocurrencies = useSelector(
    (state) => state.allCryptoApis.cryptocurrencies.data
  );
  if (
    typeof cryptocurrencies === "undefined" ||
    (Object.keys(cryptocurrencies).length === 0 &&
      cryptocurrencies.constructor === Object)
  )
    return <h2>Loading</h2>;
  return (
    <div className="nabar-container">
      <div className="data-container">
        {cryptocurrencies.map((item, key) => {
          return <li key={key}>{item.id}</li>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
