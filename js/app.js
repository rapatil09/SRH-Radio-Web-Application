// 'starter.controllers' is found in controllers.js
var app = angular.module('SRHRadio', ['ngRoute','SRHRadio.controllers']); 



app.config(function($routeProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'templates/HomePage.html',
        controller: 'HomePage'
      })


    $routeProvider.when('/podcasts', {
        templateUrl: 'templates/podcasts.html',
        controller: 'podcastlist'
      })
      

     $routeProvider.when('/podcasts/:podcastId', {
        templateUrl: 'templates/playpodcast.html',
        controller: 'podcastPlayIndividual'
      }) 
  
    $routeProvider.when('/podcasts/lists/categories', {
        templateUrl: 'templates/podcastCategories.html'
      }) 

    $routeProvider.when('/podcasts/lists/categories/:selectedCategory', {
        templateUrl: 'templates/playpodcast.html',
        controller: 'podcastPlayIndividualCategory'
      }) 

    
});
