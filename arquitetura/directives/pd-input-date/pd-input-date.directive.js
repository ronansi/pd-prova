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
            scope: {
                label: '@',
                placeholder: '@',
                ngModel: '=',
                colspan: "@",
                tipo: '@',
                formato: '@'
            }
        };

        function link(scope, element, attrs) {
            scope.idInputDate = 'pdInputDate' + scope.$id;

            scope.classColspan = 'col-md-' + (scope.colspan || '3');

        }
    }

    ControllerName.$inject = [];

    /* @ngInject */
    function ControllerName() {

        var vm = this;

        this.abrirPopup = function(){
            vm.popup.opened = true;
        }

    }

})();

