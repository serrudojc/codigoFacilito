import React from 'react';
import { render } from 'react-dom';

const nombres = [
    'coquito',
    'Enano',
    'Chiquito',
    'Pachito'
]
/*
//componente con nombre harcodeado. Externamente no puedo alterar la variable
const Saludar = ()=>{
    const nombre = 'coquito';  
    return <p>Hola {nombre} </p>
}*/

//Ahora vamos asignarlo via props, que se ven y declaran como atributos y se reciben en un objeto llamado props (pero puedo cambiar de nombre)
const Saludar = (props)=>{
    return <p>Hola {props.nombre} </p> 
}

const App = ()=>{
    return <div> <Saludar nombre='Juan Carlos'/> </div>; //envio un props a mi componente
}

render(<App />, document.getElementById('root'));










//es usual que usemos la sintaxis del destructuring de JS. Permite extraer en variables individuales
//las propidades de un objeto. La clave está en q el nombre de la variable a la q vamos extraer el valor
//tiene q coincidir con la propiedad del objeto (llamarse igual).
//
import React from 'react';
import { render } from 'react-dom';

const nombres = [
    'coquito',
    'Enano',
    'Chiquito',
    'Pachito'
]

const Saludar = ( {nombre} )=>{
    return <p>Hola {nombre} </p> 
}

const App = ()=>{
    return <div> <Saludar nombre='Juan Carlos'/> </div>; 
}

render(<App />, document.getElementById('root'));




//si queremos recibir idioma
import React from 'react';
import { render } from 'react-dom';

const nombres = [
    'coquito',
    'Enano',
    'Chiquito',
    'Pachito'
]

const Saludar = ( {nombre, idioma} )=>{
    const saludo = idioma === 'es' ? 'Hola' : 'hello';
    return <p> {saludo} {nombre} </p> 
}

const App = ()=>{
    return <div> <Saludar nombre='Juan Carlos' idioma='es'/> </div>; 
}

render(<App />, document.getElementById('root'));




//props idioma con valor por defecto. Primera forma con props por defecto con defaultProps (SE VA ELIMINAR EN NUEVAS VERSIONS DE REACT)
import React from 'react';
import { render } from 'react-dom';

const nombres = [
    'coquito',
    'Enano',
    'Chiquito',
    'Pachito'
]

const Saludar = ( {nombre, idioma} )=>{
    const saludo = idioma === 'es' ? 'Hola' : 'hello';
    return <p> {saludo} {nombre} </p> 
}

//utilizar propiedad defaultProps asigandola al componente, sobre ese objeto colocar las props queramos
Saludar.defaultProps = {
    idioma: 'en'
}

const App = ()=>{
    return <div> <Saludar nombre='Juan Carlos'/> </div>;    //no paso idioma, entonces toma la q es por defecto
}

render(<App />, document.getElementById('root'));






//la otra forma es utilizar parametros por defecto de ECMAScript, usar el lenguaje nada mas y nada que 
//tenga q ver con React. FORMA RECOMENDADA
import React from 'react';
import { render } from 'react-dom';

const nombres = [
    'coquito',
    'Enano',
    'Chiquito',
    'Pachito'
]

const Saludar = ( {nombre, idioma = 'en'} )=>{
    const saludo = idioma === 'es' ? 'Hola' : 'hello';
    return <p> {saludo} {nombre} </p> 
}

const App = ()=>{
    return <div> <Saludar nombre='Juan Carlos'/> </div>;    //si no paso valor, toma el por defecto
}

render(<App />, document.getElementById('root'));
