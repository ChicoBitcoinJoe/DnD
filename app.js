var app = angular.module('app',['ngRoute','ngMaterial','ngAria','ngAnimate']);

app.config(function ($routeProvider) {
	$routeProvider.
    when('/', {
        templateUrl: 'views/home/home.view.html',
        controller: 'HomeViewController'
    }).
    when('/print', {
        templateUrl: 'views/print/print.view.html',
        controller: 'PrintViewController'
    }).
	otherwise({
      redirectTo: '/'
    });
});

app.controller('AppController', ['$scope','$location',
function($scope, $location) {
    console.log('Loading AppController');

    $scope.goto = function(path){
        console.log(path);
        $location.path(path);
    };

}]);
