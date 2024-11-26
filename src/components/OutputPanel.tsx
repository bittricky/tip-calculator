import { FC } from "react";

interface Props {
  tipAmount: number;
  total: number;
  resetCalculator: () => void;
  disableState: boolean;
  toggleDisability: boolean;
}

const OutputPanel: FC<Props> = ({
  tipAmount,
  total,
  resetCalculator,
  disableState,
  toggleDisability,
}) => {
  return (
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
        disabled={disableState}
        className={`w-full bg-strong-purple text-very-dark-purple font-bold py-3 rounded mt-8 transition ${
          toggleDisability
            ? "hover:bg-light-grayish-purple hover:text-very-dark-purple"
            : "opacity-50 cursor-not-allowed"
        }`}
      >
        RESET
      </button>
    </div>
  );
};

OutputPanel.displayName = "OutputPanel";
export default OutputPanel;
