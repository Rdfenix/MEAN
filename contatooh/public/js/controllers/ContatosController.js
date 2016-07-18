var contato = angular.module('contatooh');
contato.controller('ContatosController', function($scope, $resource){

  $scope.contatos = [];
  //$scope.total = 0;
  $scope.filtro = '';

  $scope.mensagem = {texto: ''};

  var Contato = $resource('/contatos/:id');

  function buscaContato(){
    Contato.query(function(contatos){
        $scope.contatos = contatos;
        $scope.mensagem = {};
      }, function(erro){
          console.log("Não foi possivel obter a lista de contatos");
          console.log(erro);
          $scope.mensagem = {
            texto: 'Não foi possivel obter a lista de contatos'
          };
      });
    }

    buscaContato();

    $scope.remove = function(contatos){
      Contato.delete({id: contatos._id}, buscaContato, function(erro){
        console.log("Não foi possivel remover o contato");
        console.log(erro);
        $scope.mensagem = {
          texto: "Não foi possivel remover o contato"
        };
      });
    };
    /*$scope.remove = function(contatos){
      console.log(contato);
      var promise = Contato.delete({id: contatos._id}).$promise;
      promise
        .then(buscaContato)
        .catch(function(erro){
            console.log("Não foi possivel remover o contato");
            console.log(erro);
        });
    };*/
});
