console.log("hola mundo desde JS");

//seleccionar elementos del DOM. Esta declaracion tiene como resultado el ELEMENTO encontrado
let tabla = document.querySelector(".table");
console.log(tabla);

/*
let links = document.querySelectorAll("a");
for(let i=0; i<links.length; i++){
    console.log(links[i]);
}
links.forEach(function(link){
    console.log(link);
});
*/

//Eventos

/*
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log('Click');
        console.log(this);  //imprime el elemento con el q estoy interactuando
    })
});
*/


/*
//obtener los elementos de la clase .close
//recorrerlos
//agregar un evento click a c/u de ellos
let closeBtn = document.querySelectorAll(".close");
closeBtn.forEach(function(elementoClose){
    elementoClose.addEventListener('click',function(){
        console.log(this);
    });
});
*/


/*
//comportamiento por defecto de un evento
let links = document.querySelectorAll(".close");
links.forEach(function(link){
    link.addEventListener("click", function(e){
        //de cualqier de las dos formas evita que el evento siga su comportamiento por defecto.
        e.preventDefault();
        return false;
    });
});
*/

/*
//quitar y agregar clases a un elemento con JS
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-paw");
    console.log(icono);
});
*/
/*
let links = document.querySelectorAll(".close");
links.forEach(function(link){
    link.addEventListener("click", function(e){
        //e.preventDefault();

        let content = document.querySelector('.content');
        //quito las clases de animacion
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //agrego nuevas clases fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");
    });
});
*/




//Timers

let links = document.querySelectorAll(".close");
links.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();

        let content = document.querySelector('.content');
        //quito las clases de animacion
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");

        //agrego nuevas clases fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href = "../index.html";
        },3000);
        

        return false;
    });
});