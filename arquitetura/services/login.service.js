(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('LoginService', LoginService);

    LoginService.$inject = ['localStorageService', 'UsuarioService', 'AlertService', '$state'];

    /* @ngInject */
    function LoginService(localStorageService, UsuarioService, AlertService, $state) {

        var self = this;

        self.getUsuarioLogado = getUsuarioLogado;
        self.logar = logar;

        function logar(login, senha){
            var listaUsuarios = UsuarioService.getService().listar();

            var usuarioLogado = null;

            for(var i = 0; i < listaUsuarios.length; i++){
                if(listaUsuarios[i].login === login && listaUsuarios[i].senha === senha){
                    usuarioLogado = listaUsuarios[i];
                    break;
                }
            }
		
		//Teste do ronan

            if(usuarioLogado){
                localStorageService.set("usuarioLogado", usuarioLogado);
                $state.go("pesquisaProduto");
            }else{
                AlertService.error("Usuário ou senha inválidos!");
            }
        }

        function getUsuarioLogado(){
            return localStorageService.get("usuarioLogado");
        }

    }

})();

