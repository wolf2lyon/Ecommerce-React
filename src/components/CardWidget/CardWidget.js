import card from './assets/icon-cart.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
const CardWidget=()=>{

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()
    return(
        <div className='card-logo'>
        <Link to={"/cart"}>
            <img src={card} alt='card'></img>
        </Link>
            {totalQuantity}
        
        </div>
    )
}
export default CardWidget;