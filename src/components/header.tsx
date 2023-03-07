import { useState } from 'react'
import Logo from '/images/logo.png'
import cart from '/images/cart.png'
import { Link } from 'react-router-dom'
import '../pages/styles/header.scss'
import { Cart } from './Cart/Cart'

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
            <div className="header--logo"><img src={Logo}/></div>
            <ul className="header--menu menu">
                <li className="menu--item"><Link to={'/'} className="menu--link">Главная</Link></li>
                <li className="menu--item"><Link to={'/shop'} className="menu--link">Товары</Link></li>
                <li className="menu--item"><Link to={'/about'} className="menu--link">О нас</Link></li>
                <li className="menu--item"><Link to={'/contact'} className="menu--link">Контакты</Link></li>
            </ul>
            <div className="header--cart" onClick={toggleCart}><img src={cart}/></div>
        </div>
      </div>
      {isOpen && <Cart />}
    </div>
  )
}
