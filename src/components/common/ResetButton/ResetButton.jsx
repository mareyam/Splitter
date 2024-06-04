import React from "react";
import "../../../styles/splitter.css";
import useSplitter from "../../../zustand-store/useSplitterStore";

const ResetButton = () => {
  const {
    setBill,
    setPeople,
    setSplitTip,
    setSplitBill,
    setSplit,
    setSelectedSplitAmount,
  } = useSplitter();

  const handleResetFields = () => {
    setBill(0);
    setPeople(0);
    setSplit(0);
    setSelectedSplitAmount(0);
    setSplitTip(0);
    setSplitBill(0);
  };

  const resetFields = () => {};
  return (
    <div
      className="resetButtondiv"
      style={{
        justifyContent: "center",
        display: "flex",
        height: "50px",
      }}
    >
      <button type="button" onClick={handleResetFields} className="resetButton">
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
