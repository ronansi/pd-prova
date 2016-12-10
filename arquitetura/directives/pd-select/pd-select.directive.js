(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdSelect', pdSelect);

    function pdSelect() {
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-select/pd-select.html',
            scope: {
                label: '@',
                provider: '=',
                ngModel: '=',
                colspan: "@",
                ngRequired: '=',
                propriedadeValor: '@',
                propriedadeDescricao: '@'

            }
        };

        function link(scope, element, attrs) {
            scope.idInputSelect = 'pdSelect' + scope.$id;

            scope.colspan = 'col-md-' + (scope.colspan || '3');

            scope.propriedadeValor = scope.propriedadeValor || 'valor';
            scope.propriedadeDescricao = scope.propriedadeDescricao || 'descricao';
        }
    }
})();

