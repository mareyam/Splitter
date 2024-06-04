import React from "react";

const TipAmount = ({ tipAmount }) => {
  const formattedTipAmount = isNaN(tipAmount) ? "0" : tipAmount;

  return (
    <div className="col2div1 d-flex">
      <p>
        Tip Amount
        <br />
        <span>/person</span>
      </p>
      <h3>${formattedTipAmount}</h3>
    </div>
  );
};

export default TipAmount;
