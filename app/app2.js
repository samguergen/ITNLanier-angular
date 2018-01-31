var myApp = angular.module("myApp",[ "ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider){
    $stateProvider
		.state("state1", {
        url: "/partial1",
        // template: "<p>State 1</p>"
        templateUrl: "partial1.html"
      })
			.state("state2", {
        url: "/partial2",
        templateUrl: "views/partial2.html"
      });
});