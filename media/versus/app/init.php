<?
	header("Content-Type: text/html; charset=UTF-8");
	foreach ($_REQUEST as $k=>$v) {
		${$k} = $v;
	}
	
	$db=mysqli_connect('localhost','elementi','PaUNpPuAm9195','elementi_al');
	$db->set_charset("utf8");
	$firstar=true;
	$dev=isset($_REQUEST["dev"]);

	if (!$dev) include "app/functions.php";
	else include "app/functionsT.php";
?>