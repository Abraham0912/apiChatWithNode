const express = require('express');
const router = express.Router();

var app = express();

//AGREGANDO ROUTER A APP
app.use(router);
router.get('/si', function (req,res){
    res.send('Hola desde get')
});

app.use(router);
router.post('/si', function (req,res){
    res.send('Hola desde post');
});


app.use(router);
router.get('/yes', function (req,res){
    res.send('i am rout yes with get');
});


app.use(router);
router.post('/yes', function (req,res){
    res.send('i am rout yes with post');
});


app.use(router);
router.get('/', function (req,res){
    res.send('i am rout home with get');
});
// app.use('/', function (req,res) {
//     res.send('Hello wordl');
// });


app.listen(4000);
console.log("La app esta escuchando en el puerto 3000")