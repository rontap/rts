<?php
    session_start();
    if (!$_SESSION['user'])
    {
        header("Location: error.php?error=Az adott szinten nem hitelesítetted magad!");
    }
?>
    <html>
    <head>
		        <title>Elemential</title>
      <meta charset="UTF-8">
        <meta name="author" content="TAP">
      <meta name="description" content="rontap">
        <meta name="keywords" content="rontap,linux,elemential,tapsite,rts,rjsx">

    <script>
        navname="Elemential Admin"; //hogy jelenik majd meg
        coa=false;      
        moretag=true;
        specnav=true;
        rjsxlocation="http://rontap.netne.net/static/"
        //holvan
        manimg="f_icons/partner.svg";
        specnav=true;
specnavi = ['SQL Manager','Kikérdező','Kifogás','Fórum','Kilépés'];
specnavil = ['sqlmanager.php','ask.php','sorry.php','forum.php','logout.php'];
rjsxThemeOnSite=2;
</script>
    

 
    <body id="body" style="padding-top:0;">


    <rts>
      
      <div class="utitle c">Elemential Admin API Állapot</div>
    
    <style>
    #body {
		padding-top:0 !important;
		}
    </style>
    <script src="http://rontap.netne.net/static/main.js" type="text/javascript"></script>



    </body>
</html>
