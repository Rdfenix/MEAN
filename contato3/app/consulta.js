var MongoClient = require('mongodb').MongoClient,
    test = require('assert');
var ObjectId = require('mongodb').ObjectId;
var _idProcurado = new ObjectId("57924f417444f1c1e1e7f06c");

// Connection url
var url = 'mongodb://localhost:27017/contatooh';


// Connect using MongoClient
MongoClient.connect(url, function (err, db) {


    //if (err) console.log(err);
    test.equal(null, err);
    console.log("Conectado");

    var cursor = db.collection('contatos').findOne({
        _id: _idProcurado
    }, function (err, contato) {
        test.equal(null, err);
        console.log(contato);
    });

    console.log(cursor);
    // Get an additional db
    db.close();
});
