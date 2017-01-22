var myApp = angular.module('mwhApp', ['ngRoute'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('{(');
    $interpolateProvider.endSymbol(')}');
  })


myApp.run(function ($rootScope, $location) {
  $rootScope.$on("$routeChangeStart", function (event) {
    var currLoc = $location.path();
    // condition only for home page
    if(currLoc == "/"){
      // code if user in home page
      $rootScope.isHome = true;
    }
    else {
      // code if user not in home page
      $rootScope.isHome = false;
    }
  });
})
