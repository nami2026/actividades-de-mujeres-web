import react from "react";
import Productos from "./Productos";
import ContadorClase from "./ContadorClase";
import ContadorFuncional from "./ContadorFuncional";
import ListaDeProductos from "./ListaDeProductos";
import DetalleProducto from "./DetalleProducto";


/*function Ejercicio1(){
  return(
    <div>
      <h2>"Hola,minino el gato mas hermoso"</h2>
      <p>Bienvenido a nuestro sitio web</p>
    </div>
  );
}

export default Ejercicio1;*/

/*function ejercicio2(){
  return(
    <div>
      <Productos name ="Salsa de tomate"Productos precio="25.000"/>
      <Productos name ="Alimento humedo wiskas"Productos precio="13.000"/>
    </div>
  );
}

export default ejercicio2;*/

/*function Ejercicio3_funcional() {
  return (
    <div className="Ejercicio3_funcional">
      <h2>Mi aplicación de contador</h2>
      <ContadorFuncional/>  
    </div>
  );
}

export default Ejercicio3_funcional;*/

/*function Ejercicio3_clase() {
  return (
    <div className="Ejercicio3_clase">
      <h2>Mi aplicación de contador</h2>
      <ContadorClase/>  
    </div>
  );
}

export default Ejercicio3_clase;*/

/*function Ejercicio4() {
  const productos = [
    { nombre: "Laptop", precio:"3.000.000" },
    { nombre: "Smartphone", precio:"1.500.000"},
    { nombre: "Tablet", precio:"1.000.000"}
  ];

  return (
    <div className="Ejercicio4">
      <h1>Productos disponibles</h1>
      <ListaDeProductos productos={productos} />
    </div>
  );
}

export default Ejercicio4;*/

function Ejercico5() {
  const producto = {
    nombre: "Laptop",
    precio:"3.000.000",
    descripcion: "Laptop de última generación con 16GB de RAM y 512GB SSD."
  };

  return (
    <div className="Ejercicio5">
      <h1>Detalles del Producto</h1>
      <DetalleProducto 
        nombre={producto.nombre} 
        precio={producto.precio} 
        descripcion={producto.descripcion} 
      />
    </div>
  );
}

export default Ejercico5;