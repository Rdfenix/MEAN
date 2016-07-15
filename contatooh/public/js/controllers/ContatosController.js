var contato = angular.module('contatooh');
contato.controller('ContatosController', function($scope, $resource){

  $scope.contatos = [];
  //$scope.total = 0;
  $scope.filtro = '';

  var Contato = $resource('/contatos/:id');


  function buscaContato(){
    Contato.query(function(contatos){
        $scope.contatos = contatos;
      }, function(erro){
          console.log("Não foi possivel obter a lista de contatos");
          console.log(erro);
      });
    }

    buscaContato();

    $scope.remove = function(contato){
      Contato.delete({id: contato._id});
      console.log(contato);
    }
  //var promise = Contato.query().$promise;

  /*promise
    .then(function(contatos){
      $scope.contatos = contatos;
    })
    .catch(function(erro){
        console.log("Não foi possivel obter a lista de contatos");
        console.log(erro);
    });
  $scope.incrementa = function(){
    $scope.total++;
  };*/

  /*$http.get('/contatos')
    .success(function(data){
        $scope.contatos = data;
    })
    .error(function(statusText){
        console.log("Não foi possivel obter a lista de contatos");
        console.log(statusText);
    });
  $scope.total  = 0;
  $scope.incrementa = function(){
    $scope.total++;
  };
  $scope.contatos = [
    {_id: 1, nome: "Rudnei Carlos de Oliveira", email: "rudnei@email.com.br"},
    {_id: 2, nome: "Marcos Roberto de Oliveira", email: "marcos@email.com.br"},
    {_id: 3, nome: "Ana Paula de Oliveira", email: "ana.paula@email.com.br"}
  ];

  $scope.filtro = '';*/

});
