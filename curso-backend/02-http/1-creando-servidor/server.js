//libreria para manejar peticiones
//un entorno de desarrollo nos provee de librerias/APis para comunicarnos
const http = require('http');

function responderPeticion(request, response){
    response.end('hola mundo');
}

let server = http.createServer(responderPeticion);

//no se recomienda el puerto 80, para evitar colisiones con otras aplicaciones de la PC
server.listen(3000);