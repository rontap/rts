<?php
    session_start();
if ($_SESSION['user'])
    {
        $mysql_host = "mysql8.000webhost.com";
        $mysql_database = "a6158303_element";
        $mysql_user = "a6158303_element";
        $mysql_password = "PaUNpPuAm9195";
        $con=mysqli_connect($mysql_host,$mysql_user,$mysql_password,$mysql_database);
        $query=mysqli_query($con,"SELECT * FROM ask WHERE confirm=0");
    }
?>