import React from "react";
import "../../styles/splitter.css";

const TotalAmount = ({ totalAmount }) => {
  const formattedTotalAmount = isNaN(totalAmount) ? "0" : totalAmount;

  return (
    <div className="col2div2">
      <p>
        Total Amount
        <br />
        <span>/person</span>
      </p>
      <h3>${formattedTotalAmount}</h3>
    </div>
  );
};

export default TotalAmount;
