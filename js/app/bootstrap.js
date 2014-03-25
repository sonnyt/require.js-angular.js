define([
    'require',
    'angular',
    './core/index',
], function (require, angular) {
    'use strict';

    require(['domReady!'], function (document) {
    	angular.bootstrap(document, ['myApp']);
    });
});