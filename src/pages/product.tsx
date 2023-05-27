import { useContext, useMemo, useState } from 'react'
import './styles/product.scss'
import tablesData from '../tablesData.json'
import { useParams } from 'react-router-dom'
import { Page404 } from './page404'
import { CartContext } from '../components/Cart/CartContext'

interface ProductPageParams {
  id: string
  [key: string]: string
}

export interface CartItemParams {
  id: number
  name: string
  image: string
  description?: string
  price: number
  amount: number
}

export const Product = () => {
  //rendering product page
  const [amount, setAmount] = useState(1)
  const { id } = useParams<ProductPageParams>()
  const { setCartItems } = useContext(CartContext)
  //finding clicked product
  const table = useMemo(() => {
    if (id && tablesData[parseInt(id)]) {
      const id_ = parseInt(id)
      return {
        id: tablesData[id_].id,
        name: tablesData[id_].name,
        image: tablesData[id_].image,
        description: tablesData[id_].description,
        price: tablesData[id_].price
      }
    }
  }, [id])
  //if product doesn't exist
  if (!table) {
    return <Page404 />
  }
  //add product amount
  function add() {
    setAmount(prevAmount => prevAmount + 1)
  }
  //subtract product amount
  function subtract() {
    amount > 1 && setAmount(prevAmount => prevAmount - 1)
  }

  const item: CartItemParams = {
    id: table.id,
    name: table.name,
    price: table.price,
    image: table.image,
    amount: amount
  }

  return (
    <>
      <div className="container">
        <div className="product product-page">
          <div className="product--image"><img src={table.image}></img></div>
          <div className="product--desc">
            <div className="product--name">{table.name}</div>
            <div className="product--description">{table.description}</div>
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
              <button className="button button--accent" onClick={() => setCartItems(item.id, item.amount, item)}>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
