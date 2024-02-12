import React from 'react'
import {SearchIcon} from '../../../../assets/icons/search-icon'
import { Input } from '../../../../components/ui/input/input'

export const HeaderSearchbar = () => {
  return (
    <div className=' relative max-w-[317px] w-[100%] flex-grow-1 '>
        <Input name="searchInput" className=" w-[100%] px-[10px] py-[8px] " id='searchBar' variant='primary' type="text"/>
        <button className=' absolute top-0 right-0 bottom-0 py-[10px] px-[15px] bg-pink '>
            <SearchIcon/>
        </button>
    </div>
  )
}
