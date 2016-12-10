(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('pdService', pdService);

    pdService.$inject = ['$http', '$q', 'AlertService'];

    /* @ngInject */
    function pdService($http, $q, AlertService) {
        return function(prefixKey){
            var self = this;

            self.prefixKey = prefixKey;

            self.salvar = salvar;
            self.limpar = limpar;
            self.excluir = excluir;

            self.onAntesSalvar = onAntesSalvar;
            self.onAntesExcluir = onAntesExcluir;
            self.onSalvarResult = onSalvarResult;
            self.onSalvarFault = onSalvarFault;
            self.onSalvarResult = onSalvarResult;
            self.onExcluirFault = onExcluirFault;

            self.metodoSalvar = 'salvar';
            self.metodoExcluir = 'excluir';
            self.entidade = {};

            self.rotaPesquisar = "";
            self.rotaCadastrar = "";

            function salvar(){
                var isSalvar = self.onAntesSalvar();

                if(isSalvar === false) {
                    return $q.reject();
                }

                var deferred = $q.defer();

                $http.post('/rest/' + self.controller + '/' + self.metodoSalvar, self.entidade).then(resultSalvar, faultSalvar);

                function resultSalvar(response){
                    AlertService.success('Registro salvo com sucesso!');

                    deferred.resolve(response);

                    onSalvarResult();
                }

                function faultSalvar(rejection){
                    AlertService.error('Falha ao salvar o registro, causa:' + rejection.message);

                    deferred.reject(rejection);

                    onSalvarFault();
                }

            }

            function excluir(){
                var isExcluir = self.onAntesExcluir();

                if(isExcluir === false) {
                    return $q.reject();
                }

                var deferred = $q.defer();

                $http.delete('/rest/' + self.controller + '/' + self.metodoExcluir + '/' + self.entidade.id).then(resultExcluir, faultExcluir);

                function resultExcluir(response){
                    AlertService.success('Registro excluido com sucesso!');

                    deferred.resolve(response);

                    onExcluirResult();
                }

                function faultExcluir(rejection){
                    AlertService.error('Falha ao excluir o registro, causa:' + rejection.message);

                    deferred.reject(rejection);

                    onExcluirFault();
                }

            }

            function limpar(){
                self.entidade = {};
            }

            function onAntesSalvar(){ return true; }
            function onAntesExcluir(){ return true; }
            function onSalvarResult() {}
            function onSalvarFault() {}
            function onExcluirResult() {}
            function onExcluirFault() {}

        }
    }

})();

