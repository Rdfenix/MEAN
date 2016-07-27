angular.module('contatooh').controller('ContatosController', function ($scope, Contato) {
    $scope.contatos = [];
    $scope.total = 0;
    $scope.filtro = '';
    $scope.mensagem = {
        texto: ''
    };

    function buscaContatos() {
        Contato.query(function (contatos) {
            $scope.contatos = contatos;
            $scope.mensagem = {};
        }, function (erro) {
            console.log("Não foi possivel obter a lista de contatos");
            console.log(erro);
            $scope.mensagem = {
                texto: "Não foi possivel obter a lista de contatos"
            };
        });
    }

    buscaContatos();

    $scope.remove = function (contato) {
        console.log(contato);

        Contato.delete({
            id: contato._id
        }, buscaContatos, function (erro) {
            console.log('Não foi possivel remover o contato');
            console.log(erro);
            $scope.mensagem = {
                texto: "Não foi possivel remover o contato"
            };
        });
    };

});
