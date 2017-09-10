app.controller('appCtrl', function($scope, $state, $timeout, $ionicSideMenuDelegate, $rootScope) {
	console.log("homeCtrl");

  $rootScope.pageTitle = "Teste";

	// $scope.doLogin
	$rootScope.goTo = function(state) {
    console.log("chamou!");
		$state.go(state);
	};

	// Ações antes de entrar na view
	$rootScope.$on('$ionicView.loaded', function(){
		console.log("loaded");
	});

	$scope.$on('$ionicView.enter', function(){});

});

app.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 

 google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
 
  var infoWindow = new google.maps.InfoWindow({
      content: "Here I am!"
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });
 
});
 
  }, function(error){
    console.log("Could not get location");
  });
});