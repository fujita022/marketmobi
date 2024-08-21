import './style.css';
import { Link } from 'react-router-dom';
import HeaderPrincipal from '../../main';

function Home() {
  return (
    <>
      <div className="container">
        <HeaderPrincipal/>
      </div >
        <div className="registrar-entrar">
          <Link to="/registrar">Registrar</Link>
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