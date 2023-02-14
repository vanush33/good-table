import React from 'react'
import Card from '../components/card'
import tablesData from '../tablesData.json'

export default function Shop() {
  const [tables, setTables] = React.useState([])

  const table = tablesData.map(item => (
    <Card
      key={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
    />
  ))
  
  return (
    <div className='product'>
      <div className="container">
        <div className="product--body">
          <div className="product--heading main-heading">Наши товары</div>
          <div className="product--list">
            {table}
          </div>
        </div>
      </div>
    </div>
  )
}
