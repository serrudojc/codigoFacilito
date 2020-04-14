
import React from 'react';
import { render } from 'react-dom';

function SaludarEnIdiomas({idioma}){
    if(idioma === 'es') return <span>Hola</span>;
    if(idioma === 'en') return <span>Hello</span>;
}

const Saludo = ()=>{
    const nombre = 'Juan Carlos';
    return <p><SaludarEnIdiomas idioma="en"></SaludarEnIdiomas> {`${nombre}` } </p>;
}

const App = ()=>{
    return <h1> <Saludo></Saludo></h1>;
}

render(<App />, document.getElementById('root'));





import React from 'react';
import { render } from 'react-dom';


const Saludo = ()=>{
    const nombre = 'Juan Carlos';
    const idioma = 'es';
    return (
        <div>
            {
                idioma === 'es' && <p>Hola</p>
            }
            {
                idioma === 'en' && <p>Hello</p>
            }
        </div>
    )
}

const App = ()=>{
    return <h1> <Saludo></Saludo></h1>;
}

render(<App />, document.getElementById('root'));





import React from 'react';
import { render } from 'react-dom';


const Saludo = ()=>{
    const nombre = 'Juan Carlos';
    const idioma = 'es';
    return (
        <div>
            {
                idioma === 'en' ? <p>Hello</p> : <p>Hola</p>
            }
        </div>
    )
}

const App = ()=>{
    return <h1> <Saludo></Saludo></h1>;
}

render(<App />, document.getElementById('root'));





import React from 'react';
import { render } from 'react-dom';


const Saludo = ()=>{
    const nombre = 'Juan Carlos';
    const idioma = 'es';
    if(idioma ==='es'){
        return <p>Hola</p>
    }else if (idioma === 'en'){
        return <p>Hello</p>
    }
}

const App = ()=>{
    return <h1> <Saludo></Saludo></h1>;
}

render(<App />, document.getElementById('root'));