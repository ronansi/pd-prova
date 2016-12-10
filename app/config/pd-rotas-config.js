angular.module("pdApp").config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider){

    var pesquisaUsuario = {
        name: 'pesquisaUsuario',
        url: '/pesquisa-usuario',
        templateUrl: 'app/views/usuario/pesquisa-usuario.html',
        resolve: {
            loadFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['app/views/usuario/pesquisa-usuario.controller.js', 'app/views/usuario/usuario.service.js']);
            }]
        }
    };

    var cadastroUsuario = {
        name: 'cadastroUsuario',
        url: '/cadastro-usuario',
        templateUrl: 'app/views/usuario/cadastro-usuario.html',
        resolve: {
            loadFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['app/views/usuario/cadastro-usuario.controller.js', 'app/views/usuario/usuario.service.js']);
            }]
        }
    };

    var cadastroProduto = {
        name: 'cadastroProduto',
        url: '/cadastro-produto',
        templateUrl: 'app/views/produto/cadastro-produto.html',
        resolve: {
            loadFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['app/views/produto/cadastro-produto.controller.js', 'app/views/produto/produto.service.js']);
            }],
            security: ['LoginService', '$q', function (LoginService, $q) {
                var usuarioLogado = LoginService.getUsuarioLogado();

                if(!usuarioLogado){
                    return $q.reject("deslogado");
                }
            }]
        }
    };

    var pesquisaProduto = {
        name: 'pesquisaProduto',
        url: '/pesquisa-produto',
        templateUrl: 'app/views/produto/pesquisa-produto.html',
        resolve: {
            loadFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['app/views/produto/pesquisa-produto.controller.js', 'app/views/produto/produto.service.js']);
            }],
            security: ['LoginService', '$q', function (LoginService, $q) {
                var usuarioLogado = LoginService.getUsuarioLogado();

                if(!usuarioLogado){
                    return $q.reject("deslogado");
                }
            }]
        }
    };

    var login = {
        name: 'login',
        url: '/login',
        templateUrl: 'pd-login.html',
        resolve: {
            loadFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['app/controller/login.controller.js', 'arquitetura/services/login.service.js']);
            }]
        }
    };

    $stateProvider
        .state('pesquisaUsuario', pesquisaUsuario)
        .state('cadastroUsuario', cadastroUsuario)
        .state('pesquisaProduto', pesquisaProduto)
        .state('cadastroProduto', cadastroProduto)
        .state('login', login);

    $urlRouterProvider.otherwise('/pesquisa-usuario');

}