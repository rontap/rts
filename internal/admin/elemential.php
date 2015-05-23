<?php
    session_start();
    if ($_SESSION['user']=='')
    {
        header("Location: error.php?error=Előbb jelentkezz be!");
    }

?>
    <html>
    <head>
    <title>Elemential</title>
      <meta charset="UTF-8">
    <script>
        navname="Elemential <br> Admin Manager"; 
        coa=false;      
        moretag=true;
        rjsxlocation="http://rjsx.elemential.net/";
        manimg="f_icons/key.svg";
        specnav=true;
specnavi = ['Web File Manager','SQL Manager','Kikérdező','Kifogás','Support','Kilépés'];
specnavil = ['filemanager.php','sqlmanager.php','ask.php','sorry.php','support.php','logout.php'];
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
<div class="utitle c">Elemential Admin API Állapot</div>
<div class="utitle c">Elemential Szerver Állapot</div>
<table>	
	<tr>
		<td>
			Jelenlegi fájl:
		</td>
		<td>
			<?= $_SERVER['PHP_SELF'] ?>
		</td>
	</tr>
	<tr>
		<td>
			<i>Gateway Interface</i>
		</td>
		<td>
			<?= $_SERVER['GATEWAY_INTERFACE'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Szerver IP cím:
		</td>
		<td>
			<?= $_SERVER['SERVER_ADDR'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Szerver név:
		</td>
		<td>
			<?= $_SERVER['SERVER_NAME'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Szerver szoftver:
		</td>
		<td>
			<?= $_SERVER['SERVER_SOFTWARE'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Szerver protokoll:
		</td>
		<td>
			<?= $_SERVER['SERVER_PROTOCOL'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Meghívási metódus:
		</td>
		<td>
			<?= $_SERVER['REQUEST_METHOD'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Lekérés kezdete (timestamp):
		</td>
		<td>
			<?= date($_SERVER['REQUEST_TIME']) ?>
		</td>
	</tr>
	<tr>
		<td>
			Lekérés kezdete:
		</td>
		<td>
			<?= $_SERVER['REQUEST_TIME'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Lekérés kezdete (pontos)
		</td>
		<td>
			<?= $_SERVER['REQUEST_TIME_FLOAT'] ?>
		</td>
	</tr>
	<tr>
		<td>
			<i>Query String</i>
		</td>
		<td>
			<?= $_SERVER['QUERY_STRING'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Root mappa:
		</td>
		<td>
			<?= $_SERVER['DOCUMENT_ROOT'] ?>
		</td>
	</tr>
	<tr>
		<td>
			<i>HTTP karakterkészlet:<i>
		</td>
		<td>
			<?= $_SERVER['HTTP_ACCEPT_CHARSET'] ?>
		</td>
	</tr>
	<tr>
		<td>
			<i>HTTP ACCEPT</i>
		</td>
		<td>
			<?= $_SERVER['HTTP_ACCEPT'] ?>
		</td>
	</tr>
	<!--
'HTTP_ACCEPT_ENCODING'
Contents of the Accept-Encoding: header from the current request, if there is one. Example: 'gzip'.
'HTTP_ACCEPT_LANGUAGE'
Contents of the Accept-Language: header from the current request, if there is one. Example: 'en'.
'HTTP_CONNECTION'
Contents of the Connection: header from the current request, if there is one. Example: 'Keep-Alive'.
'HTTP_HOST'
Contents of the Host: header from the current request, if there is one.
'HTTP_REFERER'
The address of the page (if any) which referred the user agent to the current page. This is set by the user agent. Not all user agents will set this, and some provide the ability to modify HTTP_REFERER as a feature. In short, it cannot really be trusted.
'HTTP_USER_AGENT'
Contents of the User-Agent: header from the current request, if there is one. This is a string denoting the user agent being which is accessing the page. A typical example is: Mozilla/4.5 [en] (X11; U; Linux 2.2.9 i586). Among other things, you can use this value with get_browser() to tailor your page's output to the capabilities of the user agent.
'HTTPS'
Set to a non-empty value if the script was queried through the HTTPS protocol.
Note: Note that when using ISAPI with IIS, the value will be off if the request was not made through the HTTPS protocol.
'REMOTE_ADDR'
The IP address from which the user is viewing the current page.
'REMOTE_HOST'
The Host name from which the user is viewing the current page. The reverse dns lookup is based off the REMOTE_ADDR of the user.
Note: Your web server must be configured to create this variable. For example in Apache you'll need HostnameLookups On inside httpd.conf for it to exist. See also gethostbyaddr().
'REMOTE_PORT'
The port being used on the user's machine to communicate with the web server.
'REMOTE_USER'
The authenticated user.
'REDIRECT_REMOTE_USER'
The authenticated user if the request is internally redirected.
'SCRIPT_FILENAME'
The absolute pathname of the currently executing script.
If a script is executed with the CLI, as a relative path, such as file.php or ../file.php, $_SERVER['SCRIPT_FILENAME'] will contain the relative path specified by the user.
'SERVER_ADMIN'
The value given to the SERVER_ADMIN (for Apache) directive in the web server configuration file. If the script is running on a virtual host, this will be the value defined for that virtual host.
'SERVER_PORT'
The port on the server machine being used by the web server for communication. For default setups, this will be '80'; using SSL, for instance, will change this to whatever your defined secure HTTP port is.
Note: Under the Apache 2, you must set UseCanonicalName = On, as well as UseCanonicalPhysicalPort = On in order to get the physical (real) port, otherwise, this value can be spoofed and it may or may not return the physical port value. It is not safe to rely on this value in security-dependent contexts.
'SERVER_SIGNATURE'
String containing the server version and virtual host name which are added to server-generated pages, if enabled.
'PATH_TRANSLATED'
Filesystem- (not document root-) based path to the current script, after the server has done any virtual-to-real mapping.
Note: As of PHP 4.3.2, PATH_TRANSLATED is no longer set implicitly under the Apache 2 SAPI in contrast to the situation in Apache 1, where it's set to the same value as the SCRIPT_FILENAME server variable when it's not populated by Apache. This change was made to comply with the CGI specification that PATH_TRANSLATED should only exist if PATH_INFO is defined. Apache 2 users may use AcceptPathInfo = On inside httpd.conf to define PATH_INFO.
'SCRIPT_NAME'
Contains the current script's path. This is useful for pages which need to point to themselves. The __FILE__ constant contains the full path and filename of the current (i.e. included) file.
'REQUEST_URI'
The URI which was given in order to access this page; for instance, '/index.html'.
'PHP_AUTH_DIGEST'
When doing Digest HTTP authentication this variable is set to the 'Authorization' header sent by the client (which you should then use to make the appropriate validation).
'PHP_AUTH_USER'
When doing HTTP authentication this variable is set to the username provided by the user.
'PHP_AUTH_PW'
When doing HTTP authentication this variable is set to the password provided by the user.
'AUTH_TYPE'
When doing HTTP authenticated this variable is set to the authentication type.
'PATH_INFO'
Contains any client-provided pathname information trailing the actual script filename but preceding the query string, if available. For instance, if the current script was accessed via the URL http://www.example.com/php/path_info.php/some/stuff?foo=bar, then $_SERVER['PATH_INFO'] would contain /some/stuff.
'ORIG_PATH_INFO'
Original version of 'PATH_INFO' before processed by PHP.
-->
	<!--<tr>
		<td>
			Szerver protokoll:
		</td>
		<td>
			<?= $_SERVER['SERVER_PROTOCOL'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Szerver protokoll:
		</td>
		<td>
			<?= $_SERVER['SERVER_PROTOCOL'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Szerver protokoll:
		</td>
		<td>
			<?= $_SERVER['SERVER_PROTOCOL'] ?>
		</td>
	</tr>
	<tr>
		<td>
			Szerver protokoll:
		</td>
		<td>
			<?= $_SERVER['SERVER_PROTOCOL'] ?>
		</td>
	</tr>-->
	</table>	
<div id="body2">
<script src="http://rjsx.elemential.net/main.js"></script>
</body>
</html>                        