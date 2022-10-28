import './ItemCount.css'
import { useState } from 'react'


const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    

    return (
        <div className='stock_container_styles'>
            <div className='container_increment'>
                <button className='clase_aumentar' onClick={increment} >+</button>
                <div className="stockButton">{quantity}</div>
                <button className='clase_disminuir' onClick={decrement}>-</button>
            </div>
            
            <button className="Button2" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}


export default ItemCount;