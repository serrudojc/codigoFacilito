import React, {useState} from 'react';
import { render} from 'react-dom';


//Dos diferencias: En html el nombre de los atributos cuando pasamos una funcion a ejecutarse es todo miniscula
//La otra es que pasamos una funcion directamente q e va ejecutar cuando el evento suceda.
const Saludo = ()=>{
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" onChange={ ()=> console.log("Evento!") } ></input>
            <p>Hola {name} </p>
        </div>
    )
}


const App = ()=>{
    return <div><Saludo/></div>;
}

render(<App />, document.getElementById('root'));




//lo importante de este ejercicio, es ver la diferencias de como emparejar una funcion para que 
//se ejecute cuando un evento suceda sobre un elemento


import React, {useState} from 'react';
import { render} from 'react-dom';

const Saludo = ()=>{
    const [name, setName] = useState("");
    return(
        <div>
            <input type="text" onChange={ (ev)=> setName(ev.target.value) } ></input>
            <p>Hola {name} </p>
        </div>
    )
}


const App = ()=>{
    return <div><Saludo/></div>;
}

render(<App />, document.getElementById('root'));
