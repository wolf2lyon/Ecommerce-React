import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
import Form1 from "../Form/Form"
import './Checkout.css'


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async (buyer) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer,
                items: cart,
                total
            }
    
            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, ' products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                console.log(stockDb)
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1 className="Orden">Su orden se esta generando...</h1>
    }

    return (
        <>
            <h1 className="checkout_container">Checkout</h1>
            <Form1 createOrder={createOrder}></Form1>
            
        </>
    )
}

export default Checkout