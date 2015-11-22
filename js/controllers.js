angular.module('SRHRadio.controllers', [])

.controller('HomePage', function($scope, $timeout) {
 //alert("hi");
})


.controller('podcastlist', function($scope, $http, $timeout, $sce, $rootScope) {
$http.get('http://SRHRadio.com/podcasts').success(function(data) {
         $scope.items = data;
    });  

    $scope.testHide = true;
    $scope.searchButtonHide=true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showText = function(showText){
       $scope.testHide = !$scope.testHide;
       $scope.searchButtonHide = !$scope.searchButtonHide;
    }

   $scope.takeSearchKeyword = function(userSearchInput){
      $rootScope.rootSearchKeyword = $scope.userSearchInput;

    }



})


.controller('podcastPlayIndividual', function($scope, $routeParams, $http, $sce, $rootScope){
     var podcastIdSelected = $routeParams.podcastId;//$routeParams service allows you to retrieve the current set of route parameters
    //SAD Group: Controller action to get JSON for individial podcast
    $http.get('http://SRHRadio.com/podcasts/'+podcastIdSelected).success(function(data, status, headers, config) {
      $scope.items = data;
      $scope.audioURL = $scope.items.resourceURI + $scope.items.podcastfile;
      $scope.audioURL = $sce.trustAsResourceUrl($scope.audioURL);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

    $scope.audioHide = true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showAudio = function(showAudio){
       $scope.audioHide = !$scope.audioHide;
    }

    $scope.testHide = true;
    $scope.searchButtonHide=true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showText = function(showText){
       $scope.testHide = !$scope.testHide;
       $scope.searchButtonHide = !$scope.searchButtonHide;
    }

    $scope.takeSearchKeyword = function(userSearchInput){
      $rootScope.rootSearchKeyword = $scope.userSearchInput;

    }

})

.controller('podcastPlayIndividualCategory', function($scope, $routeParams, $http, $sce, $rootScope){
     var podcastCategory = $routeParams.selectedCategory;
    //SAD Group: Controller action to get JSON for individial podcast
    $http.get('http://SRHRadio.com/podcasts/categories/'+podcastCategory).success(function(data) {
      $scope.items = data[0];
      $scope.audioURL = $scope.items.resourceURI + $scope.items.podcastfile;
      $scope.audioURL = $sce.trustAsResourceUrl($scope.audioURL);
    }).
    error(function(data, status, headers, config) {
      // log error
    });

    $scope.audioHide = true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showAudio = function(showAudio){
       $scope.audioHide = !$scope.audioHide;
    }

    $scope.testHide = true;
    $scope.searchButtonHide=true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showText = function(showText){
       $scope.testHide = !$scope.testHide;
       $scope.searchButtonHide = !$scope.searchButtonHide;
    }

    $scope.takeSearchKeyword = function(userSearchInput){
      $rootScope.rootSearchKeyword = $scope.userSearchInput;

    }
});

