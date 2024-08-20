import './style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'

function Home() {
const [users, setUsers] = useState([])
const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/users')
    
    setUsers(usersFromApi.data)
  }

  async function createUsers(){
    await api.post('/users', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: inputAge.current.value
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  
  return (
    <>
      <div className="container">
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
            <div className="registrar-entrar">

            </div>
          </div>
        </header>
      </div>
      <section className="container2">
        <div className="produtos">
          <div className="box">
            <a href="#">produto1</a>
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

      <div className="container-register">
        
        <form>
          <h1>Cadastre-se</h1>
          <input type="text" name='Nome' placeholder='Nome:' ref={inputName}/>
          <input type="number" name='Idade' placeholder='Idade:' ref={inputAge}/>
          <input type="email" name='E-mail' placeholder='E-mail:' ref={inputEmail}/>
          <button type="button" onClick={createUsers}>Cadastrar</button>
        </form>


        {users.map(user => (
          <div key={user.id}>
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>E-mail: {user.email}</p>
            </div>
            <button>
              <img src={Lixeira} width={20} />
            </button>
          </div>    
    ))}
    </div>
    </>
  );
}

export default Home;