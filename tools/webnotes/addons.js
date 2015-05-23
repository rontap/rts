/*
RONTAP RON-JAVASCRIPT-X  rjsx
*/
//THEME DESIGN



function $MenuWebNotes() {

}
console.log('[RJSX][ADDONS] for WebNotes initialised');
/*
function $Err(code) {
	switch (code)
	{
	case "notsup" : 
		alert("A művelet nem támogatott az Ön böngészőjében.\nKérjük frissítsen Google Chrome-ra vagy Operára!"); 
		console.error("[ERR][100] not supported browser");
		break;
	case "fatal" : 
		alert("Ajaj! \nVégzetes hiba történt a WebNotes futása során.\nKérjük jelentkezzen ki, majd újra be!");
		console.error("[ERR][101] FATAL error");
		break;
	case "uc" : alert("A funkció jelenleg fejlesztés alatt áll!\npróbáld újra pár nam múlva!"); 
		break;
	default : alert("Ajaj! \nA program ismeretlen hibába ütközöt.");
		console.error("[ERR][900] unknow error");
	}
}*/
function $Say(what) {
	switch (what)
	{
	case "" :
	}
}
function $DrawSelBox(nev,id,on) {//kivalaszthato dobozt rajzol

	box='<div class="btn-wahl" id="'+id+'" onClick="'+on+'">'+nev+'</div>';
	navleft.innerHTML+=box;
}

function $KeyCode(event) {
console.log(event.charCodeAt(0));
return event.charCodeAt(0);
}
function DrawAlert(cim,text,ok,oktext,oklink,oktext2,onlink2) {
	if (exists('width')==false) {width="200";}
	loginform='';
	loginform+='<div id="wn_alert">';
	loginform+='<div style="position:absolute;width:100%;height:100%;background-color:rgba(75,75,75,0.75);top:0px;bottom:0px;left:0px;right:0px;" id="wn_disabler" >';	
	loginform+='</div>';
	loginform+='<div id="wn_mid"style="position:fixed;top:30%;bottom:auto;width:100%;"><div style="margin-left:auto;margin-right:auto;opacity:0.8;border:1px solid rgb(75,75,75);border-radius:5px;background-color:#ffffff;padding:12pt;width:'+width+'pt;" id="wn_form">';
	loginform+='<div id="alert_cim">'+cim+'</div>';
	//loginform+='<form id="lapis_form">';
	loginform+=text;
	if (ok>1)
	{
		loginform+="<hr><button class='csomag' id='ok_alert'";
		if (exists('oklink')) 	{		loginform+="onclick="+oklink;	    }
		else                    {		loginform+="onclick=CloseAlert();";	}
		loginform+=">"+oktext+"</button>";
	if (ok>2)
	{
		loginform+="<button class='csomag' id='no_alert'";
		if (exists('oklink2')) 	{		loginform+="onclick="+oklink2;	    }
		else                    {		loginform+="onclick=CloseAlert();";	}
		loginform+=">"+oktext2+"</button>";
	}
	}
	//loginform+='	<input id="lapis_username" class="csomag" style="background-color:white;margin:4pt;width:168pt;"><br>';
	//loginform+='  <input id="lapis_password" class="csomag" style="background-color:white;margin:4pt;width:168pt;"><br>';
	//loginform+='  <div id="lapis_submit" class="csomag" style="margin:4pt;width:168pt;">Bejelentkezés</div>';
	//loginform+='  <div onClick="onRegister();" class="csomag" style="margin:4pt;width:168pt;">Regisztráció</div>';
	//loginform+='  <div onClick="onSkip();" class="csomag" style="margin:4pt;width:168pt;">Offline munka</div>';
	//loginform+='  <small>Login provided by <a href="http://lapis.webuda.com">Lapis</a></small>';
	//loginform+='  <input name="rd" type="hidden" value="http://webnotes.comze.com/ajax/login.php">';
	//loginform+='  <script src="http://lapis.webuda.com/sys/ext.js"></script>';
	//loginform+='</form>';
	loginform+='</div></div>';
	loginform+='</div>';
	body.innerHTML+=loginform;
}

function DrawAlertWelcome() {
DrawAlert("Üdvözöljük","ez egy alman<br>A webnotes használat egldk",2,"Rendben");
}
function DrawAlertOffline() {
width="400";
DrawAlert("Offline munka","úgy tűnik amikor offline volt, akkor is jegyzetelt.<br>Kattintson a 'Szinkronizálás'-ra ha szeretné elmezteni a jegyzeteit",3,"Szinkronizálás","","Ne mentse","");
}
function SRenameNote(RAWszam) {
nev=window['noteID'+RAWszam].innerHTML	;
	tedIT.style.display="none";
width="230";
//DrawAlert("","Kérjük adja meg a jegyzet új nevét:<br>"+a,3,"Átnevez","alert(yo);","Mégse","");
	loginform='';
	loginform+='';
	loginform+='<div style="position:absolute;width:100%;height:100%;background-color:rgba(75,75,75,0.75);top:0px;bottom:0px;left:0px;right:0px;" id="wn_disabler" >';	
	loginform+='</div>';
	loginform+='<div id="wn_mid"style="position:fixed;top:30%;bottom:auto;width:100%;"><div style="margin-left:auto;margin-right:auto;opacity:0.8;border:1px solid rgb(75,75,75);border-radius:5px;background-color:#ffffff;padding:12pt;width:'+width+'pt;" id="wn_form">';
	loginform+='<div id="alert_cim">Jegyzet átnevezése</div>';
	loginform+='Kérjük adja meg a jegyzet új nevét:<br>';
	loginform+='<input value='+nev+' type="text" class="csomag"  style="background-color:white;" id="renote">';
	loginform+="<hr><button class='csomag' id='ok_alert' onClick='NewRenameNote(RAWszam);CloseAlert();'>Átnevez</button>";
	loginform+="<button class='csomag' id='no_alert' onClick='CloseAlert();'>Mégse</button>";
	
	loginform+='</div></div>';
	loginform+='';
	wn_alert.innerHTML=loginform;
}
function CloseAlert() {
wn_alert.innerHTML='';
wn_alert.id='';
tedIT.style.display="block";
}
//DrawAlertRename();

