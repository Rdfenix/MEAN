angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, $resource){
  console.log($routeParams.contatoId);
  var Data = $resource('/contatos/:id');

  if($routeParams.contatoId){
    Data.get({id: $routeParams.contatoId},
    function(contato){
      $scope.contato = contato;
    },
    function(erro){
      $scope.mensagem = {
        texto: "Nao foi possivel obter o contato"
      };
      console.log(erro);
    });
  }else {
    $scope.contato = {};
  }
});
