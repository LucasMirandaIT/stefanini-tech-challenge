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
    $scope.tipos = [];
    $scope.marcas = [];
    $scope.modelos = [];
    $scope.versoes = [];

    $scope.tipoSelecionado = '';
    $scope.marcaSelecionada = '';
    $scope.modeloSelecionado = '';
    $scope.versaoSelecionada = '';
    $scope.infosVersaoSelecionada = '';

    $scope.getMarcas = function () {
      $scope.loading = true;
      fipeService.getMarcas($scope.tipoSelecionado).then(response => {
        $scope.loading = false;
        $scope.marcas = response;
      });
    }
    $scope.getModelos = function () {
      $scope.loading = true;
      fipeService.getModelos($scope.tipoSelecionado, $scope.marcaSelecionada).then(response => {
        $scope.loading = false;
        $scope.modelos = response.modelos;
      });
    }
    $scope.getVersoes = function () {
      $scope.loading = true;
      fipeService.getVersoes($scope.tipoSelecionado, $scope.marcaSelecionada, $scope.modeloSelecionado).then(response => {
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
      fipeService.getInfoVersao($scope.tipoSelecionado, $scope.marcaSelecionada, $scope.modeloSelecionado, $scope.versaoSelecionada).then(response => {
        $scope.loading = false;
        let table = document.getElementsByClassName('fipe-table');
        table[0].classList.add('active');
        if (response.AnoModelo == 32000) {
          response.AnoModelo = new Date().getFullYear().toString();
        }
        $scope.infosVersaoSelecionada = response;
      });
    }

    $scope.setTipos = function () {
      $scope.loading = false;
      $scope.tipos = [
        { nome: 'Carros', codigo: 'carros' },
        { nome: 'Motos', codigo: 'motos' },
        { nome: 'Caminhões', codigo: 'caminhoes' }
      ]
    }

    function init() {
      $scope.loading = true;
      $scope.setTipos();
    }

    $scope.tipoClique = function(evento) {
      if(evento.detail == 1) {
        let table = document.getElementsByClassName('fipe-table');
        table[0].classList.remove('active');

        $scope.marcaSelecionada = '';
        $scope.modeloSelecionado = '';
        $scope.versaoSelecionada = '';
      }
    }

    $scope.atributosClique = function(evento) {
      console.log('Evento Clique:', evento);
      if(evento.detail == 1) {
        let table = document.getElementsByClassName('fipe-table');
        table[0].classList.remove('active');
      }
    }

    init();

  }
})();
