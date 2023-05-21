import gallery1 from '/images/gallery1.png'
import gallery2 from '/images/gallery2.png'
import gallery3 from '/images/gallery3.png'
import './styles/contact.scss'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="feedback">
          <h2 className="feedback--heading heading">Задайте нам вопрос</h2>
          <form action="" className="feedback--form">
            <input type="text" placeholder='Имя, Фамилия' />
            <input type="text" placeholder='Телефон' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Сообщение'></textarea>
            <button className='button button--accent'>Отправить</button>
          </form>
        </div>
      </div>
      <div className="visit">
        <div className="container">
          <div className="visit--heading">Посетите наши студии</div>
          <div className="visit--body">
            <div className="visit--city">
              <h3 className="visit--city_name">Кишинёв</h3>
              <p>Телефон: 079 305 777</p>
              <p>Email: goodtableC@mail.ru</p>
              <p>График работы: 9.00 - 18.00</p>
              <p>Адрес: ул. Штефан чел Маре, 5/2</p>
              <Link to="https://goo.gl/maps/kf2PHEL8oVYe59y67" target="_blank" rel="noopener noreferrer"><button className='button button--secondary'>Показать на карте</button></Link>
            </div>
            <div className="visit--city">
              <h3 className="visit--city_name">Киев</h3>
              <p>Телефон: +380 45 305 777</p>
              <p>Email: goodtableK@mail.ru</p>
              <p>График работы: 9.00 - 18.00</p>
              <p>Адрес: ул. Казацкая, 122</p>
              <Link to="https://goo.gl/maps/A1ZgdZcqPTE5K35h6" target="_blank" rel="noopener noreferrer"><button className='button button--secondary'>Показать на карте</button></Link>
            </div>
            <div className="visit--city">
              <h3 className="visit--city_name">Бухарест</h3>
              <p>Телефон: +40 33 305 777</p>
              <p>Email: goodtableB@mail.ru</p>
              <p>График работы: 9.00 - 18.00</p>
              <p>Адрес: ул. Eroilor, 16-24</p>
              <Link to="https://goo.gl/maps/U2sNSjMd6MRZyjh5A" target="_blank" rel="noopener noreferrer"><button className='button button--secondary'>Показать на карте</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gallery--container">
          <div className="gallery">
            <img src={gallery1} />
            <img src={gallery2} />
            <img src={gallery3} />
          </div>
        </div>
      </div>
    </>
  )
}
