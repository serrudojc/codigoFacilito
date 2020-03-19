//Object window
/*
funcion(argumento);
alert("Hola mundo");

Todas las variables globales de la consola, estan en el objeto window

escribimos window en la consola y vemos este objeto. Tiene muchos atributos. Aca está la 
funcion alert.

window.alert("Hola mundo");

El objeto window nos permitirá realizar acciones sobre la ventana.
Nos interesa el atributo document
Este atributo es otro objeto, con él vamos a poder realizar acciones sobre nuestra web.

Si vamos a realizar acciones sobre la ventana, usamos window.
Si vamos a realizar acciones sobre la pagina, usamos document.



//DOM
/*
Document Object Model
Es una representacion de nuestra pagina web, la cual JS utiliza. Es creado a partir de las 
etiquetas html
La representacion es mediante un arbol, cada elemento es una etiqueta. Hay padres e hijos.

PAra modificar el DOM, trabajamos sobre el objeto global document.
*/


//Fomas de trabajar con JS
/*
index.html

al final del body
<script type="text/javascript">
    let saludo = "hola mundo";
    console.log(saludo);
</script>

otra forma es mediante un archivo externo
<script type="text/javascript" src="teoria.js"></script>
*/