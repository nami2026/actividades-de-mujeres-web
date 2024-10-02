import React from 'react';

function Formulario({ actualizarNumero }) {
  const handleInputChange = (event) => {
    actualizarNumero(event.target.value);
  };

  return (
    <div>
      <label>
        Ingresa un número:
        <input type="number" onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default Formulario;
