//
const express = require('express');

const app = express();

//metodo sendFile que tiene el objeto de la respuesta. Recibe como argumento el nombre del archivo a enviar
app.get('/',function(req,res){
    res.sendFile('index.html', {
        root: __dirname
    });
    //res.send(__dirname);    //muestra ruta del proyecto
});



app.listen(3000);