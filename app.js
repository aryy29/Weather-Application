var app = angular.module('weatherApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/forecast', {
            templateUrl: 'forecast.html',
            controller: 'ForecastController'
        })
        .otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function($scope) {
    // Home page logic here
});

app.controller('ForecastController', function($scope, $http) {
    $http.get('weather.json').then(function(response) {
        $scope.weatherData = response.data;
    });
});