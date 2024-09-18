import React,{ useState } from 'react';

function ContadorFuncional() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Contador Funcional: {contador}</h1>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}

export default ContadorFuncional;