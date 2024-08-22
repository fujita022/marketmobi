import './style.css';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="container-home">
      </div>
      <section className="container2">
        <nav className="produtos-nav-bar">
          <div className="box">
            <Link to='/Produto-1'>Acessar produto</Link>
          </div>
          <div className="box">
            <a href="#">Acessar</a>
          </div>        
          <div className="box">
            <a href="#">Aessar</a>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Home;