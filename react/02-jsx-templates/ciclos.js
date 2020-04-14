import React from 'react';
import { render } from 'react-dom';

//arreglo de nombres
const nombres = [
    'coquito',
    'Enano',
    'Chiquito',
    'Pachito'
]


function getNombres(){
    const elementosLista = [];
    for(var i=0; i<nombres.length;i++){
        elementosLista.push(<li> {nombres[i]} </li>);
    }
    return elementosLista;
}

//creamos componente nombres
const Nombres = ()=>{
    return <ul> { getNombres()} </ul>
}

//llevo el componente Nombres al root
const App = ()=>{
    return <div> <Nombres/> </div>;
}

render(<App />, document.getElementById('root'));







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
        nombres.map( nombre => <li> {nombre} </li>)
    } </ul>
}

//llevo el componente Nombres al root
const App = ()=>{
    return <div> <Nombres/> </div>;
}

render(<App />, document.getElementById('root'));

// esta ultima forma, tira un error en la consola.
// Mensaje de React que dice que cada hijo de una lista deberia tener un prop unico
//de nombre key. Revisar el metodo render del componente Nombres
// Ver Listas