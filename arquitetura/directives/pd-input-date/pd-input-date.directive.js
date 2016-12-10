(function () {
    'use strict';

    angular
        .module('pdApp')
        .directive('pdInputDate', pdInputDate);

    function pdInputDate() {
        return {
            bindToController: true,
            controller: ControllerName,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-input-date/pd-input-date.html',
            scope: {
                label: '@',
                placeholder: '@',
                ngModel: '=',
                colspan: "@",
                formato: '@'
            }
        };

        function link(scope, element, attrs) {
            scope.idInputDate = 'pdInputDate' + scope.$id;

            scope.classColspan = 'col-md-' + (scope.colspan || '3');

        }
    }

    /* @ngInject */
    function ControllerName() {

        var vm = this;

        this.abrirPopup = function(){
            vm.popupOpened = true;
        }

    }

})();

