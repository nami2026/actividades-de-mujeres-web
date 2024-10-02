import React, { useState } from 'react';

function FormularioUsuario() {
  const [nombre, setNombre] = useState('');
  const [nombreMostrado, setNombreMostrado] = useState('');

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombreMostrado(nombre);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de usuario:
          <input
            type="text"
            value={nombre}
            onChange={handleInputChange}
            placeholder="Ingresa tu nombre"
          />
        </label>
        <button type="submit">Mostrar Nombre</button>
      </form>
      
      {nombreMostrado && (
        <p>Nombre ingresado: {nombreMostrado}</p>
      )}
    </div>
  );
}

export default FormularioUsuario;
