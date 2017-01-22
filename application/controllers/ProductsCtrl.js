myApp.controller('ProductsCtrl', ['$scope','$rootScope', function($scope, $rootScope){
  var vm = this;
  $rootScope.currPage = 'products';
  console.log('ProductsCtrl')
}])
