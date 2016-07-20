//var model = require('../models/contato');

var contatos = [
  {_id:1, nome:'Rudnei Carlos de Oliveira', email:'rudnei.oliveira@email.com.br'},
  {_id:2, nome:'Marcos Roberto de Oliveira', email:'marcos.oliveira@email.com.br'},
  {_id:3, nome:'Ana Paula de Oliveira', email:'ana.paula.oliveira@email.com.br'},
  {_id:4, nome:'Roosevelt Celso de Oliveira', email:'roosevelt.celso.oliveira@email.com.br'}
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

    contato ? res.json(contatos) : res.status(404).send('Contato nao encontrado');
  };
  return controller;
};
