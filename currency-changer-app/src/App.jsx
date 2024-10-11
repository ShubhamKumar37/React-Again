import { useState } from "react";
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [toAmount, setToAmount] = useState(0);

  const currencyData = useCurrencyInfo(from);
  console.log("This is the currency data type and exact data = ", typeof currencyData, currencyData);
  const options = Object.keys(currencyData);

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center "
      style={{
        backgroundImage: "url(https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
      }}
    
    >

    </div>
  )
}

export default App
