/*
Intro a Docker
Contenedor: lugar para almacear cosas q será transportadas
Lugar virtual donde almacenamos dependencias, que una app necesita para ejecutarse correctamente, empaquetamos
a una app con runtimes, bibliotecas, etc, y ejecutarla en cualquier parte (maquina local o servidor)
Con esto nos aseguramos que funcione tanto en produccion como en desarrollo, tanto en windows o linux.

"build once run anywhere"

Es similar a una maquina virtual, pero la ppal diferencia es el guest OS, cuando usamos virtualizacion
lo que hacemos es simular a todos los componentes de uns SO, la ram, el HD, etc, el kernel, que es el 
intermediario entre el SO y el hard.
En docker no tenemos al guest host, pq los contenedores se ejecutan directamente en el SO de la maquina host
, es decir comparte a todos los componentes del mismo, la ram, HD y kernel, el cual será el Docker Engine q 
gestionará a los recursos de nuestro SO hacia nuestros contenedores. Generar una contendor es mas rapido que 
una maquina virtual.

Otra diferencia entre Maquina virtual y contendor es el aislamiento entre los mismos, si bien un contenedor
permite el aislamiento entre proceso y contenedores, la realiada es que no es al 100% debido a q los 
contenedores usan recursos de la maquina host. UNa maqina virtual usa los propios recursos simulados.

Por que usar Docker?
Ejecutar a docker en cualquier parte, de forma q nuestra app se pueda ejecutar en cualquier lado-

//********************************************************************
Conceptos

Imagenes
Una imagen seria como una clase, en la cual definimos las configuraciones de  nuestro objeto.
A traves de una imagen podemos instanciar contenedores

Contenedores
Una instancia de una imagen. Es como un objeto

Docker Hub
registro donde podemos descargar y subir imagenes, es similar a github 
hub.docker.com

Docker funciona a traves de arquitectura cliente servidor.
Servidor es el encargado de la administracion de imagenes y contendores. Es el docker engine
El cliente es grafico o linea de comandos. 

Desde el cliente, pedimos al servidor que ejecute la imagen, el server va al registro publico y descargar
la imagen y ejecutarla en nuestro host.


//***************************************************

Instalacion


//***************************************************
HOla mundo. 
Descargamos la imagen hello del repositorio, el cual tiene un script que tiene hola mundo

1- Descargamos una imagen de un repositorio
docker image
docker image pull fernando93d/hello

2- docker image ls

3- docker container

docker container run --help

docker container run fernando93d/hello
En el contenedor solo tengo un script en python que dibuja el mensaje.




//********************************************************
//Comando basicos
docker container //para ver todos los comandos
docker container ls --help //ayuda sobre el comando

docker container ls -a  //muestra todos los contenedores corriendo y apagados.
Vemos la estructura, el id del contendor,IMAGE que indica la imagen q el contenedor usa, COMMAND, CREATED, 
STATUS (si está activo o detenido), PORTS y NAMES

docker container run nombreImagen   //ejecuta un contenedor

docker container rm //elimina un contendor seguido del ID o del NOMBRE
docker container rm idContenedor/NAME


docker container create fernando93d/hello   //Con ls -a veo el STATUS Created del contenedor.
Luego de generar el contenedor, vamos a iniciarlo
docker container start ID/NAME              //Con ls -a en STATUS vemos que ha sido detenido




//---------------------------------------------------------
//Modo interactivo en Docker
Descargamos la imagen de Ubuntu
docker image pull ubuntu    //por default descarga la ultima version
hay tags en el docker hub, especificar las diferentes versiones de ubuntu https://hub.docker.com/_/ubuntu


inspeccionamos las imagenes 
docker image ls

corremos el contenedor
docker container run ubuntu:lastest

inspeccionamos los contenedores
docker container ls

docker container ls -a
vemos que  nuestro contenedor está apagado, esto es pq dentro del contenedor NO ESTAMOS EJECUTANDO 
NINGUN PROCESO.

descargamos la imager de nginx, la buscamos en el docker hub
docker image pull nginx
docker container run nginx  //no pasa nada
procedemos abrir otra terminal y ejecutamos
docker container ls
vemos q  vemos STATUS y el contenedor activo, el contenedor no se apaga automaticamente. Ctrl+c

Modo interactivo
es una forma de ejecutar una terminal dentro del contenedor
usamos flag -i mantiene a la entrada standar abierta ,-t genera una nueva terminal. Generamos un proceso dentro del contendor + terminal

docker container run -it ubuntu

Ejecutamos y vemos q ahora estamos dentro de la instancia del contenedor.
Vamos a otra terminal y ejecutamos docker container ls
Pero si hacemos exit dentro del proceso, el contendor se apaga
Para evitar esto, usamos flag -d q ejecuta al contendor en segundo plano.

docker container run -itd ubuntu




//**************************************************************
// Ejecutar comandos dentro de un contenedor
docker container attach IDContenedor //agreganos a la salida, entrada y error standard corriendo dentro del contenedor
Nos agrega a la tarminal
Pero cuando hacemos exit, terminamos el proceso

Ejecutamos de nuevo el contenedor
docker container exec --help
docker container exec IDContenedor ls 

Al ejecutar eso, ejecutamos comandos.

docker container exec -it IDcontenedor bash //ahora ejecutamos y salimos con exit, sigue el proceso del contenedor




//*******************************************************************

*/