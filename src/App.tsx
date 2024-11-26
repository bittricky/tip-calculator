import { useState } from "react";

import { BillInput, PeopleInput, SelectTip } from "./components";
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
        <div className="flex-1 bg-very-dark-purple text-white p-8 flex flex-col justify-between shadow-inner">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg">Tip Amount</p>
                <p className="text-sm text-grayish-purple">/ person</p>
              </div>
              <p className="text-strong-purple text-4xl font-bold">
                ${tipAmount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg">Total</p>
                <p className="text-sm text-grayish-purple">/ person</p>
              </div>
              <p className="text-strong-purple text-4xl font-bold">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={resetCalculator}
            disabled={!bill && !tip && !customTip && !people}
            className={`w-full bg-strong-purple text-very-dark-purple font-bold py-3 rounded mt-8 transition ${
              bill || tip || customTip || people
                ? "hover:bg-light-grayish-purple hover:text-very-dark-purple"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
