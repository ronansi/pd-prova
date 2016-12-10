(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('CadastroUsuarioController', CadastroUsuarioController);

    CadastroUsuarioController.$inject = ['UsuarioService'];

    function CadastroUsuarioController(UsuarioService) {
        var vm = this;

        vm.title = 'Cadastro de usuário';

        vm.service = UsuarioService.getService();

        vm.tipoUsuario = [
            {descricao: "Supervisor", valor: "supervisor"},
            {descricao: "Normal", valor: "normal"}
        ];
    }

})();

