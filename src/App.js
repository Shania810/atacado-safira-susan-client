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
import { Seller } from './pages/Seller';
import { Clients } from './pages/Clients';
import { Client } from './pages/Client';
import { NewClient } from './pages/NewClient';

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
        <Route path='/vendedor/:id' element={<Seller />} />
        <Route path='/clientes' element={<Clients />} />
        <Route path='/cliente/:id' element={<Client />} />
        <Route path='/novoCliente' element={<NewClient />} />
      </Routes>
    </div>
  );
}

export default App;
