<?php 
$app->get('/session', function() {
    $db = new DbHandler();
    $session = $db->getSession();
    $response["id"] = $session['id'];
    $response["identifiant"] = $session['identifiant'];
    $response["nom"] = $session['nom'];
	$response["id_laboratoire"] = $session['id_laboratoire'];
	$response["id_etude"] = $session['id_etude'];
    $response["prenom"] = $session['prenom'];
    $response["type"] = $session['type'];
	echoResponse(200, $session);
});

$app->post('/login', function() use ($app) {
   
    $r = json_decode($app->request->getBody());
   // verifyRequiredParams(array('email', 'mdp'),$r->utilisateur);
    $response = array();
    $db = new DbHandler();
    $mdp = $r->utilisateur->mdp;
    $identifiant = $r->utilisateur->identifiant;
    $user = $db->getOneRecord("	select u.id,u.nom,u.prenom,u.identifiant,u.mdp,type,u.id_laboratoire ,u.id_etude from utilisateur u where u.identifiant='$identifiant' ");
    if ($user != NULL) {
       
        if(passwordHash::hash($mdp)==$user['mdp']){
        $response['status'] = "success";
        $response['message'] = 'Identification rÃ©ussie.';
        $response['nom'] = $user['nom'];
		$response['prenom'] = $user['prenom'];
		$response['id_laboratoire'] = $user['id_laboratoire'];
		$response['id_etude'] = $user['id_etude'];
		$response['identifiant'] = $user['identifiant'];
        $response['type'] = $user['type'];
        $response['id'] = $user['id'];
        if (!isset($_SESSION)) {
            session_start();
        }
        $_SESSION['id'] = $user['id'];
		    $_SESSION['nom'] = $user['nom'];
		    $_SESSION['prenom'] = $user['prenom'];
		    $_SESSION['identifiant'] = $user['identifiant'];
        $_SESSION['type'] = $user['type'];
        $_SESSION['id_etude'] = $user['id_etude'];
		$_SESSION['id_laboratoire'] = $user['id_laboratoire'];
	
		
        } else {
            $response['status'] = "error";
            $response['message'] = 'Erreur identification.';
        }
    }else {
            $response['status'] = "error";
            $response['message'] = 'Cette utilisateur n existe pas';
        }
    echoResponse(200, $response);
});

$app->get('/logout', function() {
    $db = new DbHandler();
    $session = $db->destroySession();
    $response["status"] = "info";
    $response["message"] = "Vous Ã©tes dÃ©connectÃ©";
    echoResponse(200, $response);
});



$app->get('/utilisateurs', function() use ($app) {
    $db = new DbHandler();

	 $query="SELECT distinct id, nom, prenom, identifiant, mdp, type, id_laboratoire, id_etude FROM utilisateur order by id desc";

 $response =$db->execute($query);
  
			 echoResponse(200, $response);
	
    }
);

$app->get('/utilisateur/:id', function ($id) {

 $db = new DbHandler();
	$query="SELECT distinct id, nom, prenom, identifiant, type, id_laboratoire, id_etude FROM utilisateur where id=$id";
			
 $response =$db->execute($query);
  
			 echoResponse(200, $response);
   
});

$app->put('/utilisateur', function() use ($app) {
  $r = json_decode($app->request->getBody());
  
  $response = array();
 $db = new DbHandler();
	$id="";
	if(isset($r->utilisateur->id)){
	$id=$r->utilisateur->id;
}
$nom="";
if(isset($r->utilisateur->nom)){
$nom=$r->utilisateur->nom;
}
$prenom="";
if(isset($r->utilisateur->prenom)){
$prenom=$r->utilisateur->prenom;
}
$identifiant="";
if(isset($r->utilisateur->identifiant)){
$identifiant=$r->utilisateur->identifiant;
}
$mdp="";
if(isset($r->utilisateur->mdp)){
$mdp=$r->utilisateur->mdp;
}

$type="";
if(isset($r->utilisateur->type)){
$type=$r->utilisateur->type;
} 
$query="select id, nom, prenom, identifiant, type, id_laboratoire, id_etude from utilisateur where identifiant='$identifiant' and  id <>$id";
 $response =$db->execute($query);
  
  if($response){
			echoResponse(400,  "L'identifiant existe.");

    
    }else {

 $query="UPDATE utilisateur SET nom='$nom', prenom='$prenom', identifiant='$identifiant'";
 
if($mdp!=""){
$mdp=passwordHash::hash($mdp);
 $query=$query.", mdp='$mdp'" ;
}
 
  $query=$query.", type='$type' where id =$id;"  ;
  
  $response =$db->executeNoResponse($query);
   
        echoResponse(201, $response);
    }
   
});

