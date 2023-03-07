import time from '/images/time.svg'
import like from '/images/like.svg'
import medal from '/images/medal.svg'
import pen from '/images/pen.svg'
import { Card } from '../components/card'
import { Link } from 'react-router-dom'
import tablesData from '../tablesData.json'
import './styles/home.scss'


export const Home = () => {
  //rendering 4 cards to display
  const table = tablesData.slice(0, 4).map(item => (
    <Card
      key={item.id}
      id={item.id - 1}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
      category={item.category}
    />
  ))

  return (
    <>
      <div className="main">
        <div className="container">
            <div className="main--body">
                <h1 className="main--heading">Good Table</h1>
                <div className="main--subHeading">Работа может быть приятной...</div>
                <ul className="main--list">
                    <li className="main--item"><img src={time}/>Строк изготовления 25 дней</li>
                    <li className="main--item"><img src={like}/>Производство из высококачественных материалов</li>
                    <li className="main--item"><img src={medal}/>Гарантия производителя: 5 лет</li>
                    <li className="main--item"><img src={pen}/>Отчёт по всем этапам работы</li>
                </ul>
                <Link to={'/shop'}><button className="main--button button button--accent">В каталог</button></Link>
            </div>
        </div>
      </div>
      <div className="shop">
        <div className="container">
            <h2 className="shop--heading main-heading">Лучшее только у нас</h2>
            <div className="shop--list">
                {table}
            </div>
            <Link to={'/shop'}><button className="shop--button button button--accent">Посмотреть все товары</button></Link>
        </div>
      </div>
    </>
  )
}
