//var model = require('../models/contato');
var contatos = [
  {_id: 1, nome: "Rudnei Carlos de Oliveira"},
  {_id: 2, nome: "Marcos Roberto de Oliveira"}
];
module.exports = function(){
  var controller = {};
  controller.listaContatos = function(req, res){
      res.json(contatos);
  };
  return controller;
};
