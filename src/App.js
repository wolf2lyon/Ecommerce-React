import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification';
function App() {
  return (
    <div className="App">
    <NotificationProvider>
      <CartContextProvider >
        <BrowserRouter> 
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="SNEAKER COMPANY"/>}></Route>
            <Route path='/category/:categoryID' element={ <ItemListContainer greeting='Sneakers Catalog'/>}></Route>
            <Route path='/detail/:productID' element={ <ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider>
    </div>
    
  );
}

export default App;
