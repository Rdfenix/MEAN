var mongoose = require('mongoose');

module.exports = function (uri) {

    mongoose.connect(uri);

    mongoose.connection.on('connected', function () {
        console.log("Mogoose! Conectado em " + uri);
    });

    mongoose.connection.on('disconnected', function () {
        console.log("Mogoose! Desconectado de " + uri);
    });

    mongoose.connection.on('error', function () {
        console.log("Mogoose! Erro na conexao " + uri);
    });




};
