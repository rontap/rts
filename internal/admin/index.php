<?php
    session_start();
    if ($_SESSION['user'])
    {
        header("Location: elemential.php");
    }
    else {
    echo "<html><head><meta charset='UTF-8'><title>Elemential admin login</title></head><body><center>Elemential Admin Manager<form action='login.php' method='post'><table><tr><td>Felhasználónév</td><td><input type='text' name='user'></td></tr><tr><td>Jelszó</td><td><input type='password' name='pass'></td></tr><tr><td><input type='submit' value='Bejelentkezés'></td></tr></table></form></center></body></html>";
    }
?>
<style>
	table {
		opacity:0;
		-webkit-transition:opacity .5s;
		}
body {
	font-size:35px;
	background:#FFF;
	color:#222;
	}
	</style>
 <script>
	 var map = []; // Or you could call it "key"
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    
    if( map[18] && map[69] && map[17] ){ // CTRL+SHIFT+E
	  document.getElementsByTagName('table')[0].style.opacity=1;
      map=[];
    }
}
	 </script>
