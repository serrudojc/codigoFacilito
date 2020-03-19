//Modulos en JS
/*
Son archivos que nos permiten compartir elememtos de codigo con otros modulos.
Es compartir variables, clases, funciones, etc, entre archivos de JS
Es una estrategia de dividir el codigo (modulo) de forma que sean reemplazable y 
removibles.

*/


//Por que son importantes los modulos?
/*
Separar codigo en elementos independientes.
Los modulo no usan el scope global, usan un module scope, para evitar
modificar elementos que se esten usando en archivos.
*/



//Trabajando con modulos
/*
creo dos archivos modulo_base.js y modulo_dos.mjs
Un modulo se distingue de un archivo de js tradicional, pq o bien exporta o importa 
*/


//modulo_dos.mjs
//agregando la palabra reservada export, indico que el elemento va ser utilizado
//en otro archivo. Este cambio transforma el archivo en un modulo de javascript
//ahora name es el identificador del valor 'Uriel.
export const name = 'Uriel';



//modulo_base.js
// un import se compone de dos elementos: 
// Elementos que vamos a importar, dentro de llaves y separados por comas
// Tmb contiene module specifier, q indica en que archivo se ubica lo q se va exportar
//Necesito un punto de entrada para qu funcione.

import {name} from './modulo_dos.mjs'
console.log(name);

//para apoyarnos, usamos un index.html
<body>
    <script src='.modulo_base.js' type="module">
    </script>    
</body>

/*
ejecutamos nuestro archivo con xammp o node-static 
ejecuto el comando static en la carpetadel proyecto
*/







//Valores por defecto
/*
Un mismo modulo puede exportar multiples valores por nombre, pero solo 
puede exportar uno por default
*/

//modulo_dos.mjs
//puede tener muchos export con nombre pero...
export const name = 'Uriel';
let valorPorDefecto = 20;

//...solo puede tener un valor por defautl
export default valorPorDefecto;


//modulo_base.js
//no colocamos llaves al nombre con que importamos el valor
import def from './modulo_dos.mjs'

console.log(def);




//Si queremos importar varias variables

//modulo_dos.mjs
export const name = 'Uriel';
export const edad = 25;
let valorPorDefecto = 20;

export default valorPorDefecto;



//modulo_base.js
import def,{name, edad} from './modulo_dos.mjs'

console.log(def, name);



//ReadOnly imports
/*
Caracteristica de elementos que no se pueden modificar, que se lean nda mas.
No podemos modificar los valores que importamos de otro modulo

esto no se ve:
export let name = 'Uriel';

Solo se pueden modificar desde el modulo donde se estan declarando.
*/
