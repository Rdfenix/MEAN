//var controller = require('../controllers/contato');
module.exports = function(app){
  var controller = app.controllers.contato; //app aqui seria o diretorio da pasta

  app.get('/contatos', controller.listarContatos);
  app.get('/contatos/:id', controller.obtemContato); // '/:id' serve como curinga para a aplocação

};
