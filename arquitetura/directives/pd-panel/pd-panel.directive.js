(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdPanel', pdPanel);

    function pdPanel() {
        return {
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-panel/pd-panel.html',
            transclude: {
                header: '?pdPanelHeader',
                body: '?pdPanelBody',
                footer: '?pdPanelFooter'
            },
            scope: {
                classPanel: '@',
                showFooter: '='
            },
            link: link
        };

        function link(scope, element, attrs){
            scope.classePanel = scope.classPanel || 'panel-default';
        }
    }
})();

