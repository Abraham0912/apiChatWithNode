const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

router.get("/", function(req,res){
    res.send('lista de mensajes');
});
router.get("/test", function(req,res){
    res.send('lista de test');
});


app.listen(4000);
console.log("La app esta escuchando en el puerto 4000")