import { useState, useEffect, useContext } from 'react'
import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { getDocs, collection ,query, where} from 'firebase/firestore';
import { db } from '../../services/firebase';
import { NotificationContext } from '../../notification/Notification';
const ItemListContainer=({ greeting })=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryID } = useParams()
    const { setNotification } = useContext(NotificationContext)
    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryID ? 
        query(collection(db, ' products'), where('category', '==', categoryID))
        : collection(db, ' products')
        getDocs(collectionRef).then(response => {
            console.log(response)
             const productsAdapted = response.docs.map( doc => {
                 const data = doc.data()
                 return {id:doc.id ,...data}
             })
             setProducts(productsAdapted)
        })
        .catch(error =>{
            setNotification('error', 'No se pueden obtener los productos')
        })
        .finally(()=>{
            setLoading(false)
        })
        // const asyncFunction = categoryID ? getProductsByCategory : getProducts
       
        // asyncFunction(categoryID).then(response => {
        //     setProducts(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })  
    },[categoryID])

     if(loading && true) {
          return <h1>Cargando productos...</h1>
     }

    return(
        <div className='containerProducts'>
            <h1>{`${greeting} ${categoryID || ''}`}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;