import React from "react";
import Productos from "./Productos";

function ListaDeProductos(props) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {props.productos.map(function(producto, index) {
        return(
         <Productos 
            key={index} 
            name={producto.nombre} 
            precio={producto.precio} 
        />
        );
    })}
    </div>
  );
}

export default ListaDeProductos;