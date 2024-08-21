import './style.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container-home">
        <header>
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
            <Link to="/registrar">
            <p className='registro'>Registrar</p>
            </Link>
        </header>
      </div>
      <section className="container2">
        <div className="produtos">
          <div className="box">
            <Link to='/Produto-1'>Acessar produto</Link>
          </div>
          <div className="box">
            <a href="#">produto2</a>
          </div>        <div className="box">
            <a href="#">produto3</a>
          </div>
        </div>
      </section>
      <section className="infos">Em alta</section>
      <footer>
        <div className="container-footer">
          <div className="logo-footer">
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;