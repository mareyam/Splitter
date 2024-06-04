import React from "react";
import "../../../styles/splitter.css";

const ResetButton = () => {
  return (
    <div
      className="resetButtondiv"
      style={{
        justifyContent: "center",
        display: "flex",
        height: "50px",
      }}
    >
      <button type="button" className="resetButton">
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
