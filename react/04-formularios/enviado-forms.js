//Enviado formularios
//Debemos procurar que nuestro trabajo con la libreria no rompa HTML:
// <button onClick={()=> {/* ENVIAR FORM */} }>Enviar</button>   
// o por ejemplo, no poner etiquetas de form a un formulario

import React, {useState} from 'react';
import { render } from 'react-dom';


const Form = ()=> {
    let [title, setTitle] = useState("");   
    let[body, setBody] = useState("");

    //funcion que le hago peticion ajax
    const sendForm = ()=>{
        console.log("HOla");
    }
    return(
        <form onSubmit ={ ()=> sendForm() }>
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" onChange={ (ev)=> setTitle(ev.target.value)}></input>
            </div>
            <div>
                <label htmlFor="body">Publicacion</label>
                <textarea id="body" onChange={ (ev)=> setBody(ev.target.value)}></textarea>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}


const App = ()=> {
    return <div><Form/></div>;
}

render(<App/>, document.getElementById('root'));






//Copiamos y pegamos Create Resource de:
//https://jsonplaceholder.typicode.com/guide.html
import React, {useState} from 'react';
import { render } from 'react-dom';


const Form = ()=> {
    let [title, setTitle] = useState("");   
    let[body, setBody] = useState("");

    const sendForm = (ev)=>{
        ev.preventDefault();    //recibo la instancia con info del evento, para evitar que el form se envie
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
          .then(json => console.log(json))    
        }

    return(
        <form onSubmit ={ (ev)=> sendForm(ev) }>
            <div>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" onChange={ (ev)=> setTitle(ev.target.value)}></input>
            </div>
            <div>
                <label htmlFor="body">Publicacion</label>
                <textarea id="body" onChange={ (ev)=> setBody(ev.target.value)}></textarea>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}


const App = ()=> {
    return <div><Form/></div>;
}

render(<App/>, document.getElementById('root'));

//Hace la peticion hacia JSONPlaceholder, y lo sabemos pq la respuesta es el mismo objeto que enviamos.




//otra cosa que podemos hacer:
import React, {useState} from 'react';
import { render } from 'react-dom';


const Form = ()=> {
    let [title, setTitle] = useState("");   
    let[body, setBody] = useState("");

    const sendForm = (ev)=>{
        ev.preventDefault();    //recibo la instancia con info del evento, para evitar que el form se envie
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
          //otra cosa q podemos hacer es cuando nos respondan, limpiemos los controles a valores vacios
          .then(json => {
              setTitle("");
              setBody("");
              console.log(json)
            })    
        }

        //acordarse de sincronizar los valores de los controles, con los del estado. value={title}
        //esto permite q cuando actualizamos las variables desde alguna parte del componente, al actualizar
        //su valor tmb se vea reflejado en los controles.
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

const App = ()=> {
    return <div><Form/></div>;
}

render(<App/>, document.getElementById('root'));