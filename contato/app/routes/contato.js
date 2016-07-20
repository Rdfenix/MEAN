//var controller = require('../controllers/contato');
module.exports = function(app){
  var controller = app.controllers.contato; //app aqui seria o diretorio da pasta

  app.route('/contatos')
    .get(controller.listarContatos);

  app.route('/contatos/:id')
    .get(controller.obtemContato)
    .delete(controller.removeContato);

};
