angular.module('starter.controllers', [])

.controller('InstDetalheCtrl', function ($scope, $stateParams, EmployeeService) {
    EmployeeService.findById($stateParams.employeeId).then(function(instituicao) {
      $scope.instituicao = instituicao;
    });
})


.controller('LoginCtrl', function ($scope, $state) {
  $scope.secaoAtual = "login";
  $scope.goToState = function (url) {
    $state.go(url);
  }
})

.controller('InstituicoesCtrl', function($scope,$rootScope,$location,EmployeeService,retornaInstituicoes) {
  $scope.secaoAtual = "interna";

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

  // $scope.goTo = function (id) {
  //   $location.path('instituicao/'+id);
  // }

  var findAllEmployees = function() {
    EmployeeService.findAll().then(function (employees) {
      $scope.employees = employees;
    });
  }

  findAllEmployees();

  retornaInstituicoes.getData().then(function(response){
      console.log(response.data);
      $rootScope.instituicoes = response.data;
  }).catch(function(response){
    //handle the error
  });
})

.controller('MapaCtrl', function($scope) {
  $scope.secaoAtual = "interna";
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    setTimeout(function(){
        // if( states.fromCache && states.stateName == "your view" ) { do whatever}
        var locations = [
          ['Lar Vicentino<br/><br/><strong>Endereço:</strong> Lorem, 85<br/><strong>Bairro:</strong> Lorem<br/><strong>Telefone:</strong> (13) 8888-8888<br/><strong>Responsável:</strong> Fulano de tal<br/><br/><a href="#/instituicao/1">Ver mais</a>', -23.957598, -46.399181],
          ['Lar Fraterno Cubatão<br/><br/><strong>Endereço:</strong> Lorem, 85<br/><strong>Bairro:</strong> Lorem<br/><strong>Telefone:</strong> (13) 8888-8888<br/><strong>Responsável:</strong> Fulano de tal<br/><br/><a href="#/instituicao/2">Ver mais</a>', -23.885422, -46.427048],
          ['Casa de Repouso Caminho de Luz<br/><br/><strong>Endereço:</strong> Lorem, 85<br/><strong>Bairro:</strong> Lorem<br/><strong>Telefone:</strong> (13) 8888-8888<br/><strong>Responsável:</strong> Fulano de tal<br/><br/><a href="#/instituicao/3">Ver mais</a>', -24.016285, -46.447716],
          ['Associação Idosos Pensionistas<br/> Aposentados de Vica e Guarujá<br/><br/><strong>Endereço:</strong> Lorem, 85<br/><strong>Bairro:</strong> Lorem<br/><strong>Telefone:</strong> (13) 8888-8888<br/><strong>Responsável:</strong> Fulano de tal<br/><br/><a href="#/instituicao/4">Ver mais</a>', -23.947784, -46.280871]
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          clickableIcons: true,
          center: new google.maps.LatLng(-23.946938, -46.364285),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) { 
          marker = new google.maps.Marker({
            icon: 'http://recanto4estacoesigarata.com.br/t/marker.png',
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
})

.controller('DetalhesCtrl', function ($scope, $stateParams, EmployeeService) {
  $scope.secaoAtual = "interna";
  EmployeeService.findById($stateParams.employeeId).then(function(employee) {
    $scope.employee = employee;
  });
setTimeout(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    
    // If we need pagination
    // pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  })  
}, 600);
})

.controller('AccountCtrl', function($scope) {
  $scope.secaoAtual = "interna";
  $scope.settings = {
    enableFriends: true
  };
});
