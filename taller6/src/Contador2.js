// Contador.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Contador() {
  const contador = useSelector(state => state.contador);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>Decrementar</button>
    </div>
  );
}

export default Contador;
