import Item from "../Item/Item"
import './ItemList.css'

const ItemList=({products})=>{
    return( 
        <div className="cardProduct">
            {
                 products.map(prod =>(
                    <Item key={prod.id} prod={prod}/>
                ))
            }
        </div>
    )
}
export default ItemList