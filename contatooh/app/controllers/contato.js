//var model = require('../models/contato');
var contatos = [
  {_id: 1, nome: "Rudnei Carlos de Oliveira"},
  {_id: 2, nome: "Marcos Roberto de Oliveira"},
  {_id: 3, nome: "Ana Paula de Oliveira"}
];
module.exports = function(){
  var controller = {};
  controller.listaContatos = function(req, res){
      res.json(contatos);
  };

  controller.obtemContato = function(req, res){
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato){
      return contato._id == idContato;
    })[0];

    contato ? res.json(contato) : res.status(404).send('Contato nao encontrado');
  };
  return controller;
};
