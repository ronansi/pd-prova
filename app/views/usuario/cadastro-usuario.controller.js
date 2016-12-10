(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('CadastroUsuarioController', CadastroUsuarioController);

    CadastroUsuarioController.$inject = ['UsuarioService', 'AlertService', '$rootScope'];

    function CadastroUsuarioController(UsuarioService, AlertService, $rootScope) {
        var vm = this;

        vm.title = 'Cadastro de usuário';
        vm.service = UsuarioService.getService();
        vm.service.onAntesSalvar = beforeSave;

        vm.tipoUsuario = [
            {descricao: "Supervisor", valor: "supervisor"},
            {descricao: "Normal", valor: "normal"}
        ];

        init();

        function beforeSave(){
            var isSalvar = true;

            if(vm.service.entidade.senha != vm.confirmarSenha){
                AlertService.error("As senhas digitadas são diferentes!");
                isSalvar = false;
            }

            return isSalvar;
        }

        function init(){
            var idUsuarioEdicao = $rootScope.idEdicao;

            if(idUsuarioEdicao){
                vm.service.entidade = vm.service.get(idUsuarioEdicao);
                vm.service.entidade.validadeSenha = new Date(vm.service.entidade.validadeSenha);
                vm.confirmarSenha = angular.copy(vm.service.entidade.senha);
                delete $rootScope.idEdicao;
            }
        }
    }

})();

