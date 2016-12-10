(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdInputText', pdInputText);

    function pdInputText() {
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-input-text/pd-input-text.html',
            scope: {
                label: '@',
                placeholder: '@',
                ngModel: '=',
                colspan: "@",
                tipo: '@'
            }
        };

        function link(scope, element, attrs) {
            scope.idInputText = 'pdInputText' + scope.$id;

            scope.classColspan = 'col-md-' + (scope.colspan || '3');

            scope.type = scope.tipo || 'text';
        }
    }
})();

