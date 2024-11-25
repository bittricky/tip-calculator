import { useState } from "react";

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
    <main className="min-h-screen flex flex-col items-center pt-12 pb-8 gap-12">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8 shadow-lg">
        <div className="space-y-8">
          <div className="space-y-2">
            <label className="text-dark-grayish-purple">Bill</label>
            <div className="relative">
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="w-full bg-very-light-grayish-purple text-right px-4 py-2 text-2xl text-very-dark-purple font-bold rounded-md focus:outline-strong-purple"
                placeholder="0"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-grayish-purple">
                $
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-dark-grayish-purple">Select Tip %</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tipPercentages.map((percentage) => (
                <button
                  key={percentage}
                  onClick={() => {
                    setTip(percentage.toString());
                    setCustomTip("");
                  }}
                  className={`py-2 rounded-md text-xl font-bold ${
                    tip === percentage.toString()
                      ? "bg-strong-purple text-very-dark-purple"
                      : "bg-very-dark-purple text-white hover:bg-light-grayish-purple hover:text-very-dark-purple"
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
                className="bg-very-light-grayish-purple text-right px-4 py-2 text-xl text-very-dark-purple font-bold rounded-md focus:outline-strong-purple"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-dark-grayish-purple">Number of People</label>
            <div className="relative">
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full bg-very-light-grayish-purple text-right px-4 py-2 text-2xl text-very-dark-purple font-bold rounded-md focus:outline-strong-purple"
                placeholder="0"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-grayish-purple"
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

        <div className="bg-very-dark-purple rounded-xl p-6 flex flex-col">
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white">Tip Amount</p>
                <p className="text-grayish-purple text-sm">/ person</p>
              </div>
              <p className="text-strong-purple text-4xl font-bold">
                ${tipAmount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white">Total</p>
                <p className="text-grayish-purple text-sm">/ person</p>
              </div>
              <p className="text-strong-purple text-4xl font-bold">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={resetCalculator}
            className="w-full bg-strong-purple text-very-dark-purple font-bold py-2 rounded-md mt-8 hover:bg-light-grayish-purple"
          >
            RESET
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
