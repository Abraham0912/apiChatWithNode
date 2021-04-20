const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

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
    //res.send('This message is deleted ' + req.query.orderById || 'sin orderById');
    res.json({"this is message is delete":req.query.orderById})
    console.log(req.headers);
})

router.get('/', function(req,res) {
    res.json("Bienvanido a localhost:4000");
})

app.listen(4000);
console.log("La app esta escuchando en el puerto 4000")