app.controller('adminCtrl', function ($scope,Data,utilisateurs,laboratoires) {
    
$scope.utilisateurs=utilisateurs;
$scope.laboratoires=laboratoires;

});


app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
   
 $rootScope.titre='Administration';
    $scope.login = {};
   
    $scope.doLogin = function (utilisateur) {

        Data.post('login', {
            utilisateur: utilisateur
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $('#menu').show();
			 $rootScope.id = results.id;
                    $rootScope.prenom = results.prenom;
					 $rootScope.nom = results.nom;
                    $rootScope.type = results.type;
					  if ($rootScope.type==1){
				   $rootScope.admin=true;
				   	$location.path('/administration');
				   }
				    if ($rootScope.type==2){
				   $rootScope.laboratoire=true;
				$rootScope.admin=false;
				   $location.path("/laboratoire/"+results.id_laboratoire);
				 
				   }
				    if ($rootScope.type==3){
                        $rootScope.admin=false;
				   $rootScope.etude=true;
				   $location.path("/etude/"+results.id_etude);
				   }
                    $rootScope.libellelaboratoire = results.libellelaboratoire;
			
			
		
			
			
                
            }
        });
    };
  
    $rootScope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
			 $('#menu').hide();
            $location.path('login');
			$rootScope.authenticated = false;
        });
    }
});





app.controller('utilisateursCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
      Data.get('utilisateurs').then(function (results) {
           $scope.utilisateurs=results;
        });
    });
	
	
	app.controller('editCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    var utilisateurID = ($routeParams.utilisateurID) ? parseInt($routeParams.utilisateurID) : 0;
	$scope.laboratoire=($routeParams.laboratoire) ? parseInt($routeParams.laboratoire) : 0;
	$scope.etude =($routeParams.etude) ? parseInt($routeParams.etude) : 0;
	$scope.buttonText = (utilisateurID > 0) ? 'Mettre à jour un utilisateur' : 'Ajouter un utilisateur';
	if ($scope.laboratoire ==0 && $scope.etude ==0){
	$scope.lienRetour='/administration';
	$scope.type=1;
    $scope.titreEdit=$scope.buttonText+ ' administrateur';
	}
	
	if ($scope.laboratoire >0){
	$scope.lienRetour='/laboratoire/'+$scope.laboratoire;
	$scope.type=2;
     $scope.titreEdit=$scope.buttonText+ ' laboratoire';
	}
	if ($scope.etude >0){
	$scope.lienRetour='/etude/'+$scope.etude;
     $scope.titreEdit=$scope.buttonText+ ' prospecteur';
	$scope.type=3;
	}
    
    
var original={};
	
	if(utilisateurID > 0){
	Data.get('utilisateur/'+utilisateurID).then(function (results) {
        
		   original =results[0];
		   
		   $scope.utilisateur = angular.copy(original);
		   $scope.utilisateur._id = utilisateurID;
		   original._id = utilisateurID;
        });
		}
		
		 $scope.isClean = function() {
        return angular.equals(original, $scope.utilisateur);
      }

      $scope.deleteutilisateur = function() {
 
      
       Data.delete('utilisateur/'+utilisateurID).then(function (results) {
	          $location.path($scope.lienRetour);
	   $mess={status:"ok",message:"Suppression ok"};
	   Data.toast($mess);
	   });
      };

        $scope.saveutilisateur = function(utilisateur) {
       
        if (utilisateurID <= 0) {
		 utilisateur.id_laboratoire=$scope.laboratoire;
		  utilisateur.id_etude=$scope.etude;
		   utilisateur.type=$scope.type;
          Data.post('utilisateur', {
            utilisateur: utilisateur
        }).then(function (results) {
        $location.path($scope.lienRetour);
        });
        }
        else {
        Data.put('utilisateur', {
            utilisateur: utilisateur
        }).then(function (results) {
        $location.path($scope.lienRetour);
        });
        }
		
    };
	});


