var service = angular.module('contatooh');

service.factory('Contato', function ($resource) {
    return $resource('/contatos/:id');
});
