import { useState } from "react";

import { BillInput, PeopleInput, SelectTip } from "../components";
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
            <div className="space-y-2">
              <label className="text-light-grayish-purple font-semibold">
                Select Tip %
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tipPercentages.map((percentage) => (
                  <button
                    key={percentage}
                    onClick={() => {
                      setTip(percentage.toString());
                      setCustomTip("");
                    }}
                    className={`py-3 rounded text-lg font-bold transition ${
                      tip === percentage.toString()
                        ? "bg-strong-purple text-very-dark-purple"
                        : "bg-very-dark-purple text-white hover:bg-grayish-purple hover:text-very-dark-purple"
                    }`}
                  >
                    {percentage}%
                  </button>
                ))}
                <input
                  type="number"
                  value={customTip}
                  onChange={(e) => {
                    setCustomTip(e.target.value);
                    setTip("");
                  }}
                  placeholder="Custom"
                  className="bg-white text-right px-4 py-3 text-lg text-very-dark-purple font-semibold rounded focus:outline-none focus:ring-2 focus:ring-strong-purple"
                />
              </div>
            </div>

            {/* Number of People */}
            <div className="space-y-2">
              <label className="text-light-grayish-purple font-semibold">
                Number of People
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full bg-white text-right px-4 py-3 text-xl text-very-dark-purple font-semibold rounded focus:outline-none focus:ring-2 focus:ring-strong-purple"
                  placeholder="0"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-grayish-purple"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
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
