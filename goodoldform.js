var express = require('express');
var app = express();
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false})); 
app.post('/form', function(req, res){
var reverse=req.body.str.split('').reverse().join('');
res.end(reverse);
 });
app.listen(process.argv[2]);