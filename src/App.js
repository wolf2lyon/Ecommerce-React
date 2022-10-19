import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter> 

      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="SNEAKER COMPANY"/>}></Route>
        <Route path='/category/:categoryID' element={ <ItemListContainer/>}></Route>
        <Route path='/detail/:productID' element={ <ItemDetailContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
