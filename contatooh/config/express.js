var express = require('express');

module.exports = function(){
  var app = express();
  //variavel de ambiente
  app.set('porta', 3000);
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //middleware
  app.use(express.static('./public'));
  
  require('../app/routes/home')(app);


  return app;
};
