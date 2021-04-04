//
const express = require('express');

const app = express();

//use, inserta un nuevo middleware.
//ponemos un nombre de carpeta para ser mas facil de acceder
app.use('/assets', express.static('assets'));

//accedemos a los archivos de la carpeta assets
//desde el navegador   http://localhost:3000/style.css

app.get('/',function(req,res){
    res.sendFile('index.html', {
        root: __dirname
    });
});



app.listen(3000);