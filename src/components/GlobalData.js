import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalData } from "../redux/actions/apiActions";
import DataBlock from "../components/DataBlock";

const GlobalData = () => {
  const dispatch = useDispatch();
  const globalData = useSelector((state) => state.allCryptoApis.global);
  useEffect(() => {
    dispatch(getGlobalData());
  }, []);

  const convertToStringCurrency = (value) => {
    return Math.abs(Number(value)) >= 1.0e12
      ? (Math.abs(Number(value)) / 1.0e12).toFixed(2) + "T"
      : Math.abs(Number(value)) >= 1.0e9
      ? (Math.abs(Number(value)) / 1.0e9).toFixed(2) + "B"
      : Math.abs(Number(value)) >= 1.0e6
      ? (Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
      : Math.abs(Number(value)) >= 1.0e3
      ? (Math.abs(Number(value)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(value));
  };

  if (
    typeof globalData === "undefined" ||
    (Object.keys(globalData).length === 0 && globalData.constructor === Object)
  )
    return <h2>Loading</h2>;
  return (
    <div className="global-data-container">
      <DataBlock
        title={"24h MarketCap"}
        data={
          globalData.data.market_cap_change_percentage_24h_usd.toPrecision(2) +
          "%"
        }
      />
      <DataBlock
        title={"Total MarketCap"}
        data={convertToStringCurrency(globalData.data.total_market_cap.usd)}
      />
    </div>
  );
};

export default GlobalData;
