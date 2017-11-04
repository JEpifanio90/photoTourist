(function() {
    'use strict';

    angular.module('spaMod').controller('citiesController', citiesCtrlFn);

    citiesCtrlFn.$inject = ['$timeout', 'requestFactory', 'APP_CONFIG'];
    function citiesCtrlFn($timeout, requestFactory, APP_CONFIG) {
        var citiesScope = this;
        citiesScope.cities = [];
        citiesScope.newCityName = '';
        citiesScope.currentCity = null;
        citiesScope.showSuccess = false;
        citiesScope.showFailure = false;
        citiesScope.message = '';
        getCities();

        citiesScope.setCity = function(city) {
            citiesScope.currentCity = city;
            citiesScope.newCityName = city.name;
        };

        citiesScope.createCity = function() {
            requestFactory.save({ verb: 'cities' }, { name: citiesScope.newCityName }, function(data, headers) {
                showGetAndHide(true, 'created the city');
            }, function(error) {
                showGetAndHide(false, 'creating the city');
            });
        };

        citiesScope.updateCity = function() {
            requestFactory.update({ verb: 'cities', id: citiesScope.currentCity.id}, { name: citiesScope.newCityName }, function(data, headers) {
                showGetAndHide(true, 'updated the city\'s name');
            }, function(error) {
                showGetAndHide(false, 'updating the city\'s name');
            });
        };

        citiesScope.deleteCity = function() {
            requestFactory.delete({ verb: 'cities', id: citiesScope.currentCity.id}, function(data, headers) {
                showGetAndHide(true, 'deleted the city');
            }, function(error) {
                showGetAndHide(false, 'deleting the city name');
            });
        };

        function showGetAndHide(isAlertSuccessful, message) {
            if (isAlertSuccessful) {
                resetProperties();
                getCities();
                citiesScope.message = message;
            }
            showAlerts(isAlertSuccessful);
            $timeout(function() { citiesScope.showSuccess = false; }, 1500);
        }

        function resetProperties() {
            citiesScope.currentCity = null;
            citiesScope.newCityName = '';
        }

        function getCities() {
            citiesScope.cities = requestFactory.query({ verb: 'cities' });
        }

        function showAlerts(isAlertSuccessful) {
            if (isAlertSuccessful) {
                citiesScope.showSuccess = true;
            } else {
                citiesScope.showFailure = true;
            }
        }
    }
})();