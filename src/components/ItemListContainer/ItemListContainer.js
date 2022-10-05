import { useState,useEffect } from 'react';
import { getproducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
const ItemListContainer=()=>{
    const [products , setProducts] = useState([]);
    const { categoryID } =useParams();

    useEffect(()=>{
        getproducts(categoryID).then(products=>{
            setProducts(products)
        })
    })
    console.log(products)
    return(
        <div className='containerProducts'>
            <h1>Sneakers Catalog</h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer;