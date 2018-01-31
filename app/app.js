var app = angular.module('myApp', ['ui.view']);
app.config(function($stateProvider){
  $stateProvider
    .state('home', {
      templateUrl: '../views/home.html',
      controller: 'MainController'
    })
    .state('become-member', {
      templateUrl: '../views/become-member.html',
      controller: 'MainController'
    })
    .state('community', {
      templateUrl: '../views/community.html',
      controller: 'MainController'
    })
    .state('contact', {
      templateUrl: '../views/contact.html',
      controller: 'MainController'
    })
    .state('donate', {
      templateUrl: '../views/donate.html',
      controller: 'MainController'
    })
    .state('faces', {
      templateUrl: '../views/faces.html',
      controller: 'MainController'
    })
    .state('family', {
      templateUrl: '../views/family.html',
      controller: 'MainController'
    })
    .state('community', {
      templateUrl: '../views/community.html',
      controller: 'MainController'
    })
    .state('faq', {
      templateUrl: '../views/faq.html',
      controller: 'MainController'
    })
    .state('member-app', {
      templateUrl: '../views/member-app.html',
      controller: 'MainController'
    })
    .state('member-programs', {
      templateUrl: '../views/member-programs.html',
      controller: 'MainController'
    })
    .state('news', {
      templateUrl: '../views/news.html',
      controller: 'MainController'
    })
    .state('non-rider-member', {
      templateUrl: '../views/non-rider-member.html',
      controller: 'MainController'
    })
    .state('organization', {
      templateUrl: '../views/organization.html',
      controller: 'MainController'
    })
    .state('pay-online', {
      templateUrl: '../views/pay-online.html',
      controller: 'MainController'
    })
    .state('rider-stories', {
      templateUrl: '../views/rider-stories.html',
      controller: 'MainController'
    })
    .state('services', {
      templateUrl: '../views/services.html',
      controller: 'MainController'
    })
    .state('volunteer-to-drive', {
      templateUrl: '../views/volunteer-to-drive.html',
      controller: 'MainController'
    })
    .state('add-pta-credit', {
      templateUrl: '../views/add-pta-credit.html',
      controller: 'MainController'
    })
})
app.run(function(){
  console.log("running?");
});
