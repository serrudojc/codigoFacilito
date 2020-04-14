import React, {useContext} from 'react';
import { FormContext } from './Form';

export default (props)=> {
    const context = useContext(FormContext);

    const addToList = (value, list) => {
        console.log(":0");
        context.setLikes([value].concat(context.likes));
    }

    const removeFromList = (value, list) => context.setLikes(context.likes.filter(v => v !==value))

    return(
        <div>
            <label>
                <input 
                onChange={(ev) => ev.target.checked ? addToList("Ruby") : removeFromList("Ruby")}
                type="checkbox" 
                name="likes[]">
                </input>
                Ruby
            </label>
            <label>
                <input 
                type="checkbox" 
                onChange={(ev) => ev.target.checked ? addToList("JavaScript") : removeFromList("JavaScript")}
                name="likes[]"></input>
                Javascript
            </label>
        </div>
    )
}