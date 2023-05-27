import React from 'react'
import tick from '../../public/images/tick.png'
import '../pages/styles/modalWindow.scss'
import { Link } from 'react-router-dom';

interface MyComponentProps {
    toggleVisibility: (param: boolean) => void;
}

const ModalWindow = ({ toggleVisibility }: MyComponentProps) => {
    return (
        <div className='modalWindow'>
            <h2><img src={tick} />Спасибо за покупку</h2>
            <p>В течении 3 минут, на вашу почту придёт чек с оплатой!</p>
            <Link to={'/shop'}><button onClick={() => toggleVisibility(false)}><span></span><span></span></button></Link>
        </div>

    )
}

export default ModalWindow
