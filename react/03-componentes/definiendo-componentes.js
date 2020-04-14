import React from 'react';
import { render } from 'react-dom';

/*
function App(){
    return <h1>Hola Mundo</h1>;
}
*/
const App = ()=> <hi>Hola Mundo</hi>    

//espera un componente <App/>
render(<App/>, document.getElementById('root'));


/*Importante que cualquier archivo de JS que defina un componente, importe React.
Internamente JSX requiere de React para transformar la sintaxis de JSX a JS valido.

Alternativamente podemos definir componentes con clases de JS, para eso debemos heredar de la 
clase Component que podemos importar del paquete de React
*/

import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
    //cualquier clase que defina un componente de React debe tener al menos un metodo render q retorne elementos de React
    render(){
        return <h1>hola Mundo</h1>
    }
}

render(<App/>, document.getElementById('root'));