//recorrer un arreglo
/*
let arreglo = [1,34,33,42,2];

for(let i=0; i<arreglo.length; i++){
    console.log(arreglo[i]);
}
*/
//metodos y operaciones sobre arreglos
//paso funciones como argumentos a los metodos

let arreglo = ['ruby','python','java','javascript'];
/*
//recorro todo el arreglo
arreglo.forEach(function(elemento){
    console.log(elemento);
});
*/


//eliminar ruby del arreglo
/*
arreglo = arreglo.filter(function(el){
    return el !='ruby';
});
arreglo.forEach(function(elemento){
    console.log(elemento);
});


arreglo = arreglo.filter((el)=> el !='ruby');
arreglo.forEach(function(elemento){
    console.log(elemento);
});
*/
/*
let numeros = [14, 23, 123, 2];
numeros.filter(element => element != 23);
*/


//find, retorna el primer elemento que encuentra.
/*
let el = arreglo.find(el => el =='javascript');
console.log(el);
*/


//map. genera un nuevo arreglo con la operacion definida
/*
let numero = [ 2, 25, 4, 11];
let cuadrados = numero.map(numero => numero*numero);
console.log(cuadrados);
*/

/*
//transformo los string en numeros
let numeros = [ "2", "25", "4", "11"];
numeros = numeros.map(numero => parseInt(numero));
console.log(numeros);
*/