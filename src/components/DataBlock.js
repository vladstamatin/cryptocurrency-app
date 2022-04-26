import React, { useEffect, useState } from "react";

const DataBlock = ({ title, data }) => {
  return (
    <div className="data-block-container">
      <span>{title}</span>
      <span>{data}</span>
    </div>
  );
};

export default DataBlock;
