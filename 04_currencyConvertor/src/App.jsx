import { useEffect, useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  let backgroundImageUrl = "https://images.pexels.com/photos/8353793/pexels-photo-8353793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [userAmt, setUserAmt] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setUserAmt(convertedAmt);
    setConvertedAmt();
  };

  const convert = () => {
    if (userAmt <= 0) return;
    setConvertedAmt((userAmt * currencyInfo[to]).toFixed(2));
  };

  useEffect(()=>{
    convert();
  }, [userAmt, from ,to]);



  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="flex flex-col justify-center gap-4 items-center border-2 rounded-md  bg-transparent backdrop-blur-sm  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-10 w-1/3">
          <InputBox
            label="From"
            amount={userAmt}
            onAmountChange={(userAmt) => userAmt >= 0 && setUserAmt(userAmt)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={from}
            amountDisable={false}
            currencyDisable={false}
          />

          <button
          className="border-2  rounded-md bg-blue-700 text-white p-2 absolute top-1/2 -translate-y-14"
          onClick={swap}
          > swap
          </button>

          <InputBox
            label="To"
            amount={convertedAmt}
            onAmountChange={(convertedAmt) => setConvertedAmt(convertedAmt)}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={currencyOptions}
            selectCurrency={to}
            amountDisable={true}
            currencyDisable={false}
          />

          <button 
          className="border-2 w-3/4 rounded-md bg-blue-700 text-white p-3"
          onClick={convert}
          > 
          Convert {from.toUpperCase()} to {to.toUpperCase()} 
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
