var express = require('express');
var load = require('express-load');
//var home = require('../app/routes/home');
module.exports = function() {
    var app = express();
    app.set('porta', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views/public');

    //home(app);
    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

    return app;
};
