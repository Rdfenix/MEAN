var main = angular.module('contatooh', ['ngRoute', 'ngResource']);

main.config(function ($routeProvider) {
    $routeProvider.when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    });
    $routeProvider.when('/contatos/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });
    $routeProvider.otherwise({
        redirectTo: '/contatos'
    });
});
