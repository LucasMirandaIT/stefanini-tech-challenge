(function(){
  'use strict';
  angular.module('siteTrust').service('fipeService', fipeService);

  fipeService.$inject = [
      '$q',
      '$http',
      'AppConfig'
  ];

  function fipeService(
      $q,
      $http,
      AppConfig
  ){

    	// marcas.json
	// http://fipeapi.appspot.com/api/1/carros/veiculos/{{idMarca}}.json
	// http://fipeapi.appspot.com/api/1/carros/veiculo/{{idMarca}}/{{idCarro}}.json
	// http://fipeapi.appspot.com/api/1/carros/veiculo/{{idMarca}}/{{idCarro}}/{{versionKey}}.json

      return {
        getMarcas: _getMarcas,
        getModelos: _getModelos,
        getVersoes: _getVersoes,
        getInfoVersao: _getInfoVersao
        //retorno dos services
      }

      function _getMarcas() {
        return $http.get(AppConfig.hostFipe + 'marcas.json').then(function(response) {
          return response.data;
        })
      }
      function _getModelos(idMarca) {
        return $http.get(AppConfig.hostFipe + 'veiculos/' + idMarca +'.json').then(function(response) {
          return response.data;
        })
      }
      function _getVersoes(idMarca, idModelo) {
        return $http.get(AppConfig.hostFipe + 'veiculo/' + idMarca + '/' + idModelo +'.json').then(function(response) {
          return response.data;
        })
      }
      function _getInfoVersao(idMarca, idModelo, idVersao) {
        return $http.get(AppConfig.hostFipe + 'veiculo/' + idMarca + '/' + idModelo + '/' + idVersao + '.json').then(function(response) {
          return response.data;
        })
      }

  }

})();
