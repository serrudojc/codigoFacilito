/**
 * COMO FUNCIONA UN SERVIDOR WEB
 * Referimos a una app que recibe y entienda peticiones http o a un computadora que contenga dicha
 * app y ademas hardware adecuado.
 * 
 * 
 * //-------------------------------------------------------------------
 * NODEJS y EXPRESS
 * 
 * Ambientes de ejecucion. Tengo .doc, uso Word
 * 
 * Un ambiente de ejecucion (NodeJS) del lenguaje JS. Ademas de ejecutar el programa, provee librerias y apis
 * y objetos de cada entorno.
 * En JS tenesmo dos ambientes de ejecucion:
 * Navegador: se exponen apis que nos permiten interactuar con el DOM, el objeto Window, el objeto navigadtor, 
 * acceso al local storage y demas. Conceptos de FrontEnd
 * Sistema: NodeJs concede acceso a archivos, peticiones por la red, base de datos, etc.
 * 
 * NodeJS no es un lenguajes ni framework, es una ambiente de ejecucion
 * 
 * Express es un framework libreria de desarrollo web.
 * Es un framework de JS para ejecutarse en el servidor.
 * 
 * //---------------------------------------------------------------------
 * PROTOCOLO HTTP
 * 
 * Dos actores, cliente y servidor.
 * la comunicacion es mediante mensajes. Esto se hace a traves de un protocolo de red HTTP, capa aplicacion OSI.
 * 
 * //----------------------------------------------------------------------
 * //VERBOS HTTP
 * 
 * Antes de que comencemos a hacer peticiones con Http a un servidor, primero entendamos que hay distintos 
 * tipos de peticiones que podemos hacer hacia el servidor mismo.
 * Una parte de la petición que se envía hacia el servidor corresponde al método Http o verbo Http 
 * como también conocemos a este elemento.
 * 
 * Comunmente este método puede ser POST o GET, que son los verbos más populares, de hecho, quizás 
 * los identifiques si antes has trabajado con formularios HTML.
 * 
 * Estos verbos indican qué acción queremos realizar sobre el servidor y son GET, POST, 
 * PUT, PATCH, DELETE, HEAD, CONNECT, OPTIONS y TRACE. Cada uno indica una acción diferente a la 
 * que el servidor debe responder.
 * 
 * HEAD, por ejemplo, indica que únicamente queremos que se responda con los encabezados de 
 * la respuesta, y se ignore el cuerpo de datos. DELETE significa que queremos eliminar un 
 * recurso, etc. Vamos a hablar más de estos verbos cuando conozcamos la arquitectura REST.
 *
 * Por ahora sólo necesitas saber que dependiendo de qué queremos que el servidor haga,  crear 
 * elementos, enviarlos, actualizarlos, etc. será el método HTTP que usaremos para que 
 * precisamente el servidor sepa qué tiene que hacer. 
 * 
 * 
 * 
 * //------------------------------------------------------------------------------
 * HTTP CON cURL
 *
 *  curl --version
 * 
 * Peticion HTTP: metodo http, version protocolo, ruta de la peticion, cuerpo de datos a enviar.
 * 
 * curl http://google.com
 *
 *  
 * curl http://google.com -- verbose
 * 
 * 
 * //------------------------------------------------------------------------------
 * //DIRECCIONES WEB
 * 
 * Una dirección web para hacer una solicitud con Http puede verse de alguna de las siguientes maneras:
 * 
 * localhost:8080
 * google.com
 * web.facebook.com
 * codigofacilito.com/cursos
 * 
 * Todas son direcciones válidas y cada una tiene elementos distintos. Lo que aparece al principio, justo 
 * antes de los dos puntos en el primer ejemplo, y en el caso de google.com, se trata del nombre 
 * de dominio.
 * 
 * El nombre de dominio nos permite identificar la computadora en la que se encuentra el recurso 
 * que estamos solicitando, nota como en lugar de página estamos usando el concepto de recurso, 
 * porque así como podemos solicitar una página, también puede ser otro tipo de archivo como una imagen.
 * 
 * Luego del nombre de dominio viene el puerto, en el primer ejemplo el puerto es el 3000, es el que 
 * aparece luego de los dos puntos. En el resto de los ejemplos se asume el puerto por 
 * defecto, porque no hay otro especificado. El puerto por defecto para el protocolo Http es 
 * el puerto 80, y es el que precisamente se usa cuando no se especifica otro, como en los ejemplos 7
 * mencionados.
 * 
 * Además del dominio y el puerto, una dirección web contiene la ruta o el path en donde se 
 * encuentra el recurso, dentro del servidor. Piensa en que si el dominio fuera una colonia, el path 
 * sería la ruta para llegar a una casa en específico, ya que si bien el dominio representa al 
 * servidor, el path representa el recurso en específico que queremos.
 * 
 * El path por defecto es la /, misma que puede omitirse por lo que asumimos que si no hay 
 * path, estamos tratando de acceder al inicio, la /. En nuestros ejemplos de direcciones, el 
 * path es siempre / con excepción del último donde se indica que buscamos el recurso con la ruta 
 * 
 * /articulos.
 * 
 * 
 * //--------------------------------------------------------------------------------------
 * CREANDO PRIMER SERVIDOR
 * 
 * desde terminal
 * npm init
 * Y damos Enter a todo, por ahora.
 * 
 * NOs genera un package.json
 * 
 * Ahora creamos el srevidor web
 * 
 * Ejecutamos en consola: node nombreDelArchivo.js
 * vamos al navegador y localhost:3000
 * 
 * 
 * 
 * //----------------------------------------------------------------
 * //EXPRESS
 * es un framework provee un marco de trabajo. Arquitectura, patrones de diseño, etc
 * 
 * npm init
 * npm install express  
 * 
 * 
 * 
 * //----------------------------------------------------------------
 * //POSTMAN
 * NOs permite crear peticiones HTTP mediante interfaz grafica.
 * Visualizar respuesta del servidor.
 * 
 * elegimos peticion, direccion y Send
 * 
 * //----------------------------------------------------------------
 * //RECIBIR DATOS DE LA PETICION
 * 
 * 
 * //----------------------------------------------------------------
 * //DATOS CON POST
 * 
 * instalamos body parser
 * 
 * npm install body-parser
 * 
 * importamos la libreria y configuramos.
 * 
 * 
 * 
 * 
 * //----------------------------------------------------------------
 * //ENVIAR HTML
 * 
 * 
 * //SERVIR ARCHIVOS ESTATICOS
 * 
 * 
 * //MOTORES DE VISTAS
 * un documento es dinamico, es probable que cambie cada vez q hagamos una peticion web por cada recurso.
 * En el backend usamos un motor de vistas para generar documentos de manera dinamica.
 * 
 * El trabajo es permitir enviar datos de nuestro codigo del servidor a los documentos html, y agregar sentencias
 * y operaciones en las vistas para usar ciclos, condiciones , dentro de los archivos de las vistas.
 * 
 * dependencia adional, instalamos
 * npm install ejs
 * 
 * creamos una nueva carpeta views
 * 
 * //MOTOR DE VISTAS
 * 
 * 
 * 
 * //CACHE
 * 
 * 
 * //TIPOS DE CACHE
 * 
 * 
 * 
 * //CACHE DE ARCHIVOS ESTATICOS
 * 
 * 
 * //QUE SON COOKIES Y LAS SESIONES
 * 
 * 
 * //COOKIES
 * 
 */