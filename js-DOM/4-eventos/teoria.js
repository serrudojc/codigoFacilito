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
<input type="text" class="form-control" id="title-form" placeholder="Título"></input>



//evento submit


//eventos por cambio de valor


//documentLoaded


//eventBubbling



//Propagacion de eventos


//Detener propagacion
