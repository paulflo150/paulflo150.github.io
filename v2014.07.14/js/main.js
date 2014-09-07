require.config({
    baseUrl: 'v2014.07.14/js',
    waitSeconds: 0,
    
    paths: {
        'angular': '../vendor/angular/angular',
        'angular-route': '../vendor/angular/angular-route',
        'angular-ui-router': '../vendor/angular/angular-ui-router',
        'angular-breadcrumb': '../vendor/angular/angular-breadcrumb',
        'ng-img-crop': '../vendor/angular/ng-img-crop',
        'jquery': '../vendor/jquery/jquery-2.1.1'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            'exports': 'angular'
        },
        'angular-route': ['angular'],
        'angular-breadcrumb':['angular'],
        'angular-ui-router': ['angular'],
        'ng-img-crop': ['angular']
    }
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'angular',
    'app',        
    'routes',
    'angular-breadcrumb',
    'ng-img-crop'
], function(angular, app, routes) {
    'use strict';
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});