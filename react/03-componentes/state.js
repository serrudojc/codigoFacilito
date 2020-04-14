import React from 'react';
import { render} from 'react-dom';

//nuevo componente
const Button = ()=>{
    return (
        //esto es una representacion de la interfaz
        <div>
            <p>Presionando: 0</p>
            <button>Click me!</button>  
        </div>
    )
}

//en el componente raiz sólo pongo este boton
const App = ()=>{
    return <div><Button></Button></div>;
}

render(<App />, document.getElementById('root'));








//En el ejemplo anterio tenemos el esqueleto, ahora cada vez que hagamos click en el boton, debemos
// aumentar el contador. para eso hacemos uso del estado. El estado es lo q se actualiza para que
//React sepa q tiene q actualizar la interfaz.
//

import React, {useState} from 'react';
import { render} from 'react-dom';

const Button = ()=>{
    const[counter, setCounter] = useState(0);   //usamos un hook con valor inicial, antes importarlo de React. Retorna un arreglo con dos datos: variable y funcion para actualizar el estado
    return (
        <div>
            <p>Presionando: { counter}</p>
            <button onClick={ ()=>setCounter(counter+1) }>Click me!</button>  
        </div>
    )
    //al hacer click, tenemos que actualizar la variable y luego avisar a React q actualice el counter.
    //todo esto lo hace setCounter
}

const App = ()=>{
    return <div><Button></Button></div>;
}

render(<App />, document.getElementById('root'));
