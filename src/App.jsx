import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  let greeting = "Bienvenido a Cafetería García";
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home greeting={greeting} />} />
          <Route path='/Productos' element={<ItemListContainer />} />
          <Route path='/Producto/:IdRecibido' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1 className='text-center'>No se encontró</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
