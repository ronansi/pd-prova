angular.module("pdApp").config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){

    var pesquisaUsuario = {
        name: 'pesquisaUsuario',
        url: '/pesquisa-usuario',
        templateUrl: 'app/views/usuario/pesquisa-usuario.html',
        resolve: {
            carregarController: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['app/views/usuario/pesquisa-usuario.controller.js', 'app/views/usuario/usuario.service.js']);
            }]
        }
    };

    var cadastroUsuario = {
        name: 'cadastroUsuario',
        url: '/cadastro-usuario',
        templateUrl: 'app/views/usuario/cadastro-usuario.html',
        resolve: {
            carregarController: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['app/views/usuario/cadastro-usuario.controller.js', 'app/views/usuario/usuario.service.js']);
            }]
        }
    };

    $stateProvider
        .state('pesquisaUsuario', pesquisaUsuario)
        .state('cadastroUsuario', cadastroUsuario);

    $urlRouterProvider.otherwise('/pesquisa-usuario');

}