$app->post('/utilisateur', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
   // verifyRequiredParams(array('email', 'name', 'mdp'),$r->utilisateur);
  //  require_once 'mdpHash.php';
    $db = new DbHandler();
$nom=$r->utilisateur->nom;
$prenom=$r->utilisateur->prenom;
$identifiant=$r->utilisateur->identifiant;
$mdp=$r->utilisateur->mdp;
$mdp=passwordHash::hash($mdp);
$id_etude='NULL';
if(isset($r->utilisateur->id_etude)){
$id_etude=$r->utilisateur->id_etude;
}
$type=$r->utilisateur->type;

$id_laboratoire='NULL';
if(isset($r->utilisateur->id_laboratoire)){
$id_laboratoire=$r->utilisateur->id_laboratoire;
}
 $query="select * from utilisateur where identifiant='$identifiant'";
 $response =$db->execute($query);
  
  if($response){
			echoResponse(400,  "L'identifiant existe.");

    
    }else {
           $query="INSERT INTO utilisateur (id, nom, prenom, identifiant, mdp, type, id_laboratoire, id_etude) 
	  VALUES (NULL, '$nom', '$prenom', '$identifiant', '$mdp', '$type', '$id_laboratoire','$id_etude')";
  $response =$db->executeNoResponse($query);
   	
        echoResponse(201,  $response);
    }
});

$app->delete('/utilisateur/:id', function ($id) {

 $db = new DbHandler();
	
	$query="DELETE FROM utilisateur where id=$id";
				
 $response =$db->executeNoResponse($query);
  
			 echoResponse(200, $response);
   
});

$app->get('/utilisateurs/type/:type', function ($type) {
    $db = new DbHandler();

	 $query="SELECT distinct id, nom, prenom, identifiant, type, id_laboratoire, id_etude FROM utilisateur WHERE  type =$type order by id desc";

 $response =$db->execute($query);
  
			 echoResponse(200, $response);
	
    }
);



$app->get('/utilisateur/laboratoire/:id', function ($id) {
    $db = new DbHandler();
 $query="SELECT distinct id, nom, prenom, identifiant, type, id_laboratoire, id_etude FROM utilisateur where  id_laboratoire=$id order by id desc";

 $response =$db->execute($query);
  
			 echoResponse(200, $response);
	
    }
);
$app->get('/utilisateur/etude/:id', function ($id) {
    $db = new DbHandler();
 $query="SELECT distinct id, nom, prenom, identifiant, type, id_laboratoire, id_etude FROM utilisateur where  id_etude=$id  order by id desc";

 $response =$db->execute($query);
  
			 echoResponse(200, $response);
	
    }
);

