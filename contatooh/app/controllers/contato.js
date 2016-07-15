//var model = require('../models/contato');
var contatos = [
  {_id: 1, nome: "Rudnei Carlos de Oliveira", email: "rudnei@email.com.br"},
  {_id: 2, nome: "Marcos Roberto de Oliveira", email: "marcos@email.com.br"},
  {_id: 3, nome: "Ana Paula de Oliveira", email: "ana.paula@email.com.br"},
  {_id: 4, nome: "Roosevelt Celso de Oliveira", email: "roosevelt@email.com.br"}
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


    controller.removerContato = function(req, res){
      var idCOntato = req.params.id;
      contatos = contatos.filter(function(contatos){
          return contato._id != idCOntato;
      });
      res.status(204).end();
      console.log("API: Remove Contato: " + idCOntato);
    };

  return controller;
};
