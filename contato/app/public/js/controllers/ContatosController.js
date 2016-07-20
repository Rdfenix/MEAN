var contatos = angular.module('contatooh');

contatos.controller('ContatosController', function($scope, $http){
    $scope.contatos = [];
    $scope.total = 0;
    $scope.filtro = '';

    $scope.incrementa = function(){
      $scope.total++;
    };
    //retorna os dados vindos do servidor - nesse caso o express.
    $http.get('/contatos')
    .success(function(data){
      $scope.contatos = data;
    })
    .error(function(statusText){
      console.log("Não foi possivel obeter a lista de contatos");
      console.log(statusText);
    });

});
