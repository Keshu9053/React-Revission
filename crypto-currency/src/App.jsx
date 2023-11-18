import { useState } from 'react'

import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_1280.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {
                                setFrom(currency)
                            }}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black/90 font-mono hover:bg-black text-white px-2 py-0.5 "
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-black/80 text-white px-4 py-3 rounded-lg font-bold hover:bg-black/100">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
                
            </div>
        
        </div>

        <div className='absolute bottom-3 right-4 text-white text-lg'>Made by Keshav Bhardwaj</div>
        <div className='absolute top-2 left-2 text-white'>
            <div className='font-bold'>What i have learned from this project?</div>
            <div>I have learned how to create custom hooks and how to handle API's.</div>
        </div>
    </div>
);
}

export default App