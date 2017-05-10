// Karma configuration
// Generated on Wed May 10 2017 16:39:56 GMT-0500 (Central Daylight Time)

module.exports = function(config) {
  config.set({

    basePath: './app',

    frameworks: ['jasmine'],

    files: [
		'bower_components/angular/angular.js',
		'bower_components/angular-mocks/angular-mocks.js',
		'*!(.module|.spec).js',
		'**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
