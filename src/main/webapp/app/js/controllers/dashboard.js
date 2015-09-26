define(['jquery', './controllers'], function ($, controllers) {
  'use strict';
  
  var dashboardController = controllers.controller('dashboardController', [
  '$scope',
  function($scope){

	  console.log('success!!!');
	  $scope.init = function() {
		  console.log('init...');
		  $scope.isOpen = false;
		  $scope.isDetail = false;
		  $('.carousel').carousel();
	  };
	  
	  $scope.sidebar = function() {
		  $scope.isOpen = !$scope.isOpen;
	  };
	  
	  $scope.showDetail = function() {
		  $scope.isDetail = !$scope.isDetail;
		  console.log('detail...'+ $scope.isDetail);
	  };
  }])
  .config([
    '$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
    	 $routeProvider
         .when('/ac', { templateUrl: './app/partials/nav/signin.html', controller: 'dashboardController' });
    }]);
  
  return dashboardController;
});