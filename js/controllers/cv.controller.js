(function () {
    'use strict';
    angular.module('stefaniniLucasApp').controller('curriculoCtrl', curriculoCtrl);

    curriculoCtrl.$inject = [
        '$scope',
        '$sce',
        '$http'
    ];

    function curriculoCtrl(
        $scope,
        $sce,
        $http
    ) {

        $scope.loading = false;
        $scope.cvUrl = '';

        $scope.getCV = function () {
            $scope.loading = true;
            $http.get('../../CV.pdf', { responseType: 'arraybuffer' }).success(function (response) {
                $scope.loading = false;
                var file = new Blob([response], { type: 'application/pdf' });
                var fileURL = URL.createObjectURL(file);
                $scope.cvUrl = $sce.trustAsResourceUrl(fileURL);
            });
        }

        function init() {
            $scope.getCV();
        }

        init();
    }
})();
