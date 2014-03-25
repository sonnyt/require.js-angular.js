/**
 * THIS IS AN EXAMPLE USER AUTHENTICATION
 * THIS USER SERVICE SHOULD NOT BE USED FOR PRODUCTION
 */

define(['./module'], function (User, $rootScope) {
	'use strict';

	User

	.service('SignIn', function ($q, $http) {
		return function (login) {
			var deferred = $q.defer();
			
			if (login) {
				var email = login.email || null,
					password = login.password || null;

				if (email === 'test@test.com') {
					if (password === 'test') {
						var user = {
							name: 'Ron Swanson',
							email: 'test@test.com',
							password: 'test'
						};

						deferred.resolve({ success: true, user: user });
					} else {
						deferred.resolve({ success: false, error: 'Wrong Password.' });
					}
				} else {
					deferred.resolve({ success: false, error: 'This user does not exist.' });
				}
			} else {
				deferred.resolve({ success: false, error: 'Wrong Email or Password.' });
			}

			return deferred.promise;
		};
	})

	.service('SignOut', function ($window, $q, $rootScope) {
		return function () {
			var deferred = $q.defer();

			$window.localStorage.removeItem('user');
			
			$rootScope.CurrentUser = null;

			deferred.resolve({ success: true });

			return deferred.promise;
		};
	}, { $inject: '$window' })

	.service('CurrentUser', function ($window, $rootScope) {
		return {
			get: function () {
				var user = $window.localStorage.getItem('user') || null;
				
				if (user) {
					$rootScope.CurrentUser = JSON.stringify(user);
				}

				return JSON.parse(user);
			},
			set: function (user) {
				if (user) {
					$rootScope.CurrentUser = JSON.stringify(user);

					$window.localStorage.setItem('user', JSON.stringify(user));
				}
			}
		};
	}, { $inject: '$window' })
});