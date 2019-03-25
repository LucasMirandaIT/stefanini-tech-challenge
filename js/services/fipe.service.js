(function () {
  'use strict';
  angular.module('stefaniniLucasApp').service('fipeService', fipeService);

  fipeService.$inject = [
    '$http',
    'AppConfig'
  ];

  function fipeService(
    $http,
    AppConfig
  ) {

    return {
      getMarcas: _getMarcas,
      getModelos: _getModelos,
      getVersoes: _getVersoes,
      getInfoVersao: _getInfoVersao
    }

    function _getMarcas(idTipo) {
      return $http.get(AppConfig.hostFipe + idTipo + '/marcas').then(function (response) {
        return response.data;
      })
    }

    function _getModelos(idTipo, idMarca) {
      return $http.get(AppConfig.hostFipe + idTipo + '/marcas/' + idMarca + '/modelos').then(function (response) {
        return response.data;
      })
    }

    function _getVersoes(idTipo, idMarca, idModelo) {
      return $http.get(AppConfig.hostFipe + idTipo + '/marcas/' + idMarca + '/modelos/' + idModelo + '/anos').then(function (response) {

        return response.data;
      })
    }

    function _getInfoVersao(idTipo, idMarca, idModelo, idVersao) {
      return $http.get(AppConfig.hostFipe + idTipo + '/marcas/' + idMarca + '/modelos/' + idModelo + '/anos/' + idVersao).then(function (response) {
        return response.data;
      })
    }

  }

})();
