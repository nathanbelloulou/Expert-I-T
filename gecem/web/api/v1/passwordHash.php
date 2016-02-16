<?php

class passwordHash {



    // this will be used to generate a hash
    public static function hash($password) {

        return substr(md5($password),0,49);
    }

    

}

?>
