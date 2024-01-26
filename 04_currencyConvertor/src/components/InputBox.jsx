import React from 'react'

function InputBox({label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    currencyDisable = false,
    amountDisable = false,
}) {

  return (
    <div className='bg-gray-200 rounded-md flex justify-between p-7 w-3/4'>

           <div className='flex flex-col gap-4  w-1/2'>
              <label>{label}</label>
              <input 
              className='border-2 p-1 bg-transparent font-bold'
              type="number"
              placeholder= {amount}
              value= {amount}
              disabled = {amountDisable}
              onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
              />
           </div>

           <div className='flex flex-col gap-4 w-1/2 items-end' >
            <label htmlFor="">Currency Type</label>
            <select 
            className='px-3 font-bold '
            value={selectCurrency}
            disabled = {currencyDisable}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((currency)=> (
                    <option value= {currency} key = {currency}>
                     {currency}
                   </option>
                ))}

            </select>
           </div>
        </div>
  )
}

export default InputBox;
