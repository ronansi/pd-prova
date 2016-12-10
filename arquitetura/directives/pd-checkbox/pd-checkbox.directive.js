(function () {
    'use strict';

    angular
        .module('pdApp')
        .directive('pdCheckbox', pdCheckbox);

    function pdCheckbox() {
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-checkbox/pd-checkbox.html',
            scope: {
                label: '@',
                ngModel: '=',
                colspan: "@"
            }
        };

        function link(scope, element, attrs) {
            scope.idCheckbox = 'pdCheckbox' + scope.$id;

            scope.classColspan = 'col-md-' + (scope.colspan || '3');
        }
    }
})();

