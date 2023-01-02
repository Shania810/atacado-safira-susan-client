import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Stock } from './pages/Stock';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/stock' element={<Stock/>} />
    </Routes>
    </div>
  );
}

export default App;