$app->get('/laboratoires', function() use ($app) {
    $db = new DbHandler();

	 $query="SELECT distinct * FROM laboratoire order by libelle desc";

 $response =$db->execute($query);
  
			 echoResponse(200, $response);
	
    }
);
//lister les etudes d'un laboratoire
$app->get('/laboratoire/:laboratoire/etudes', function ($laboratoire) {
    $db = new DbHandler();

	 $query="SELECT distinct e.* FROM etude e  where e.id_laboratoire =$laboratoire order by id desc";

 $response =$db->execute($query);
  
			 echoResponse(200, $response);
	
    }
);
//Création
$app->post('/laboratoire', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
   // verifyRequiredParams(array('email', 'name', 'mdp'),$r->utilisateur);
  //  require_once 'mdpHash.php';
    $db = new DbHandler();
$libelle=$r->laboratoire->libelle;
$couleur=$r->laboratoire->couleur;
$logo=$r->laboratoire->logo;

      $query="INSERT INTO laboratoire (id, libelle, couleur, logo) 
	  VALUES (NULL, '$libelle', '$couleur', '$logo')";
  $response =$db->executeNoResponse($query);
   	
        echoResponse(201,  $response);
    
});
//Consultation
$app->get('/laboratoire/:id', function ($id) {
    $db = new DbHandler();
 $query="SELECT distinct * FROM laboratoire where id=$id order by id desc";

 $response =$db->execute($query);
  
			 echoResponse(200, $response);
	
    }
);
$app->get('/init', function() {

    $db = new DbHandler();
  $dirs = array_filter(glob('../../data/*'), 'is_dir');

foreach($dirs as $pathLab){
$lab =   str_replace("../../data/","",$pathLab);

if($lab=='logo'){

	continue;
}

$query=" select * from laboratoire where libelle ='$lab'";
 $responseLab =$db->executeSimple($query);
if (empty($responseLab)) {

 $query="INSERT INTO laboratoire (id, libelle,libelle_affichage) VALUES (NULL, '$lab' , '$lab')";  

$responseLab =$db->executeNoResponseSimple($query);
$query=" select * from laboratoire where libelle ='$lab'";
$responseLab =$db->executeSimple($query);
	  
}
  $etudes = array_filter(glob("$pathLab/*"), 'is_dir');
 
foreach($etudes as $etude){
 $etudeLib = str_replace("$pathLab/","",$etude);
 
 $query=" select * from etude where libelle ='$etudeLib'";

 $response =$db->executeSimple($query); 

$labId =$responseLab[0]['id'];
$labId=$labId+"";
if (is_null($response)) {
 
 $query="INSERT INTO etude (id, libelle, libelle_affichage,id_laboratoire	) VALUES (NULL, '$etudeLib', '$etudeLib',$labId)";  
$response =$db->executeNoResponseSimple($query);
 $query=" select * from etude where libelle ='$etudeLib'";
 $response =$db->executeSimple($query);
	  
}
$etudeId =$response[0]['id'];
$etudeId =$etudeId +"";

 $fichiers = array_filter(glob("$etude/*"), 'is_file');
 
 foreach($fichiers as $fichier){
  $fichierLib= utf8_encode(str_replace("$etude/","",$fichier));
      $fichierLib=str_replace("'","\'",$fichierLib );
      $fichier=utf8_encode(str_replace("'","\'",$fichier ));
 $query=" select * from fichier where libelle ='".$fichierLib."' and id_etude=$etudeId ";
                  
 $responsefic =$db->executeSimple($query);
 
if (empty($responsefic)) {

 $query="INSERT INTO fichier (id, libelle, id_etude, chemin	) VALUES (NULL, '$fichierLib', '$etudeId','$fichier')";  
 
$response =$db->executeNoResponseSimple($query);

	}  
}
 
 }
}
       $query=" select * from fichier";
       $fichierstotest =$db->executeSimple($query);
  foreach ($fichierstotest as $value) {    
      if (!file_exists( $value['chemin'])){
         $query="DELETE FROM fichier where id=".$value['id'];
      $db->executeSimple($query);
      }
  }




    echoResponse(200,  'Init:ok');
});

$app->post('/etude/upload',function () use($app) {
  
    $content_dir = '../../data/logo/'; // dossier  sera déplacé le fichier

    $tmp_file = $_FILES['file']['tmp_name'];
    
  

    if( !is_uploaded_file($tmp_file) )
    {
        exit("Le fichier est introuvable");
    }

    // on vérifie maintenant l'extension
     $type_file = $_FILES['file']['type'];

    if( !strstr($type_file, 'jpg') && !strstr($type_file, 'jpeg') && !strstr($type_file, 'bmp') && !strstr($type_file, 'gif') )
    {
        exit("Le fichier n'est pas une image");
    }

    // on copie le fichier dans le dossier de destination
    $name_file = 'etude-'.$_POST['id'].'-'.utf8_encode ( $_FILES['file']['name']);

    if( !move_uploaded_file($tmp_file, $content_dir.$name_file) )
    {
        exit("Impossible de copier le fichier dans $content_dir");
    }
	 $db = new DbHandler();
	$id=$_POST['id'];
	$query="UPDATE etude SET logo='$name_file' where id =$id;";
  $response =$db->executeNoResponse($query);
	
	
    echo "Le fichier a bien Ã©tÃ© uploadÃ©";


  }  
);


$app->delete('/etude/:id/logo', function ($id) {
	$db = new DbHandler();
	$query="UPDATE etude SET logo='' where id =$id";
	$response =$db->executeNoResponse($query);

	chdir('../../data/logo/');
	foreach (glob('etude-'.$id.'-*.{jpg,jpeg,png,gif,JPG,JPEG,PNG,GIF}', GLOB_BRACE) as $filename) {
		unlink($filename);
	}
});


$app->get('/etude/fichier/:id',function () use($app) {

 
 $lab =   str_replace("/etude/fichier/","",$app->request->getPathInfo());

 $db = new DbHandler();
$query="SELECT chemin FROM fichier where id=$lab ";

 $responsebase =$db->execute($query);
				
				
 $log =$responsebase[0]['chemin'];
 
    $res = $app->response();
    $res['Content-Description'] = 'File Transfer';
    $res['Content-Type'] = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    $res['Content-Disposition'] ='attachment; filename=' . basename($log);
    $res['Content-Transfer-Encoding'] = 'binary';
    $res['Expires'] = '0';
    $res['Cache-Control'] = 'must-revalidate';
    $res['Pragma'] = 'public';
    $res['Content-Length'] = filesize($log);   
    ob_clean();   // discard any data in the output buffer (if possible)
flush();      // flush headers (if possible)
    readfile($log);
 

	
    }
);

