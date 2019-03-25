(function(){
  'use strict';
  angular.module('stefaniniLucasApp').service('appService', appService);

  appService.$inject = [
      '$q',
      '$http',
      'AppConfig'
  ];

  function appService(
      $q,
      $http,
      AppConfig
  ){

      return {
        //retorno dos services
      }


  }

})();
