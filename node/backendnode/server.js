const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();


var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req,res){
    res.send("lista de mensajes");
});

router.delete('/message', function(req,res){
    console.log(req.query);
    console.log(req.body);
    res.send("Mensaje " + req.body.text + " añadido correctamente");
});

app.listen(3000);
console.log("la aplicacion esta escuchando http:/localhost:3000")