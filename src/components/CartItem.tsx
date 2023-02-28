import React, { useContext } from 'react'
import '../pages/styles/cartItem.scss'
import { CartContext } from './Cart/CartContext'
import { CartItemParams } from '../pages/product'

interface IOwnProps {
  id: number
  name: string
  image: string
  amount: number
  item: CartItemParams
}

export default function CartItem({id, name, image, amount, item}:IOwnProps) {
  const {setCartItems} = useContext(CartContext)
  const {removeCartItem} = useContext(CartContext)
  return (
    <div className='cart-item'>
      <img src={image}/>
      <div className='cart-item--info'>
        <h3>{name}</h3>
        <p>{amount} шт.</p>
      </div>
      <button className="cart-item--removeItem" onClick={() => removeCartItem(id, item)}>x</button>
    </div>
  )
}
