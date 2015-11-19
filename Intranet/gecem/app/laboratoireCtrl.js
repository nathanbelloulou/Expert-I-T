app.controller('laboratoireCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data,laboratoire,utilisateurs,etudes) {	
  

 $scope.laboratoire= $rootScope.lab;
		
           $scope.utilisateurs=utilisateurs;
   
		

           $scope.etudes=etudes;
       
		
		
});

	app.controller('editLaboratoireCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
  
		
});

