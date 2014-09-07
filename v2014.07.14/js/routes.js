define(['angular', 'app'], function (angular, app) {
    'use strict';

    var app = app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $stateProvider.state('views', {
                
                url: "/views",
                title: 'Dashboard',
                templateUrl: 'dashboard.html',
data:
                    {
                        ncyBreadcrumbLabel: 'Main'
                    }
            });
            $stateProvider.state('views.view1', {
                url: "/dashboard",
                title: 'Dashboard',
                templateUrl: 'views/dashboard/index.html',
                data:
                    {
                        ncyBreadcrumbLabel: 'View 1 {{ item.fromView1 }}'
                    }
            });
            $stateProvider.state('views.view2', {
                url: "/dashboard2",
                title: 'Dashboard2',
                templateUrl: 'views/dashboard/index2.html',
                data:
                    {
                        ncyBreadcrumbLabel: 'View 2 {{ item.fromView2 }}'
                    }
            });

           
        }
    ]);
    return app;
});