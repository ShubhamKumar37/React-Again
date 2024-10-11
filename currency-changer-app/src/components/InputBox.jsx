import React, { useId } from 'react'

const InputBox = (
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectedCurrency = "usd",
        amountChange = false,
        className = ""
    }

    
    
) => {
    const id = useId();


    return (
        <div className={`${className}`}>
            <label
                className=''
                htmlFor={id}
            >
                <p>{label}</p>
                <input
                    id={id}
                    type='number'
                    placeholder='0'
                    className=''
                    value={amount}
                    disabled={amountChange}
                    onChange={(e) => { onAmountChange && onAmountChange(Number(e.target.value)) }}
                />
            </label>

            <div className=''>
                <p>Currency type</p>

                <select className=''
                    value={selectedCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value);
                    }}
                >
                    {
                        currencyOptions && currencyOptions.map((item) => {
                            (
                                <option className=''  key={item} value={item} >{item}</option>
                            )
                        })
                    }

                </select>
            </div>
        </div>
    )
}

export default InputBox
