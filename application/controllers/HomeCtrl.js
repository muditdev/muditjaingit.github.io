myApp.controller('HomeCtrl', ['$scope','$rootScope', function($scope, $rootScope){
  var vm = this;
  $rootScope.currPage = 'home';
  console.log('HomeCtrl')
}])
