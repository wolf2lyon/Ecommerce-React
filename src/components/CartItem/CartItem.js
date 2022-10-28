import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article className='CardCartItem'>
            <div className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </div>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItemf">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItemf">
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${price * quantity}
                 </p>
                 <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem