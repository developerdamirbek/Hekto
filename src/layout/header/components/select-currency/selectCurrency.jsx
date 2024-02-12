import React from 'react'

export const SelectCurrency = () => {
  return (
    <div>
        <select className='text-[16px] font-semibold outline-none cursor-pointer text-white bg-transparent ' name="currency" id="currency">
            <option className='text-black' defaultValue="USD">USD</option>
            <option className='text-black' value="RUB">RUB</option>
            <option className='text-black' value="UZS">UZS</option>
        </select>
    </div>
  )
}
