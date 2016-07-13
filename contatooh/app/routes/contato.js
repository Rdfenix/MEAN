//var controller = require('../controllers/contato');
module.exports = function(app){
  var controller = app.controllers.contato;
  app.get('/contato', controller.listaContatos);
  app.get('/contato/:id', controller.obtemContato);
};
