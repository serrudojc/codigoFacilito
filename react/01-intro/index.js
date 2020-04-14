//EJEMPLO HECHO EN STACKBLITZ.COM

//importo JSX para que funcione la sintaxis
import React from 'react';

//importo render, pq React se puede utilizar mas allá de la web, asi que aca lo usamos
import { render } from 'react-dom';

//Primero defino un componente funcional, q retorna un elemento de React
const App = ()=>{
    return <h1> Hola Mundo! </h1>;
}

//render del componente App y lo ponenmos en un elemento que ponemos por su id
render(<App />, document.getElementById('root'));
//pasamos el componente q queremos mostrar y donde lo va insertar en la pag web