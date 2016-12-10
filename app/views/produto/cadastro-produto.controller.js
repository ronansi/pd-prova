(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('CadastroProdutoController', CadastroProdutoController);

    CadastroProdutoController.$inject = ['ProdutoService', 'AlertService', '$rootScope'];

    function CadastroProdutoController(ProdutoService, AlertService, $rootScope) {
        var vm = this;

        vm.title = 'Cadastro de produto';
        vm.service = ProdutoService.getService();

        vm.unidadeMedida = [
            {descricao: "Litro", valor: "Litro"},
            {descricao: "Quilograma", valor: "Quilograma"},
            {descricao: "Unidade", valor: "Unidade"},
            {descricao: "Metro", valor: "Metro"}
        ];

        init();

        function init(){
            var idProdutoEdicao = $rootScope.idEdicao;

            if(idProdutoEdicao){
                vm.service.entidade = vm.service.get(idProdutoEdicao);
                delete $rootScope.idEdicao;
            }
        }
    }

})();

