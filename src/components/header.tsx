import { useState } from 'react'
import Logo from '/images/logo.png'
import cart from '/images/cart.png'
import { NavLink } from 'react-router-dom'
import '../pages/styles/header.scss'
import { Cart } from './Cart/Cart'
import { ClickAwayListener } from '@mui/material'

export const Header = () => {
  //creating state to track if cart is open
  const [isOpen, setIsOpen] = useState(false)
  //toggling cart state
  function toggleCart() {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div className='header'>
      <div className="container">
        <div className="header--body">
          <div className="header--logo"><img src={Logo} /></div>
          <ul className="header--menu menu">
            <li className="menu--item"><NavLink to={'/'} className="menu--link">Главная</NavLink></li>
            <li className="menu--item"><NavLink to={'/shop'} className="menu--link">Товары</NavLink></li>
            <li className="menu--item"><NavLink to={'/about'} className="menu--link">О нас</NavLink></li>
            <li className="menu--item"><NavLink to={'/contact'} className="menu--link">Контакты</NavLink></li>
          </ul>
          <div className="header--cart" onClick={toggleCart}><img src={cart} /></div>
        </div>
      </div>
      {isOpen && <Cart onClickAway={() => setIsOpen(false)} />}
    </div>
  )
}
