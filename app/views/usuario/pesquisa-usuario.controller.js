(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('PesquisaUsuarioController', PesquisaUsuarioController);

    PesquisaUsuarioController.$inject = ['UsuarioService'];

    function PesquisaUsuarioController(UsuarioService) {
        var vm = this;
        vm.title = 'Pesquisa de usuários';

        vm.service = UsuarioService.getService();



    }

})();

