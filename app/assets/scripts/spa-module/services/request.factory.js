(function() {
    'use strict';

    angular.module('spaMod').factory('requestFactory', requestFactoryFn);

    requestFactoryFn.$inject = ['$resource', 'APP_CONFIG'];
    function requestFactoryFn($resource, APP_CONFIG) {
        var requestScope = this;
        var resourceManager = $resource(APP_CONFIG.SERVER_URL + '/api/:verb/:id', { verb: '@verb', id: '@_id' }, { update: { method: 'PATCH' }});
        // requestScope.getRequestFactoryForCities = function() {
        //     resourceManager = ;
        // };

        // requestScope.getRequestFactoryForStates = function() {
        //     resourceManager = $resource(APP_CONFIG.SERVER_URL + '/api/states/:id', {id: '@_id'}, { 'update': { method: 'PATCH' }});
        // };

        return resourceManager;
    }
})();