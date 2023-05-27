import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/confirmPayment.scss'
import ModalWindow from '../components/ModalWindow'

interface IModalWindowParams {
    isVisible: boolean
    setIsVisible: Dispatch<SetStateAction<Boolean>>
}

export const ConfirmPayment = () => {
    //tracking payment method
    const [isCash, setIsCash] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const openModalWindow = (param: boolean) => {
        setIsVisible(param)
    }

    return (
        <>
            {isVisible && <ModalWindow toggleVisibility={openModalWindow} />}
            <div className="container">
                <div className="confirmPayment">
                    <h2 className="heading">Выберите способ оплаты</h2>
                    <div className="confirmPayment--method">
                        <button className={isCash ? "method" : "method checked"} onClick={() => setIsCash(false)}></button>
                        <label>Банковской картой</label>
                        <button className={isCash ? "method checked" : "method"} onClick={() => setIsCash(true)}></button>
                        <label>Наличными</label>
                    </div>
                    {!isCash &&
                        <>
                            <h2 className="heading">Введите данные карты</h2>
                            <div className="confirmPayment--data">
                                <input type="text" className='confirmPayment--card' placeholder='Номер карты' />
                                <input type="text" className='confirmPayment--date' placeholder='ММ/ГГ' />
                                <input type="text" className='confirmPayment--cvv' placeholder='CVV код' />
                                <input type="text" className='confirmPayment--name' placeholder='Имя, фамилия владельца' />
                            </div>
                        </>}
                    <div className="confirmPayment--buttons">
                        <Link to={'/confirmData'}><button className="button button--secondary">Назад</button></Link>
                        <button onClick={() => openModalWindow(true)} className="button button--accent">Подтвердить</button>
                    </div>
                </div>
            </div>
        </>
    )
}
