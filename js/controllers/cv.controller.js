(function () {
    'use strict';
    angular.module('siteTrust').controller('curriculoCtrl', curriculoCtrl);

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

        $scope.cvUrl = '';

        $scope.getCV = function () {
            $http.get('../../CV.pdf', { responseType: 'arraybuffer' }).success(function (response) {
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
