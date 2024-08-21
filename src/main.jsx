import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'


function HeaderPrincipal() {
  return (     <>
    <div className="container">
      <header className='Header'>
        <div className="logo">
          <img src="https://i.postimg.cc/2Sk2TFNv/LOGOOFICIAL.png" alt="logo imagem" />
        </div>
        <div className="row-interativos">
          <div className="comprar">
            <a onClick='Comprar()'>Comprar Imóveis</a>
          </div>
          <div className="alugar">
            <a href="#">Alugar Imóveis</a>
          </div>
          <div className="anunciar">
            <a href="#">Anunciar Imóveis</a>
          </div>
          <div className="pesquisa">
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/128/2319/2319177.png" alt="pesquisa imagem" />
            </a>
          </div>
        </div>

        <div className="contato">
          <div className='instagram'>
            <a href="https://www.instagram.com/marketmobi/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="instagram imagem" />
            </a>
          </div>
          <div className='whatsapp'>
            <a href="#" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="whatsapp imagem" />
            </a>
          </div>
        </div>
      </header>
    </div>
  </> );
}

export default HeaderPrincipal;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
