(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$state', '$rootScope', 'AlertService'];

    function IndexController($state, $rootScope, AlertService) {
        var vm = this;

        vm.tituloAplicacao = 'Prova AngularJS';

        vm.abrirPagina = abrirPagina;

        function abrirPagina(caminhoPagina){
            $state.go(caminhoPagina);
        }

        $rootScope.$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams, error) {
            if (error === "deslogado") {
                $state.go("login");
                AlertService.error("Você deve estar logado para acessar esta pagina!");
            }
        });
    }

})();

