var contato = angular.module('contatooh');
contato.controller('ContatoController', function($scope, $routeParams){
  console.log($routeParams.contatoId);
});
