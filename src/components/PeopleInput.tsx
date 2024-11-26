import { FC } from "react";

interface Props {
  people: string;
  setPeople: (people: string) => void;
}

const PeopleInput: FC<Props> = ({ people, setPeople }) => {
  return (
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
  );
};

PeopleInput.displayName = "PeopleInput";
export default PeopleInput;
