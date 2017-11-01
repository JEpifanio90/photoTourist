(function() {
    'use strict';

    angular.module('spaMod').directive('cities', citiesDirective);

    citiesDirective.$inject = ['APP_CONFIG'];
    function citiesDirective(APP_CONFIG) {
        return {
            templateUrl: APP_CONFIG.CITIES_VIEW,
            replace: true,
            bindToController: true,
            controller: "citiesController",
            controllerAs: "citiesCtrl",
            restrict: "E"
          };
    }
})();