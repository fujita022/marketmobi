import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Registro from './pages/Registro'
import Produto1 from './pages/Produtos/produto-1';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/registrar' element={<Registro />}/>
        <Route path='/Produto-1' element={<Produto1/>}/>
      </Routes>
    </BrowserRouter>
   );
}

export default App;