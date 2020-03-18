//que es programacion asincrona
/*
Js es un lenguaje de programacion asincrono. Algunas operaciones que tardan en ejecutarse
pasan a segundo plano.

event loop
cuando quiero que una operacion se ejecute de forma asincrona, se lo hago saber al interprete
y le enviamos una funcion que deberá ejecutar cuando la operacion termine.

event loop (encargado)
el repartidor deja una nota de entregado en la mesa (cola de mensajes)
Cada vez q leo las notas, doy por terminado el pedido.
*/


//CallBacks
/*
Estrategia para aprovechar la naturaleza asincrona.
Es una funcion que se pasa como argumento a una operacion asincrona, para que sea ejecutada una 
vez q se terminó de ejecutar.

Para simular una operacion que tarda mucho, vamos a simular una peticion a Google.
En lugar de implementar codigo, vamos a instalar una libreria request
Vamos desde la terminal, a la carpeta del proyecto e instalamos la libreria desde npm
npm install request

//importamos la libreria usando require
const request = require('request);

//queremos hacer solicitu a google, y como segundo argumento pasamos un callback
request('http://google.com',function(){
    //va dejar este mensaje en la cola de mensajes, una vez terminada la peticion
    console.log('Terminé la peticion de Google');
});
console.log("yo voy despues, en el codigo, de la peticion a Google");

hay un delay en el request, voy a seguir con el programa mientras sigo.
*/




//Promesas
/*
Los callbacks tienen defectos. Uno de ellos es cuando tenemos que esperar varias acciones
asincronas antes de pasar a una nueva accion.
Callback hell, convierte el codigo en una forma muy complicada.

Las promesas son una alternativa para mejorar procesos asincronos dentro de JS , usan una sintaxis
mas clara y por diseño existen maneras para esperar un conjunto de procesos asincronos antes de
ejecutar alguna accion.
*/

//intalamos una nueva libreria, npm install request-promise
//instalamos la libreria request: npm install request
const rp = require('request-promise');

//promise
rp('http://google.com')
    .then(function(html){
        consolo.log('Terminé la peticion de Google');
    }).catch(function(err){
        console.log(err);
    })
/*
Diferencias con callback
1- no estamos enviando ninguna funcion como argumento, pq ya no usamos callback
2- Sobre le ejecucion de rp, o sea, el resultado de rp estamos mandando llamar un metodo
then, esto quiere decir que el resultado de ejecutar la funcion rp es un objeto del tpo promise
3-a diferencia de callback, las promesas si son objetos 
4-el objeto de la promesa tiene un metodo then al cual le enviamos una funtion. Esta funcion 
se ejecutará si la promesa se ejecutó sin errores.
5-Existe un metodo catch al que tmb le podemos enviar una funcion que se ejecutará si la 
promesa falla
6-Una prmesa es un objeto que probablemente produzca un valor en el futuro. Resultado de una 
operacion asincrona o un error.
7-Las promesas pueden estar en los siguientes estados:
fullfiled: completado.
rejected: la promesa no se cumplió con exito
pending: la promsa no terminó
setled: la promesa terminó con exito o error
*/



//Crear mis propias promesas
/*
UNa promesa representa un valor que eventualmente existirá, que puede ser el resultado de 
una operacion o un error que haya rechazado la promesa.
Esto permite que metodos asincronos retornen resultados como si fuesen sincronos. En lugar 
de retornar el valor de una operacion la operacion asincrona retorna una promesa de q
el valor se entregará en algun punto mas adelante

El contrucctor Promise nos permite generar promesas nuevas. 
Para crear una promesa, debemos pasar al constructor una funcion llamada executor.
El executor recibe dos argumentos: resolve y reject.
Estas funciones resuelven o rechazan una promesa.

La primera funcion resolve se debe llamar cuando la operacion asincrona terminó y fue exitosa.
Recibe como argumento el resultado que queremos enviar de la peticion asincrona que acaba de 
terminar. esta funcion marca la promesa como fullfiled o terminado.

La funcion reject marca la promesa como rejected o rechazada. Debe mandarse a llamar cuando hubo
un error en la operacion asincrona y queremos hacer saber que la promesa no se cumplió.
La funcion debe recibir como argumento un error o una razon de pq no pudo completarse la promesa.

function asincrono(){
    return new Promise(function(resolve, reject){
        resolve('Todo salió bien');
        
        reject(new Error('No se pudo completar'));
    });
}
*/


