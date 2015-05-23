<?php
    session_start();
    if ($_SESSION['user']=='')
    {
        header("Location: error.php?error=Előbb jelentkezz be!");
    }
$mysql_host = "localhost";
        $mysql_database = "elementi_al";
        $mysql_user = "elementi_al";
        $mysql_password = "PaUNpPuAm9195";
        $con=mysqli_connect($mysql_host,$mysql_user,$mysql_password,$mysql_database) or die(print(mysqli_error($con)));
		mysqli_set_charset($con,"utf8");
	if (isset($_POST['idtook']))
		{
		$q1="UPDATE sorry SET confirm=1 WHERE id=".$_POST['idtook'];
		$qq1=mysqli_query($con,$q1) or die(print(mysqli_error($con)));
	}
	if (isset($_POST['idtong']))
		{
		$q2="UPDATE sorry SET confirm=2 WHERE id=".$_POST['idtong'];
		$qq2=mysqli_query($con,$q2) or die(print(mysqli_error($con)));
	}
	if (isset($_POST['idtonu']))
		{
		$q3="UPDATE sorry SET confirm=0 WHERE id=".$_POST['idtonu'];
		$qq3=mysqli_query($con,$q3) or die(print(mysqli_error($con)));
	}
?>
    <html>
    <head>
    <title>Elemential</title>
      <meta charset="UTF-8">
    <script>
        navname="Elemential <br> Admin Manager"; //hogy jelenik majd meg
        coa=false;      
        moretag=true;
        rjsxlocation="http://rjsx.elemential.net/";
        //holvan
        manimg="f_icons/key.svg";
        specnav=true;
specnavi = ['Kezdőoldal','Web File Manager','SQL Manager','Kikérdező','Support','Kilépés'];
specnavil = ['elemential.php','filemanager.php','sqlmanager.php','ask.php','support.php','logout.php'];
rjsxThemeOnSite=2;
</script>
    <body id="body" class="_round" style="padding-top:0;">
<rts>     
<blue> Üdvözlünk, <?=$_SESSION['user'] ?></blue>
<g> | </g>
<blue>
Te IP-d: 
<?=$_SERVER['REMOTE_ADDR'] ?>
</blue>
<g> | </g>
<blue>Idő: <?=date("Y-m-d H:i:s") ?></blue>
<br>
<div id="body2">
	<table>
		<tr>
			<th colspan="5">Elbírálatlan kifogásrészletek</th>
		</tr>
		<tr>
			<th width='7%'>
				ID
			</th>
			<th width="7%">
				Típus
			</th>
			<th width="40%">
				Szöveg
			</th>
			<th width="10%">
				Elfogadás
			</th>
			<th width="10%">
				Elutasítás
			</th>
		</tr>
	<?
        $query=mysqli_query($con,"SELECT * FROM sorry WHERE confirm=0 ORDER BY type ASC, id ASC") or die(print(mysqli_error($con)));
        while($sor=mysqli_fetch_assoc($query))
        {
            echo "<tr><td style='text-align: center;'>".$sor['ID']."</td><td style='text-align: center;'>".$sor['type']."</td><td>".$sor['text']."</td><td style='text-align: center;'><form method='post'><input type='hidden' name='idtook' value='".$sor['ID']."'><input type='submit' value='Elfogadás'></form></td><td style='text-align: center;'><form method='post'><input type='hidden' name='idtong' value='".$sor['ID']."'><input type='submit' value='Elutasítás'></form></td></tr>";
        }
	?>
	</table>
	<table>
		<tr>
			<th colspan="5">Elfogadott kifogásrészletek</th>
		</tr>
		<tr>
			<th width='7%'>
				ID
			</th>
			<th width="7%">
				Típus
			</th>
			<th width="40%">
				Szöveg
			</th>
			<th width="10%">
				Mégse
			</th>
			<th width="10%">
				Elutasítás
			</th>
		</tr>
	<?
        $query=mysqli_query($con,"SELECT * FROM sorry WHERE confirm=1 ORDER BY type ASC, id ASC") or die(print(mysqli_error($con)));
        while($sor=mysqli_fetch_assoc($query))
        {
            echo "<tr><td style='text-align: center;'>".$sor['ID']."</td><td style='text-align: center;'>".$sor['type']."</td><td>".$sor['text']."</td><td style='text-align: center;'><form method='post'><input type='hidden' name='idtonu' value='".$sor['ID']."'><input type='submit' value='Mégse'></form></td><td style='text-align: center;'><form method='post'><input type='hidden' name='idtong' value='".$sor['ID']."'><input type='submit' value='Elutasítás'></form></td></tr>";
        }
	?>
	</table>
	<table>
		<tr>
			<th colspan="5">Elutasított kifogásrészletek</th>
		</tr>
		<tr>
			<th width='7%'>
				ID
			</th>
			<th width="7%">
				Típus
			</th>
			<th width="40%">
				Szöveg
			</th>
			<th width="10%">
				Elfogadás
			</th>
			<th width="10%">
				Mégse
			</th>
		</tr>
	<?
        $query=mysqli_query($con,"SELECT * FROM sorry WHERE confirm=2 ORDER BY type ASC, id ASC") or die(print(mysqli_error($con)));
        while($sor=mysqli_fetch_assoc($query))
        {
            echo "<tr><td style='text-align: center;'>".$sor['ID']."</td><td style='text-align: center;'>".$sor['type']."</td><td>".$sor['text']."</td><td style='text-align: center;'><form method='post'><input type='hidden' name='idtook' value='".$sor['ID']."'><input type='submit' value='Elfogadás'></form></td><td style='text-align: center;'><form method='post'><input type='hidden' name='idtonu' value='".$sor['ID']."'><input type='submit' value='Mégse'></form></td></tr>";
        }
	?>
	</table>
<script src="http://rjsx.elemential.net/main.js"></script>
</body>
</html>