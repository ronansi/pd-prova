(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('PesquisaProdutoController', PesquisaProdutoController);

    PesquisaProdutoController.$inject = ['ProdutoService'];

    function PesquisaProdutoController(ProdutoService) {
        var vm = this;
        vm.title = 'Pesquisa de produtos';

        vm.service = ProdutoService.getService();

        vm.gridOptions = {
            enableColumnMenus: false,
            columnDefs:[
                {name: "Código", field: 'codigo'},
                {name: "Nome", field: 'nome'},
                {name: "Unidade de medida", field: 'unidadeMedida', width: 200},
                {name: "Ativo", field: 'ativo'}
            ]
        };
    }

})();

