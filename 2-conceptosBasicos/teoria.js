
//*************************************
/*
Como es JS técnicamente

Es un lenguaje interpretado. Hay otro programa "interprete" que lee linea por linea el 
codigo en tiempo de ejecucion.
Si tengo un error en alguna linea, nunca se sabrá hasta que el interprete llegue a esa linea.
Beneficio: no hace falta compilar.

Debilmente y dinamicamente tipado:

let edad = 24:

tipado dinamico: el interprete va asignar el tipo de forma dinamica.
tipado debil: el compilador o interprete no evalua el tipo de dato hasta que el programa
llegue al punto de ejecucion.

case sensitive: distigue entre mayusculas y minusculas
*/
//****************************************
/*
variables y constantes
variable: direccion en memoria a la que accedo por un identificador. Cambia el valor.

let nombre = "uriel";

var apellido = "hernandez";

const PI = 3.1416;

*/
//------------------------------------------
/*
Numeros y Operaciones

Math es una libreria/biblioteca (codigo que alguien escribió para facilitar)
Math.PI;
Math.pow(10,2);
Math.round(6.5);
Math.sqrt(4);
*/
//Booleanos
/*
let booleano = new Boolean(1);
console.log(booleano.toString());

let booleano2 = new Boolean(0);
console.log(booleano2.toString());

let booleano3 = new Boolean("");//false
console.log(booleano3.toString());
*/
/*
undefined
Nan
null
0
-0
""
false
Estos valores me dan su version booleana como false.

//operadores de comparacion y Logicos

24 == "24"  //true, ingnora el tipo de dato
24 === "24" //false

|| or, una vez que encuentre un verdadero, ya no le importa el resto
*/

//******************************************************** */