const express = require('express');

const bodyParser = require('body-parser');

const app = express();

//para post. extended es para enviar objetos anidados
app.use( bodyParser.urlencoded({extended: true}) );


//para utilizar la informacion que viene del mensaje de la peticion, Express genera un objeto con toda la info
//el objeto se recibe como primer argumento que pasamos manejadora de la ruta.
app.get('/saludo',function(req,res){
    res.send(`Hola ${req.query.name}`); //dentro del objeto req, tenemos otro objeto query. Usamos interpolacion
});

//quien crea el mensaje de la peticion ,debe enviar el mensaje con el mismo nombre de variable de js

//enviamos los parametros de consulta query params, mediante un ? en la direccion del Postman
// localhost:3000/saludo?name=Juan%20Carlos





//cuando venga una peticion a esta ruta con este metodo  http, esta es la funcion q debe responder
app.post('/',function(req,res){
    //usamos body parser
    res.send(`Hola ${req.body.name}`);
});

//vamos a Postman y localhost:3000/ para ver el metodo POST
//luego elegimos body/x-wwwwform-urlencoded y llenamos valores clave-valor
// key: name, value: juan carlos

app.listen(3000);