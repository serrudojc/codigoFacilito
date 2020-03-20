//que son los eventos
/*
Establecemos evento a cuelquier elemento.
UN evento es la forma de controlar acciones que ocurren en nuestra web.

Dos maneras de establecer eventos.
*/
//con un atributo
<button id="hola" class="btn btn-info" onclick="saluda()">Hola</button>

<script type="text/javascript">
    const button = document.getElementById('hola');

    //button.addEventListener('click', saluda);

    function saluda() {
        console.log('hola mundo');
    }
</script>

//la segunda forma es con el metodo addEventListener, dentro del script
//primer argumento: tipo de evento. Luego la funcion.
button.addEventListener('click', saluda);







//evento clic
<button type="button" class="btn btn-primary">Haz Click  sobre mi</button>

//Primero obtenemos el elemento, como son dos clases, la regla queda asi:
const button = document.querySelector('.btn.btn-primary');

//ahora puedo agregar el evento click. La funcion se va ejecutar cuando se haga un click sobre el boton
button.addEventListener('click', function(){
    console.log("hola mundo");    
} );

//doble click: dblclick







//objeto target
//Elemento que dispara un evento
//cada vez que hagamos click en el boton, las etiquetas h2 y p van a desaparecer

const button = document.querySelector('.btn.btn-primary');

button.addEventListener('click', function(){
    if(title.style.display != 'none'){
        title.style.display = 'none';   //desaparece la etiqueta h2
        description.style.display = 'none';
        button.textContent = "mostrar"
    }else{
        title.style.display = 'block';   //los mostramos
        description.style.display = 'block';
        button.textContent = "ocultar"
    } 
} );
/*Estoy modificando el texto del elemento que dispara el evento. El evento click se
 encuentra hacia el boton. Cada vez q hacemos un click sobre el boton modificamos su texto.
 Sin embargo la modificacion del texto lo hacemos en base a la constante button, no en base al
 elemento que disparó el evento.
Para modificar esto, la funcion que colocamos como segundo argumento, recibe un argumento. Normalmente
expresamos el parametro con la letra e. 
Este parametro hace referencia al evento. Si lo visualizamos, hay un atributo target.
****Target almacena el elemento q disparó el evento.****
*/

const button = document.querySelector('.btn.btn-primary');

button.addEventListener('click', function(e){
    //console.log(e);
    if(title.style.display != 'none'){
        title.style.display = 'none';   //desaparece la etiqueta h2
        description.style.display = 'none';
        e.target.textContent = "mostrar"
    }else{
        title.style.display = 'block';   //los mostramos
        description.style.display = 'block';
        e.target.textContent = "ocultar"
    } 
} );


//Otra forma de saber el elemeto que disparó el evento es con la variable this.

const button = document.querySelector('.btn.btn-primary');

button.addEventListener('click', function(e){
    //console.log(e);
    if(title.style.display != 'none'){
        title.style.display = 'none';   //desaparece la etiqueta h2
        description.style.display = 'none';
        this.textContent = 'Mostrar';
    }else{
        title.style.display = 'block';   //los mostramos
        description.style.display = 'block';
        this.textContent = "ocultar"
    } 
} );







//eventos del mouse
//cada vez que el cursor pase sobre el boton, tomará nuevas clases
const button = document.querySelector('.btn.btn-primary');

button.addEventListener('mouseenter',function () {
    this.className = 'btn btn-danger';
})

button.addEventListener('mouseout',function () {
    this.className = 'btn btn-primary';
})






//setTimeOut
/*Funcion que demora. Le pertenece a la ventana, a window.
primer argumento una funcion, el segundo argumento un numero en milisegundos
*/
setTimeout(function(){
    console.log("Hola mundo");
}, 3000);

//que pasa si la funcion recibe varios parametros? le pasamos los argmunetos despues del tiempo
setTimeout(function(p1,p2,p3){
    console.log(p1);
    console.log(p2);
    console.log(p3);
}, 3000, 'argumento1', 'argumento2', 'argumento3');





//Eventos  del teclado
//tengo el siguiente input en el html
<input type="text" class="form-control" id="input" placeholder="Título"></input>

//lo primero que hago es obtener el elemento
const input = document.getElementById('input');

//con el elemento, vamos a usar el evento keydown. Se dispara cada vez que se presione una tecla sobre el input
input.addEventListener('keydown',function(){
    console.log('tecla presionada');
})

//vamos a visualizar el objeto evento, para ver q tecla fue presionada.
input.addEventListener('keydown',function(e){
    console.log(e);
})

//visualizo diferentes atributos, en key vemos que tecla fue presionada. keycode es el codigo de esa tecla
input.addEventListener('keydown',function(e){
    console.log('tecla presionada' + e.key + ' con un codigo' + e.keyCode);
})





//evento submit
//vamos a usar el form
/*
    <form id='course-form'>
         <div class="form-group">
           <input type="text" class="form-control" id="title-form" placeholder="Título">
         </div>

         <div class="form-group">
           <input type="text" class="form-control" id="description-form" placeholder="Descripción">
           <small id="descriptionHelp" class="form-text text-muted">Escribe una breve descripción.</small>
         </div>

         <button type="submit" id="create-course" class="btn btn-info">Crear curso</button>
</form>
*/
//el form tiene un id y mediante este atributo vamos a obtener el formulario, debido a que el
//evento submit va ser sobre el form, y no sobre el boton.
//Primero obtenemos el form

const form = document.getElementById('course-form');

