import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CryptoDetails from "../../pages/CryptoDetails";

const TableRow = ({ cryptocurrencies }) => {
  return (
    <>
      {cryptocurrencies.map((item, key) => {
        return (
          <ul key={key}>
            <li>{cryptocurrencies.indexOf(item)}</li>
            <li>
              <img className="currency-symbol" src={item.image} />
              <Link to={`/coin/${item.id}`} className="link-style">
                {item.name}({item.symbol})
              </Link>
            </li>
            <li>{item.current_price}</li>
          </ul>
        );
      })}
    </>
  );
};

export default TableRow;
