import react from "react";

function Productos(props){
  return(
    <div>
      <h2>El producto {props.name} esta disponible</h2>
      <h2>Tiene un precio de {props.precio} cop</h2>
    </div>
  );
}

export default Productos;