/*
la funcion asincrona es request, le pasamos la url para que lea.
Request usa callbacks, le enviaremos una funcion para saber cuando terminó, 
tiene dos argumentos: error en caso de q algo haya salido mal en la operacion asincrona y 
la respuesta del servidor en caso de qe se leyó la pagina de forma exitosa.
Cuando trabajamos con callbacks, las librerias pasan como primer argumento el error
y como segundo argumento el resultado.

Vamos a usar los resultados del callback para marcar la promesa como resuelta o rechazada
Si hubo un error, vamos a rechazar la promesa.
Si no hubo error, resolvemos/marcamos como resuelta la promesa con el valor de la promesa misma.

vamos a usar el metodo leer la url, como el metodo asincrono retorna una promesa, tiene un 
metodo then al que le vmos a pasar una funcion para obtener el valor de la promesa y un 
metodo catch al que le pasamos otra funcion que recibe la razaon de un posible error dentro de 
la ejecucion asincrona.
*/
/*
const request = require('request');

//funcion que retorna una promesa
function leer(url){
    return new Promise(function(resolve, reject){
        //aqui se debe ejecutar la funcion asincrona
        request(url, function(err,response){
            if(err){
                reject(err);
            }else{
                resolve(response);
            }
        });
    });
}
leer('http://codigofacilito.com')
    .then(function(response){
        console.log(response);
    })
    .catch(function(err){
        console.log(err);
    });
*/






//Resolver multiples promesas Promises.all
/*
metodo estayico all dentro de promesas.

Primero creamos un par de promesas. Despues de 500 ms se resuelva la promesa con "hola mundo".
El codigo simula dos operacions asicronas distintas, estamos solicitando a setTimeOut que 
mande llamar a resolve despues de 500 ms, el tercer argumento es el q se enviará a resolve
como valor resultado de la promesa
*/
/*
let p1 = new Promise((resolve, reject)=>setTimeout(resolve,500."hola mundo"));

let p2 = new Promise((resolve, reject)=>setTimeout(resolve,600."segunda hola mundo"));

p1.then(console.log);
*/



//Vamos agregar una tercer funcion saluda
//Supongamos que saluda se ejecuta luego de p1 y p2
/*
let p1 = new Promise((resolve, reject)=>setTimeout(resolve,500."hola mundo"));

let p2 = new Promise((resolve, reject)=>setTimeout(resolve,600."segunda hola mundo"));

let saluda = ()=> console.log("hola a todos");

p1.then(console.log);

//esto funciona, pero es callback hell, funciones dentro de funciones.
p1.then(function(){
    p2.then(function(){
        saluda();
    })
})

//evitamos el callback hell, usando Promise.all
//pasamos como argumento todas las promesas que espramos que se resuelvan.
//despues, recibimos los resultados de ambas promesas.
Promise.all([p1,p2]).then(resultados=>{
    console.log(resultados);
    saluda();
})
*/
/*
Promise.all recibe como argumento un iterable. Ya sea una arreglo, una cadena, arreglo de promesas.
El metodo genera una nueva promesa hasta que todas las promesas hayam sido resuelta o falla
si falló una promesa.
El resultado de la promesa generada, en esta caso la variable resultados, es un arreglo que 
contiene todos los resultados que entregaran las promesas que estamos esperando.
*/
/*
let p1 = new Promise((resolve, reject)=>setTimeout(resolve,500."hola mundo"));
let p2 = new Promise((resolve, reject)=>setTimeout(resolve,600."segunda hola mundo"));
//con el metodo reject estatico, construimos una promesa con el estado rechazada.
let p3 = Promise.reject();

let saluda = ()=> console.log("hola a todos");

Promise.all([p1,p2,p3]).then(resultados=>{
    console.log(resultados);
    saluda();
}).catch(()=>console.log('fallé'));
*/

/*
Ejemplo: plataforma web, para mostrar una vista necesito 3 o 4 consultas a la DB, cada 
una de ellas ejecutandose asincronamente.
*/







//Encadenar promesas
/*
Resolver promesas en conjunto puede ser util para los casos para operaciones asincronas que
sean independiente esntre si.

Pero hay casos en los que antes de iniciar una operacion asincrona, necesitamos el valor 
de otra operacion anterior. Ej: login, antes de mostrar contenido.

Encadenamos promesas:
Creamos una funcion calcular y creamos una promesa q se resuelve con setTimeOut
Creamos una segunda promesa,pero que necesita el resultado de la primer promesa.

Ambas funciones retornan una promesa. Esto nos permite hacer calcular().then.then

Primero ejecutamos la funcion calcular que retornó la primera promesa, que se resolvió en 400ms 
y retornó 5.
sobre dicha promesa ejecutamos el metodo then al que enviarmos como argumento el segundoCalculo.
Cuando la primer promesa se resuelve, segundoCalculo se ejecutará y recibirá como argumento el resuletado
de la primer promesa.
Una vez que segundoCalculo termina, retornará una nueva promesa, la usamos encadenando un
nuevo metodo then, enviando como callback la funcion console.log.

*/
/*
function calcular(){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, 400, 5);
    })
}

function segundoCalculo(numero){
    console.log(numero);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,"segunda promesa");
    })
}
calcular().then(segundoCalculo).then(console.log);

//tener en cuenta que las funciones no se pasan con parentesis, pq no las estamos ejecutando, 
//las estamos enviando.

*/

///resumen