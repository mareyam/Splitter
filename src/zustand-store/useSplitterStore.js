import { create } from "zustand";

const useSplitter = create((set) => ({
  bill: 0,
  people: 0,
  split: 0,
  selectedSplitAmount: 0,
  splitTip: 0,
  splitBill: 0,
  setBill: (bill) => set({ bill }),
  setPeople: (people) => set({ people }),
  setSplit: (split) => set({ split }),
  setSelectedSplitAmount: (selectedSplitAmount) => set({ selectedSplitAmount }),
  setSplitTip: (splitTip) => set({ splitTip }),
  setSplitBill: (splitBill) => set({ splitBill }),
}));

export default useSplitter;
