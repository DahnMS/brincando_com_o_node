var express = require('express');
var app = express();

app.set('views', './app/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    var controller = require(`./app/controller/home.js`);
    controller['get_index'](req, res);
});

app.get('/:action', function(req, res){
    var controller = require(`./app/controller/home.js`);
    controller[`get_${req.params.action}`](req, res);
});

app.get('/:controller/:action', function(req, res){
    var controller = require(`./app/controller/${req.params.controller}.js`);
    controller[`get_${req.params.action}`](req, res);
});

app.listen(3000, function() {
    console.log('-- Servidor iniciado.');
});