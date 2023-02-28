import React, { useContext, useMemo } from 'react'
import CartItem from '../CartItem'
import '../../pages/styles/cart.scss'
import { CartContext } from './CartContext'

export default function Cart() {
  const {cartItems} = useContext(CartContext)
  const totalPrice = useMemo(() => {
    let currentPrice = 0
    cartItems.map(item => {
      currentPrice += item.price * item.amount
    })
    return currentPrice
  },[cartItems])
  return (
    <div className='cart'>
        <ul className="cart--list">
            { cartItems.length === 0 ? "Корзина пуста" : 
            cartItems.map(item => 
              <CartItem
                key={item.id}
                {...item}
                item={item}
              />)
            }
        </ul>
        <div className="cart--row">
            <div className="cart--price">{totalPrice} MDL</div>
            <button className="button button--accent">К оплате</button>
        </div>
    </div>
  )
}
