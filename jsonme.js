var express = require('express');
var app = express();
var fs= require('fs');
app.get('/books', function (req, res) {

    fs.readFile(process.argv[3], (err,data) => {
        if (err) {
            return res.sendStatus(500);
        }
        else{
        object = JSON.parse(data.toString());
        res.json(object);
        }
    });
   
});
app.listen(process.argv[2]);