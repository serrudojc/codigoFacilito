//declarar un objeto con JSON
/*

Los objetos se crean a partir de una definicion llamada Clase. Pero
eso no aplica en JS, pq es orientado a prototipos.
No existen clases en JS

Para crear un objeto JSON necesitamos llaves y definir propiedades

Un objeto puede tener muchas propiedades.
Se almacena en una variable.
Leer propiedad.
Tmb puedo declarar metodos. Las funciones son ciudadanoss
de primera clase, podemos asignar a una propiedad una funcion
y lo transforma en un metodo.
LOS METODOS SON VARIABLES Q GUARDAN UNA FUNCION
*/
/*
//JSON
let curso = {
    titulo: "curso profesional de JavaScript",
    duracion: 2.2,
    formato: "video",
    bloque: ["introduccion","funciones"],
    inscribir: function(usuario){
        console.log(usuario + " ahora está inscrito");
    }
}
//puedo acceder de ambas formas:
console.log(curso.titulo);
console.log(curso['titulo']);

console.log(curso.inscribir('Uriel'));

curso.titulo = 'blablabla'
console.log(curso['titulo']);

*/




//Funciones constructoras

//Declaramos una funcion que define la estrcutura de un objeto, casi como una "clase"

/*
function Curso(){
    //con this defino las propiedades y metodos para el objeto creado
    this.titulo = "curso profesional de JS";
    
    this.inscribir = function(usuario){
        console.log(usuario + " se ha inscrito");
    }
}
//creamos un objeto curso, con new y la palabra reservada de la funcion constructora
let cursoJavaScript = new Curso();
cursoJavaScript.inscribir("Uriel");
*/

//Vamos a mejorar la definicion de la funcion constructora:
/*
function Curso(titulo){
    this.titulo = titulo;
    
    this.inscribir = function(usuario){
        console.log(usuario + " se ha inscrito");
    }
}
let cursoJavaScript = new Curso("Curso de JS");
let cursoRuby = new Curso("Curso de Ruby");
console.log(cursoRuby.titulo);
console.log(cursoJavaScript.titulo);
*/
/*
Aunque ambos objetos fueron creados a partir de la misma funcion, cada objeto
conservará su propio estado, es decir un valor independiente de otros objetos para
sus propiedades y metodos.
La convencion para las funciones constructoras es que el nombre de la primera letra
sea mayusculas
*/



//clases
/*
En JS no existen clases, JS está orientando a prototipos.
Pero a partir de una actualizacion de JS, agregaron una sintaxis alternartica para 
definir objetos llamada clases

declaracion de clase, Class Declarations. Usamos estas pq son mas familiares.
class Curso{}

class expressions
let Curso = class{}
let Usuario = class Usuario{}
*/
/*
class Curso{
    //propiedades y metodos.
    //listamos  los argumentos para la creacion del objeto y propiedades que va tener
    constructor(titulo){
        this.titulo = titulo;
    }
    //no usamos function
    inscribir(usuario){
        console.log(usuario + " se ha inscrito");
    }
}
let javaScriptCurso = new Curso("Curso Profesonal de javascript");
console.log(javaScriptCurso.titulo);
javaScriptCurso.inscribir("Juan carlos");
*/


//constructor
/*
En POO hay un metodo que se manda llamar cuando se crea un objeto de una clase (instanciar), a 
este metodo lo llamamos constructor.
Al ejecutarse, es el lugar para inicializar el objeto, darles valores iniciales,
ejecutar funciones, etc
Una clase JS sólo puede tener un constructor
*/
/*
class Curso{
    constructor(titulo, duracion, color ="yellow"){
        this.titulo = titulo;
        this.duracion = duracion;
        //inicializamos con valores que no vengan como argumentos y poner valores por defecto
        this.color = color;
        //puedo pasarle todos los argumentos que quiera, y estos excedentes se 
        //van a guardar en el objeto arguments
    }
}
new Curso("Curso JS");
*/


//herencia
/*
La razon de utilizar herencia es que podamos reutilzar la misma funcionalidad respetando
respetando el diseño de soluciones con objetos.
Pueden haber distintos objetos usando la misma funcionalidad.

Con extends la clase hija hereda los metodos y propiedades de la clase padre.

//clase padre
class Player{
    play(){
        this.video.play();
    }
    duration(){
        return this.video.duration / 100;
    }
}

class Vimeo extends Player{
    open(){
        this.redirectToVimeo(this.video);
    }
}

class YouTube extends Player{
    open(){
        this.redirectToYouTube(this.video);
    }
}


Ademas de heredar de clases que creamos, se puede heredar de objetos que ya vienen 
con el lenguaje, por ej Date o Array

Tambien se puede heredar de funciones constructoras 

override / sobreescribir
Tomamos un metodo del padre y lo reescribimos. Es como definir un nuevo metodo con el 
msmo nombre de la clase hija

En el siguiente metodo, estamos sobreescribiendo el metodo saludar del padre
en la clase hija de Admin. Pero estamos duplicando codigo, asi que tenemos acceso
a un objeto super y tener acceso a los metodos del padre 

class User{
    saludar(){
        consolelog("Hola usuario");
    }
}
class Admin extends User{
    saludar(){
        console.log("Hola usuario");
        console.log("Aqui esta el panel de administracion");
    }
}
*/
/*
class User{
    saludar(){
        console.log("Hola usuario");
    }
}
class Admin extends User{
    saludar(){
        super.saludar();
        console.log("Aqui esta el panel de administracion");
    }
}
let admin = new Admin();
admin.saludar();
*/


/*
Colocamos constructor en el padre
Necesitamos que nuestro Admin tmb reciba un nombre, declaramos un nuevo constructor
y ejecutamos la FUNCION, NO EL OBJETO, la funcion super. 
Con super ejecutamos el constructor de la clase de la que estamos heredando. Dicha
funcion tmb recibe los argumentos que enviaremos a a funcion constructora del padre
*/
/*
class User{
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log("Hola " + this.nombre);
    }
}
class Admin extends User{
    constructor(nombre){
        super(nombre);
    }
    saludar(){
        super.saludar();
        console.log("Aqui esta el panel de administracion");
    }
}
let admin = new Admin("Juan Carlos");
admin.saludar();
*/



//metodos accesores




//metodos estaticos


//prototipos



//__proto__


//herencia de prototipos


//la propiedad del prototype



//resumen