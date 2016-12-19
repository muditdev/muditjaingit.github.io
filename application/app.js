var myApp = angular.module('mwhApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('{(');
    $interpolateProvider.endSymbol(')}');
});

myApp.controller('MainCtrl', function($scope){
	$scope.name = 'Superhero';
	console.log('heeloofjgojdfo');
});
