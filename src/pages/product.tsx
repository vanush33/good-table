import React, { useMemo } from 'react'
import '/public/styles/product.scss'
import tablesData from '../tablesData.json'
import { useParams } from 'react-router-dom'
import Page404 from '../components/page404'

interface ProductPageParams
 {
  id: string
  [key:string]: string
}

export default function Product() {
    const [amount, setAmount] = React.useState(0)
    const {id} = useParams<ProductPageParams>()
    const table = useMemo(() => {
      if (id && tablesData[parseInt(id)]) {
        const id_ = parseInt(id)
        return {
          name: tablesData[id_].name,
          image: tablesData[id_].image,
          description: tablesData[id_].description,
          price: tablesData[id_].price
        }
      }
    },[id])

    if (!table) {
      return <Page404 />
    }

    function add() {
        setAmount(prevAmount => prevAmount + 1)
    }

    function subtract() {
        amount > 0 && setAmount(prevAmount => prevAmount - 1)
    }
  return (
    <>
      <div className="container">
        <div className="product">
            <div className="product--image"><img src={table.image}></img></div>
            <div className="product--desc">
                <div className="product--name">{table.name}</div>
                <div className="product--description">{table.description}</div>
                <div className="product--material">Выберите материал: ДСП МДФ</div>
                <div className="product--color">Цвет: </div>
                <div className="product--width">Ширина: <input type="number" /> см</div>
                <div className="product--height">Длина: <input type="number" /> см</div>
                <div className="product--amount">
                    Количество:
                    <button className="amount" onClick={add}>+</button>
                    <span>{amount}</span>
                    <button className="amount" onClick={subtract}>-</button>    
                </div>
                <div className="product--sum">
                    <div className="product--total">{table.price * amount} mdl</div>
                    <button className="button button--accent">В корзину</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
