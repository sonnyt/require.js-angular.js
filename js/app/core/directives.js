define(['./module'], function (myApp) {
    'use strict';

    myApp

    /**
     * Check if link is active
     */
    .directive('isActive', function ($location) {
        return function( scope, elem, attr ) {
            scope.$watch(
                function() {
                    return $location.path();
                },
                function( location ) {
                    var conditions = scope.$eval(attr.isActive),
                        path = $location.path();

                    for (var className in conditions) {
                        (conditions[className] === path) ? $(elem).addClass(className) : $(elem).removeClass(className);
                    }
                }
            );
        };
    });
});