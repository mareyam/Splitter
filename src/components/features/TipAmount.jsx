import React, { useEffect } from "react";
import useSplitter from "../../zustand-store/useSplitterStore";

const TipAmount = () => {
  const { splitTip, setSplitTip } = useSplitter();
  const formattedTipAmount = isNaN(splitTip) ? "0" : splitTip;

  return (
    <div className="col2div1 d-flex">
      <p>
        Tip Amount
        <br />
        <span>/person</span>
      </p>
      <h3>${formattedTipAmount.toFixed(2)}</h3>
    </div>
  );
};

export default TipAmount;
