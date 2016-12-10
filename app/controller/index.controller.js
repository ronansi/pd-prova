(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state'];

    function IndexController($state) {
        var vm = this;

        vm.tituloAplicacao = 'Prova AngularJS';

        vm.abrirPagina = abrirPagina;

        function abrirPagina(caminhoPagina){
            $state.go(caminhoPagina);
        }
    }

})();

