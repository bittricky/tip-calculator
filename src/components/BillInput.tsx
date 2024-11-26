import { FC } from "react";

interface Props {
  bill: string;
  setBill: (bill: string) => void;
}

const BillInput: FC<Props> = ({ bill, setBill }) => {
  return (
    <div className="space-y-2">
      <label className="text-light-grayish-purple font-semibold">Bill</label>
      <div className="relative">
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          className="w-full bg-white text-right px-4 py-3 text-xl text-very-dark-purple font-semibold rounded focus:outline-none focus:ring-2 focus:ring-strong-purple"
          placeholder="0"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-grayish-purple">
          $
        </span>
      </div>
    </div>
  );
};

BillInput.displayName = "BillInput";
export default BillInput;
