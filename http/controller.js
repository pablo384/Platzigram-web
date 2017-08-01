angular.module("MyFirstApp", [])
.controller("FirstController", function ($scope, $http) {
	$http({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts'
   }).then(function (data){
   	console.log(data);
   	$scope.posts=data;

   },function (error){

   });
});