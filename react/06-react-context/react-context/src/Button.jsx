import React from 'react';
import { useContext } from 'react';
import {ThemeContext} from './App.js'

//usamos el hook useContext para acceder al contexto
//en una app de React, puedo tener multiples contextos, para eso, le decimos a useContext el contexto que 
// estamos buscando accder, pasando el resultado de la React.createContext, para que enlaze la variable con
//el componente. Importamos  la variable ThemeContext
export default (props) => {
    const context = useContext(ThemeContext);
    console.log(context);
    return(
        <button
            style={{
                backgroundColor: context.backgroundColor,
                color: context.color
            }}
        >
            Click me!
        </button>
    )
}

