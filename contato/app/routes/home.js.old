//var controller = require('../controllers/home')();
module.exports = function(app){
  //instancia o controller utilizando o express-load ao inves do require.
  var controller = app.controllers.home;

  // endereça o tipo de URL que vai ser usada para acessar o conteudo
  app.get('/', controller.index);
  app.get('/index', controller.index);
  
};
