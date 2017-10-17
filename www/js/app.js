// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
var app = angular.module('directory.controllers', []);
angular.module('directory', ['ionic', 'directory.services', 'directory.controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            // .state('detalhes', {
            //     url: '/detalhes',
            //     templateUrl: 'templates/detalhes.html'
            // })

            .state('employee-index', {
                url: '/instituicoes',
                templateUrl: 'templates/employee-index.html',
                controller: 'InstituicoesListaCtrl'
            })

            .state('employee-detail', {
                url: '/instituicao/:employeeId',
                templateUrl: 'templates/detalhes.html',
                controller: 'DetalhesCtrl'
            })

            .state('employee-reports', {
                url: '/instituicao/:employeeId/doacao',
                templateUrl: 'templates/employee-reports.html',
                controller: 'EmployeeReportsCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/instituicoes');

    });
