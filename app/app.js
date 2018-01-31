var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  console.log('inside of config block');

  $stateProvider
    
      .state('contacts', {
        url: '/contact',
        templateUrl: '../partial1.html',
        // templateUrl: '../views/contact.html',
        // controller: 'MainController'
      })


  // default fall back route
  $urlRouterProvider.otherwise('/test');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
});
