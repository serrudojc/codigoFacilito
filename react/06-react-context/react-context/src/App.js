import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Card from './Card';

const themes = {
  'dark':{
    backgroundColor: 'black',
    color: 'white'
  },
  'light':{
    backgroundColor: 'white',
    color: 'black'
  }
}

//1ro: para usar mi contexto, necesito genrarlo con createContext
//exporto la variable para q la pueda importar Button.jsx
export const ThemeContext = React.createContext();

//2do: NEcesito agrupar todos los componentes que vayan a acceder a la info del contexto en el componente
//Provider q retorna createContext. 
//createContext retorna un objeto con una serie de cosas, entre ellas un componente Provider q está en la 
//propiedad provider. Eso quiere decir q ahora todos los hijo del componenete Button van a compartir la info
//q le asignemos al contexto ThemeContext, esa info la asignamos mediante la prop value={themes}, pasamos los
//datos que queremos compartir, en este caso, pasamos el objeto themes

function App() {
  const [theme, setTheme] = useState(themes.dark);  //Actualizacion: 
  return (
    <div>
      <ThemeContext.Provider value= {theme} >
        <Button/>
        <Card/>
        <button onClick = { ()=> setTheme(themes.light) } >Modo Claro</button>
        <button onClick = { ()=> setTheme(themes.dark) } >Modo Oscuro</button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

//En consola vemos el objeto con las propiedades, eso significa que hemos creado el contexto y todos los hijos 
// del provider lo van accder. A todos aquells que consuman info de Provider se los llama consumidores.
//cada vez que la info del proveedor cambia, es decir value={themes}, todos los consumidores se van actualizar

//este ejemplo son los fundamentos de context
//Podemos crear proveedores a traves de createContext y podemos crear consumidores a traves del uso de 
//useContext.
//un consumidor tiene q aparecer dentro de la jerarquia del proveedor, tiene qestar como hijo del proveedor.
//todos los hijos del proveedor pueden actuar como consumidores, es decir todos pueden acceder a la misma
//informacion


//ACTUALIZAR INFO DEL PROVEEDOR
/**
 * actualizamos el state del componente que esta desplegando el provvedor. En este caso App, entre su render está
 * el proveedor.
 * Pasamos value={theme}
 * Creamos un boton que cambie de modo, que actualice la variable theme.
 * La variable que pasamos al prop value del provider, se actualiza con el uso del estado, y cada vez que lo hace
 * todos los consumidores se actualizan
 * 
 * Para aclara mas, creamos un nuevo componente Card 
 * Y vemos como todos los consumidores se actualizan
 */