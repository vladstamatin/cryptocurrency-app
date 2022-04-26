import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptocurrencies } from "../../redux/actions/apiActions";
import TableItem from "../DataTable/TableItem";

const headerTableOptions = [
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

const TableList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptocurrencies());
  }, []);

  const cryptocurrencies = useSelector(
    (state) => state.allCryptoApis.cryptocurrencies
  );
  if (
    typeof cryptocurrencies === "undefined" ||
    (Object.keys(cryptocurrencies).length === 0 &&
      cryptocurrencies.constructor === Object)
  )
    return <h2>Loading</h2>;

  return (
    <div className="table-container">
      <div className="table-header">
        {Object.keys(headerTableOptions).map((key, index) => {
          return <li key={key}>{headerTableOptions[key].name}</li>;
        })}
      </div>
      <div className="table-content">
        <TableItem cryptocurrencies={cryptocurrencies} />
      </div>
    </div>
  );
};

export default TableList;
