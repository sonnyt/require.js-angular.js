define(['angular'], function (angular) {
	'use strict';

	return angular.module('User', [])
		
		/**
		 * Make sure the routes are locked in
		 */
	    .run(function ($rootScope, CurrentUser, $location) {
	        var user = CurrentUser.get();

	        $rootScope.$on('$routeChangeStart', function($scope, current, previous) {
	            if (!user && (previous && previous.auth === true)) {
	                $location.path('/login');
	            }
	        });
	    });
});