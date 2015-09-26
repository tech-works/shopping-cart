define(
  ['require',
   'angular',
   'angular-route',
   'angular-animate',
   'bootstrap',
   'js/controllers/all',
   'js/services/all',
   'js/directives/all'
  ], function (require, angular, ngRoute, ngAnimate, bootstrap) {
  'use strict';

  var app = angular.module('iscart', 
  						['ngRoute',
  						 'ngAnimate',
                          'iscart.controllers',
                          'iscart.services',
                          'iscart.directives']);

  app.config(['$routeProvider', '$locationProvider', '$httpProvider',
      function ($routeProvider, $locationProvider, $httpProvider) {
          //$httpProvider.responseInterceptors.push('httpInterceptor');

          $routeProvider
              .when('/', { templateUrl: './app/partials/dashboard.html' })
              .when('/aboutus', { templateUrl: './app/partials/nav/aboutus.html' })
              .when('/askus', { templateUrl: './app/partials/nav/askus.html' })
              .when('/signin', { templateUrl: './app/partials/nav/signin.html' })
              .otherwise({ redirectTo: '/' });

          //$locationProvider.html5Mode(true);
      }
  ]);

  app.init = function () {
	  angular.element(document).ready(function() {
	    angular.bootstrap(document, ['iscart']);
	  });
  };
  
  return app;
});