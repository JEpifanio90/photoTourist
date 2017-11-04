(function() {
    'use strict';

    angular.module('spaMod').controller('entityController', entityCtrlFn);

    entityCtrlFn.$inject = ['$timeout', '$stateParams', 'requestFactory', 'APP_CONFIG'];
    function entityCtrlFn($timeout, $stateParams, requestFactory, APP_CONFIG) {
        var entityScope = this;
        entityScope.entities = [];
        entityScope.newEntityName = '';
        entityScope.currentEntity = null;
        entityScope.showSuccess = false;
        entityScope.showFailure = false;
        entityScope.message = '';
        getEntities();

        entityScope.setEntity = function(entity) {
            entityScope.currentEntity = entity;
            entityScope.newEntityName = entity.name;
        };

        entityScope.createEntity = function() {
            requestFactory.save({ verb: $stateParams.urlVerb }, { name: entityScope.newEntityName }, function(data, headers) {
                showGetAndHide(true, $stateParams.create_success);
            }, function(error) {
                showGetAndHide(false, $stateParams.create_failure);
            });
        };

        entityScope.updateEntity = function() {
            var entityId = ($stateParams.urlVerb === 'states') ? entityScope.currentEntity._id.$oid : entityScope.currentEntity.id;
            requestFactory.update({ verb: $stateParams.urlVerb, id: entityId}, { name: entityScope.newEntityName }, function(data, headers) {
                showGetAndHide(true, $stateParams.update_success);
            }, function(error) {
                showGetAndHide(false, $stateParams.update_failure);
            });
        };

        entityScope.deleteEntity = function() {
            var entityId = ($stateParams.urlVerb === 'states') ? entityScope.currentEntity._id.$oid : entityScope.currentEntity.id;
            requestFactory.delete({ verb: $stateParams.urlVerb, id: entityId}, function(data, headers) {
                showGetAndHide(true, $stateParams.delete_success);
            }, function(error) {
                showGetAndHide(false, $stateParams.delete_failure);
            });
        };

        function showGetAndHide(isAlertSuccessful, message) {
            if (isAlertSuccessful) {
                resetProperties();
                getEntities();
                entityScope.message = message;
            }
            showAlerts(isAlertSuccessful);
            $timeout(function() { entityScope.showSuccess = false; }, 1500);
        }

        function resetProperties() {
            entityScope.currentEntity = null;
            entityScope.newEntityName = '';
        }

        function getEntities() {
            entityScope.entities = requestFactory.query({ verb: $stateParams.urlVerb });
        }

        function showAlerts(isAlertSuccessful) {
            if (isAlertSuccessful) {
                entityScope.showSuccess = true;
            } else {
                entityScope.showFailure = true;
            }
        }
    }
})();