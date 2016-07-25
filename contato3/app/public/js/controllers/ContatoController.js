angular.module('contatooh').controller('ContatoController',
    function ($scope, $routeParams, Data) {
        if ($routeParams.contatoId) {
            Data.get({
                    id: $routeParams.contatoId
                },
                function (contato) {
                    $scope.contato = contato;
                },
                function (erro) {
                    $scope.mensagem = {
                        texto: 'Contato não existe. Novo contato.'
                    };
                }
            );
        } else {
            $scope.contato = new Contato();
        }

        $scope.salva = function () {
            $scope.contato.$save()
                .then(function () {
                    $scope.mensagem = {
                        texto: 'Salvo com sucesso'
                    };
                    // limpa o formulário
                    $scope.contato = new Data();
                })
                .catch(function (erro) {
                    $scope.mensagem = {
                        texto: 'Não foi possível salvar'
                    };
                });
        };

    });
