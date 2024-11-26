import { useState } from "react";

import { BillInput, OutputPanel, PeopleInput, SelectTip } from "./components";
import "./App.css";

function App() {
  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<string>("");
  const [customTip, setCustomTip] = useState<string>("");
  const [people, setPeople] = useState<string>("");

  const tipPercentages = [5, 10, 15, 25, 50];

  const calculateTip = () => {
    const billAmount = parseFloat(bill) || 0;
    const tipPercentage = customTip ? parseFloat(customTip) : parseFloat(tip);
    const numberOfPeople = parseInt(people) || 1;

    const tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    const total = billAmount / numberOfPeople + tipAmount;

    return {
      tipAmount: isNaN(tipAmount) ? 0 : tipAmount,
      total: isNaN(total) ? 0 : total,
    };
  };

  const resetCalculator = () => {
    setBill("");
    setTip("");
    setCustomTip("");
    setPeople("");
  };

  const { tipAmount, total } = calculateTip();

  return (
    <div className="app h-full">
      <div className="flex h-full">
        {/* Input Panel */}
        <div className="flex-1 p-8 bg-very-light-grayish-purple">
          <div className="space-y-8">
            {/* Bill Input */}
            <BillInput bill={bill} setBill={setBill} />

            {/* Select Tip % */}
            <SelectTip
              tip={tip}
              customTip={customTip}
              tipPercentages={tipPercentages}
              setTip={setTip}
              setCustomTip={setCustomTip}
            />

            {/* Number of People */}
            <PeopleInput people={people} setPeople={setPeople} />
          </div>
        </div>

        {/* Output Panel */}
        <OutputPanel
          tipAmount={tipAmount}
          total={total}
          resetCalculator={resetCalculator}
          disableState={!bill && !tip && !customTip && !people}
          toggleDisability={Boolean(bill || tip || customTip || people)}
        />
      </div>
    </div>
  );
}

export default App;
