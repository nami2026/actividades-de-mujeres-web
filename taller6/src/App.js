import React from 'react';
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Sobre from './Sobre';
import { Provider } from 'react-redux';
import { store } from './store';
import Contador2 from './Contador2';

/*function ejercico1() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/inicio">Inicio</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Route path="/inicio" component={Inicio} />
      <Route path="/sobre" component={Sobre} />
    </BrowserRouter>
  );
}

export default ejercico1;*/

/*const TemaContext = createContext();

function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');
  const toggleTema = () => setTema(tema === 'claro' ? 'oscuro' : 'claro');

  return (
    <TemaContext.Provider value={{ tema, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}

function ComponenteTema() {
  const { tema, toggleTema } = useContext(TemaContext);
  return (
    <div style={{ color: tema === 'claro' ? 'black' : 'white', backgroundColor: tema === 'claro' ? 'white' : 'black' }}>
      <p>El tema actual es {tema}</p>
      <button onClick={toggleTema}>Cambiar Tema</button>
    </div>
  );
}

function ejercicio3() {
  return (
    <TemaProvider>
      <ComponenteTema />
    </TemaProvider>
  );
}

export default ejercicio3;*/


/*function Ejercicio4() {
  return (
    <Provider store={store}>
      <Contador2 />
    </Provider>
  );
}

export default Ejercicio4;*/



