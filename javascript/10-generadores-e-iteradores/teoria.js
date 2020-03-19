//Generadores e iteradores
/*
Colecciones : un tipo comun son los arreglos.
Iterar del 0 al infinito, seria imposible iterar.
La idea es no tener que alojar toda la coleccion en la memoria virtual, 
trabajando de una dato a la vez
Sustituir los arreglos que se cargan todo en la mem virtual, trabajando de uno
a la vez.
*/


//Iteradores
/*
Iterador: cualquier objeto q implementa el protocolo de iterador.
Cualquier objeto que implemente el metodo next que retorne un objeto con
una propiedad value y una propiedad done implemente el protocolo y por lo 
tanto es un iterador.
*/
/*
//esto implementa el protocolo de iterador
let iterador = {
    next(){
        return {
            value: null,
            done: true  //falso, continuo iterando. True, terminé de iterar
        }
    }
};
*/


//iterador que produce valores del 1 al 5

let iterador = {
    currentValue: 1,
    next(){
        //producimos valores del 1 al 5
        let result = {value: null, done: false};

        //evaluamos el valor actual
        if(this.currentValue > 0 && this.currentValue <= 5){
            result = {value: this.currentValue, done: false};
            this.currentValue += 1;
        }else{
            result = {done:true};
        }
        return result;
    }
};
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
//iteracion perezosa
setTimeout(()=> console.log(iterador.next()),5000);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
//un iterador no se puede reiniciar, solo se recorre una vez


//usamos un ciclo para iterar
let item = iterador.next();

while(!item.done){
    console.log(item.value);
    item = iterador.next();
}




//Generadores
/*
Similar a un iterador.
*/

//Estas funciones retornan un generador. Es como funciones q se pueden detener a media ejecucion
function* couter(){
    console.log("Estoy aqui");
    //pausar una funcion, y el valor que se va retornar via el protocolo de iterador
    yield 1;
    console.log("ahora estoy aqui");
    yield 2;
}

//usamos la funcion generadora (ejecutamos la funcion generadora)
let generator = counter();

//la funcion va estar en pausa hasta que ejecutemos next por primera vez
generator.next()
console.log(generator.next());
//console.log(generator.next());
//una vz qie termimos la cantidad de yield, retorna undefined


//mediante ciclo
function* counter(){
    for(var i = 1; i<=5; i++){
        yield i;
    }
}
let generator = counter();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
/*
yield detiene la ejecucion del ciclo for, para entregar un nuevo valor en cada iteracion
La ejecucion y por lo tanto el ciclo se reanudan en cada llamano nuevo a next en el generador

En un generador no nos preocupamos por guardar el estado interno, un generador
es pausar la ejecucion de una funcion y reanudarla.
Aprovechando la  posibilidad de pausar y reanudar una funcion, enviamos valores
a iterar desde el generador.
*/





//Return en funciones generadoras
/*
yield es similar a return. produce valores para el generador.
Aunque no llamamos return desde la funcion generadora, sabemos que implicitamente
retornará un generador. 
Que pasa si mando a llamar return desde una funcion generadora?
*/

function* counter(){
    for(var i=1; i<=5; i++){
        yield i;
    }
}

let generador = counter();

function* retornador(){
    //lo que pasa aqui es lo mismo que pasa con yield, se produce un valor para la proxima vez que se llama next
    return  3;
}

let g = retornador();

console.log(g.next());
console.log(g.next());

/*
cuando usamos return desde una funcion generadora, este produce un valor respetando
el protocolo iterable un objeto con la propiedad value y la propiedad done (q a diferencia
    de yield, me lo pone automaticamente en true)
UNO PUEDE MANDAR CUANTAS VECES QUIERA YIELD Y PRODUCIR RESULTADOS, PERO SOLO 
SE PUEDE LLAMAR UNA VEZ A RETURN
*/




//Delegar generadores
/*
yield dentro de un generador se manda llamar junto con una expresion que produce
un resultado, a este resultado eventualmente se asigna a la propiedad value del objeto
que retorna yield. 
A yield tmb podemos enviarle una funcion generadora, y delegar la continuidad 
de ejecucion del codigo a otro generador.
Esto se llama delegacion de generadores, pq un generador delega a otro generador la 
continuidad, esto permite encadenar generadores
*/

function* counter(){
    for(var i=1; i<=5; i++){
        yield i;
    }
}

let generador = counter();

function* retornador(){
    //delega a otro generador
    yield* counter();
    console.log('regresé');
    yield 3; //esto se muestra una vez que terminó el generador counter.
}

let g = retornador();

console.log(g.next());

/*
En la primera llamada a next nos topamos con el primer yield*, esta delengando al
generador counter.
Counter toma el control.
*/







//Donde se usan los generadores
/*

*/


//Simbolos en JS
/*
Nuevo primitivo del lenguaje.
Son unicos.
Agrega que un identificador sea vendaderamente unico
*/



//Manejo de simbolos
/*

*/
let simbolo = Symbol('mi-simbolo'); //tiene un descriptor, para que yo me de cuenta 
let simbolo2 = Symbol('mi-simbolo');
console.log(simbolo == simbolo2); //me da false

let obj = {};

obj[simbolo] = function(){
    console.log('Mi nombre es un simbolo');
}
obj[simbolo]();




//Iterables con iteradores
/*
Los iterables permiten definir el comportamiento de uno de nuestros objetos cuando
los pasamos por un ciclo for of. Arreglos, cadenas, algunos objetos son iterables.
El protocolo iterable nos permite definir cual será el comportamiento de un objeto 
cuando sea puesto en un ciclo for of
*/

function* counter(){
    for(var i=1; i<=5; i++){
        yield i;
    }
}
let generador = counter();
let numeros = [2,5,10];
//nos entrega cada elemento del arreglo
for(numero of generator){ console.log(numero);}

/*para que un objeto sea iterable, necesita implementar un metodo llamado 
@@iterator este metedo esta identificado en los objetos por un simbolo, no por 
una cadena.
Este simbolo no tiene un nombre, por lo que debemos pasar directamente el simbolo
para poder implementar el metodo.

Symbol.iterator

Este simbolo es uno de los Simbolos Bien Conocidos.
Lo importante del metodo @@iterator es que debe retornar un objeto iterator, las caracteristicas
de este objeto son que tenga un metodo next, que retorne un objeto con las propiedades
value y done.




//Iterables y generadores
/*

*/