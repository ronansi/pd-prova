(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('UsuarioService', UsuarioService);

    UsuarioService.$inject = ['pdService'];

    function UsuarioService(pdService) {

        this.getService = function(){
            var service = new pdService('usuario');

            service.rotaPesquisar = 'pesquisaUsuario';
            service.rotaCadastrar = 'cadastroUsuario';

            return service;
        }

    }

})();

