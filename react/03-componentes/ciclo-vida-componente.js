import React, {useEffect, useState} from 'react';
import { render} from 'react-dom';

const Button = ()=>{
    //Aqui no debe haber efectos secundarios. No debe afectar afuera del componente.
    return <button>Enviar</button>
}

const Button = ()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        //puede haber efectos secundarios
        console.log("Me ejecuté");
    })
    return <button onClick={()=> setCount(count+1)}>Click</button>
}

const App = ()=><Button></Button>

render(<App />, document.getElementById('root'));









// si queremos que la funcion de useEffect SOLO al iniciar el componente:

import React, {useEffect, useState} from 'react';
import { render} from 'react-dom';

const Button = ()=>{
    return <button>Enviar</button>
}

const Button = ()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("Me ejecuté");
    },[]);  //pasamos una lista vacia. Se ejecutará al iniciar el componente y no cuando se actualiza
    return <button onClick={()=> setCount(count+1)}>Click</button>
}

const App = ()=><Button></Button>

render(<App />, document.getElementById('root'));





//si la funcion que pasamos como primer arg, retorna una funcion, esta se ejecutará cuando 
//el componente sea eliminado

import React, {useEffect, useState} from 'react';
import { render} from 'react-dom';

const Button = ()=>{
    return <button>Enviar</button>
}

const Button = ()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{ //funcion q pasamos como primer argumento
        console.log("Me ejecuté");
        return ()=>{    //retorna una funcion
            console.log("Adios");   //solo se ejecutará cuando el componente sea eliminado
        }
    },[]);  
    return <button onClick={()=> setCount(count+1)}>Click</button>
}

//modificamos un poco al Componente APP para q haya un boton q elimine el componente con el q hemos estado trabajando
const App = ()=> {
    const [showButton, setShowButton] = useState(true);
    return(
        <div>
            <button onClick={ ()=> setShowButton(false) } >Eliminar Botón</button>
            <div> {showButton && <Button/>} </div>
        </div>
    )
}

render(<App />, document.getElementById('root'));
