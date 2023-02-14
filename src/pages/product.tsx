import React from 'react'
import '/public/styles/product.scss'

export default function Product() {
    const [amount, setAmount] = React.useState(0)

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
            <div className="product--image"><img></img></div>
            <div className="product--desc">
                <div className="product--name">Bekant</div>
                <div className="product--description">Этот прочный стол гарантированно выдержит многие годы чаепитий и усердной работы. У него большая просторная столешница, под которой есть удобное решение для размещения проводов.</div>
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
                    <div className="product--total">7999 mdl</div>
                    <button className="button button--accent">В корзину</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
