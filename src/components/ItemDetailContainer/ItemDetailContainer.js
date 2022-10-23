import { useState,useEffect } from "react";
import { getProductById} from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailsContainer.css'

const ItemDetailContainer=({ setCart })=>{
    const [Product,setProduct]=useState({})
    const [loading,setLoading]=useState(true)
    const { productID }=useParams();
    useEffect(()=>{
        getProductById(productID).then(product => {
            setProduct(product)
        }).finally(()=>{
            setLoading(false);
        })
    }, [productID])
    

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="cardProduct">      
            <ItemDetail {...Product} setCart={setCart}/>
        </div>
    )

}
export default ItemDetailContainer;
