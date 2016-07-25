//var model = require('../models/contato');

module.exports = function (app) {
    var Model = app.models.contato;
    var controller = {};

    // Lista Contatos
    controller.listarContatos = function (req, res) {
        Model.find().exec()
            .then(function (contatos) {
                res.json(contatos);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            });
    };

    // Captura o contato
    controller.obtemContato = function (req, res) {
        var _id = req.params.id;
        Model.findById(_id).exec()
            .then(function (contato) {
                if (!contato) throw new Error("Contato não encontrado");
                res.json(contato);
            }, function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            });
    };

    //remove contato
    controller.removeContato = function (req, res) {
        var _id = req.params.id;
        Model.remove({
                "_id": _id
            }).exec()
            .then(function () {
                res.status(204).end();
            }, function (erro) {
                return console.error(erro);
            });
    };

    controller.salvaContato = function (req, res) {
        var _id = req.body._id;
        if (_id) {
            Model.findByIdAndUpdate(_id, req.body).exec()
                .then(function (contato) {
                    res.json(contato);
                }, function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                });
        } else {
            Model.create(req.body)
                .then(function (contato) {
                    res.status(201).json(contato);
                }, function (erro) {
                    console.error(erro);
                    res.status(500).json(erro);
                });
        }
    };

    return controller;
};
