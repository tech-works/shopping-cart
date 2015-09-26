'use strict';

//Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
	'appDir': 'webapp/',
    'baseUrl': './lib',
    'paths': {
      'app': '../app',
      'js': '../app/js',
      'jquery': '../app/vendor-libs/jquery',
      'bootstrap': '../app/bootstrap/js/bootstrap',
      'angular': '../app/vendor-libs/angular',
      'angular-animate': '../app/vendor-libs/angular-animate',
      'angular-cookies': '../app/vendor-libs/angular-cookies',
      'angular-mocks': '../app/vendor-libs/angular-mocks',
      'angular-resource': '../app/vendor-libs/angular-resource',
      'angular-route': '../app/vendor-libs/angular-route',
      'angular-ui-router': '../app/vendor-libs/angular-ui-router',
      'lodash': '../app/vendor-libs/lodash'
    },
    'shim': {
    	'angular' : { exports: 'angular' },
        'angular-animate': { deps: ['angular'] },
        'angular-cookies': { deps: ['angular'] },
        'angular-mocks': { deps: ['angular'] },
        'angular-resource': { deps: ['angular'] },
        'angular-route': { deps: ['angular'] },
        'angular-ui-router': { deps: ['angular'] },
        'bootstrap' : { deps :['jquery'] },
        'lodash' : { exports: 'lodash' },
    }
});

// Load the main app module to start the app
requirejs(['app/app'], function (app) {
  app.init();
});