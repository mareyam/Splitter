import React, { useState, useEffect } from "react";
import "../../../styles/splitter.css";

const AmountButtons = ({ values, onSplitTipChange, onSplitBillChange }) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [split, setSplit] = useState(0);

  const handleCustomInputChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  const handleBill = (event) => {
    setBill(event.target.value);
  };

  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  useEffect(() => {
    const calculateSplit = () => {
      const percentage = selectedValue / 100;
      const splitTip = (bill * percentage) / people;
      const splitBill = bill / people + splitTip;
      onSplitTipChange(splitTip);
      onSplitBillChange(splitBill);
      setSplit(splitTip);
    };

    calculateSplit();
  }, [bill, people, selectedValue, onSplitTipChange, onSplitBillChange]);

  return (
    <div className="AmountButtonsMainDiv">
      <h6>Bill</h6>

      <input
        className="input"
        type="text"
        placeholder="0.00"
        onChange={handleBill}
      />
      <label>Select Tip%</label>
      <div className="AmountButtonsSubDiv">
        {values.map((value, index) => (
          <button
            key={index}
            onClick={() => setSelectedValue(value)}
            style={{
              background: selectedValue === value ? "#26C2AD" : "#114A4E",
              color: selectedValue === value ? "black" : "white",
              margin: "5px",
              padding: "10px 20px",
              minWidth: "130px",
              borderRadius: "5px",
            }}
          >
            {value}%
          </button>
        ))}
        <input
          className="input"
          type="text"
          placeholder="Custom"
          onChange={handleCustomInputChange}
        />
      </div>

      <label>Number of people</label>
      <br />
      <input
        className="input"
        type="text"
        placeholder="0"
        onChange={handlePeople}
      />
    </div>
  );
};

export default AmountButtons;
