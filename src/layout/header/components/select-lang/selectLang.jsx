import React from 'react'

export const SelectLang = () => {
  return (
    <div>
        <select className='text-[16px] outline-none font-semibold cursor-pointer text-white bg-transparent' name="lang" id="lang">
            <option className='text-black' defaultValue="English">English</option>
            <option className='text-black' value="Russian">Russian</option>
            <option className='text-black' value="Uzbek">Uzbek</option>
        </select>
    </div>
  )
}
