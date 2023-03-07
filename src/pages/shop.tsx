import { useState } from 'react'
import { Card } from '../components/card'
import tablesData from '../tablesData.json'
import './styles/shop.scss'
import { Page } from '../components/Page'
import { CartItemParams } from './product'
import { PriceFilter } from '../components/PriceFilter'
import { useShopPagination } from '../components/UseShopPagination'

export interface ItemsDataParams extends Omit<CartItemParams, 'amount'> {
  category: string
}

export const Shop = () => {
  const [tables] = useState<ItemsDataParams[]>(tablesData)
  const {currentPage, setCurrentPage, setOption, currentItems, pages, priceRange, setPriceRange} = useShopPagination(tables)
  //change current page
  const handleClick = (id: number) => {
    setCurrentPage(id);
  }
  //render page numbers elements
  const renderPageNumbers = pages.map(number => {
    return (
      <Page
        key={number}
        id={number}
        handleClick={handleClick}
        className={currentPage === number ? "currentPage" : ""}
      />
    );
  });
  
  return (
    <div className='product'>
      <div className="container">
        <div className="product--body">
          <div className="product--heading main-heading">Наши товары</div>
          <div className="filters">
            <div className="filters--category">
              <button onClick={() => setOption("all")}>Все</button>
              <button onClick={() => setOption("table")}>Столы</button>
              <button onClick={() => setOption("sofa")}>Диваны</button>
              <button onClick={() => setOption("chair")}>Стулья</button>
            </div>
            <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange}/>
          </div>
          <div className="product--list">
            {
              currentItems.map(item => 
                <Card
                  key={item.id}
                  id={item.id - 1}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                />
              )
            }
          </div>
        </div>
        <div className="pagination">{renderPageNumbers}</div>
      </div>
    </div>
  )
}
