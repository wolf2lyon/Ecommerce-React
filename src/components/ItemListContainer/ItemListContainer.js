import { useState,useEffect } from 'react';
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
const ItemListContainer=({ greeting })=>{
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } =useParams();

    useEffect(()=>{
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])
    if(loading) {
         return <h1>Cargando productos...</h1>
    }

     if(products.length === 0) {
        return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
     }
    return(
        <div className='containerProducts'>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;