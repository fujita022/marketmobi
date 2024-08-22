import './Comprar.css'

function Comprar() {
  return (
    <div className="container-compra">
      <div className="botoes-interativos">
        <div className="botao comprar">Comprar</div>
        <div className="botao regiiao">Escolher a região</div>
        <div className="botao tp-imovel">Tipo de Imóvel</div>
        <div className="botao valor">Valor</div>
      </div>
      <br />
      <div className="box-imoveis">
        <div className="img">
          <img src="https://betaimages.lopes.com.br/realestate/REO5611/DFC685568C92234145E307AD63DC489B.JPG"/>
        </div>
        <div className="box-texto">
        <div className="infos-imovel-compra">
          <h2>Imóvel 1</h2>
        </div>
        <div className="valor-imovel-compra">
          <p>R$2.000.000</p>
        </div>
        <div className="conhecer-imovel-compra"></div>
        </div>
      </div>

      <div className="box-imoveis">
        <div className="img">
          <img src="https://betaimages.lopes.com.br/realestate/REO5611/DFC685568C92234145E307AD63DC489B.JPG"/>
        </div>
        <div className="box-texto">
        <div className="infos-imovel-compra">
          <h2>Imóvel 1</h2>
        </div>
        <div className="valor-imovel-compra">
          <p>R$2.000.000</p>
        </div>
        <div className="conhecer-imovel-compra"></div>
        </div>
      </div>
    </div>
  );
}

export default Comprar