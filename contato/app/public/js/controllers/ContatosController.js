var contatos = angular.module('contatooh');

contatos.controller('ContatosController', function($scope){
    $scope.total = 0;
    $scope.incrementa = function(){
      $scope.total++;
    };

    $scope.contatos = [
      {_id: 1, nome: "Rudnei Carlos de Oliveira", email: "rudnei@email.com.br"},
      {_id: 2, nome: "Marcos Roberto de Oliveira", email: "marcos@email.com.br"},
      {_id: 3, nome: "Ana Paula de Oliveira", email: "ana.paula@email.com.br"},
      {_id: 4, nome: "Roosevelt Celso de Oliveira", email: "roosevelt@email.com.br"}
    ];

    $scope.filtro = '';
});
