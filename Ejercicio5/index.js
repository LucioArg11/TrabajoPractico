const validations = require('./validations');
const express = require ('express');
const request = require('request');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('static'));


app.post('/', (req, res) =>{
    validations.createUserValidation(req.body);
    try{
        request.post({
        url:'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        json:true,
        body: req.body
      }, function(error, response, body){
        res.status(201);
        res.json(body);
      });
    }catch (error) {
        return res.status(500).json({
          status: 'error',
          message: 'Internal Server Error'
        });
    }
});


app.use((error,req,res,next) => {
    res.status(400).json({
        status:"error",
        message:error.message,
    });
});


app.listen(3000, function () {
    console.log(`Iniciado en P:${3000}`);
});