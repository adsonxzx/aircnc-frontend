import React from 'react'
import './App.css'

import logo from './assets/logo.svg'

function App() {
  return (
    <div className="container">
      <img src={logo} alt=""/>

      {/* Form */}
      <div className="form-box">
        <p className="text">Ofereça <b>spots</b> para programadores e
          encontre <b>talentos</b> para sua enpresa
        </p>

        <form>
          <label htmlFor="email"> E-MAIL * </label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            placeholder="Seu melhor e-mail"
          />
          <button type="submit" className="btn-cadastrar">Entrar</button>
        </form>
      </div>
    </div>
    
  );
}

export default App;
