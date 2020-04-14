import React from 'react';
import { render } from 'react-dom';

//arreglo de nombres
const nombres = [
    'coquito',
    'Enano',
    'Chiquito',
    'Pachito'
]

//creamos componente nombres
const Nombres = ()=>{
    return <ul> {
        nombres.map( (nombre,index) => <li key={index}> {nombre} </li>)
    } </ul>
}

//llevo el componente Nombres al root
const App = ()=>{
    return <div> <Nombres/> </div>;
}

render(<App />, document.getElementById('root'));

/*
//Anteriormente, en ciclos.js:
// esta ultima forma, tira un error en la consola.
// Mensaje de React que dice que cada hijo de una lista deberia tener un prop unico
//de nombre key. Revisar el metodo render del componente Nombres


key={index} lo va usar react para q en caso de q haya modificacion en el arreglo, pueda saber cual
es el elemento a actualizar y no tenga q volver a mostrar toda la lista.
Cuando no hay un identificador unico y react no pueda distinguir cada uno de los elementos de 
la lista de forma unica, si se modifica un elemento del array, no se podria actualizar.
Siempre q se vaya a imprimir un arreglo o lista, cada uno de los elementos de la lista, cada uno
de los hijos debe de contener un prop con nombre key que tenga un valor unico, este valor no 
deberá repetirse entre los elementos de la lista, por eso en este caso usamos la posicion index
*/