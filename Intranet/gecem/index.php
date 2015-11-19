<!DOCTYPE html>
<html lang="fr" ng-app="myApp" lang="fr">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<title>Intranet Gecem</title>
    <link rel="stylesheet" href="css/xeditable.css">
    <link href="css/custom.css" rel="stylesheet">
    <link href="css/toaster.css" rel="stylesheet">
	<link rel="stylesheet" href="css/colorpicker.css">
<link href="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet"/>

	
	
   </head>

  <body ng-cloak="">
	  
	  
	  
  <nav class="navbar navbar-default " id="menu" style="display:none" ng-controller="authCtrl"" >
	<div class="container">

	<div class="navbar-header">
	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	<span class="sr-only">Toggle navigation</span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	</button>
	<div class="navbar-brand">
	<a   class="titre"> {{titre}} </a>
	</div>
	
	</div>
	
	<div id="navbar" class="navbar-collapse collapse">

	
	<ul class="nav navbar-nav navbar-right">
	   <li ><a >{{prenom}} {{nom}}</a></li>
	<li> <a ng-click="logout();" style="font-size: 24px;" class="glyphicon glyphicon-off" href="">  </a></li>
	</ul>
	</div>
	</div>
	</nav>

    <span ng-show="isViewLoading">
      <div class="spinner">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>
	</span> 
	
    <div ng-hide="isViewLoading" ng-view autoscroll="true">
  
</div>

	<script src="js/jquery-2.1.4.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
	<script src="https://code.angularjs.org/1.4.2/angular-route.min.js"></script>
	<script src="https://code.angularjs.org/1.4.2/angular-animate.min.js"></script>
	
	<script src="js/xeditable.min.js"></script>
	<script src="js/xeditable.js"></script>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script src="js/toaster.js"></script>
	
	<script src="app/app.js"></script>
	
	<script src="app/data.js"></script>
	<script src="app/authCtrl.js"></script>
	<script src="app/etudeCtrl.js"></script>
	<script src="app/laboratoireCtrl.js"></script>

      <script src="js/ckeditor-angularjs.js"></script>
      <script src="https://code.angularjs.org/1.4.3/angular-sanitize.min.js"></script>
    <script src="//cdn.ckeditor.com/4.5.1/full/ckeditor.js"></script>
	<script src="js/bootstrap.min.js"></script>
    </body>
  <toaster-container toaster-options="{'time-out': 500}"></toaster-container>
<script type="text/javascript"  src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript"  src="js/ng-google-chart.min.js"></script>
	<script src="https://rawgit.com/buberdds/angular-bootstrap-colorpicker/master/js/bootstrap-colorpicker-module.js"></script>
	 <script src="https://cdnjs.cloudflare.com/ajax/libs/danialfarid-angular-file-upload/7.0.15/ng-file-upload-all.min.js"></script>
</html>
