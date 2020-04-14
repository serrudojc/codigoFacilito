/**
 * Que es Code Splitting
 * 
 * Reducir tamaño del codigo de JS, dividir el code y enviarlo por partes. 
 * Solo enviamos codigo q necesitamos y evitarmos enviar codigo que no se use.
 */

import App from "./code-splitting/src/App";

//practica
/**
 *  Vamos a usar utilizar create react app para hacerlo localmente
 * 
 * node.js + npm =
 * npx create-react-app nombre-proyecto
 * cd nombre-proyecto
 * npm start
 * 
 * 
 * En una app de JS tenemos mucho codigo. Cuando el usuario por primera vez entra a una pagina web, 
 * no necesita todo el codigo de JS, solamente descargamos lo que necesitamos.
 * 
 * con Code-splitting dividimos el codigo en vistas o estados.
 * 
 * 
 * Creamos un componente Sorpresa.js y va estar oculto y sin descargar hasta el momento de usarlo.
 * 
 * 
 * //IMPORTS DINAMICOS
 * hello.js
 * Dos formas de importar, la tradiional y la dinamica.
 * 
 * 
 * 
 * 
 * 
 * //REACT LAZY Y SUSPENSE
 * Hasta ahora vimos code splitting para una funcion, ahora vemos para un componente
 * 
 * Ojo, hay que poner el componente entre <Suspense></Suspense> pq si no, la interfaz va tratar de buscar
 * el componente que está en Lazy.
 * el tag Fallback para el suspense, es un mensaje miestras se carga, por ejemplo "cargando...."
 */

 //App.js

import React, {useState, useEffect, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';

const Surprise = React.lazy( ()=> import('./Surprise') );

function App() {
  const[showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <button onClick={ (ev) => setShowSurprise(true) }>mostrar sorpresa</button>
      {
        showSurprise && <Suspense fallback={ <p>Cargando...</p> }> <Surprise/> </Suspense>
      }
    </div>
  );
}

export default App;


//Surprise.js
import React from 'react';

export default (props) => {
    return(
        <div>
            <p>Sorpresa !!!!!</p>
        </div>
    )
}

