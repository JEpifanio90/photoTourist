(function() {
    'use strict';

    angular.module('spaMod').config(routerFn);

    routerFn.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_CONFIG'];
    function routerFn($stateProvider, $urlRouterProvider, APP_CONFIG) {
        var citiesState = {
            name: 'cities',
            url: '/cities',
            templateUrl: APP_CONFIG.CITIES_VIEW,
            controller: "entityController",
            controllerAs: "citiesCtrl",
            params: {
                'urlVerb': 'cities', 
                'create_success': 'created the city', 
                'create_failure': 'creating the city', 
                'update_success': 'updated the city\'s name', 
                'update_failure': 'updating the city\'s name', 
                'delete_success': 'deleted the state', 
                'delete_failure': 'deleting the state'
            }
        };

        var statesState = {
            name: 'states',
            url: '/states',
            templateUrl: APP_CONFIG.STATES_VIEW,
            controller: "entityController",
            controllerAs: "statesCtrl",
            params: {
                'urlVerb': 'states', 
                'create_success': 'created the state', 
                'create_failure': 'creating the state', 
                'update_success': 'updated the state\'s name', 
                'update_failure': 'updating the state\'s name', 
                'delete_success': 'deleted the state', 
                'delete_failure': 'deleting the state'
            }
        };

        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: APP_CONFIG.HOME_VIEW
        };

        $stateProvider.state(citiesState);
        $stateProvider.state(statesState);
        $stateProvider.state(homeState);
        $urlRouterProvider.otherwise('/');
        
    }
})();