$app->get('/etude/:id/fichiers/:utilisateur', function ($id,$utilisateur) {
$db = new DbHandler();
if ($utilisateur==0){
     $query="SELECT distinct * FROM fichier where id_etude=$id order by libelle asc";
}else{
    $query="SELECT distinct f.* FROM fichier f ,fichier_utilisateur uf where f.id_etude=$id and uf.id_fichier=f.id and uf.id_utilisateur=$utilisateur order by f.libelle asc";
}
	
 $response =$db->execute($query);
 
if(is_null ($response)){
$response =array();
}
foreach ($response as &$value) {
    $value['libelle'] = utf8_encode($value['libelle']);
}
 echoResponse(200, $response);
	
    }
);


$app->get('/fichier/:utilisateur/habilitation/:id', function ($utilisateur,$id) {
$db = new DbHandler();

    $query="SELECT * FROM fichier_utilisateur where id_fichier=$id and id_utilisateur=$utilisateur";

	
 $response =$db->execute($query);
 
 if(is_null ($response)){
      $query="INSERT INTO fichier_utilisateur (id_fichier, id_utilisateur) VALUES ($id, $utilisateur);";

 }else{
     $query="DELETE FROM fichier_utilisateur where id_fichier=$id and id_utilisateur=$utilisateur";

	
     
 }
  $response =$db->executeNoResponse($query);
 }
);


$app->get('/fichier/:utilisateur/habilitation/:id/all', function ($utilisateur,$id) {

$db = new DbHandler();

 $query="SELECT distinct * FROM fichier where id_etude=$id order by libelle desc";
 
  $response =$db->execute($query);
 
 foreach ($response as $value) {
  $idfichier=$value['id'];
  $query="INSERT INTO fichier_utilisateur (id_fichier, id_utilisateur) VALUES (  $idfichier, $utilisateur);";
  $response =$db->executeNoResponse($query);
 }
 
 }
);

$app->get('/fichier/:utilisateur/habilitation/:id/rien', function ($utilisateur,$id) {
$db = new DbHandler();
 
     $query="DELETE FROM fichier_utilisateur where id_utilisateur=$utilisateur";

  $response =$db->executeNoResponse($query);
 }
);


$app->put('/etude', function() use ($app) {
  $r = json_decode($app->request->getBody());
  
  $response = array();
 $db = new DbHandler();
	$id="";
	if(isset($r->etude->id)){
	$id=$r->etude->id;
}
$actu="";
if(isset($r->etude->actu)){
$actu=base64_encode($r->etude->actu);
}
$couleur1="";
if(isset($r->etude->couleur1)){
    $couleur1=$r->etude->couleur1;
}
$couleur2="";
if(isset($r->etude->couleur2)){
    $couleur2=$r->etude->couleur2;
}
$couleurtexte="";
if(isset($r->etude->couleurtexte)){
    $couleurtexte=$r->etude->couleurtexte;
}

 $query="UPDATE etude SET actu='$actu',couleur1='$couleur1' ,couleur2='$couleur2',couleurtexte='$couleurtexte' where id =$id;";
  $response =$db->executeNoResponse($query);
   
        echoResponse(200, $response);

   
});



$app->get('/etude/:id/fichiers/:utilisateur/habilitation', function ($id,$utilisateur) {
$db = new DbHandler();

    $query="SELECT f.id ,f.libelle,  uf.id_fichier IS NOT NULL  AS flag  FROM `fichier` f LEFT JOIN fichier_utilisateur uf ON f.id = uf.id_fichier and uf.id_utilisateur=$utilisateur where f.id_etude=$id order by f.libelle desc";

	
 $response =$db->execute($query);
 
if(is_null ($response)){
$response =array();
}
foreach ($response as &$value) {
    $value['libelle'] = utf8_encode($value['libelle']);
	
}
 echoResponse(200, $response);


	
    }
);


$app->get('/etude/:id', function ($id) {
    $db = new DbHandler();

	 $query="SELECT distinct * FROM etude where  id=$id order by id desc";

 $response =$db->execute($query);
  foreach ($response as &$value) {
    $value['actu'] = base64_decode($value['actu']);
}
			 echoResponse(200, $response);
	
    }
);

