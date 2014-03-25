define([
    'angular',
    'angular-route',
    'angular-resource',
    '../user/index'
], function (angular) {
    'use strict';

    /**
     * Add all your other modules here
     */
    return angular.module('myApp', [
        'ngResource',
        'ngRoute',
        'User'
    ])

    /**
     * Cache all templates
     */
    .run(function ($route, $http, $templateCache) {
        angular.forEach($route.routes, function (r) {    
            if (r.templateUrl) {
                $http.get(r.templateUrl, { cache: $templateCache });
            }
        });
    });
});