//agregamo el evento. El evento es submit, c/vez q hagamos submit al form, vamos a tener los valores del input
form.addEventListener('submit', function(){
    //vamos a obtener los elementos:
    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description.form').value;
    //con el atributo value obtengo los valores de los inputs y no los inputs.
    console.log(title);
    console.log(description);
})
//la impresion se hizo de forma correcta, pero la pagina web esta siendo recargada.
//es el comportamiento normal del form, toma los valores y lo envia al servidor
//para prevenir esto, trabajamos con el evento e y el atributo preventDefault

form.addEventListener('submit', function(e){
    e.preventDefault;

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description.form').value;

    console.log(title);
    console.log(description);
})
//RECORDAR QUE EL EVENTO SE COLOCA AL FORMULARIO, NO AL BOTON SUBMIT
//con el metodo preventDefault evitamos que el form envie los datos.




//eventos por cambio de valor
//Permite saber cuando un input cambió su valor.

<div class="form-group">
    <label>
        <input type="checkbox" name="" value="" id="checkbox">
            premium
        </input>
    </label>
</div>

//vamos a obtener el elemento y agregar el evento
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',function(){
    console.log("cambio de valor");
})


//se puede usar en inputs de tipo texto
const checkbox = document.getElementById('checkbox');
//aca lo que necesito es el elemento, y no el valor, por eso no uso value
let title_form = document.getElementById('title-form');

checkbox.addEventListener('change',function(){
    console.log("cambio de valor");
})




//documentLoaded
//Nuestra web carga de forma descendente. Por eso ponemos el script al final del body.
//Si colocamos el script en el header, tenemos errores.
//JS se ejecuta antes de q las etiquetas se creen.
//A veces, es necesario colocar el JS en el head, entonces usamos este evento:

//auqneu el DOM no se haya construido, podemos usar el objeto document
document.addEventListener('DOMContentLoaded', function(){
    console.log('hola mundo');
});
//el evento DOMContentLoaded es lanzado cuando la pagina web llega a un punto donde el html
//ya fue parseado y el DOM ya fue construido.

//basandonos en lo anterior, nosostros podemos colocar TODO nuestro codigo en la funcion
document.addEventListener('DOMContentLoaded', function(){
    console.log('El DOM ya fue construido');
    /*
    ACA VA NUESTRO CODIGO
    */
});



//eventBubbling
/*Los elementos en JS no se detienen en los eventos que los dispararon, si no que se propagan.
Se hace a todos los ancestros hasta el nodo padre.

Si yo hago click en un elemento, este sube hasta la raiz del arbol.
*/

//Propagacion de eventos
//agrego un evento click al primer elemento de mi lista, de igual manera lo voy a colocar
//a los eventos padres.

const element = document.querySelector('li');   //a este elemento lo busco por etiqueta
const list = document.querySelector('ul');
const div_row = document.querySelector('.row'); //a este elemento lo busco por clase
const div_container = document.querySelector('.container');
const body = document.querySelector('body');

//procedemos a agregar el evento
element.addEventListener('click', function(){
    console.log('Elemento! ');
});

element.addEventListener('click', function(){
    console.log('List! ');
});

element.addEventListener('click', function(){
    console.log('Div Row!');
});

element.addEventListener('click', function(){
    console.log('Div Container!');
});

element.addEventListener('click', function(){
    console.log('Body!');
});


//ahora generamos una nueva funcion llamada show_messages, y la colocamos como 
//segundo argumento a todos los addEventListener

element.addEventListener('click', function(){
    console.log('Elemento! ');
});

element.addEventListener('click', show_messages);
list.addEventListener('click', show_messages);
div_row.addEventListener('click', show_messages);
div_container.addEventListener('click', show_messages);
body.addEventListener('click', show_messages);

//la variable this, nos sirve para obtener el elemento actual
function show_messages(){
    console.log(this.tagName);
}
//vemos las etiquetas LI, UL, DIV,DIV, BODY


//Que pasa si imprimo el target. Mi funcion va recibir el evento e
function show_messages(e){
    console.log(e.target.tagName);
}
//Visualizamos LI 5 veces,  el atributo target va almacenar el elemento q disparó el evento,
//a diferencia de this q modifica su valor su valor segun el evento se vaya propagando.

function show_messages(e){
    console.log("Elemento actual "+ this.tagName);
    console.log("Elemento q disparó el evento:" + e.target.tagName);
    console.log("\n");
}
//visualizamos la diferencia entre ambas variables.
//this modifica su valor segun el evento se vaya propagando
//target almacena el elemento que disparó el evento y el valor se mantiene a pesar de la propagacion


//hacemos un pequeño refactor sobre esto

const element = document.querySelector('li');   //a este elemento lo busco por etiqueta
const list = document.querySelector('ul');
const div_row = document.querySelector('.row'); //a este elemento lo busco por clase
const div_container = document.querySelector('.container');
const body = document.querySelector('body');

element.addEventListener('click', show_messages);
list.addEventListener('click', show_messages);
div_row.addEventListener('click', show_messages);
div_container.addEventListener('click', show_messages);
body.addEventListener('click', show_messages);

//quedando asi
for(let element of document.querySelectorAll('*')){
    element.addEventListener('click',show_messages);
}
//visualizamos la prpagacionn al ahacer click sobre el elemento




//Detener propagacion
//al hacer click sobre el primer elemento Python, veo ambos mensajes. Pero no quiero.
const element = document.querySelector('li');
const list = document.querySelector('ul');

element.addEventListener('click', function(){
    console.log('click sobre el elemento');
});

list.addEventListener('click', function(){
    console.log('click sobre la lista ');
});


//nos situamos en la funcion donde queremos que la propagacion se detenga. Nos apoyamos del evento
const element = document.querySelector('li');
const list = document.querySelector('ul');

element.addEventListener('click', function(e){
    console.log('click sobre el elemento');
    e.stopPropagation();
});

list.addEventListener('click', function(){
    console.log('click sobre la lista ');
});
