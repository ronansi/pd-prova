(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['pdService'];

    function ProdutoService(pdService) {

        this.getService = function(){
            var service = new pdService('produtos');

            service.rotaPesquisar = 'pesquisaProduto';
            service.rotaCadastrar = 'cadastroProduto';

            return service;
        }

    }

})();

