import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Surprise from './Surprise';
import hello from './hello';  //import tradicional, carga todo al ppio

function App() {
  const[showSurprise, setShowSurprise] = useState(false);

  useEffect(()=>{
    //import("./hello").then(mod => mod.default()); //import dinamico, carga cuando llamamos
  },[]);

  return (
    <div>
      <button onClick={ (ev) => setShowSurprise(true) }>mostrar sorpresa</button>
      {
        showSurprise && <Surprise/>
      }
    </div>
  );
}

export default App;
