//var model = require('../models/contato');

var contatos = [
    {
        _id: 1,
        nome: "Rudnei Carlos de Oliveira",
        email: "rudnei@email.com.br"
    },
    {
        _id: 2,
        nome: "Marcos Roberto de Oliveira",
        email: "marcos@email.com.br"
    },
    {
        _id: 3,
        nome: "Ana Paula de Oliveira",
        email: "ana.paula@email.com.br"
    },
    {
        _id: 4,
        nome: "Roosevelt Celso de Oliveira",
        email: "roosevelt@email.com.br"
    },
    {
        _id: 5,
        nome: "Sueli Aparecida Barbosa",
        email: "sueli@email.com.br"
    }
];

module.exports = function () {
    var controller = {};
    var ID_CONTATO_INC = 5;

    // Lista Contatos
    controller.listarContatos = function (req, res) {
        res.json(contatos); //captura os dadoos da variavel e os transformas em json
    };

    // Captura o contato
    controller.obtemContato = function (req, res) {
        var idContato = req.params.id; //acessa os parametros enviados na requisição.
        var contato = contatos.filter(function (contato) {
            return contato._id == idContato;
        })[0];

        contato ? res.json(contato) : res.status(404).send('Contato nao encontrado');
    };

    //remove contato
    controller.removeContato = function (req, res) {
        var idContato = req.params.id; //acessa os parametros enviados na requisição.
        console.log("Api, remove contato" + idContato);
        contatos = contatos.filter(function (contato) {
            return contato._id != idContato;
        });
        res.status(204).end(); // status 204  - No content
    };

    controller.salvaContato = function (req, res) {
        var contato = req.body; //acessa o corpo da mensagem.
        contato = contato._id ? atualiza(contato) : adiciona(contato);
        res.json(contato);
    };

    function adiciona(contatoNovo) {
        contatoNovo._id = ++ID_CONTATO_INC;
        contatos.push(contatoNovo);
        return contatoNovo;
    }

    function atualiza(contatoAlterar) {
        contatos = contatos.map(function (contato) {
            if (contato._id == contatoAlterar._id) {
                contato = contatoAlterar;
            }
            return contato;
        });
        return contatoAlterar;
    }

    return controller;
};
