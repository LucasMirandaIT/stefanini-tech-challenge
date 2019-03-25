(function () {
  'use strict';
  angular.module('stefaniniLucasApp').service('fipeService', fipeService);

  fipeService.$inject = [
    '$q',
    '$http',
    'AppConfig'
  ];

  function fipeService(
    $q,
    $http,
    AppConfig
  ) {

    return {
      getMarcas: _getMarcas,
      getModelos: _getModelos,
      getVersoes: _getVersoes,
      getInfoVersao: _getInfoVersao
      //retorno dos services
    }

    function _getMarcas() {
      return $http.get(AppConfig.hostFipe + 'marcas').then(function (response) {
        return response.data;
      })
    }
    function _getModelos(idMarca) {
      return $http.get(AppConfig.hostFipe + 'marcas/' + idMarca + '/modelos').then(function (response) {
        return response.data;
      })
    }
    function _getVersoes(idMarca, idModelo) {
      return $http.get(AppConfig.hostFipe + 'marcas/' + idMarca + '/modelos/' + idModelo + '/anos').then(function (response) {

        return response.data;
      })
    }
    function _getInfoVersao(idMarca, idModelo, idVersao) {
      return $http.get(AppConfig.hostFipe + 'marcas/' + idMarca + '/modelos/' + idModelo + '/anos/' + idVersao).then(function (response) {
        return response.data;
      })
    }

  }

})();
