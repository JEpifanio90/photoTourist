(function() {
    'use strict';

    angular.module('spaMod').directive('cities', function() {
        return {
            templateUrl: './cities.html',
            replace: true,
            bindToController: true,
            controller: "spa-module.cities.citiesController",
            controllerAs: "citiesCtrl",
            restrict: "E"
          };
    });
})();