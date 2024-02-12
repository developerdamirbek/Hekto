import React from 'react'
import { EnvelopeIcon } from '../../assets/icons/envelope-icon'
import { PhoneIcon } from '../../assets/icons/phone-icon'
import { Login } from './components/login/login'
import { Wishlist } from './components/wishlist/wishlist'
import { SelectLang } from './components/select-lang/selectLang'
import { SelectCurrency } from './components/select-currency/selectCurrency'
import { Cart } from './components/cart/cart'
import { Logo } from '../../assets/icons/logo'
import { HeaderNavbar } from './components/header-navbar/header-navbar'
import { HeaderSearchbar } from './components/header-searchbar'

export const Header = () => {
    return (
        <header>
            <div className='bg-purple py-4'>
                <div className="container">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-12'>
                            <div className='flex items-center gap-3'>
                                <EnvelopeIcon />
                                <a className=' font-semibold text-white text-[16px] ' href="mailto:mhhasanul@gmail.com">mhhasanul@gmail.com</a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <PhoneIcon />
                                <a className=' font-semibold text-white text-[16px] ' href="">(12345)67890</a>
                            </div>
                        </div>
                        <div className=' flex items-center gap-7 '>
                            <SelectLang />
                            <SelectCurrency />
                            <Login />
                            <Wishlist />
                            <Cart />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[22px] '>
                <div className="container">
                    <div className=' flex items-center justify-between'>
                        <div className=' flex items-center gap-[88px] '>
                            <div>
                                <a href="#">
                                    <h1 className=' font-bold font-josefinSans text-[34px] text-[#0D0E43] '>Hekto</h1>
                                </a>
                            </div>
                            <HeaderNavbar />
                        </div>
                        <HeaderSearchbar />
                    </div>
                </div>
            </div>
        </header>
    )
}
