import React from 'react'
import image from '../images/ergostol-uno-c.png'

export default function Card() {
  return (
    <div className='card'>
      <div className="card--image"><img src={image}/></div>
      <div className="card--info">
        <div className="card--name">ergostol uno c</div>
        <div className="card--price">11999 mdl</div>
      </div>
    </div>
  )
}