$app->post('/etude', function() use ($app) {
    $response = array();
    $r = json_decode($app->request->getBody());
   // verifyRequiredParams(array('email', 'name', 'mdp'),$r->utilisateur);
  //  require_once 'mdpHash.php';
    $db = new DbHandler();
$libelle=$r->laboratoire->libelle;
$couleur=$r->laboratoire->couleur;
$logo=$r->laboratoire->logo;

      $query="INSERT INTO etude (id, libelle, couleur, logo) 
	  VALUES (NULL, '$libelle', '$couleur', '$logo')";
  $response =$db->executeNoResponse($query);
   	
        echoResponse(201,  $response);
    
});
    
$app->get('/etude/:id/courbe/medecin', function ($id) {
    $db = new DbHandler();
                 
	 $query="SELECT laboratoire.libelle as lab,etude.libelle as et FROM etude , laboratoire WHERE etude.id_laboratoire=laboratoire.id and etude.id=$id";

 $response =$db->execute($query);
  foreach ($response as &$value) {
    $rep ="../../data/".$value['lab']."/".$value['et']."/Courbe_Medecins.xlsx";
}
    date_default_timezone_set('Europe/Paris');
    
$objReader = PHPExcel_IOFactory::createReader('Excel2007');
$objReader->setReadDataOnly(true);

                if (file_exists( $rep)){
$objPHPExcel = $objReader->load( $rep);
$sheet = $objPHPExcel->getActiveSheet();
$highestRow = $sheet->getHighestRow();
$highestColumn = $sheet->getHighestColumn();

//  Loop through each row of the worksheet in turn
          
    $array['cols'][] = array('type' => 'date' , 'id'=> 'date','label'=> 'Date');
    $array['cols'][] = array('type' => 'number' , 'id'=> 'Theorique','label'=> 'Théorique');
    $array['cols'][] = array('type' => 'number' , 'id'=> 'Centres_ouverts','label'=> 'Centres ouverts');  
    $array['cols'][] = array('type' => 'number' , 'id'=> 'Centres_actifs','label'=> 'Centres actifs');
 
    for ($row = 2; $row <= $highestRow; $row++){ 
$array['rows'][] = 
    array('c' => array
          ( 
           array('v'=>'Date('.date('Y, m , j',strtotime ( '-1 month' , strtotime ( date('Y-m-j',PHPExcel_Shared_Date::ExcelToPHP($sheet->getCellByColumnAndRow(0, $row)->getValue()))))).')'),
          array('v'=>$sheet->getCellByColumnAndRow('1', $row )->getValue()   ),
               array('v'=>$sheet->getCellByColumnAndRow('2', $row )->getValue() ),    
               array('v'=>$sheet->getCellByColumnAndRow('3', $row )->getValue()  )
        
          ) 
         );
        }                  
			 echoResponse(200, $array);
	      }
    }
);
$app->get('/etude/:id/courbe/patient', function ($id) {
    $db = new DbHandler();
                 
	 $query="SELECT laboratoire.libelle as lab,etude.libelle as et FROM etude , laboratoire WHERE etude.id_laboratoire=laboratoire.id and etude.id=$id";

 $response =$db->execute($query);
  foreach ($response as &$value) {
    $rep ="../../data/".$value['lab']."/".$value['et']."/Courbe_Patients.xlsx";
}
    date_default_timezone_set('Europe/Paris');
    
$objReader = PHPExcel_IOFactory::createReader('Excel2007');
$objReader->setReadDataOnly(true);

                if (file_exists( $rep)){
$objPHPExcel = $objReader->load( $rep);
$sheet = $objPHPExcel->getActiveSheet();
$highestRow = $sheet->getHighestRow();
$highestColumn = $sheet->getHighestColumn();

//  Loop through each row of the worksheet in turn
          
    $array['cols'][] = array('type' => 'date' , 'id'=> 'date','label'=> 'Date');
    $array['cols'][] = array('type' => 'number' , 'id'=> 'Theorique','label'=> 'Théorique');
    $array['cols'][] = array('type' => 'number' , 'id'=> 'Recrutement patient','label'=> 'Recrutement patients');  
 
    for ($row = 2; $row <= $highestRow; $row++){ 
$array['rows'][] = 
    array('c' => array
          (  
         array('v'=>'Date('.date('Y, m , j',strtotime ( '-1 month' , strtotime ( date('Y-m-j',PHPExcel_Shared_Date::ExcelToPHP($sheet->getCellByColumnAndRow(0, $row)->getValue()))))).')'),
          array('v'=>$sheet->getCellByColumnAndRow('1', $row )->getValue()   ),
               array('v'=>$sheet->getCellByColumnAndRow('2', $row )->getValue() ) 
        
          ) 
         );
        }                  
			 echoResponse(200, $array);
	      }
    }
);

?>