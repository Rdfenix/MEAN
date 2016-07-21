angular.module('contatooh').controller('ContatoController', function ($scope, $routeParams, $resource) {
    console.log($routeParams.contatoId);
    var Data = $resource('/contatos/:id');

    if ($routeParams.contatoId) {
        Data.get({
                id: $routeParams.contatoId
            },
            function (contato) {
                $scope.contato = contato;
            },
            function (erro) {
                $scope.mensagem = {
                    texto: "Nao foi possivel obter o contato"
                };
                console.log(erro);
            });
    } else {
        $scope.contato = {};
    }

    $scope.salva = function () {
        $scope.contato.$save()
            .then(function () {
                $scope.mensagem = {
                    texto: 'Salvo com sucesso'
                };
                //limpa o formulario
                $scope.contato = new Data();
            })
            .catch(function (erro) {
                $scope.mensagem = {
                    texto: 'Não foi possivel salvar'
                };
            });
    };

});
