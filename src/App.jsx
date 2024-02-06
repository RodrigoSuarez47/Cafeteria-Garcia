import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {
  let greeting = "Bienvenido a Cafetería García";
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home greeting={greeting} />} />
            <Route path='/Categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/Producto/:IdRecibido' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<h1 className='text-center'>No se encontró</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
