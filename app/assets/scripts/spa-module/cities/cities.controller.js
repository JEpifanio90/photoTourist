(function() {
    'use strict';

    angular.module('spaMod').controller('citiesController', citiesCtrlFn);

    citiesCtrlFn.$inject = ['requestFactory', 'APP_CONFIG'];
    function citiesCtrlFn(requestFactory, APP_CONFIG) {
        var citiesScope = this;
        citiesScope.cities = [];
        citiesScope.showCrudButtons = false;
        citiesScope.newCityName = '';
        citiesScope.currentCity = null;
        getCities();

        citiesScope.setCity = function(city) {
            citiesScope.currentCity = city;
            citiesScope.newCityName = city.name;
            citiesScope.showCrudButtons = true;
        };

        citiesScope.updateCity = function() {
            requestFactory.update({ verb: 'cities', id: citiesScope.currentCity.id}, { name: citiesScope.newCityName }, function(data, headers) {
                getCities();
            }, function(error) {
                console.log(error, '--------------------');
            });
        };

        function getCities() {
            citiesScope.cities = requestFactory.query({ verb: 'cities' });
        }
    }
})();