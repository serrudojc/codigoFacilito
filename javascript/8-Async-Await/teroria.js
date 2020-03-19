//funciones asincronas
/*
Las funciones asincronas van declaradas siempre con la palabra Async.
Las funciones asincronas, siempre retornan una promesa sin importar el cuerpo del codigo de la 
funcion o el valor actual que retornen.

*/






//Async
/*
//esta funcion originalmente era sincrona, pero con async la volvemos asincronas.
//Lo q hace async es retornar una promesa ya resuelta con el resultado que 
//retorne la funcion.
async function suma(valor1, valor2){
    return valor1 + valor2;
    //esto es lo que hace internamente, retorna una promesa resuelta con el valor
    //del cuerpo de la funcion.
    //return new Promise.resolve(valor1 + valor2);
}

//esta funcion retorna explicitamente una promesa
async function calcular(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 400,5)
    });
}
*/



//Await
/*
Hace q la ejecucion del codigo espere a q una promesa sea resuelta, evitando
que escriba then o que constantemente esté escibiendo funciones anonimas para el
manejo de una promesa

let promesa = new Promise((resolve,reject)=>{
    setTimeout(resolve,400,5)
});

//hago uso del metodo then sobre la promesa para menejar el resultado 5
promesa.then((resultado)=> {console.log(resultado)});
*/


/*
//pero agregamos await, pero necesitamos usarlo dentro de una funcion asincrona
(async function(){
    let resultado = await new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5)
    });
    console.log(resultado);
})();

//await evita que usemos then o funciones asincronas, simplemente tratamos 
//al objeto de la promesa como cualquier otro. 
*/

/*
//otro ejemplo: podemos hacer operacions con estos valores
(async function(){
    let resultado = await new Promise((resolve,reject)=>{
        setTimeout(resolve,400,5)
    });
    let valorDos = await new Promise((resolve,reject)=>{
        setTimeout(resolve,400,10)
    });
    //podemos sumar estos valores pq await los transforma en valores a estas promesas
    console.log(resultado + valorDos);
})();
*/

/*
//otro ejemplo
async function showGitHubInfo(){
    let response = await fetch('https//api.github/users/urielhdz/repos');
    let repos = await response.json();
    console.log(repos);

    //si no tendriamos que haber encadenado promesas, si lo haciamos de la forma tradicional:
    //fetch('https//api.github/users/urielhdz/repos').then(r => r.json()).then(()=>{console.log(repos);})
}
showGitHubInfo();
*/




//Manejar errores en promesas
/*
Cuando una promesa falla, manejamos el error mediante el metodo catch
*/

//metodo tradicional
let promesa = fetch('https//api.github/users/urielhdz/repos');

promesa.then(()=>{/* Exito */}).catch((err)=>{console.log(err)});



//Con await el resultado de la promesa no es ningun objeto en especial 
// es simplemente un resultado, por lo q no tiene el metodo catch
//entonces como podemos manejar el error? 

(async function(){
    try{
        let promesa = await Promise.reject("Error");
        let promesa2 = await Promise.reject("Error");    
    }catch(err){
        console.log(err);
    }
})()

