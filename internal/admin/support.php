<?php
    session_start();
    if ($_SESSION['user']=='')
    {
        header("Location: error.php?error=Előbb jelentkezz be!");
    }
    if ($_POST['idtofix'])
    {
    $fixisset=true;
    }
    if ($_POST['idtounfix'])
    {
    $unfixisset=true;
    }
?>
    <html>
    <head>
    <title>Elemential</title>
      <meta charset="UTF-8">
    <script>
        navname="Elemential Admin Manager"; //hogy jelenik majd meg
        coa=false;      
        moretag=true;
        rjsxlocation="http://rjsx.elemential.net/";
        //holvan
        manimg="f_icons/key.svg";
        specnav=true;
specnavi = ['Kezdőoldal','Web File Manager','SQL Manager','Kikérdező','Kifogás','Kilépés'];
specnavil = ['elemential.php','filemanager.php','sqlmanager.php','ask.php','sorry.php','logout.php'];
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
<br>
<div class="c">Elemential Support admin oldal</div>
<table>
<tr>
<th colspan="9">
Report+ javítatlan hibák
</th></tr>
<tr>
<td style="font-weight:bold;">
ID
</td>
<td style="font-weight:bold;">
Szolgáltatás
</td>
<td style="font-weight:bold;">
Leírás
</td>
<td style="font-weight:bold;">
Böngésző
</td>
<td style="font-weight:bold;">
OS
</td>
<td style="font-weight:bold;">
File
</td>
<td style="font-weight:bold;">
Bejelentés
</td>
<td style="font-weight:bold;">
Javítás
</td>
</tr>
<?php
$con=mysqli_connect("localhost","elementi_al","PaUNpPuAm9195","elementi_al") or die(print(mysqli_error($con)));
mysqli_set_charset($con,'utf8');
if ($fixisset)
{
$alma=mysqli_query($con,"UPDATE support_report  SET fixed=1 WHERE id=".intval($_POST['idtofix'])) or die(print(mysqli_error($con)));
}
$query=mysqli_query($con,"SELECT * FROM support_report WHERE (fixed=0 or fixed=127) ORDER BY id ASC") or die(print(mysqli_error($con)));
while ($fix=mysqli_fetch_assoc($query)) {
echo "<tr><td>".$fix['ID']."</td><td>".$fix['product']."</td><td>".$fix['description']."</td><td>".$fix['browser']."</td><td>".$fix['os']."</td><td>".$fix['file']."</td><td>".$fix['date']."</td><td><form method=\"post\" action=\"support.php\"><input type=\"hidden\" name=\"idtofix\" value=".$fix['ID']."><input type=\"submit\" value=\"Mehet\"></form></td>";
}
?>
<br>
<br>
<table>
<tr>
<th colspan="9">
Report+ javított hibák
</th></tr>
<tr>
<td style="font-weight:bold;">
ID
</td>
<td style="font-weight:bold;">
Szolgáltatás
</td>
<td style="font-weight:bold;">
Leírás
</td>
<td style="font-weight:bold;">
Böngésző
</td>
<td style="font-weight:bold;">
OS
</td>
<td style="font-weight:bold;">
File
</td>
<td style="font-weight:bold;">
Bejelentés
</td>
<td style="font-weight:bold;">
Mégse
</td>
</tr>
<?php
if ($unfixisset)
{
$alma2=mysqli_query($con,"UPDATE support_report SET fixed=0 WHERE id=".intval($_POST['idtounfix'])) or die(print(mysqli_error($con)));
}
$query2=mysqli_query($con,"SELECT * FROM support_report WHERE fixed=1 ORDER BY id ASC") or die(print(mysqli_error($con)));
while ($unfix=mysqli_fetch_assoc($query2)) {
echo "<tr><td>".$unfix['ID']."</td><td>".$unfix['product']."</td><td>".$unfix['description']."</td><td>".$unfix['browser']."</td><td>".$unfix['os']."</td><td>".$unfix['file']."</td><td>".$unfix['date']."</td><td><form method=\"post\" action=\"support.php\"><input type=\"hidden\" name=\"idtounfix\" value=".$unfix['ID']."><input type=\"submit\" value=\"Mehet\"></form></td></tr>";
}
?>
</table>
    <style>
    #body {
		padding-top:0 !important;
		}
    </style>
    <script src="http://rjsx.elemential.net/main.js"></script>
</body>
</html>                          