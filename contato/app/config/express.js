var express = require('express');
//var home = require('../routes/home');
var load = require('express-load');
var bodyParser = require('body-parser'); //auxilia com os parametros POST

module.exports = function(){

  var app = express(); // adiciona na variavel app os modulos do express

  // variavel de ambiente
  app.set('port', 3000);

  // middleware
  app.use(express.static('./public'));

  //utliliza o engine do ejs (express)
  app.set('view engine', 'ejs');
  app.set('views', './views'); //da set na pasta de views, onde vai estar os arquivos para visualização

  // middlewares utilizando o body-parser
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json()); //realiza o parse do json
  app.use(require('method-override')()); // chama a uma função.

  //home(app);

  // instancia as pastas do scripts de models, controllers e routes
  load('models') // , {cwd: 'app'} é usado quando os arquivos estao em outro diretorio.
  .then('controllers')
  .then('routes')
  .into(app); //adiciona os scripts levantados das outras pastas para dentro de app

  return app;
};
