import React from 'react'
import Logo from '/images/logo.png'
import cart from '/images/cart.png'
import { Link } from 'react-router-dom'
import '../pages/styles/header.scss'
import Cart from './Cart'




export default function Header() {
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
            <div className="header--utils">
                <div className="header--languageSelector">ru</div>
                <div className="header--cart"><img src={cart}/></div>
            </div>
        </div>
      </div>
      <Cart/>
    </div>
  )
}
