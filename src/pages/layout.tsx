import React, { createContext, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
import { CartContext } from '../components/Cart/CartContext'
import { CartItemParams } from './product'

export default function Layout() {
  const [cartItems, setCartItems] = useState<CartItemParams[]>([])

  function addToCart(id: number, amount: number, item: CartItemParams) {
    const cartItem = cartItems.find(item => item.id === id)
    if (cartItem) {
      setCartItems(prevItems => prevItems.map(el => el.id === id ? {...el, amount: el.amount + amount} : el))
    }
    else {
      setCartItems(prevItems => [...prevItems, item])
    }
  }
  function removeFromCart(id: number, item: CartItemParams) {
    const cartItem = cartItems.find(item => item.id === id)
    const itemIndex = cartItems.findIndex(item => item.id === id)
    if (cartItem) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
  }
  return (
    <CartContext.Provider value={{cartItems: cartItems, setCartItems: addToCart, removeCartItem: removeFromCart}}>
      <div className='app'>
        <Header />
      <div className="content">
        <Outlet />
      </div>
        <Footer />
      </div>
    </CartContext.Provider>
  )
}
