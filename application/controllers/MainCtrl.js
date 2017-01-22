myApp.controller('MainCtrl', ['$scope','$rootScope', function($scope, $rootScope){
  var vm = this;
  $rootScope.currPage = "";
  $rootScope.baseurl = "/";
  vm.name = "mudit";
  console.log('MainCtrl');
}]);
