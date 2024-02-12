import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../../../../data/header-data'
import { nanoid } from 'nanoid'

export const HeaderNavbar = () => {
    return (
        <nav >
            <ul className=' flex items-center gap-[35px] '>
                {links.map((link) => (
                    <li key={nanoid()} className=' text-[#0D0E43] font-normal text-[16px] transition-all duration-300 hover:text-pink '>
                        <NavLink to={link.path}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
