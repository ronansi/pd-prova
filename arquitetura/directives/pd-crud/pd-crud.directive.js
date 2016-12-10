(function () {
    'use strict';

    angular
        .module('pdApp')
        .directive('pdCrud', pdCrud);

    pdCrud.$inject = [];

    /* @ngInject */
    function pdCrud() {
        return {
            link: link,
            restrict: 'E',
            transclude: true,
            templateUrl: 'arquitetura/directives/pd-crud/pd-crud.html',
            scope: {
                titulo: '@',
                service: '='
            }
        };

        function link(scope, element, attrs) {
            scope.formName = 'pdCrud' + scope.$id;
        }
    }

})();

