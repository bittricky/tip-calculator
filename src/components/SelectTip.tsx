import { FC } from "react";

interface Props {
  tip: string;
  customTip: string;
  tipPercentages: number[];
  setTip: (tip: string) => void;
  setCustomTip: (tip: string) => void;
}

const SelectTip: FC<Props> = ({
  tip,
  customTip,
  tipPercentages,
  setTip,
  setCustomTip,
}) => {
  return (
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
  );
};

SelectTip.displayName = "SelectTip";
export default SelectTip;
