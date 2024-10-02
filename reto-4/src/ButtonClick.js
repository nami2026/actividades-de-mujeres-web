import React from 'react';

function ButtonClick() {
  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <div>
      <button onClick={handleClick}>Haz clic aquí</button>
    </div>
  );
}

export default ButtonClick;