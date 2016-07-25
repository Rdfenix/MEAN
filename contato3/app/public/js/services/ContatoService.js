var service = angular.module('contatooh');

service.factory('Data', function ($resource) {
    return $resource('/contatos/:id');
});
