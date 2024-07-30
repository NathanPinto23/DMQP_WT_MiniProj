<?php

/*

****************************
******* login.php **********
***
*************************


PHP script to handle/validate a login and create a session (and cookie if required)

*/



session_start();



if($_SERVER["REQUEST_METHOD"]=="POST"){

    $username = $_POST["username"];

    $password = $_POST["password"];

    
    if($username=="user" && $password=="password"){

        $_SESSION["loggedin"]=true;

        $_SESSION["username"]=$username;

    }

}


?>