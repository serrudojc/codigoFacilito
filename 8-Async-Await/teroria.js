//funciones asincronas
/*
Las funciones asincronas van declaradas siempre con la palabra Async.
Las funciones asincronas, siempre retornan una promesa sin importar el cuerpo del codigo de la 
funcion o el valor actual que retornen.

*/

//esta funcion originalmente era sincrona, pero con async la volvemos asincronas.
//
async function suma(valor1, valor2){
    return valor1 + valor2;
}

//esta funcion retorna explicitamente una promesa
async function calcular(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 400,5)
    });
}







//Async
/*

*/


//Await
/*

*/


//Manejar errores en promesas
/*

*/
