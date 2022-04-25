import React from "react";

const TableRow = ({ cryptocurrencies }) => {
  return (
    <>
      {cryptocurrencies.map((item, key) => {
        return (
          <ul key={key}>
            <li>{cryptocurrencies.indexOf(item)}</li>
            <li>
              <img className="currency-symbol" src={item.image} />
              {item.name}({item.symbol})
            </li>
            <li>{item.current_price}</li>
          </ul>
        );
      })}
    </>
  );
};

export default TableRow;
