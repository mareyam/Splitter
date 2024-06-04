import React, { useEffect } from "react";
import "../../../styles/splitter.css";
import useSplitter from "../../../zustand-store/useSplitterStore";

const AmountButtons = () => {
  const values = [5, 10, 15, 20, 25];

  const {
    bill,
    people,
    splitTip,
    selectedSplitAmount,
    setSplitTip,
    splitBill,
    setSplitBill,
    setBill,
    setPeople,
    setSplit,
    setSelectedSplitAmount,
  } = useSplitter();

  useEffect(() => {
    const calculateSplit = () => {
      if (bill && people && selectedSplitAmount) {
        const percentage = selectedSplitAmount / 100;
        const splitTip = (bill * percentage) / people;
        const splitBill = bill / people + splitTip;
        setSplitTip(splitTip);
        setSplitBill(splitBill);
        setSplit(splitTip);
      }
    };

    calculateSplit();
  }, [bill, people, selectedSplitAmount]);

  return (
    <div className="AmountButtonsMainDiv">
      <h6>Bill</h6>

      <input
        className="input"
        type="text"
        placeholder="0.00"
        onChange={(event) => setBill(event.target.value)}
      />
      <label>Select Tip%</label>
      <div className="AmountButtonsSubDiv">
        {values.map((value, index) => (
          <button
            key={index}
            onClick={() => setSelectedSplitAmount(value)}
            style={{
              background: selectedSplitAmount === value ? "#26C2AD" : "#114A4E",
              color: selectedSplitAmount === value ? "black" : "white",
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
          onChange={(event) => setSelectedSplitAmount(event.target.value)}
        />
      </div>

      <label>Number of people</label>
      <br />
      <input
        className="input"
        type="text"
        placeholder="0"
        onChange={(event) => setPeople(event.target.value)}
      />
    </div>
  );
};

export default AmountButtons;
