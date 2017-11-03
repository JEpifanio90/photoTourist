(function() {
    'use strict';

    angular.module('spaMod').service('requestService', requestServiceFn);

    requestServiceFn.$inject = ["$resource"];
    function requestServiceFn($resource) {
        var requestScope = this;

        requestScope.getResource = function(url, hasId) {
            var resourceConfig = null;
            if (hasId) {
                resourceConfig = $resource(url, { id: 'id'}, {
                    update: {
                        method: 'PUT' // this method issues a PUT request
                    }
                });
            } else {
                resourceConfig = $resource(url, null);
            }

            return resourceConfig;
        };
    }
})();