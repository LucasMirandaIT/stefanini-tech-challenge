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
    $scope.loading = false;
    $scope.marcas = [];
    $scope.modelos = [];
    $scope.versoes = [];

    $scope.marcaSelecionada = '';
    $scope.modeloSelecionado = '';
    $scope.versaoSelecionada = '';
    $scope.infosVersaoSelecionada = '';

    $scope.getModelos = function () {
      $scope.loading = true;
      fipeService.getModelos($scope.marcaSelecionada).then(response => {
        $scope.loading = false;
        $scope.modelos = response;
      });
    }
    $scope.getVersoes = function () {
      $scope.loading = true;
      fipeService.getVersoes($scope.marcaSelecionada, $scope.modeloSelecionado).then(response => {
        $scope.loading = false;
        $scope.versoes = response;
      });
    }
    $scope.getInformacoesVersao = function () {
      $scope.loading = true;
      fipeService.getInfoVersao($scope.marcaSelecionada, $scope.modeloSelecionado, $scope.versaoSelecionada).then(response => {
        $scope.loading = false;
        let table = document.getElementsByClassName('fipe-table');
        table[0].classList.add('active');
        if (response.ano_modelo == 32000) {
          response.ano_modelo = new Date().getFullYear().toString();
        }
        $scope.infosVersaoSelecionada = response;
      });
    }

    function init() {
      $scope.loading = true;
      fipeService.getMarcas().then(response => {
        $scope.loading = false;
        $scope.marcas = response;
      });
    }

    $scope.marcaClique = function(evento) {
      if(evento.detail == 1) {
        let table = document.getElementsByClassName('fipe-table');
        table[0].classList.remove('active');
      }
    }

    init();

  }
})();
