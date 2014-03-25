define(['./module'], function (myApp) {
	'use strict';

	return myApp.config( function ($routeProvider) {
	    $routeProvider
	    	.when('/', {
	    		templateUrl: 'partials/home.html',
	    		controller: 'MainController@home',
	    	})
	    	.when('/login', {
	    		templateUrl: 'partials/user/login.html',
	    		controller: 'UserController@login',
	    	})
	    	.when('/profile', {
	    		templateUrl: 'partials/user/profile.html',
	    		controller: 'UserController@profile',
	    		auth: true
	    	})
	    	.when('/logout', {
	    		controller: 'UserController@logout',
	    		templateUrl: 'partials/home.html',
	    		auth: true
	    	})
		    .otherwise({
		        redirectTo: '/'
		    });
	});
});