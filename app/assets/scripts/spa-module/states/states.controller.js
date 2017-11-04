(function() {
    'use strict';

    angular.module('spaMod').controller('statesController', statsCtrlFn);

    statsCtrlFn.$inject = ['$timeout', 'requestFactory', 'APP_CONFIG'];
    function statsCtrlFn($timeout, requestFactory, APP_CONFIG) {
        var statesScope = this;
        statesScope.states = [];
        statesScope.newStateName = '';
        statesScope.currentState = null;
        statesScope.showSuccess = false;
        statesScope.showFailure = false;
        statesScope.message = '';
        getStates();

        statesScope.setState = function(state) {
            statesScope.currentState = state;
            statesScope.newStateName = state.name;
        };

        statesScope.createState = function() {
            requestFactory.save({ verb: 'states' }, { name: statesScope.newStateName }, function(data, headers) {
                showGetAndHide(true, 'created the city');
            }, function(error) {
                showGetAndHide(false, 'creating the city');
            });
        };

        statesScope.updateState = function() {
            requestFactory.update({ verb: 'cities', id: statesScope.currentState.id}, { name: statesScope.newStateName }, function(data, headers) {
                showGetAndHide(true, 'updated the city\'s name');
            }, function(error) {
                showGetAndHide(false, 'updating the city\'s name');
            });
        };

        statesScope.deleteState = function() {
            requestFactory.delete({ verb: 'states', id: statesScope.currentState.id}, function(data, headers) {
                showGetAndHide(true, 'deleted the state');
            }, function(error) {
                showGetAndHide(false, 'deleting the state');
            });
        };

        function showGetAndHide(isAlertSuccessful, message) {
            if (isAlertSuccessful) {
                resetProperties();
                getCities();
                statesScope.message = message;
            }
            showAlerts(isAlertSuccessful);
            $timeout(function() { statesScope.showSuccess = false; }, 1500);
        }

        function resetProperties() {
            statesScope.currentState = null;
            statesScope.newStateName = '';
        }

        function getStates() {
            statesScope.states = requestFactory.query({ verb: 'states' });
        }

        function showAlerts(isAlertSuccessful) {
            if (isAlertSuccessful) {
                statesScope.showSuccess = true;
            } else {
                statesScope.showFailure = true;
            }
        }
    }
})();