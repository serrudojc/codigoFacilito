import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div>
      <Form/>
    </div>
  );
}

export default App;

/**
 * Formulario a multiples pasos.
 * 
 * Creamos un nuevo componente llamado Forms.jsx
 * Exportamos un formulario ahi.
 * 
 * En muchas ocasiones cuando creamos un form a varios pasos (primero tu correo, luego tus intereses, etc) a veces
 * necesitamos compartir la info entre todos los pasos, este es otro buen ejemplo para el api de Context de React
 * 
 * 
 */