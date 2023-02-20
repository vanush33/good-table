import React from 'react'
import CartItem from './CartItem'
import '../pages/styles/cart.scss'

export default function Cart() {
  return (
    <div className='cart'>
        <ul className="cart--list">
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </ul>
        <div className="cart--row">
            total price
            <button className="button button--accent">К оплате</button>
        </div>
    </div>
  )
}
