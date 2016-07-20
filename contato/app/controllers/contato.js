//var model = require('../models/contato');

var contatos = [
  {_id: 1, nome: "Rudnei Carlos de Oliveira", email: "rudnei@email.com.br"},
  {_id: 2, nome: "Marcos Roberto de Oliveira", email: "marcos@email.com.br"},
  {_id: 3, nome: "Ana Paula de Oliveira", email: "ana.paula@email.com.br"},
  {_id: 4, nome: "Roosevelt Celso de Oliveira", email: "roosevelt@email.com.br"}
];

module.exports = function(){
  var controller = {};

  // Lista Contatos
  controller.listarContatos = function(req, res){
    res.json(contatos); //captura os dadoos da variavel e os transformas em json
  };

  // Captura o contato
  controller.obtemContato = function(req, res){
    var idContato = req.params.id;
    var contato = contatos.filter(function(contato){
      return contato._id == idContato;
    })[0];

    contato ? res.json(contato) : res.status(404).send('Contato nao encontrado');
  };
  return controller;
};
