import { Link } from 'react-router-dom'
import '/public/styles/card.scss'
interface CardProps {
  id: number
  name: string
  price: number
  image: string
  description?: string
}

const Card = ({id, name, price, image, description}: CardProps) => {
  return (
    <Link to={`/shop/${id}`}>
      <div className='card'>
        <div className="card--image"><img src={image}/></div>
        <div className="card--info">
          <div className="card--name">{name}</div>
          <div className="card--price">{price}</div>
        </div>
      </div>
    </Link>
  )
}
export default Card