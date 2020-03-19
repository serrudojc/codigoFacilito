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
/*
abstraccion= hacer objetos eficientes y seguros, ocultando detalles irrelevantes y ofreciendo 
solo aquello que otros objetos necesitaran para interracturar con nosotros.

Encapsulacion: tipo de abstraccion, los objetos ocultan su estado del exterior y unicamente ofrecen 
un proceso de interaccion con este estado a travez de metodos. Para interactuar con las propiedades 
de un objeto, usaremos metodos en lugar que las mismas propiedades.
*/
/*
class Usuario{
    constructor(nombre){ this.nombre = nombre;}
}
let user = new Usuario("Marcos");
console.log(user.nombre);
user.nombre = "Uriel";
console.log(user.nombre);
*/
/*
Si en lugar nombre en el constructor, lo llamo name
this.name = nombre, se rompe todo.
Ahora toda interacion con la clase debe ser modificada.
En gral cualquier modificacion que genere otras modificaciones es señal de mal codigo

Vamos a usar metodos accedores
*/

/*
class Usuario{
    constructor(nombre){ this.nombre = nombre;}

    //quiero que siempre muestre la primer letra mayuscula con un getter "carlos" => "Carlos"
    get name(){
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    }

    set name(nombre){
        this._name = nombre;
    }
}
let user = new Usuario("marcos");
console.log(user.name);
*/
/*
Cuando llamamos un getter, no hace falta usar parentesis. Parace como qe estoy llamando a una propiedad
Ademas, el nombre de las propiedades no pueden compartir nombres con los getters o setters

Los setters deben solo recibir un argumento.
Se ultiliza guion bajo delante para diferencia de las propiedades.
*/



//metodos estaticos
/*
Metodos que no ncesitan objetos para ser ejecutados.
NO necesito una instancia, los llamo directamente de la clase.
*/
/*
class Usuario{
    constructor(permisos = "lectura"){this.permisos = permisos;}

    static createAdmin(){
        let user = new Usuario("administrador");
        return user;
    }
}

//factoring, objeto que se encarga de crear otros objetos
let administrador = Usuario.createAdmin();
*/


//prototipos
/*
JS lenguaje orientado a prototipos

NO existe clases. Los objetos se crean de otros objetos.
*/



//__proto__
/*
let user = { nombre: "Juan Carlos"};

typeof user; //vemos qu es un object


user.__proto__ //vemos en base a que objeto se escribió
Esta propiedad nos retorna el prototipo con el que fue creado el objeto.
*/



//herencia de prototipos
/*
let animal = Object.create(null); //creamos un objeto vacio

animal.vivo = true; //añado atributos

animal.estaVivo = function(){ if(this.vivo) console.log("Sigue vivo");} //añadp metodos
//creamos el objeto animal, sin usar funciones constructoras ni clases

//en base al objeto animal, vamos a crear un objeto perro
let perro = Object.create(animal); //usamos el objeto animal como prototipo

perro.estaVivo(); //hereda el "Sigue vivo" de su prototipo animal.

la herencia de prototipos funciona por delegacion.

*/


//la propiedad del prototype
/*
Las funciones en JS tienen una propiedad prototype

prototype __proto__
*/
/*
function User(){}

let user = new User();

console.log(user.__proto__);
console.log(User.prototype);

user-__proto__ === User.prototype; //me da true, son iguales.
*/
/*
El prototype de una funcion pasa a ser el prototipo de los objetos creados usando esa funcion.
Puede servir para modificar los objetos creados por la funcion, incluso cuando ya hayan sido generados.
*/

/*
function User(){}

//generamos nuevo usuario
let user = new User();

//despues de generar el nuevo usuario, vamos a modificar el prototype de la funcion constructora
User.prototype.saludar = function(){
    console.log("Hola");
}
user.saludar();
*/
/*
Basicamente como existe un enlace entre el prototipo de los objetos creados y la funcion de 
la que se crearon, es posible modificar todos los objetos que se crearon a partir de esa funcion
aun despues de que fueran creados. En el ejemplo todos los usuario que fueron creados a partir de esa funcion
User e incluso aquellos que hayan heredado de User, tomaran esta nueva funcion saludar.
*/

/*
function User(){}

let user = new User();
//creamos otro objeto uriel, estoy usando el prototipo de user para crear un nuevo
//objeto uriel, y tanto uriel como user van a tener acceso a ese metodo saludar-
//`pq tanto los bojetos creados a partir de la funcion como los objetos q estan heredados de 
//esa funcion obtienen el nuevo metodo.
let uriel = Object.create(user);

User.prototype.saludar = function(){
    console.log("Hola");
}

user.saludar();
*/

//herencia utilizando funciones
//La clase admin esta heredando de User. hacemos esto asignando un objeto User como prototipo
//de la funcion admin, de esta manera heredamos todos los atributos y metodos de user hacia admin
/*
function User(){}

User.prototype.saludar = function(){
    console.log("Hola");
}
function Admin(){}

Admin.prototype = new User();

let uriel = new Admin();

uriel.saludar();
*/



//resumen