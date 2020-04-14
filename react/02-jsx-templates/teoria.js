/*Primeros pasos en JSX

Como discutimos antes, React no incluye un lenguaje de plantillas como HTML, en cambio, 
las plantillas y los elementos que conforman una vista se escriben usando código de JavaScript.

React expone un método createElement que puedes usar para crear elementos de React 
a usar en una vista. El código que se muestra a continuación, crea un botón con el texto Enviar:
*/
React.createElement(‘button’,{},’Enviar’);

//Puedes usar el segundo argumento para enviar información hacia el elemento button que se crea:

const Btn = ()=>{
  return React.createElement("button",{
    onClick: ()=> alert("Hola")
  },"Enviar");
}

/*Puedes continuar usando createElement para representar tus vistas, sin embargo, encontrarás 
pronto que usar esta función hará que el código de tus vistas se vuelva extremadamente largo 
y verboso, además de difícil de leer y reutilizar.

Para solucionar esto, se introduce JSX. JSX extiende la sintaxis de JavaScript para representar 
vía etiquetas las declaraciones de React.createElement. Internamente, JSX usa la misma función 
para crear elementos, en el exterior, notarás que usar JSX hará tu código más expresivo y simple.

El código del botón que vimos antes, se vería así con JSX */

const Btn ()=>  <button onClick={  ()=> alert(“Hola”) }> Enviar </button>

/* Puedes notar que no colocamos comillas alrededor de la declaración de la etiqueta button, 
esto es porque la sintaxis de JSX no es un string, de nuevo, es JavaScript.

Por último, recuerda que aunque, al igual que HTML, JSX usa los caracteres menor qué y mayor 
qué para represnetar elementos de React, HTML y JSX no son la misma tecnología, JSX nos permite 
embeber expresiones de JavaScript y pasar directamente nuestros datos a la declaración de nuestras vistas.

A lo largo del bloque irás aprendiendo la sintaxis de JSX y sus características principales, continuemos.
*/




//ELEMENTOS DE REACT

/*JSX nos permite definir los elementos de React que aparecerán en la vista.
Los elementos de React no son iguales a los elementos de la interfax o del DOM de HTML. Son una 
representacion virtual q despues se traduce a los elementos nativos de la interfaz, en el caso 
de la web al DOM, en caso de apps nativas a elementos nativos.*/

<Btn></Btn> //elemento de React

/* Un elemento de React es distinto a un componente.
Un componente es una declaracion de la vista con su estado, plantilla y funciones.
Un elemento de React es aquello que retorna un componente en cada actualizacion.*/



//--------------------------------------------------------------------------------------------
//Mostrar componentes

/*Dos partes: 
Como lo mostramos dentro de la interfaz, debe usarse alguna implementacion, paquete q transforme lo 
q está en React a la interfaz. Se hace una sola vez, al montar el componente root/raiz. Como trabajamos 
con la web, ademas hay que importar el paquete que pasa el modelo de la interfaz que esta en react hacia la
implementacion real, q en este caso son elementos HTML, seria el metodo render de react-dom */

//render(componente raiz, donde se tiene q montar el componente)
render(<App />, document.getElementById('root'));

/*si multiples veces se monta el mismo componente sobre el mismo contenedor, la primera vez
se hace el render, y las siguientes solo se actualiza lo necesario.


La otra parte:
Como dentro de un componente yo retorno otro.*/

import React from 'react';
import { render } from 'react-dom';

const Saludo = ()=>{
    return <p>Hola {2+63} </p>;
}

const App = ()=>{
    return <h1> <Saludo></Saludo></h1>; //usamos el componente, primera forma
    //return <h1> <Saludo /></h1>;      //usamos el componente, segunda forma (si no agrego nada dentro)
}

render(<App />, document.getElementById('root'));

/*las etiques html son tmb componentes, pero no definidos por nosotros. Los componentes que definimos
nosotros los comenzamos con mayuscula, para diferenciar*/



//-----------------------------------------------------------------------------------------------
//Expresiones JavaScript en JSX

/** todo lo q esté dentro de llaves, se evalua como JS*/


import React from 'react';
import { render } from 'react-dom';

const Saludo = ()=>{
    const nombre = 'Juan Carlos';
    return <p>Hola {`${nombre}` } </p>;
}

const App = ()=>{
    return <h1> <Saludo></Saludo></h1>;
}

render(<App />, document.getElementById('root'));

//----------------------------------------------------------------------------------------------
//Condiciones
//Ciclos
//Lista
/** */