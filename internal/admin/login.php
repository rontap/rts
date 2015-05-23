<?php
    session_start();
    $pass=md5(md5($_POST['pass']));
    echo '<html><head><title>Elemential admin panel</title><meta charset="UTF-8"></head><body>';
    if ($_SESSION['user'])
    {
    header('Location: elemential.php');
    }
	if ($_POST['user'] && !empty($pass))
        {
        	$mysql_host = "localhost";
		$mysql_data = "elementi_al";
		$mysql_user = "elementi_al";
		$mysql_pass = "PaUNpPuAm9195";
		$con=mysqli_connect($mysql_host,$mysql_user,$mysql_pass,$mysql_data) or die(print(mysqli_error($con)));
        $query=mysqli_query($con,"SELECT * FROM admin_login WHERE user='".$_POST['user']."' AND pass='".$pass."'") or die(print(mysqli_error($con)));
        echo 'asd4';
        if (mysqli_num_rows($query)>0)
        {
        $_SESSION['user']=$_POST['user'];
            header('Location: elemential.php');
        }
        else
             {
             header("Location: error.php?error=Hibás%20bejelentkezési%20adatok!<br><a href='index.php'>Vissza</a>");
             }
    }  
    echo "</body></html>";
?>