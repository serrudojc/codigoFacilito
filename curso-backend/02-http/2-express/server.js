//libreria que acabamos de instalar
const express = require('express');

//retorna una funcion que retorna un objeto con el qu podemos configurar la aplicacion
const app = express();

//este objeto app puede especificar rutas y que respuesta enviará
//recibimos dos objetos request y response
app.get('/',function(req,res){
    res.send('hola mundo!!!');
});


app.listen(3000);