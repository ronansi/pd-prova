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

        vm.gridOptions = {
            enableColumnMenus: false,
            columnDefs:[
                {name: "Código", field: 'codigo'},
                {name: "Nome", field: 'nome'},
                {name: "E-mail", field: 'email'},
                {name: "Tipo de usuário", field: 'tipoUsuario', width: 150},
                {name: "Login", field: 'login'},
                {name: "Validade da senha", field: 'validadeSenha', width: 150, cellFilter: 'date: "dd/MM/yyyy"'}
            ]
        };

    }

})();

