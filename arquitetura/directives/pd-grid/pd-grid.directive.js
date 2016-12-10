(function () {
    'use strict';

    angular
        .module('pdApp')
        .directive('pdGrid', pdGrid);

    pdGrid.$inject = [];

    /* @ngInject */
    function pdGrid() {
        return {
            link: link,
            restrict: 'E',
            transclude: true,
            controller: pdGridController,
            template: '<div ui-grid="gridOptions"></div>',
            scope: {
                service: '=',
                options: '=',
                showButtonEdit: '=',
                showButtonDelete: '='
            }
        };

        function link(scope, element, attrs) {

            if(!scope.options){
                scope.gridOptions = {
                    columnDefs: []
                };
            }else{
                scope.gridOptions = scope.options;
            }

            scope.gridOptions.data = scope.service.listar();
            scope.gridOptions.enableFiltering = true;

            if(scope.showButtonEdit !== false || scope.showButtonDelete !== false) {
                scope.gridOptions.columnDefs.push({
                    name: '',
                    field: 'buttons',
                    enableFiltering: false,
                    cellTemplate: "arquitetura/directives/pd-grid/templates/cell-template-button.html",
                    width: 60
                });
            }
        }
    }

    pdGridController.$inject = ['$scope', '$state', '$rootScope'];
    function pdGridController($scope, $state, $rootScope){

        $scope.atualizarLista = function(){
            $scope.gridOptions.data = $scope.service.listar();
        };

        $scope.editar = function(entidade){
            $rootScope.idEdicao = entidade.id;
            $state.go($scope.service.rotaCadastrar);
        }

    }


})();

