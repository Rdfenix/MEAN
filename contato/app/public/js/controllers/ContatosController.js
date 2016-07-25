var contactsController = angular.module('contatooh');

contactsController.controller('ContatosController', function ($scope, $resource) {
    $scope.filtro = '';
    $scope.contatos = [];

    var DataContato = $resource('/contatos/:id');

    function buscaContato() {
        DataContato.query(
            function (contatos) {
                $scope.contatos = contatos;
            },
            function (erro) {
                console.log("Não foi possivel obter a lista de contatos");
                console.log(erro);
            }
        );
    }

    buscaContato();

    $scope.remove = function (contato) {
        DataContato.delete({
            id: contato._id
        }, buscaContato, function (erro) {
            console.log('Não foi possivel remover o contato');
            console.log(erro);
        });
    };

});
