var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  console.log('inside of config block');

  $stateProvider
    
      .state('contact', {
        url: '/contact',
        templateUrl: '../views/contact.html',
        // templateUrl: '../views/contact.html',
        // controller: 'MainController'
      })


  // default fall back route
  $urlRouterProvider.otherwise('/');

  // enable HTML5 Mode for SEO
  $locationProvider.html5Mode(true);
});
