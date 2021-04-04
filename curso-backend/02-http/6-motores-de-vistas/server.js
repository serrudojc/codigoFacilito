const express = require('express');

const app = express();

//indicamos el uso de un motor de vistas. Primero para que express sepa que es un motor de vistas, el segundo es el motor de vistas
app.set('view engine', 'ejs');


app.get('/',function(req,res){
    //metodo para enviar una vista luego de configurar un motor
    res.render('index');    //no hace falta especificar la ruta, lo hace el motor
});

app.listen(3000);