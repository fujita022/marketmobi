import './Registro.css'

function Register() {
  return (
    <>
      <div className="container-register">
        <form>
          <h1>Cadastre-se</h1>
          <input type="text" name='Nome' placeholder='Nome:' />
          <input type="number" name='Idade' placeholder='Idade:' />
          <input type="email" name='E-mail' placeholder='E-mail:' />
          <button type="button">Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default Register;