import React from 'react'
import { Link } from 'react-router-dom'
import {CartIcon} from '../../../../assets/icons/cart-icon'

export const Cart = () => {
  return (
    <div>
        <Link to="/cart">
            <CartIcon/>
        </Link>
    </div>
  )
}
