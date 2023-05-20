import { useContext, useMemo } from 'react'
import { CartItem } from '../CartItem'
import '../../pages/styles/cart.scss'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import { ClickAwayListener } from '@mui/material'

interface CartProps {
  onClickAway: () => void
}

export const Cart = ({ onClickAway }: CartProps) => {
  //Using CartContext to get data about cart items
  const { cartItems } = useContext(CartContext)
  //counting total price for items in cart
  const totalPrice = useMemo(() => {
    let currentPrice = 0
    cartItems.map(item => {
      currentPrice += item.price * item.amount
    })
    return currentPrice
  }, [cartItems])
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <div className='cart'>
        <ul className="cart--list">
          {
            //rendering cart items
            cartItems.length === 0 ? "Корзина пуста" :
              cartItems.map(item =>
                <CartItem
                  key={item.id}
                  {...item}
                  item={item}
                />
              )
          }
        </ul>
        <div className="cart--row">
          <div className="cart--price">{totalPrice} MDL</div>
          <Link to={'/confirmAddress'}><button className="button button--accent">К оплате</button></Link>
        </div>
      </div>
    </ClickAwayListener>
  )
}
