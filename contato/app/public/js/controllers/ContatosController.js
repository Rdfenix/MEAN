var contatos = angular.module('contatooh');

contatos.controller('ContatosController', function($scope, $resource){
    $scope.contatos = [];
    $scope.filtro = '';

    var Data = $resource('/contatos/:id');

    function buscaContatos(){
        Data.query(function(contatos){
            $scope.contatos = contatos;
        },
      function(erro){
        console.log("Não foi possivel obter a lista de contatos");
        console.log(erro);
      });
    }

    buscaContatos();

    $scope.remove = function(contato){
      console.log(contato);
      Data.delete({id: contato._id},
      buscaContatos,
      function(erro){
        console.log("Nao foi possivel remover o contato");
        console.log(erro);
      });
    };

});
