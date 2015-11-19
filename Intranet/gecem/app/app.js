var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ngCke', 'ngSanitize', 'googlechart', 'xeditable','ngFileUpload','colorpicker.module']);


app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/login', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'authCtrl'
            })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'partials/login.html',
                controller: 'logoutCtrl'
            })
            .when('/administration', {
                title: 'administration',
                templateUrl: 'partials/dashboard.html',
                controller: 'adminCtrl',
                
    resolve: {
        utilisateurs: function(Data){
            return Data.get('utilisateurs/type/1');
        },
        
         laboratoires: function(Data){
            return Data.get('laboratoires');
        }
        }
            })
            .when('/laboratoire/:laboratoire', {
                title: 'laboratoire',
                templateUrl: 'partials/laboratoire.html',
                controller: 'laboratoireCtrl',
                resolve: {
                    
                    
        utilisateurs: function(Data,$route){
        return Data.get('utilisateur/laboratoire/'+$route.current.params.laboratoire);
        },
         laboratoire: function(Data,$route,$rootScope){
         Data.get('laboratoire/'+$route.current.params.laboratoire).then(function (results) {
          
            $rootScope.titre='Laboratoire '+results[0].libelle;
			$rootScope.lab=results[0];
             return results[0];
        });
        },
         etudes: function(Data,$route){
            return Data.get('laboratoire/'+$route.current.params.laboratoire+'/etudes');
        }
        }
            })
            .when('/etude/:etude', {
                title: 'etude',
                templateUrl: 'partials/etude.html',
                controller: 'etudeCtrl'
            })
             .when('/fichiers/:etude/:utilisateur', {
                title: 'association',
                templateUrl: 'partials/fichiers.html',
                controller: 'fichierCtrl'
            })
            
            

            .when('/edit-utilisateur/:laboratoire/:etude/:utilisateurID', {
                title: 'Edit utilisateurs',
                templateUrl: 'partials/edit-utilisateur.html',
                controller: 'editCtrl'


            })
            .when('/', {
                title: 'Login',
                templateUrl: 'partials/login.html',
                controller: 'authCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }])
    .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = true;
            Data.get('session').then(function (results) {
$rootScope.admin=false;

                if (results.id) {
                    $rootScope.authenticated = true;
                    $('#menu').show();
                    $rootScope.type = results.type;
                    if ($rootScope.type == 1) {
                        $rootScope.admin = true;
                    }
                    if ($rootScope.type == 2) {
                        $rootScope.laboratoire = true;
                        if ($location.path() == '/administration') {
                            $location.path('/laboratoire/' + results.id_laboratoire);
                        }
                    }
                    if ($rootScope.type == 3) {
                        $rootScope.etude = true;
                        if ($location.path() == '/administration') {
                            $location.path("/etude/" + results.id_etude);
                        }

                    }

                } else {
                    $rootScope.authenticated = false;
                     $('#menu').hide();
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/login') {

                    } else {
                        $location.path("/login");
                    }
                }
                if ($location.path() == '/login') {
                               $('#menu').hide();
                        }
            });
        });
    });



app.run(function (editableOptions) {
    editableOptions.theme = 'bs3';
});
app.run(function ($rootScope, $location) {
$rootScope.isViewLoading = false;
$rootScope.$on('$routeChangeStart', function() {
  $rootScope.isViewLoading = true;
});
$rootScope.$on('$routeChangeSuccess', function() {
  $rootScope.isViewLoading = false;
});
$rootScope.$on('$routeChangeError', function() {
  $rootScope.isViewLoading = false;
});
    var history = [];

    $rootScope.$on('$routeChangeSuccess', function () {
        history.push($location.$$path);
    });

    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

});