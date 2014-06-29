'use strict';

angular
  .module('proconApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'highcharts-ng'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });