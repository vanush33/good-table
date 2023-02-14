import React from 'react'
import time from '/images/time.svg'
import like from '/images/like.svg'
import medal from '/images/medal.svg'
import pen from '/images/pen.svg'
import Card from '../components/card'
import { Link } from 'react-router-dom'
import tablesData from '../tablesData.json'
import '/public/styles/home.scss'


export default function Home() {
  const [tables, setTables] = React.useState([])

  const table = tablesData.slice(0, 4).map(item => (
    <Card
      key={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
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
                <button className="main--button button button--accent">В каталог</button>
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
