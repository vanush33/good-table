import React from 'react'
import { Link } from 'react-router-dom'
import './styles/confirmData.scss'

export const ConfirmData = () => {
  return (
    <>
      <div className="container">
        <div className="confirmData">
            <h2 className="heading main-heading">Укажите ваши данные</h2>
            <form action="" className='confirmData--form'>
                <input type="text" className='confirmData--name' placeholder='Имя, Фамилия' />
                <input type="tel" className='confirmData--phone' placeholder='Телефон'/>
                <input type="email" className='confirmData--email' placeholder='Email' />
                <div className="confirmData--buttons">
                    <Link to={'/confirmAddress'}><button className="button button--secondary">Назад</button></Link>
                    <Link to={'/confirmPayment'}><button className="button button--accent">Продолжить</button></Link>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}
