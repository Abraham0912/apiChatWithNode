const express = require('express');
const bodyParser = require('body-parser');//Recibir body's
const router = express.Router();//rOUTER PERMITE SEPARAR LAS PETICIONES POR METODOS GET, POST, ETC, POR CABECERAS, POR URL'S

//SI NO SE USARA Router Quedaria de la siguiente forma y ademas todos con todos los metodos responderia lo mismo
/*
    app.use('/', function(req, resp){
        resp.send("hola");
    });
*/

var app = express();//INICIALIZANDO EL SERVIDOR POR MEDIO DE ESTE METODO

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

router.get("/message", function(req,res){
    console.log(req.headers);
    res.header( {
    "myHeader":"nuesto valor personalizado",
    "otro-header":"el otro header"
    } );
    res.send('lista de mensajes');
});

router.delete('/message', function(req,res){
    console.log(req.query)//por url debe estar localhost:4000/message?orderById=25
    console.log(req.body)//por body en formato json{"mensaje": "hola desde insomnia"}
    res.status(201).send('This message is deleted ' + req.body.mensaje || 'sin body');
    //res.json({"this is message is delete": req.query,
              //"Otro mensaje": req.body  })
    console.log(req.headers);
})

router.get('/', function(req,res) {
    res.json("Bienvanido a localhost:4000");
})

app.listen(4000);
console.log("La app esta escuchando en el puerto 4000")