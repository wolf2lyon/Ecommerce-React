import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../notification/Notification'



const ItemDetail = ({ id, name, image, category, price, stock}) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {
            id, name, price, quantity
        }

         addItem(productToAdd)
         setNotification('success', `Se agrego correctamente ${quantity}${name}`)
    }
    const productAddedQuantity=getProductQuantity(id)



    return (
        <div className="infProduct">
                <h1 className="titleProduct">{name}</h1>
                <img src={image} alt={`${id}${name}`}></img>
                <h2>{category}</h2>
                <h3 className="priceProduct">$ {price}</h3>
                {/* contador */}
                <div className="stockContainer">
                {
                quantityToAdd === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity}/>):
                    (
                        <Link className='finalizar' to='/cart'>Finalizar compra</Link>
                    )
                }
                </div>
            </div>
    )
}

export default ItemDetail