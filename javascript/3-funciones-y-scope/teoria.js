//Declaracion de funciones

/*
function saluda{
    algo;
}

function(){
    funcion anonima;
}
*/
/*
function saluda(){
    console.log("hola dev");
}
saluda();

function cuadrado(numero){
    return numero*numero;
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);
console.log(cuadrado(4));
*/

//********************************* */
//Scope
/*
Alcance: Es una coleccion de variables, fuciones y objetos que estan
al alcance.
Disponible en todo el codigo (seria el global scope)
No es recomendable esto. Principio de Menor Acceso, limitar el alcance
De esta forma, sen caso de problemas, voy a saber de donde viene el error.

local scope
Ocurre al definir una funcion, el ciclo de vida de la variable
está dentro de la funcion.

Si al declarar una variable sin var, let o const, esta se va asignar
al scope global. No es recomendable.
*/

//********************************* */
//uso de var, const y let
/*
function mayor_de_edad(edad){
    if(edad >= 18){
        var resultado = "Eres mayor de edad";
    }else{
        var resultado = "Eres menor de edad";
    }
    console.log(resultado);
}
mayor_de_edad();


function mayor_de_edad(edad){
    if(edad >= 18){
        let resultado = "Eres mayor de edad";
    }else{
        let resultado = "Eres menor de edad";
    }
    console.log(resultado);
}
mayor_de_edad();
*/
/*
var 
aunque la variable fue declarada dentro de una condicion, tmb
le pertenece al scope local de la funcion.
TIENE ALCANCE DENTRO DE LA FUNCION MAS PROXIMA

let/const
Si ejecutamos, tenemos un error. el resultado no existe fuera del
bloque de condicion.
TIENEN ALCANCE DENTRO DEL BLOQUE MAS PROXIMO
Si la declaro dentro de la funcion, entonces si va estar asignada 
en el alcance local de la funcion, y por lo tanto dentro de los posibles 
bloques de ciclos

Cuando usar uno u otro?
var si quiero que la variable que estoy usando dentro de una condicion 
quiero que se añada al scope local y esté disponible dentro de la
 funcion

let, por defecto uso esto.

*/
//********************************* */
//Argumentos a funciones

/*
argumentos: el valor que se envia a la funcion. 
parametros: la variable que colocamos en la definicion de la fx
LOS ARGUMENTOS LLENAN LOS PARAMETROS
*/
/*
function cuadrado(numero){
    return numero*numero;
}
cuadrado(2);
*/
/*
Los parametros no tienen tipo. Pueden recibir cualquier argumento.
No se revisa la cantidad de paramtros enviados.
objeto arguments
*/
/*
function sumaTodos(){
    return arguments[0]+arguments[1];
}
console.log(sumaTodos(1,2));
*/
//sumaTodos no tiene especificado cuantos paramtros recibe. uso el objeto
//arguments para almacenarlos.

//********************************* */
//funciones anonimas
/*
Ciudadano de primera clase= un tipo de dato puede ser asignado a una 
variable, retornado o enviado como un argumento.

En JS las funciones son ciudadanos de primera clase = pueden 
guardarse en variables, enviar como argumentos, pueden retornar
otras funciones.
*/
/*
function executor(funcion){
    funcion();
}
function decirHola(){
    console.log("Hola");
}
executor(decirHola);
*/

/*IMPORTANTE
al enviar la funcion decirHola no colocamos parentesis, los () son 
para ejecutarla funcion y no forman parte del nombre de la funcion.
*/

//una mejora de lo anterior:
/*
executor(function(){
    console.log("hola");
});
*/
//Es comun si una funcion se envia como argumento a otra, la 
//declaremos como parte de la ejecucion de la funcion, como 
//dicha funcion no va ser usada en otro lado, no vale la pena
//declarar un nombre.


//********************************* */
//contexto
/*
variable especial: this
representa al objeto cuyo codigo se esta ejecutando en ese momento.
El valor de this cambia dependiendo de en q parte del codigo estamos.
Al valor qe se le asigna a this, se conoce como contexto, q es flexible y dinamico
*/

//vamos a obtener el valor de this en el scope global
//console.log(this);

//si nos movemos al scope local? (ej, evaluamos this en una funcion)
/*
function demo(){
    console.log(this);
}
demo();
*/

//vamos a insertar la funcion dentro de un objeto.
/*
let objeto = {
    demo: function(){
        console.log(this);
    }
}
objeto.demo();
*/
//ahora el valor de this es el objeto que acabamos de crear.


/*
let objeto = {
    demo: function(){
        console.log(this);
    }
}
objeto.demo();

let executor = {
    execute: function(f){ f();}
}
executor.execute(objeto.demo);
*/
//el valor de this vuelve a cambiar al objeto global. 


//ahora vamos a guardar como propiedad de un objeto la funcion que pertenece
//a otro objeto distinto
/*
let objeto = {
    demo: function(){
        console.log(this);
    }
}
objeto.demo();

let executor = {
    funcion: null;
    execute: function(f){
        this.funcion = f;
        this.funcion();
    }
}
executor.execute(objeto.demo);
*/

