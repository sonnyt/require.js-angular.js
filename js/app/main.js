require.config({
	paths: {
		'jquery': '../lib/jquery.min',
		'angular': '../lib/angular.min',
		'angular-route': '../lib/angular-route.min',
		'angular-resource': '../lib/angular-resource.min',
		'domReady': '../lib/domready'
	},

	shim: {
		'angular': {
			exports: 'angular',
			deps: ['jquery']
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-resource': {
			deps: ['angular']
		},
		'mobile-navigate': {
			deps: ['angular']
		}
	},

	deps: [
        './bootstrap'
    ]
});