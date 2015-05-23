<?php
    session_start();
    if ($_SESSION['user']=='')
    {
        header("Location: error.php?error=Az adott szinten nem hitelesítetted magad!");
    }
?>
    <html>
    <head>
    <title>Elemential</title>
      <meta charset="UTF-8">
      <style>
      green
      {
      text-align:right;
      }
      </style>
    <script>
        navname="Elemential Admin Manager"; //hogy jelenik majd meg
        coa=false;      
        moretag=true;
        specnav=true;
        rjsxlocation="http://rjsx.elemential.net/"
        //holvan
        manimg="f_icons/partner.svg";
        specnav=true;
specnavi = ['Kezdőoldal','SQL Manager','Kikérdező','Kifogás','Fórum','Kilépés'];
specnavil = ['elemential.php','sqlmanager.php','ask.php','sorry.php','forum.php','logout.php'];
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
      <div class="utitle c">Elemential Admin API Állapot</div>
    <style>
    #body {
		padding-top:0 !important;
		}
    </style>
    <script src="http://rjsx.elemential.net/main.js"></script>
</body>
</html>