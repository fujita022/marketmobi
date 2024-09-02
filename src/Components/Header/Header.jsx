import { Link } from "react-router-dom";
import './Header.css'
import Logo from '../../assets/logomm.png'
function Header() {
  return (    
     <>
    <div className="container-header">
      <header>
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="logo imagem" />
          </Link>
        </div>
        <div className="row-interativos">
        
          <div className="comprar">
            <Link to='/Comprar'>Comprar</Link>
          </div>
          <div className="alugar">
            <Link to='/Alugar'>Alugar</Link>
          </div>
          <div className="nav-pesquisa">
          <div className="anunciar">
            <Link to='/Anunciar'>Anunciar Imóveis</Link>
          </div>
          <div className="pesquisa">
            <a href="#">
              <img src="https://cdn-icons-png.flaticon.com/128/2319/2319177.png" alt="pesquisa imagem" />
            </a>
          </div>
          </div>
        </div>

        <div className="contato">
          <div className='instagram'>
            <a href="https://www.instagram.com/marketmobi/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" width={20} alt="instagram imagem" />
            </a>
          </div>
          <div className='whatsapp'>
            <a href="#" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png" alt="whatsapp imagem" />
            </a>
          </div>
        </div>
        <div className="enviar-form">
          <form action="">
            <table></table>
          </form>
        </div>
      </header>
    </div>
  </> );
}

export default Header