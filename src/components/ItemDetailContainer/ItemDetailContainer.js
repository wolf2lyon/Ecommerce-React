import { useState,useEffect } from "react";
import { getProductById} from "../../asyncMock";
import { useParams } from "react-router-dom";
import './ItemDetails.css'

const ItemDetailContainer=()=>{

    const inital=1;
    const [contador,setContador]=useState(inital);
    const [Product,setProduct]=useState({})
    const [loading,setLoading]=useState(true)
    const {productID}=useParams();
    console.log(productID);

    useEffect(()=>{
        getProductById(productID).then(product => {
            setProduct(product)
        }).finally(()=>{
            setLoading(false);
        })
    })
     function addProduct(){
         setContador(contador + 1);
     }
     function reduceProduct(){
        if(contador > 0) {
            setContador(contador - 1);
        }
         
     }

    
    console.log(Product);

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="cardProduct">
            <div className="infProduct">
            <h1 className="titleProduct">{Product.name}</h1>
            <img src={Product.image} alt={`${Product.id}${Product.name}`}></img>
            <h2>{Product.category}</h2>
            <h3 className="priceProduct">$ {Product.price}</h3>
            {/* contador */}
            <div className="stockContainer">
                <button onClick={addProduct} >+</button>
                <div className="stockButton">{contador}</div>
                <button onClick={reduceProduct}>-</button>
            </div>
            </div>
          
        </div>
    )

}
export default ItemDetailContainer;
