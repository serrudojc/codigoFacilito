import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';


const Form = ()=> {
    let [title, setTitle] = useState("");   
    let[body, setBody] = useState("");

    const sendForm = (ev)=>{
        ev.preventDefault();    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => {
              setTitle("");
              setBody("");
              console.log(json)
            })    
        }

    return(
        <form onSubmit ={ (ev)=> sendForm(ev) }>
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" value={title} id="title" onChange={ (ev)=> setTitle(ev.target.value)}></input>
            </div>
            <div>
                <label htmlFor="body">Publicacion</label>
                <textarea id="body" value={body} onChange={ (ev)=> setBody(ev.target.value)}></textarea>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}

//componente que oculta y muestra el Formulario
const Accordion = ()=>{
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={ ()=>setShow(true) }>Mostrar Formulario</button>
            { show && <Form/>}
        </div>
    )
}

const App = ()=> {
    return <div><Accordion/></div>;
}

render(<App/>, document.getElementById('root'));




//Ahora, al hacer click en Mostrar Formulario, el foco del curso el tab debe cambiar al formulario mismo.
//PAra hacer eso, De alguna forma el formulario tiene q saber si está visible o no. Eso lo hacemos con props
//, si esta visible o no, para cuando este visible, ubique el foco en el primer elemento del formulario.
import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';

//const Form = ( props)=> {
const Form = ( {showed} )=> {
    let [title, setTitle] = useState("");   
    let[body, setBody] = useState("");

    useEffect(()=>{
        //actualizar el dom es un efecto secundario.
        //actualizar el dom es mandar el foco al primer control
        //vamos a imprimir el nodo del DOM q podriamos modificar
        console.log(":)");
    },[showed]) //aca pedimos que useEffect sólo se ejecute cuando showed cambie.
    const sendForm = (ev)=>{
        ev.preventDefault();    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => {
              setTitle("");
              setBody("");
              console.log(json)
            })    
        }

    return(
        <form onSubmit ={ (ev)=> sendForm(ev) }>
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" value={title} id="title" onChange={ (ev)=> setTitle(ev.target.value)}></input>
            </div>
            <div>
                <label htmlFor="body">Publicacion</label>
                <textarea id="body" value={body} onChange={ (ev)=> setBody(ev.target.value)}></textarea>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}

const Accordion = ()=>{
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={ ()=>setShow(true) }>Mostrar Formulario</button>
            { show && <Form showed= {show} />}
        </div>
    )
}

const App = ()=> {
    return <div><Accordion/></div>;
}

render(<App/>, document.getElementById('root'));









//ahora viene la parte interesante:
//Si vamos a manipular directamente el DOM, primero debemos hacerlo con desde un efecto con useEffect
//segundo, para obtener una referencia al elemento del DOM que queramos usamos useRef
//tercero, el nodo del DOM q queremos está en la propiedad current del objeto q retorna useRef()
import React, {useState, useEffect, useRef} from 'react';
import { render } from 'react-dom';

const Form = ( {showed} )=> {
    let [title, setTitle] = useState("");   
    let[body, setBody] = useState("");

    //usamos el hook useRef para guardar en una variable una referencia al elemento del DOM
    //useRef retorna un objeto mutable, pero su uso mas comun es recibir un objeto del DOM
    const firstInput = useRef();

    useEffect(()=>{
        //actualizar el DOM
        if(showed){
            //si el form se está mostrando, mandamos el foco al primer control q tengamos
            console.log(firstInput);
            firstInput.current.focus();
        }
    },[showed]) 
    const sendForm = (ev)=>{
        ev.preventDefault();    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: body,
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => {
              setTitle("");
              setBody("");
              console.log(json)
            })    
        }

    return(
        <form onSubmit ={ (ev)=> sendForm(ev) }>
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" value={title} id="title" onChange={ (ev)=> setTitle(ev.target.value)} ref={firstInput}></input>
            </div>
            <div>
                <label htmlFor="body">Publicacion</label>
                <textarea id="body" value={body} onChange={ (ev)=> setBody(ev.target.value)}></textarea>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}

const Accordion = ()=>{
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={ ()=>setShow(true) }>Mostrar Formulario</button>
            { show && <Form showed= {show} />}
        </div>
    )
}

const App = ()=> {
    return <div><Accordion/></div>;
}

render(<App/>, document.getElementById('root'));