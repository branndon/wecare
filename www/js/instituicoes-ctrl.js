app.controller('InstituicoesListaCtrl', function ($scope,  $rootScope, EmployeeService) {

	// VARS
	$rootScope.listaIntituicoes = "mapa"; // mapa||lista
	$scope.searchKey = "";

	$scope.clearSearch = function () {
		$scope.searchKey = "";
		findAllEmployees();
	}

	$scope.search = function () {
		EmployeeService.findByName($scope.searchKey).then(function (employees) {
			$scope.employees = employees;
		});
	}

	$scope.mudaVisao = function () {
		if($rootScope.listaIntituicoes == "lista"){ $rootScope.listaIntituicoes = "mapa"; }
		else { $rootScope.listaIntituicoes = "lista"; }
	}

	var findAllEmployees = function() {
		EmployeeService.findAll().then(function (employees) {
			$scope.employees = employees;
		});
	}

	findAllEmployees();


    setTimeout(function(){
        // if( states.fromCache && states.stateName == "your view" ) { do whatever}
        var locations = [
          ['Lar Vicentino', -23.956833, -46.399235],
          ['Lar Nossa Senhora das Graças', -24.005688, -46.411370],
          ['Lorem Ipsum', -24.008628, -46.409053],
          ['Lorem Ipsum', -24.002199, -46.413473],
          ['Lorem Ipsum', -24.010274, -46.417121],
          ['Lorem Ipsum', -24.008079, -46.422357],
          ['Lorem Ipsum', -24.004472, -46.419610],
          ['Lorem Ipsum', -24.012862, -46.413988],
          ['Lorem Ipsum', -24.013332, -46.410426]
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          clickableIcons: true,
          center: new google.maps.LatLng(-24.006942, -46.413645),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) { 
          marker = new google.maps.Marker({
          	icon: '../img/marker.png',
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
    }, 1500);

});