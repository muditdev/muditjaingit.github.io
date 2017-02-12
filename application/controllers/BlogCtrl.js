myApp.controller('BlogCtrl', ['$scope','$rootScope', 'blogServices', function($scope, $rootScope, blogServices){
  var vm = this;
  $rootScope.currPage = 'blog';
  console.log('BlogCtrl as BlogCtrl')
  blogServices.getPosts().then(function(response){
    console.log(response);
    vm.posts = response;
  }, function(response){
    console.log('Error', response);
  })
}])
