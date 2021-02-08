const express = require('express');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller')

router.get('/', function(req, res) {
    response.success(req,res,"lista de mensajes",200 );
});

router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req, res, fullMessage, 201);
    })
    .catch(e =>{
        response.error(req, res,'informacion invalida',400, 'Error en el controlador' )
    })
   
});


module.exports = router;