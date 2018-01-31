var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', '$state', function ($scope, $state)  {
  $scope.test = "this is a test";
  
  console.log('inside main controller', $scope.test);
}]);