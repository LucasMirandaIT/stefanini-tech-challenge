(function () {
  'use strict';
  angular.module('stefaniniLucasApp').controller('fipeCtrl', fipeCtrl);

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
        $scope.modelos = response.modelos;
      });
    }
    $scope.getVersoes = function () {
      $scope.loading = true;
      fipeService.getVersoes($scope.marcaSelecionada, $scope.modeloSelecionado).then(response => {
        response.forEach(versao => {
          let zeroKM = versao.nome.includes('32000');
          if (zeroKM) {
            versao.nome = versao.nome.replace('32000', 'Zero KM');
          }
        });
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
        if (response.AnoModelo == 32000) {
          response.AnoModelo = new Date().getFullYear().toString();
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
