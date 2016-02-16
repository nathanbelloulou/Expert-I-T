app.controller('courbeCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
 Data.get('etude/'+$routeParams.etude+'/courbe/medecin').then(function (results) {
           $scope.datamedecin=results;
     
     $scope.medecin={"type": "LineChart",
  "displayed": true,
  "data": $scope.datamedecin
 
}; 
       $scope.medecin.options = {
        title: 'Courbe recrutement médécins'  , 
        width: 1100,
        height: 500,   hAxis: {gridlines: {count: 40}},
        
        vAxis: {gridlines: {count: 10}},
        series: {
            0: { color: 'blue', lineWidth: 2 },
            1: { color: 'red', lineWidth: 2 },
            2: { color: 'green', lineWidth: 2 }}
    };

        });
   Data.get('etude/'+$routeParams.etude+'/courbe/patient').then(function (results) {
           $scope.datapatient=results;
     
     $scope.patient={"type": "LineChart",
  "displayed": true,
  "data": $scope.datapatient
 
}; 
       $scope.patient.options = { 
        title: 'Courbe d\'inclusion patients'  , 
        width: 1100,
        height: 500,   hAxis: {gridlines: {count: 40}},
        
        vAxis: {gridlines: {count: 10}},
        series: {
            0: { color: 'blue', lineWidth: 2 },
            1: { color: 'red', lineWidth: 2 }
            }
    };

        });              
     
        }
  );

	app.controller('etudeCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data,Upload,$sce) {
    
  
    $scope.option = {
    language: 'fr',height:'150px'
};
 

 $scope.modif=false;
 $scope.actu="Modifier";
$scope.swicht = function() {
  
  if(!$scope.modif){
    $scope.modif=true;
     $scope.actu="Enregister";
  }else{
    $scope.modif=false;
 $scope.actu="Modifier";
             
 Data.put('etude', {
            etude: $scope.etude
        }).then(function (results) {
        $location.path($scope.lienRetour);
        Data.toastRapide();
                  $scope.actutext=$sce.trustAsHtml($scope.etude.actu);
        });
  }
 
  
}

 	
	Data.get('etude/'+$routeParams.etude).then(function (results) {
           $scope.etude=results[0];
           $scope.actutext=$sce.trustAsHtml($scope.etude.actu);
		   $rootScope.titre='Etude '+$scope.etude.libelle;
        });
		
	Data.get('utilisateur/etude/'+$routeParams.etude).then(function (results) {
           $scope.utilisateurs=results;
        });
        $scope.cheminFichier=$rootScope.id;
        if($rootScope.type!=3){
      $scope.cheminFichier='0';
      
	  }
     Data.get('etude/'+$routeParams.etude+'/fichiers/'+ $scope.cheminFichier).then(function (results) {
           $scope.fichiers=results;
        });
        
        
        	$scope.save = function() {
          Data.get('fichier/'+$routeParams.utilisateur+'/habilitation/'+id).then(function (results) {
        Data.toastRapide();
        });
      };
	      $scope.supprimerLogo = function(id) {
		  Data.delete('etude/'+id+'/logo');
		     $scope.etude.logo=null;
      };
      $scope.uploadPic = function(file) {
	  $scope.picFile=null;
    file.upload = Upload.upload({
      url: '/gecem/api/v1/etude/upload',
      method: 'POST',
      headers: {
        'my-header': 'my-header-value'
      },
      fields: {id: $scope.etude.id},
      file: file,
      fileFormDataName: 'file'
    }).then(function (response) {
	 $scope.etude.logo='etude-'+$scope.etude.id+'-'+file.name;
	Data.toastRapideMessage (response.data);
    }, function (response) {
      if (response.status > 0)
       Data.toastRapideMessage (response.data);
    });
    }
    });
    
  
    
    
    
    app.controller('fichierCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
 	
//recherche un utilisateur
   $scope.etudehab=true;
   
   	$scope.refre = function(id) {     Data.get('etude/'+$routeParams.etude+'/fichiers/'+$routeParams.utilisateur+'/habilitation').then(function (results) {
           $scope.fichiers=results;
           var i = 0;
for (;results[i];) {
    if(results[i].flag=="1"){
     i++; 
        $scope.etudehab=true;
    }else{
      $scope.etudehab=false;
      break;
    }
    
}
   
        });
     };

			$scope.refre();
      
      $scope.changeAll = function() {
        var req='';
       if(!$scope.etudehab){
         req='fichier/'+$routeParams.utilisateur+'/habilitation/'+$routeParams.etude+'/all';
         }else{
           req='fichier/'+$routeParams.utilisateur+'/habilitation/'+$routeParams.etude+'/rien';
         }
          Data.get(req).then(function (results) {
        Data.toastRapide();
         $scope.refre();
        });
        
      };
      
		$scope.change = function(id) {
          Data.get('fichier/'+$routeParams.utilisateur+'/habilitation/'+id).then(function (results) {
        Data.toastRapide();
         $scope.refre();
        });
      };
	
    });

