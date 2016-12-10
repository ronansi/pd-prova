(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService'];

    /* @ngInject */
    function LoginController(LoginService) {
        var vm = this;

        vm.title = 'Logue-se';
        vm.logar = LoginService.logar;

    }

})();

