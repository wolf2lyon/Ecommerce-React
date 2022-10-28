import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1 className='vacio'>No hay items en el carrito</h1>

        )
    }

    return (     
        <div className='Cart_container'>
            { <div className='article_container'>{cart.map(p => <CartItem key={p.id} {...p}/>)}</div> }
            <h3 className='totalcontainer'>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="ButtonCart">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}


export default Cart