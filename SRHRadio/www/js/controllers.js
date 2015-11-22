angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http) {
   $http.get('http://SRHRadio.com/podcasts').success(function(data) {
         $scope.items = data;
    });    

})





.controller('PlaylistCtrl', function($scope, $stateParams, $http, $sce){
    var podcastId = $stateParams.playlistId

  
    //SAD Group: Controller action to get JSON for individial podcast
    $http.get('http://SRHRadio.com/podcasts/'+podcastId).success(function(data) {
         $scope.items = data;
         //alert($scope.items.resourceURI);
         $scope.audioURL = $scope.items.resourceURI + $scope.items.podcastfile
         $scope.audioURL = $sce.trustAsResourceUrl($scope.audioURL);
         //alert($scope.audioURL);
    }); 

    $scope.audioHide = true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showAudio = function(showAudio){
       $scope.audioHide = !$scope.audioHide;
       
    }
})



.controller('SearchKeywordControl', function($scope, $stateParams, $http, $sce) {
  var mykeywords = $stateParams.enteredSearch
  //alert(mykeywords);
  $http.get('http://SRHRadio.com/podcasts/keywords/'+mykeywords).success(function(data) {
         $scope.items = data[0];
         $scope.audioURL = $scope.items.resourceURI + $scope.items.podcastfile
         $scope.audioURL = $sce.trustAsResourceUrl($scope.audioURL);
         
        
    }); 


  $scope.audioHide = true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showAudio = function(showAudio){
       $scope.audioHide = !$scope.audioHide;
       
    }
})


.controller('UpcomingController', function($scope, $stateParams, $http, $sce) {
  alert("i am called");
  //alert(mykeywords);
  $http.get('http://SRHRadio.com/podcasts/futurepodcasts').success(function(data) {
         $scope.items = data;
         
         
        
    }); 


})


.controller('SearchCategoryControl', function($scope, $stateParams, $http, $sce) {
  var mycats = $stateParams.mycat
  $http.get('http://SRHRadio.com/podcasts/categories/'+mycats).success(function(data) {
         
         //var a = {"podcasts" : data};
         //alert(JSON.stringify(a, null, 4));

         //alert(JSON.stringify(a.podcasts.title, null, 4));

         $scope.items = data[0]; // 9.5 hours to realise it was an array of JSON objects nice going :)
         $scope.audioURL = $scope.items.resourceURI + $scope.items.podcastfile
         $scope.audioURL = $sce.trustAsResourceUrl($scope.audioURL);
         
        //var a = String($scope.items.title);
        //alert (a);
         
         //$scope.items = {"p" : @scope.items};

         //alert($scope.items);

         //$scope.audioURL = $s
         //var a = '127.0.0.1:80/Media/';
         //$scope.a=$sce.trustAsResourceUrl(a);
         //$scope.audioURL = a + $scope.items.podcastfile;
          //$scope.audioURL = $sce.trustAsResourceUrl($scope.audioURL);
         //alert($scope.audioURL);
         //$scope.audioURL = $sce.trustAsResourceUrl($scope.audioURL);
         
    }); 



  $scope.audioHide = true;
    //SAD Grpup: Controller action for Displing the hidden audio tag  
    $scope.showAudio = function(showAudio){

       $scope.audioHide = !$scope.audioHide;
       
    }
});




