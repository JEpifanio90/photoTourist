(function() {
    'use strict';

    angular.module('spaMod').controller('headerController', headerCtrlFn);

    headerCtrlFn.$inject = ['$location'];
    function headerCtrlFn($location) {
        var headerScope = this;

        headerScope.isActive = function(location) {
            return location === $location.path();
        };
    }
})();