<?php
session_start();

include 'locale.php';

?>
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="http://rtsapi.elemential.host22.com/">
<!-- RTS API settings -->
<script >
	navname="Sablon";
	coa=false;	
	moretag=true;
	manimg='';
	rjsxlocation='http://rtsapi.elemential.host22.com/';
	specnav='';
</script>
<!-- Additional head tags -->

<!-- End of additional head tags -->
</head>
<body>
<div id="navbar" >
</div>
<div id="body"> 
<rts>
<!-- Body HTML code -->

<?= e_getlocalstr("welcome"); ?>

<!-- End of body HTML code -->
<script src="http://rtsapi.elemential.host22.com/"></script>
</div>
</body>
</html>
