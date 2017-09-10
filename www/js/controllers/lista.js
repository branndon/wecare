app.controller('listaCtrl', function($scope, $state, $timeout, $ionicSideMenuDelegate, $rootScope) {

	// page title
	$rootScope.pageTitle = "Instituições";

	// Ações antes de entrar na view
	$rootScope.$on('$ionicView.loaded', function(){
		console.log("loaded");
	});

	$scope.$on('$ionicView.enter', function(){});

});