/*
LO IMPORTANTE ES RECORDAR QUE CUANDO UNA FUNCION SE EJECUTA, EL VALOR 
DE this ES AQUEL DEL OBJETO QUE INVOCÓ LA FUNCION. NO IMPORTA DE DONDE
HAYA VENIDO NI DONDE HAYA ESTADO ANTES LA FUNCION, EL CONTEXTO ES EL 
OBJETO QUE MANDA LLAMAR A LA FUNCION
*/

//********************************* */
//arrow functions
/*
let demo = ()=>{
    console.log("hola mundo");
}

let hola = ()=>{}
*/
//las llaves se pueden omitir sólo cuando la funcion tiene una sola linea
//let saludar = ()=> console.log("hola mundo");

//no hace falta return, va retornar la unica linea del cuerpo
//suma = (a,b)=> a + b;


//********************************* */
//arrow functions y contexto

/*
Las arrow function cumplen con dos ppales caracteristicas:
Tienen una sintaxis mas corta que la declaracion con function
No modifican el valor de this
*/
/*
let tutor = {
    nombre: "Uriel",
    apellido: "hernandez",
    nombreCompleto: function(){
        setTimeout(function(){
            console.log(this.nombre + " "+ this.apellido)
        }, 1000);
    }
}
tutor.nombreCompleto();
*/
/*
las propiedades nombre y apellido reciben un valor no definido pq
el contexto se cambió dentro de la ejecucion de la funcion setTimeOut.
Aqui podemos aprovechar la segunda caracterisicas, no hace bind de this, 
es decir no lo modifica, entonces:
*/
/*
let tutor = {
    nombre: "Uriel",
    apellido: "hernandez",
    nombreCompleto: function(){
        setTimeout(()=>{
            console.log(this.nombre + " "+ this.apellido)
        }, 1000);
    }
}
tutor.nombreCompleto();
*/
/*Consejo: cada vez que enviemos una funcion como argumento a otra funcion 
y queramos conservar el valor de this, utilicemos siempre la sintaxis de flecha
del ejemplo anterior
*/

//********************************* */
//call apply y bind
/*
JS ofrece metodos para deliberadamente asignar el valor que nosotros
queramos para la variable this (contexto)

1-Los que ejecutan la funcion de manera inmediata. Call, apply
*/

/*
function executor(funcion){
    funcion();
}
let tutor = {
    nombre: "Uriel",
    apellido: "hernandez",
    nombreCompleto: function(){
        console.log(this.nombre + " " + this.apellido);
    }
}
executor(tutor.nombreCompleto);
*/
/*executor recibe como argumento una funcion y la ejecuta.
El objeto tutor.
cuando mando ejecutar con el executor la funcion nombreCompleto de mi objeto.
Nos da undefined, es pq cuando llegamos al cuerpo de la funcion executor
el valor de this se reasignó y por lo tanto no tiene ninguna propiedad nombre y apellido

Lo que podemos hacer es call para asignar el valor de this correspondiente
a la ejecucion de la funcion.
Necesitamos que nombreCompleto sea function y no fat arrow, pq fat arrow no 
reasigna el contexto y nosotros queremos reasignar el contexto con un dato que
nosotros vamos a definir

Va funcionar, pq para el momento q nombreCompleto se manda a llamar dentro de executor, 
ya le asignamos el valor adecuado.
*/
/*
function executor(funcion){
    //ejecutamos metodo call de las funciones
    funcion.call(tutor);
}
let tutor = {
    nombre: "Uriel",
    apellido: "hernandez",
    nombreCompleto: function(){
        console.log(this.nombre + " " + this.apellido);
    }
}
executor(tutor.nombreCompleto);
*/


//Adicionalmente call puede seguir recibiendo valores que luego se van enviar argumentos a la funcion
/*
function executor(funcion){
    //ejecutamos metodo call de las funciones
    funcion.call(tutor);
}
let tutor = {
    nombre: "Uriel",
    apellido: "hernandez",
    nombreCompleto: function(){
        console.log(this.nombre + " " + this.apellido);
    }
}
executor(tutor.nombreCompleto);

function saluda(nombre){console.log("hola "+nombre);}
saluda.call(window, "uriel");
*/
//todos los argumentos que enviamos a call despues del primero, se envian como argumentos



//2-Los que construyen una funcion que puede ejecutarse despues. Bind

//no manda llamar a la funcion
/*
function executor(funcion){
    //ejecutamos metodo call de las funciones
    funcion();
}
let tutor = {
    nombre: "Uriel",
    apellido: "hernandez",
    nombreCompleto: function(){
        console.log(this.nombre + " " + this.apellido);
    }
}
executor(tutor.nombreCompleto.bind(tutor));
*/
/*
La funcion que le estamos enviando como argumento al executor, es una funcion especial
que tiene definido quien será this de antemano. No importa el contexto en el que 
eventualmente se use la funcion, ya tiene predefinido quien va ser this, quien sera
su contexto y nada lo va cambiar
*/


