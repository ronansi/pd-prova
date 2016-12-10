(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('pdService', pdService);

    pdService.$inject = ['AlertService', 'localStorageService', '$state'];

    /* @ngInject */
    function pdService(AlertService, localStorageService, $state) {
        return function(nomeLista){
            var self = this;

            self.nomeLista = nomeLista;

            self.salvar = salvar;
            self.limpar = limpar;
            self.excluir = excluir;
            self.listar = listar;
            self.get = get;

            self.onAntesSalvar = onAntesSalvar;
            self.onAntesExcluir = onAntesExcluir;
            self.onSalvarResult = onSalvarResult;
            self.onExcluirResult = onExcluirResult;

            self.entidade = {};

            self.rotaPesquisar = "";
            self.rotaCadastrar = "";

            initApplication();

            function salvar(){
                var isSalvar = self.onAntesSalvar();

                if(isSalvar === false) {
                    return;
                }

                if(self.entidade.id){
                    merge()
                }else{
                    insert();
                }

                $state.go(self.rotaPesquisar);

                AlertService.success('Registro salvo com sucesso!');

                onSalvarResult();
            }

            function insert(){
                setIdEntidade();

                var lista = localStorageService.get(self.nomeLista);

                if(!lista)
                    lista = [];

                lista.push(self.entidade);
                localStorageService.set(self.nomeLista, lista);
            }

            function merge(){
                var lista = localStorageService.get(self.nomeLista);

                for(var i = lista.length - 1; i >= 0; i--){
                    if(lista[i].id === self.entidade.id){
                        lista[i] = angular.copy(self.entidade);
                        break;
                    }
                }

                localStorageService.set(self.nomeLista, lista);
            }

            function excluir(id){
                var isExcluir = self.onAntesExcluir();

                if(isExcluir === false) {
                    return;
                }

                var lista = localStorageService.get(self.nomeLista);

                for(var i = lista.length - 1; i >= 0; i--){
                    if(lista[i].id === id){
                        lista.splice(i, 1);
                        break;
                    }
                }

                localStorageService.set(self.nomeLista, lista);

                AlertService.success('Registro excluido com sucesso!');

                onExcluirResult();
            }

            function listar(){
                return localStorageService.get(self.nomeLista);
            }

            function limpar(){
                self.entidade = {};
            }

            function initApplication(){
                var idSequence = localStorageService.get("idSequence");

                if(!idSequence){
                    localStorageService.set("idSequence", 1);
                }
            }

            function setIdEntidade(){
                var idSequence = localStorageService.get("idSequence");

                idSequence++;

                self.entidade.id = idSequence;

                localStorageService.set("idSequence", idSequence);
            }

            function get(id){
                var entidade = null;

                var lista = localStorageService.get(self.nomeLista);

                for(var i = lista.length - 1; i >= 0; i--){
                    if(lista[i].id === id){
                        entidade = angular.copy(lista[i]);
                        break;
                    }
                }

                return entidade;
            }

            function onAntesSalvar(){ return true; }
            function onAntesExcluir(){ return true; }
            function onSalvarResult() {}
            function onExcluirResult() {}

        }
    }

})();

