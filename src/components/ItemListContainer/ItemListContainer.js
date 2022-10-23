import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory, getProductById} from "../../asyncMock"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
const ItemListContainer=({ greeting })=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryID } = useParams()
    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryID ? getProductsByCategory : getProducts
       
        asyncFunction(categoryID).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    },[categoryID])

     if(loading) {
          return <h1>Cargando productos...</h1>
     }

     if(products.length === 0) {
        return categoryID ? <h1>No hay productos en nuestra categoria {categoryID}</h1> : <h1>No hay productos disponibles</h1>
      }
    return(
        <div className='containerProducts'>
            <h1>{`${greeting} ${categoryID || ''}`}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;