//innerHTML
//imprimo en pantalla lo que el atributo innerHTML
<p class="description_container" id="description">Breve descripción.</p>

description.innerHTML;    //"breve descripcion"        

//si voy al maquetado y coloco un salto de linea
<p class="description_container" id="description">
    Breve descripción.
</p>

description.innerHTML;    //ahora tmb veo el salto de linea, junto con el texto. Un salto al inicio y final
//Esto se debe a que el innerHTML almacena el html del elemento.
//si coloco etiquetas dentro del elemento, las voy a ver.

//con innerHTML modifico el DOM, o sea, todo el contenido, texto y etiquetas q estan dentro del elemento se cambian

description.innerHTML = "Listando de cursos";
description.innerHTML = "<strong>Listado de cursos</strong>";
//con el atributo innerHTML podemos obtener y modificar el HTML q almacene un elemento.

//Como hacemos para obtener el texto de un elemento o nodo?
//con el atributo textContent
console.log(description.textContent);

description.textContent = "listado de cursos";
description.innerHTML = '<strong>' + description.textContent + '</strong>';

//innerHTML le corresponde a un elemento
//textContent le corresponde a un nodo





//documentacion
//MDN
