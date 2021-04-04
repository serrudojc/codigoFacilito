/***
 * 
 * WSGI python
 * 
 * Si eres un desarrollador Python y quieres comenzar a crear tus propios proyectos web, déjame decirte que 
 * puedes comenzar desde el ya si la necesidad de instalar ningún tipo de framewok o librería. ¿Cómo es esto 
 * posible? 🤔, deja te cuento.
 * 
 * La comunidad web Python ha creado un estándar llamado Web Server Gateway Interface, o por sus 
 * siglas, WSGI. Este standar nos permite escribir programas los cuales puedan comunicarse a través del 
 * protocolo HTTP, es decir, Internet.
 * 
 *  WSGI se encuentra inspirado en el estándar Common Gateway Interface o CGI.
 * 
 * Cuando escribimos un programa siguiendo el standar SWGI dicho programa podrá ejecutarse en un servidor 
 * web tal como Apache o nginix.
 * 
 * Hola Mundo
 * 
 * Ahora vamos a crear nuestro primer Hola mundo utilizando el estándar WSGI.
 */
from wsgiref.simple_server import make_server

def application(environ, start_response):
    headers = [('Content-type', 'text/plain; charset=utf-8')]

    start_response('200 OK', headers)

    return ['Hola gente de códigofacilito'.encode('utf-8')]

server = make_server('localhost', 8000, application)
server.serve_forever()

/**
 * Listo, con 11 líneas de código tenemos un servidor que es capaz de responder a las peticiones de 
 * diferentes clientes.
 * 
 * Si nosotros ejecutamos nuestro script, e ingresamos a http://localhost:8000/ a través de nuestro 
 * navegador obtendremos el siguiente resultado :
 * 
 * localhost:8000
 * Hola gente de codigoFacilito
 * 
 * Lo primero que debemos hacer es importar la función make_server, a partir de esta función podremos 
 * generar nuestro servidor.
 * 
 * La función recibe tres argumentos obligatorios, La dirección del servidor, el puerto y la _función 
 * handler. La función como observamos posee dos parámetros environ y start_response.
 * 
 * El parametro env es un diccionarion el cual contiene variables wsgi relacionadas con la petición 
 * del cliente (Método del protocolo, Query String etc ...)
 * 
 * El parametro start_response es un callback el cual recibe, de forma obligatoria, dos argumentos. 
 * El estatus y los encabezados de la respuesta.
 * 
 * Dentro de la función definimos los encabezados de la respuesta, de igual forma indicamos el status 
 * code, en este caso 200, exito 😎, finalmente retornamos un recurso. Para este ejemplo hemos retornado 
 * un pequeño string.
 * 
 * Páginas web
 * Si nosotros así lo deseamos podemos retornar una páginas web. 😃*/

from wsgiref.simple_server import make_server

HTML = """
<!DOCTYPE html>
<html>
  <head>
    <title>Título</title>
  </head>
  <body>
    <h1>Hola gente de códigofacilito</h1>
  </body>
</html>
"""

def application(environ, start_response):
    headers = [ ('Content-type', 'text/html; charset=utf-8') ]

    start_response('200 OK', headers)

    return [bytes(HTML, 'utf-8')]

server = make_server('localhost', 8000, application)
server.serve_forever()
/**
 * 
 * Páginas dinámicas
 * 
 * Con la ayuda de la librería Jinja2 podemos crear páginas web dinámicas. Su integración es muy sencilla.
 * En esta ocasión genero un archivo .html que será nuestro template. En mi caso, el archivo lo almaceno 
 * en el folder templates.*/

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title> {{ title }} </title>
  </head>
  <body>
    <h1>Hola {{ username }}</h1>
  </body>
</html>

//Una maquetado bastante sencillo, pero funcionará.

//</html>Mi script principal quedaría de la siguiente manera.

from jinja2 import FileSystemLoader, Environment
from wsgiref.simple_server import make_server

def application(environ, start_response):
    env = Environment(loader=FileSystemLoader("templates"))
    template = env.get_template('template.html')

    data = {
        'title': 'WSGI tutorial',
        'username': 'Codi'
    }

    html = template.render(data)

    headers = [ ('Content-type', 'text/html; charset=utf-8') ]

    start_response('200 OK', headers)

    return [bytes(html, 'utf-8')]

server = make_server('localhost', 8000, application)
server.serve_forever()
/**
 * Lo primero que hacemos es obtener nuestro template, nuestro archivo .html, posteriormente 
 * lo renderizamos utilizando un diccionario como argumento, en el diccionario colocamos todos 
 * los valores a utilizar en el template.
 * 
 * 
 * //------------------------------------------------------------------------------------------------
 * ENTORNO DE DESARROLLO E INSTALACION DE FLASK
 * 
 * Usamos la libreria virtualenv, para separar proyectos.
 * Generamos un entorno para cada proyecto, asi no comparten librerias
 * 
 * pip install virtualenv
 * 
 * Luego generamos neustro entorno, crea una nueva carpeta.
 * virtualenv -p python3 "nombreEntorno"
 * 
 * Para iniciar el entorno:
 * source nombreEntorno/scripts/activate
 * 
 * A partir de este momento, todas las librerias q instalemos, se haran en el entorno solamente (aislado)
 * 
 * para desactivar el entorno:
 * deactivate
 * 
 * Ahora instalamos flask:
 * pip install flask
 * 
 * podemos confirmar ingresando al shell de Python:
 * python
 * import flask //si no obtenemos error, la instalcion de flask fue exitosa
 * exit()
 * 
 * 
 * 
 * Instalar Flask en Windows 10 pro versión 1511 (compilación de SO 10586.164) para saber tu versión de windows 10 utiliza Windows + R y escribe winver
cmd 
pip install virtualenv 
crear un entorno para el proyecto
virtualenv -p python env
env(es el nombre del entorno virtual pueden colocar el que ustedes quieran)
dir vemos la carpeta creada en este caso env
cd env/Scripts
activate.bat
asi activamos nuestro entorno virtual para desactivarlos es deactivate.bat
estando activado utilizamos pip install flask y listo para verificar que se instalo desde el shell de python utilizan import flask sino da error es que se instalo correctamente.

 * -------------------------------------------------------------------------------------------
 * //CREAR SERVIDOR DE FLASK
 * (desde terminal)
 * nueva carpeta tutorial
 * 
 * ls. //me va mostrar los directorios, tengo q ver solo env (que es el nombre de entorno en el ejemplo)
 * mkdir tutorial
 * y entro con en editor
 * 
 * creo un main.py
 * 
 */