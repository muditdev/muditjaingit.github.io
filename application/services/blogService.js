myApp.factory("blogServices", function($http, $q) {
  var blogServices = {};
  blogServices.getPosts = function(){
    var deferred = $q.defer();
    $http({
         url: "/api/posts/posts.json",
         method: 'GET',
     }).success(function(response){
        deferred.resolve(response);
     }).error(function(response){
       deferred.reject(response);
     });
     return deferred.promise;
  };

  return blogServices;
});
