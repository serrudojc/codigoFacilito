//spread Operator
/*
Operador de propagacion. 
NOs permite expandir una arreglo u objeto para usar sus elementos ya sea como argumentos
de una funcion para combinar arreglos, etc.
*/

/*
let numeros = [2,3,5];

function sumar(n1,n2,n3){
    return n1+n2+n3;
}
//usando apply
//let resultado = sumar.apply(this,numeros);
//console.log(resultado);

//usando operador de propagacion ... convierte los elementos del arreglo [2,3,5] => 2,3,5
let resultado = sumar(...numeros);
console.log(resultado);
*/

/*
//el operador tmb sirve para combinar dos arreglos
let numeros = [2,3,5];

let otro_arreglo = ['hola', 'mundo'];

console.log([...numeros, ...otro_arreglo])
*/

/*
//tmb sirve para combinar objetos
let objeto = {
    clave: 3
}
let objetoDos = {
    otraClave: 4
};

console.log(objeto);
console.log(objetoDos);

let newObject = {
    ...objeto,
    ...objetoDos
}
console.log(newObject);
*/





//For of y For in
/*
For of se aplica sobre cualquier objeto iterable (arreglo, cadena, objetos maps).
En cada iteracion nos devuelve el valor del iterable
*/

let arreglo = [2,3,4];  //iterable

for(numero of arreglo){
    //la variable numero va adquiriendo el valor del iterable en cada iteracion
    console.log(numero);
}

//vamos a iterar el objeto arguments
function saludaATodos(){
    for(nombre of arguments){
        console.log('Hola '+ nombre);
    }
}
//pasamos cualquier argumento, que se van a guardar en arguments
saludaATodos('Juan','CodigoFacilito','Alumnos');

//tmb se puede iterar sobre listas de nodos, en programacion web

/*
for in intera sobre las propiedades en lugar de los valores.
*/
let usuario = {
    nombre: 'Juan',
    edad: 32
}

for(propiedad in usuario){
    console.log(propiedad);
}
//el ciclo SOLO MUESTRA LAS PROPIEDADES ITERABLES