//Obtener elementos por ID
/*
Un elemento es una etiqueta con metodos y atributos

id
Los elementos pueden tener un identificador unico id

//retorna un elemento a partir de su id, el id va como argumento string.
const title = document.getElementById('title');

//cambio el texto del h2 o del elemento guardado en la variable.
title.innerHTML ="cursos";

//Aca usamos textContent
description.textContent = 'Listado de cursos';

Todos los elemento poseen un atributo llamado id. Con este atributo se hace la busqueda.
title.id
description.id
*/


<div class="row">
    <ul class="list-group">
        <li class="list-group-item" id="first-course">Python</li>
        <li class="list-group-item">javascript</li>
        <li class="list-group-item">Java 8</li>
        <li class="list-group-item">Ruby</li>
        <li class="list-group-item">C</li>
        <li class="list-group-item">Kotlin</li>
        <li class="list-group-item">Perl</li>
    </ul>
</div>



//Obtener elementos por clase
/*
Las clases pueden repetirse en nuestro maquetado.
Todos los elementos possen un atributo llamado
title.className*/

//va retornar un listado de elementos los cuales en su atributo className almacenen el argumento 
const items = document.getElementsByClassName('list-group-item');

//Podemos iterarlos
for(var i=0; i<items.length; i++){
    let element = items[i];
    console.log(element)
}







//Obtener elementos por etiqueta

//vamos a obtener elementos por su etiqueta. Todos los elementos tiene un atributo

title.tagName

//Y vamos a usar esto para la busqueda. En plural ya que pueden haber muchas etiquetas
const items = document.getElementsByTagName('li');






//Obtener elementos por CSS

//Voy a obtener el primer elemento de la lista, que tiene elemento, clase y Id

//va retornar UN elemento, como argumento va recibir una regla CSS. En este caso id
const element = document.querySelector('#first-course');

//vamos a obtener el elemento mediante la clase
const element = document.getElementsByTagName('.list-group-item');

//quiero obtener el primer elemento li que se encuentro dentro de una lista, la cual posea
//una clase list-group y que esta lista este dentro de un div con clase div.row
const element = document.querySelector('div.row > ul.list-group > li');

//voy a obtener los elementos li, va retornar un LISTADO DE ELEMENTOS, a diferencia de querySelector
const items = document.querySelectorAll('li');

//con una regla css, quiero obtener los elementos en posiciones pares
const items = document.querySelectorAll('li:nth-child(odd)');





//Elementos hijos
//A cada elemento le corresponde una posicion en el arbol.

//primero obtengo la lista.
const list = document.querySelector('ul');
console.log(list);

//para saber la cantidad de hijos de un elemento
console.log(list.childElementCount);

//si queremos obtener el listado de hijos
console.log(list.children);

//podemos iterarlo
for(var i=0; i<list.children.length; i++){
    console.log(list.children[i]);
}

//Con el primer hijo y con el ultimo, se pueden acceder mediante atributos
console.log(list.firstElementChild);
console.log(list.lastElementChild);

//Con los elementos hijos, podemos acceder a sus atributos, modificarlos o leerlos
console.log(list.firstElementChild.innerHTML);





//voy a ver el elemento padre de este elemento (el listado, pq mi elemento es el primer elemento)
const element = document.querySelector('div.row > ul.list-group > li');
console.log(element.parentElement);

//para ver el abuelo
console.log(element.parentElement.parentElement);

//quiero ver el elemento hermano
console.log(element.nextElementSibling);

//para ver el siguiente hermano
console.log(element.nextElementSibling.nextElementSibling);

//si el elemento no tiene un hermano, el atributo será null.

//para retroceder de hermano (suponemos que element es el ultimo elemento)
console.log(element.previousElementSibling);




//Nodos
//Son elementos pequeños en el arbol del DOM

//el primer elemento no posee elementos hijos
const element = document.getElementById('first-course');
console.log(element.childElementCount);

//vemos el numero 1. El primer elemento no posee hijos, pero si posee un texto, un nodo.
console.log(element.childNodes.length);
//si adentro de la etiqueta, agregamos otra etiqueta mas, tmb vamos a ver 1, pero hace 
//referencia a la etiqueta agregada.
<li class="list-group-item" id="first-course"><p>Python</p></li>

//Pero si hago un salto de linea, voy a ver 3 nodos: (texto, parrafo, texto) Los textos son saltos de linea
<li class="list-group-item" id="first-course">
    <p>
        Python
    </p>
</li>


//Los nodos podemos movernos entre padres, hermanos e hijos
//OJO; TENER EN CLARO LAS DIFERENCIAS ENTRE NODO Y ELEMENTO