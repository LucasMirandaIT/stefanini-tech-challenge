(function () {
  'use strict';
  angular.module('siteTrust').controller('fipeCtrl', fipeCtrl);

  fipeCtrl.$inject = [
    '$scope',
    'fipeService'
  ];

  function fipeCtrl(
    $scope,
    fipeService
  ) {
    $scope.marcas = [];
    $scope.modelos = [];
    $scope.versoes = [];
    
    $scope.marcaSelecionada = '';
    $scope.modeloSelecionado = '';
    $scope.versaoSelecionada = '';
    $scope.infosVersaoSelecionada = '';

    $scope.getModelos = function () {
      fipeService.getModelos($scope.marcaSelecionada).then(response => {
        $scope.modelos = response;
      });
    }
    $scope.getVersoes = function () {
      fipeService.getVersoes($scope.marcaSelecionada, $scope.modeloSelecionado).then(response => {
        $scope.versoes = response;
      });
    }
    $scope.getInformacoesVersao = function () {
      fipeService.getInfoVersao($scope.marcaSelecionada, $scope.modeloSelecionado, $scope.versaoSelecionada).then(response => {
        $scope.infosVersaoSelecionada = response;
      });
    }

    function init() {
      fipeService.getMarcas().then(response => {
        $scope.marcas = response;
      });
    }

    init();

  }
})();
