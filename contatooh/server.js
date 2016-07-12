var http = require('http');
var app = require('./config/express')();
http.createServer(app).listen(app.get('porta'), function(){
  console.log("Express rodando na porta " + app.get('porta'));
});
