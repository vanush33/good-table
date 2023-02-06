import React from 'react'
import Card from '../components/card'

export default function Shop() {
  return (
    <div className='product'>
      <div className="container">
        <div className="product--body">
          <div className="product--heading main-heading">Наши товары</div>
          <div className="product--list">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  )
}
