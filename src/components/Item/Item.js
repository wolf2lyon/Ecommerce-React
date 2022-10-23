import { Link } from "react-router-dom";
import './Item.css'

const Item = ({prod}) => {
    return (
        <div className="infProduct"  key={prod.id}>
            
                <h1 className="titleProduct">{prod.name}</h1>
                <img src={prod.image} alt={`${prod.id}${prod.name}`}></img>
                <h2 className="priceProduct">$ {prod.price}</h2>
                <Link className="linkProduct" to={`/detail/${prod.id}`}>Ver detalle</Link>
                <h3 className="descripctionProduct">Stock de la Zapatilla {prod.stock}</h3>
            
        </div>
    );
}

export default Item;
