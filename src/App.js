import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar'
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
import { Profits } from './pages/Profits';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { NewCategory } from './pages/NewCategory';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/criarConta' element={<Signup />} />
        <Route path='/acessarConta' element={<Login />} />
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
        <Route path='/lucros' element={<Profits />} />
        <Route path='/novaCategoria' element={<NewCategory/>}/>
      </Routes>
    </div>
  );
}

export default App;
