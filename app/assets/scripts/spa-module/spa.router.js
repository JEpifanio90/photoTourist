(function() {
    'use strict';

    angular.module('spaMod').config(routerFn);

    routerFn.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_CONFIG'];
    function routerFn($stateProvider, $urlRouterProvider, APP_CONFIG) {
        var citiesState = {
            name: 'cities',
            url: '/cities/{cityId}',
            templateUrl: APP_CONFIG.CITIES_VIEW,
            controller: "citiesController",
            controllerAs: "citiesCtrl"
        };

        var statesState = {
            name: 'states',
            url: '/states/{stateId}',
            templateUrl: APP_CONFIG.STATES_VIEW,
            controller: "statesController",
            controllerAs: "statesCtrl"
        };

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: APP_CONFIG.HOME_VIEW
        //     controller: "citiesController",
        //     controllerAs: "citiesCtrl"
        };

        $stateProvider.state(citiesState);
        $stateProvider.state(statesState);
        $stateProvider.state(homeState);
        $urlRouterProvider.otherwise('/');
        
    }
})();