define(['./module'], function (module) {
    'use strict'
    module.controller('Controller2', ['$scope', '$state', '$timeout',
        function ($scope, $state, $timeout) {
            $scope.item = { fromView2: 'item from controller2 ...' };
        }]);
});