import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Stock } from './pages/Stock';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/estoque' element={<Stock />} />
        <Route path='/produto/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
