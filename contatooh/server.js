var http = require('http');
var app = require('./config/express')();
http.createServer(app).listen(app.get("porta"), function() {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end("Sou um servidor criado pelo Node");
    console.log('Express server escutando na porta ' + app.get("porta"));
});
