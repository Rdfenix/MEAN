var mongoose = require('mongoose');

module.exports = function () {
    /*Dentro de schema estamos definindo nos objetos nome e email os tipo aceitos neles*/
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        }
    });

    return mongoose.model('Contato', schema);
};
