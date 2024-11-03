import React, { useId } from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  editAmount = false,
}) => {
  const id = useId();

  return (
    <div className="flex flex-row gap-5 items-center justify-start">
      {/* Input Label and Input Field */}
      <label className="block w-full" htmlFor={id}>
        <p className="text-base font-semibold text-gray-700">{label}</p>
        <input
          id={id}
          type="number"
          className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition ease-in-out duration-200 hover:bg-gray-200"
          value={amount === 0 ? '' : amount}
          disabled={!editAmount}
          onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value)) }}
        />
      </label>

      {/* Currency Selector */}
      <div className="block w-[10rem]">
        <p className="text-base font-semibold text-gray-700">Currency Type</p>
        <select
          className="mt-2 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition ease-in-out duration-200 hover:bg-gray-200"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value, amount)}
        >
          {
            currencyOptions.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;
