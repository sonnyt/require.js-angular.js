define(['./module'], function (User) {
    'use strict';

    User

    /**
     * Check if link is active
     */
    .directive('isLoggedin', function ($location) {
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