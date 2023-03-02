import React, { EventHandler } from 'react'
import './styles/ConfirmAddress.scss'
import { Link } from 'react-router-dom'

export const ConfirmAddress = () => {
  const submitForm = (event: Event) => {
    event.preventDefault()
  }
  return (
    <>
      <div className="container">
        <div className="confirmAddress">
          <h2 className="heading main-heading">Адрес доставки</h2>
          <form action="" className='confirmAddress--form'>
            <select className='confirmAddress--country' placeholder='Страна'>
              <option>Молдова</option>
              <option>Румыния</option>
              <option>Украина</option>
            </select>
            <select className='confirmAddress--city'>
              <option>Бухарест</option>
              <option>Киев</option>
              <option>Кишинев</option>
              <option>Чадыр-Лунга</option>
              <option>Клуж</option>
              <option>Комрат</option>
              <option>Полтава</option>
              <option>Харьков</option>
              <option>Яссы</option>
            </select>
            <input type="text" className='confirmAddress--address' placeholder='Адресс' />
            <div className="confirmAddress--buttons">
                <Link to={'/shop'}><button className="button button--secondary">К покупкам</button></Link>
                <Link to={'/confirmData'}><button className="button button--accent">Продолжить</button></Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
