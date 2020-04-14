import React, {useState} from 'react';
import Maininfo from './Maininfo';
import Skills from './Skills';

//como vamos a compartir la infomacion de cada uno de estos pasos entre ellos y con el componente, necesitamos
//un contexto.
export const FormContext = React.createContext();
//creamos el contexto y todos los que vayan a compartir info, tienen q estar dentro del componentte Provider y 
//la informacion inicial y q van a compartir dentro de value.
//Como voy a estar actualizar, debe ser un state.
export default (props)=> {

    const [email, setEmail] = useState("blablabla@gmail.com");
    const [password, setPassword] = useState("");
    const [likes, setLikes] = useState("");

    return(
        <form>
            <FormContext.Provider value={ {email,password,likes,setEmail,setPassword,setLikes} }>
                <Maininfo/>
                <Skills/>
            </FormContext.Provider>
            <div>
                <p>Contraseña:</p>
                <p>Email: {email} </p>
                <p>Lenguajes: {likes} </p>
            </div>
        </form>
    )
}