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
Se ejecuta solo desde linux.



*/