import React, { useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const handleButtonClick = () => {
    toast.info('Você está sendo redirecionado para a página de serviços');
  };

  useEffect(() => {
    document.title = 'Mariana Ramos - Nutricionista';
  }, []);

  return (
    <div className="App">
      <header>
        <div className="social-icons">
          <a href=""><img src={require("./Imagens/face.png")}/></a>
          <a href=""><img src={require("./Imagens/insta.png")}/></a>
          <a href=""><img src={require("./Imagens/linkedin.png")}/></a>
        </div>
        <h1>
          <img src={require('./Imagens/folha.png')}/>
          <h4 className='header-title'>Dra. Mariana Ramos</h4>
        </h1>
        <div className="contact-info">
          <img src={require('./Imagens/whats.png')}/>
          <span className="phone-number">(99) 98888-2526</span>
        </div>
      </header>
      <nav>
        <a href="Inicio">Início</a>
        <a href="Sobre">Sobre</a>
        <a href="Serviços">Serviços</a>
        <a href="Contato">Contato</a>
      </nav>
      <div className="fruta">
        <img src={require('./Imagens/frutas.jpg')}/>
      </div>
      <div className="cards">
        <div className="card">
          <img src={require('./Imagens/gestante.png')}/>
          <h3>Gestantes</h3>
          <hr />
          <p>Para uma gestação saudável e com qualidade, prevenindo complicações.</p>
          <button onClick={handleButtonClick}>Saiba mais</button>
        </div>
        <div className="card">
          <img src={require('./Imagens/domicilio.jpg')}/>
          <h3>Nutrição a Domicílio</h3>
          <hr />
          <p>Tenha uma orientação nutricional vegetariana variada e balanceada.</p>
          <button onClick={handleButtonClick}>Saiba mais</button>
        </div>
        <div className="card">
          <img src={require('./Imagens/funcional.jpg')}/>
          <h3>Nutrição Funcional</h3>
          <hr />
          <p>Orientação nutricional para controle e tratamento de doenças crônicas.</p>
          <button onClick={handleButtonClick}>Saiba mais</button>
        </div>
        <div className="card">
          <img src={require('./Imagens/esportiva.jpg')}/>
          <h3>Esportiva</h3>
          <hr />
          <p>Melhor desempenho e performance em sua modalidade esportiva.</p>
          <button onClick={handleButtonClick}>Saiba mais</button>
        </div>
        <div className="card">
          <img src={require('./Imagens/vegetariana.jpg')}/>
          <h3>Vegetariana</h3>
          <hr />
          <p>Orientação nutricional especializada para vegetarianos e veganos.</p>
          <button onClick={handleButtonClick}>Saiba mais</button>
        </div>
        <div className="card">
          <img src={require('./Imagens/emagrecimento.jpg')}/>
          <h3>Emagrecimento</h3>
          <hr />
          <p>Emagrecimento e manutenção de peso de forma saudável, promovendo a saúde.</p>
          <button onClick={handleButtonClick}>Saiba mais</button>
        </div>
      </div>
      <footer className="rodape">
        <h3>Contato</h3>
        <h2>mayaranunes@hotmail.com</h2>
        <h3>Telefone</h3>
        <h2>(99) 98888-2526</h2>
        <h3>Endereço</h3>
        <h2>Minas Gerais - BA</h2>
        <h3>Serviços</h3>
        <ul>
          <li>NUTRIÇÃO A DOMICÍLIO</li>
          <li>NUTRIÇÃO CLÍNICA</li>
          <li>NUTRIÇÃO PARA GESTANTES</li>
          <li>NUTRIÇÃO ESPORTIVA</li>
          <li>NUTRIÇÃO VEGETARIANA</li>
          <li>EMAGRECIMENTO E MANUTENÇÃO DO PESO</li>
        </ul>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;