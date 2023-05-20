import { ChangeEvent, useState } from 'react'
import { Card } from '../components/card'
import tablesData from '../tablesData.json'
import './styles/shop.scss'
import { Page } from '../components/Page'
import { CartItemParams } from './product'
import { PriceFilter } from '../components/PriceFilter'
import { useShopPagination } from '../components/UseShopPagination'
import searchIcon from '../../public/images/searchIcon.png'

export interface ItemsDataParams extends Omit<CartItemParams, 'amount'> {
  category: string
}

export const Shop = () => {
  const [tables] = useState<ItemsDataParams[]>(tablesData)
  const [isActive, setIsActive] = useState<number | null>(1);
  const { currentPage, setCurrentPage, setOption, currentItems, pages, priceRange, setPriceRange, name, setName } = useShopPagination(tables)
  //change current page
  const handleClick = (id: number) => {
    setCurrentPage(id);
  }

  const activeButtonStyle: React.CSSProperties = {
    borderBottom: "1px solid #000"
  };

  const handleLinkClick = (buttonId: number) => {
    setIsActive(buttonId);
  };

  const buttonStyle = (buttonId: number) => {
    return isActive === buttonId ? activeButtonStyle : {};
  };
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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    let target = e.target
    //input cannot be longer than 22 elements and less than 0
    if (value.length <= 22 && value.length >= 0) {
      //tracking input state
      setName(value)
    }
  }

  return (
    <div className='product'>
      <div className="container">
        <div className="product--body">
          <div className="product--heading main-heading">Наши товары</div>
          <div className="filters">
            <div className="filters--category">
              <button style={buttonStyle(1)} onClick={() => { setOption("all"); setCurrentPage(1); handleLinkClick(1) }}>Все</button>
              <button style={buttonStyle(2)} onClick={() => { setOption("table"); setCurrentPage(1); handleLinkClick(2) }}>Столы</button>
              <button style={buttonStyle(3)} onClick={() => { setOption("sofa"); setCurrentPage(1); handleLinkClick(3) }}>Диваны</button>
              <button style={buttonStyle(4)} onClick={() => { setOption("chair"); setCurrentPage(1); handleLinkClick(4) }}>Стулья</button>
            </div>
            <div className="filters--type">
              <input type="search" className='searchbar' value={name} onChange={handleSearch} />
              <img className='searchIcon' src={searchIcon} alt="" />
              <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
            </div>
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
    </div >
  )
}
