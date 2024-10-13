import { useState } from "react";
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [toAmount, setToAmount] = useState(0);

  const currencyData = useCurrencyInfo(from);
  const options = Object.keys(currencyData);

  function onAmountChange(value)
  {
    setAmount(value);
    setToAmount((value * currencyData[to]).toFixed(3));
  }

  function onCurrencyChange(value, amount)
  {
    setFrom(value);
    onAmountChange(amount);
  }
  function onToCurrencyChange(value)
  { 
    setTo(value);
  }

  function reverseAll()
  {
    let value = to;
    setTo(from);
    setFrom(value);

    setAmount(toAmount);
    setToAmount(amount);
    // onCurrencyChange(from, toAmount);
    
  }

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center "
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
      }}
    
    >
      <div className="bg-[#e5e5e5] p-3 rounded-lg flex flex-col gap-[2rem]">
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={onAmountChange}
          onCurrencyChange={onCurrencyChange}
          currencyOptions={options}
          editAmount={true}
          selectedCurrency={from}
          />

        <button
          onClick={reverseAll}
        >SWAP</button>
        <InputBox
          label="To"
          amount={toAmount}
          selectedCurrency={to}
          onAmountChange={onAmountChange}
          onCurrencyChange={onToCurrencyChange}
          currencyOptions={options}
          editAmount={false}

        />

      </div>

    </div>
  )
}

export default App
