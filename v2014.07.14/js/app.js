define([
    'angular',
    'controllers/index',
    'angular-ui-router'
], function(angular) {
    'use strict';

    // Declare app level module which depends on filters, and services

    var app = angular.module('myApp', [
        'ui.router',
        'ncy-angular-breadcrumb',
        'myApp.controllers',
        'ngImgCrop'
    ]);
    app.run(['$location',
        function($location) {

        }
    ]);

    return app;
});