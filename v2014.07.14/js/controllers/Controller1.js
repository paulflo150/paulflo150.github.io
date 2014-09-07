define(['./module'], function (module) {
    'use strict'
    module.controller('Controller1', ['$scope', '$state', '$timeout',
        function ($scope, $state, $timeout) {
            $scope.item = { fromView1: 'item from controller1 ...' };
            $scope.maxSize = { w: 150, h:150 };
            $scope.myImage = '';
            $scope.myCroppedImage = '';
            var handleFileSelect = function (evt) {
                var file = evt.currentTarget.files[0];
                var reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function () {
                        $scope.myImage = evt.target.result;
                    });
                };
                reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);

        }]);
});