<?php
    session_start();
    echo '<center>'.$_GET['error'];
    echo '<br>Ha a probléma továbbra is fennáll, kérjük használja a <a href="http://elemential.net/kapcsolat">Kapcsolattartóoldal</a>t</center>';
    echo '<html><head><meta charset="UTF-8"></head><title>Error</title></html>';
?>