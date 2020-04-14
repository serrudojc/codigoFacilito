//leer informacion
//usamos JSON placeholder q es una api rest para pruebas. Podemos crear recursos

//para obtener el valor q la persona escribe en los campos, usamos useState pq  necesitamos un par de variables
//q vayan sincronizando su info con el valor q escribe el usuario.
//Siempre q queramos hacer una variable q pueda modificarse tiene q ser parte del estado del componente
//En un componente funcional el estado se declara a travez del hook useState
import React, {useState} from 'react';
import { render } from 'react-dom';


//creamos un nuevo componente Formulario que va retornar un form
const Form = ()=> {
    let [title, setTitle] = useState("");   //[variable q pueden almacenar info q cambie, metodos para cambiar valores]
    let[body, setBody] = useState("");
    //ahora necesitamos escuchar al evento onChange para q c/vez q cambie el form sincronizemos lo q esta en el campo con la var correspondiente
    //mandamo a llamar a setTitle. 
    //Target es el objeto q disparo el evento (el evento del cambio lo dispara el control input)
    //value hace referencia al valor del control (lo q escribió el usuario)
    return(
        <form>
            <div>
                <label for="title">Titulo {title} </label>
                <input type="text" id="title" onChange={ (ev)=> setTitle(ev.target.value)}></input>
            </div>
            <div>
                <label for="body">Publicacion  {body} </label>
                <textarea id="body" onChange={ (ev)=> setBody(ev.target.value)}></textarea>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}

//muestro dentro de mi App, Form.
const App = ()=> {
    return <div><Form/></div>;
}

render(<App/>, document.getElementById('root'));

//Una vez guardado la informacion q escribe el usuario en el estado del componente, debemos enviarlo