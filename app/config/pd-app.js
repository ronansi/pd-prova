(function(){

    angular.module('pdAppArquitetura', []);
    angular.module("pdApp", [
        'ngMessages',
        'ngAnimate',
        'toastr',
        'ui.grid',
        'ui.router',
        'oc.lazyLoad',
        'pdAppArquitetura',
        'ngTouch',
        'ui.bootstrap',
        'ui.bootstrap.tpls',
        'ui.mask',
        'LocalStorageModule',
        'angular-loading-bar'
    ]).config(config);

    config.$inject = ['cfpLoadingBarProvider'];
    function config(cfpLoadingBarProvider){

        cfpLoadingBarProvider.includeSpinner = false;

    }

})();