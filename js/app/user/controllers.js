define(['./module'], function (User) {
	'use strict';

	User

	/**
	 * User Login Controller
	 */
	.controller('UserController@login', function ($scope, $location, SignIn, CurrentUser) {
		$scope.error = null;

		$scope.login = function (form) {
			if (form.$valid) {
				SignIn({
					email: $scope.user.email,
					password: $scope.user.password
				}).then(function (response) {
					if (response.success) {
						CurrentUser.set(response.user);
						$location.path('/profile');
					} else {
						$scope.error = response.error;
					}
				});
			}
		};
	})

	/**
	 * User Profile Controller
	 */
	.controller('UserController@profile', function ($scope, CurrentUser) {
		$scope.error = null;
		$scope.user = CurrentUser.get();

		$scope.update = function (form) {
			if (form.$valid) {
				CurrentUser.set({
					name: $scope.user.name,
					email: $scope.user.email,
					password: $scope.user.password,
				});
			}
		};
	})

	/**
	 * User Logout Controller
	 */
	.controller('UserController@logout', function ($scope, $location, SignOut) {
		SignOut().then(function () {
			$location.path('/login');
		});
	});
});