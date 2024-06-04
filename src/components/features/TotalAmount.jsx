import React from "react";
import "../../styles/splitter.css";
import useSplitter from "../../zustand-store/useSplitterStore";

const TotalAmount = () => {
  const { splitBill } = useSplitter();
  const formattedTotalAmount = isNaN(splitBill) ? "0" : splitBill;

  return (
    <div className="col2div2">
      <p>
        Total Amount
        <br />
        <span>/person</span>
      </p>
      <h3>${formattedTotalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default TotalAmount;
