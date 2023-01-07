import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { NewProduct } from './pages/NewProduct';
import { Product } from './pages/Product';
import { Stock } from './pages/Stock';
import { Orders } from './pages/Orders';
import { Order } from './pages/Order';
import { NewOrder } from './pages/NewOrder';
import { Sellers } from './pages/Sellers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/estoque' element={<Stock />} />
        <Route path='/produto/:id' element={<Product />} />
        <Route path='/novoProduto' element={<NewProduct />} />
        <Route path='/pedidos' element={<Orders />} />
        <Route path='/pedido/:id' element={<Order />} />
        <Route path='/novoPedido' element={<NewOrder />} />
        <Route path='/vendedores' element={<Sellers />} />
      </Routes>
    </div>
  );
}

export default App;
