'use strict';

/* jshint -W106 */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        '**/*.js',
        'Gruntfile.js',
        '!node_modules/**/*',
        '!bower_components/**/*',
        '!src/main/webapp/app/vendor-libs/**/*',
        '!src/main/webapp/app/bootstrap/**/*',
        '!src/main/webapp/index.js',
        '!src/main/webapp/lib/**',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    
    copy: {
      rjs: {
  	      cwd: 'node_modules/',
  	      expand: true,
  		  src: [
  		        'requirejs/bin/r.js',
  		        'requirejs/require.js'
  		       ],
  		  dest: 'src/main/webapp/lib/', 
  		  filter: 'isFile',
  		  flatten: true
  	  },
	  bower: {
	      cwd: 'bower_components/',
	      expand: true,
		  src: [
		        'angular/angular.js',
		        'angular-animate/angular-animate.js',
		        'angular-cookies/angular-cookies.js',
		        'angular-mocks/angular-mocks.js',
		        'angular-resource/angular-resource.js',
		        'angular-route/angular-route.js',
		        'angular-ui-router/release/angular-ui-router.js',
		        'lodash/lodash.js',
		        'jquery/dist/jquery.js'
		       ],
		  dest: 'src/main/webapp/app/vendor-libs/', 
		  filter: 'isFile',
		  flatten: true
	  },
	  css: {
	      cwd: 'bower_components/bootstrap/dist/',
	      expand: true,
		  src: [
		        '**'
		       ],
		  dest: 'src/main/webapp/app/bootstrap/'
	  },
	},

    // run the mocha tests via Node.js
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', [
    'jshint',
    'copy:rjs',
    'copy:bower',
    'copy:css',
//    'mochaTest',
  ]);
  
};
/* jshint +W106 */