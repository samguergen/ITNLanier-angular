var app = angular.module('myApp', []);

app.controller('MainController', function ($scope)  {
  $scope.test = "this is a test";
  
  console.log('inside main controller', $scope.test);
});