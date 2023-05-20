import mastercard from '/images/mastercard.png'
import visa from '/images/visa.png'
import { Link } from 'react-router-dom'
import '../pages/styles/footer.scss'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer--body">
          <ul className="footer--menu menu">
            <li className="menu--item"><Link to={'/'} className="menu--link">Главная</Link></li>
            <li className="menu--item"><Link to={'/shop'} className="menu--link">Товары</Link></li>
            <li className="menu--item"><Link to={'/about'} className="menu--link">О нас</Link></li>
            <li className="menu--item"><Link to={'/contact'} className="menu--link">Контакты</Link></li>
          </ul>
          <div className="footer--payment">
            <div className="footer--heading">Принимаем к оплате:</div>
            <img src={visa} />
            <img src={mastercard} />
          </div>
          <div className="footer--contact">
            <div className="footer--heading">Позвоните нам:</div>
            <a href='tel:069 344 253' className="footer--number">079 305 777</a>
            <a href='tel:069 344 253' className="footer--number">069 344 253</a>
          </div>
        </div>
        <div className="footer--copy">&copy; 2023 Good Table. Все права защищены.</div>
      </div>
    </div>
  )
}
