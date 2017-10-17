app.controller('DetalhesCtrl', function ($scope, $stateParams, EmployeeService) {
	EmployeeService.findById($stateParams.employeeId).then(function(employee) {
		$scope.employee = employee;
	});

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
});