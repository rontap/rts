<?php
    session_start();
    echo '<html><head><title>Elemential admin panel</title><meta charset="UTF-8"></head><body>';

    if (isset($_POST['user']))
    {
        header('Location: http://elemential.net/lapis.php?action=login&username=' . $_POST['user']
               . '&password=' . $_POST['pass'] . '&redirect=http://elemential.net/admin/login.php');
    }
    else
    {
        $_SESSION['sessionid']=$_GET['sessionid'];
        $_SESSION['user']=file_get_contents('http://elemential.net/lapis.php?action=getName&url=http://elemential.net/admin&sid=' . $_SESSION['sessionid']);
        if ($_SESSION['user']!='badlogin')
        {
            header('Location: elemential.php');
        }
        else
            header('Location: error.php?error=Hibás bejelentkezési adatok!<br><a href="index.php">Vissza</a>);
    }
    echo '</body></html>';
?>