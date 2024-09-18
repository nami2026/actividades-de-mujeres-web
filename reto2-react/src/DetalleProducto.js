import react from "react";

function DetalleProducto(props) {
  return (
    <div>
      <h2>Nombre: {props.nombre}</h2>
      <p>Precio: {props.precio} COP</p>
      <p>Descripción: {props.descripcion}</p>
    </div>
  );
}

export default DetalleProducto;
