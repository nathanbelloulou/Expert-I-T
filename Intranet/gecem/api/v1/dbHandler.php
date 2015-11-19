<?php

class DbHandler {

    private $conn;

    function __construct() {
        require_once 'dbConnect.php';
        // opening db connection
        $db = new dbConnect();
        $this->conn = $db->connect();
    }
    /**
     * Fetching single record
     */
    public function getOneRecord($query) {
        $r = $this->conn->query($query.' LIMIT 1') or die($this->conn->error.__LINE__);
        return $result = $r->fetch_assoc();    
    }
    /**
     * Creating new record
     */
    public function insertIntoTable($obj, $column_names, $table_name) {
        
        $c = (array) $obj;
        $keys = array_keys($c);
        $columns = '';
        $values = '';
        foreach($column_names as $desired_key){ // Check the obj received. If blank insert blank into the array.
           if(!in_array($desired_key, $keys)) {
                $$desired_key = '';
            }else{
                $$desired_key = $c[$desired_key];
            }
            $columns = $columns.$desired_key.',';
            $values = $values."'".$$desired_key."',";
        }
        $query = "INSERT INTO ".$table_name."(".trim($columns,',').") VALUES(".trim($values,',').")";
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);

        if ($r) {
            $new_row_id = $this->conn->insert_id;
            return $new_row_id;
            } else {
            return NULL;
        }
    }
	
	    public function execute($query) {
       
	  $session= $this->getSession();
   
  if( $session['id']==''){
	
	 return "403";
	}
      
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);
		if($r->num_rows > 0){
				$result = array();
				while($row = $r->fetch_assoc()){
					$result[] = $row;
				}
				return $result; // send user details
			}
        
        }
        
        
        	    public function executeSimple($query) {
       
	 
      
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);
		if($r->num_rows > 0){
				$result = array();
				while($row = $r->fetch_assoc()){
					$result[] = $row;
				}
				return $result; // send user details
			}
        
        }
		
		 public function executeNoResponse($query) {
       
	  $session= $this->getSession();
   
  if( $session['id']==''){
	
	 return "403";
	}
      
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);
return $r;
		
        
        }
        
        
         public function executeNoResponseSimple($query) {
       

      
        $r = $this->conn->query($query) or die($this->conn->error.__LINE__);
return $r;
		
        
        }
	
	
public function getSession(){

    if (!isset($_SESSION)) {
        session_start();
    }
    $sess = array();
    if(isset($_SESSION['id']))
    {
        $sess["id"] = $_SESSION['id'];
        $sess["identifiant"] = $_SESSION['identifiant'];
        $sess["nom"] = $_SESSION['nom'];
        $sess["prenom"] = $_SESSION['prenom'];
		$sess["id_laboratoire"] = $_SESSION['id_laboratoire'];
		$sess["id_etude"] = $_SESSION['id_etude'];
        $sess["type"] = $_SESSION['type'];
    }
    else
    {
        $sess["id"] = '';
        $sess["nom"] = 'Guest';
   
    }
    return $sess;
}
public function destroySession(){
    if (!isset($_SESSION)) {
    session_start();
    }
    if(isSet($_SESSION['id']))
    {
        unset($_SESSION['id']);
        unset($_SESSION['nom']);
        unset($_SESSION['prenom']);
        unset($_SESSION['type']);
        unset($_SESSION['identifiant']);
        
        $info='info';
        if(isSet($_COOKIE[$info]))
        {
            setcookie ($info, '', time() - $cookie_time);
        }
        $msg="Logged Out Successfully...";
    }
    else
    {
        $msg = "Not logged in...";
    }
    return $msg;
}
 
}

?>
