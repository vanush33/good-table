import { Link } from 'react-router-dom'
import '../pages/styles/card.scss'
interface CardProps {
  id: number
  name: string
  price: number
  image: string
  description?: string
  category: string
}
//rendering product card
export const Card = ({id, name, price, image}: CardProps) => {
  return (
    <Link to={`/shop/${id}`}>
      <div className='card'>
        <div className="card--image"><img src={image}/></div>
        <div className="card--info">
          <div className="card--name">{name}</div>
          <div className="card--price">{price} mdl</div>
        </div>
      </div>
    </Link>
  )
}