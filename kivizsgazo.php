<!DOCTYPE HTML>
<HTML>
	<Head>
		<title>Kikérdező vizsga</title>
	  <meta charset="UTF-8">
		<meta name="author" content="TAP">
	  <meta name="description" content="rontap">
		<meta name="keywords" content="rontap,linux,kikerdezo,tapsite,rts,rjsx">
	 <script src="goog.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="main.css">
	<script src="http://code.jquery.com/jquery-latest.min.js"
        type="text/javascript"></script>
	<script>
		appver="Edu\n TAPIS/calkr.js 1.6 ";
		sited="ttest.html";
		navname="KiKérdező csináló"; //hogy jelenik majd meg
		navplus="2 számológép";
		coa=false;		
		pack="rontap.mainHelp/kikerdezo";
		moretag=true;
		//holvan
		manimg="f_icons/dia.svg";
</script>

	</Head>




	<body >
	<div id="navbar">
	 </div>
	

<div id="body">
<rts>

<span id="stage">vizsga megnyitása
</span>

<div id="menu">	

</div>
<div id="kerdesekq">

	</div>
<table id="kerdesektable">


	</table>
	<script>
kerdes = new Array();
valasz = new Array();
var jkerdes;//jelenlegi kerdes szam

var pontszam;
//feltoltes



//-----------------------------------------
//----STAGES-------------------------------
//-----------------------------------------
//STAGE2
function getexam(szam)
{

$.get('http://rontap.elemential.net/core/readexam.php?id='+szam,function(data){
vizsga=eval("("+data+")");
kerdes=vizsga.kerdes;
valasz=vizsga.valasz;
//IDE ÍRD AZ INDÍTÓ KÓDOT
kerdess=valasz.length-1;
exam();
})
}
kikerdezoHTML='kikerdezo.html';
//stage4
function exam() {
	kerdesholjar=1;//jelenlegi kérdés
	pontszam=0;//pontok 
	stage.innerHTML='4';
//	focim.innerHTML='KiKérdező Vizsga';
	menu.innerHTML='<button onClick="backtoEdit();" disabled class="btn-b">Megoszás</button>	';	
	menu.innerHTML+='<span id="menuin"><button class="btn-b" onClick="kerdesjoe();mondkerdez()" id="gombvalasz">Következő kérdés</button></span>';
		menu.innerHTML+='<button onClick="document.location='+kikerdezoHTML+'" class="btn-b">Új kikérdező létrehozása</button>	';	
	menu.innerHTML+='<span id="kerdesjar">1</span>/'+kerdess+'. kérdés ';
	menu.innerHTML+='<span id="pontok"> '+pontszam+'</span>pont<hr>';
	kerdesekq.innerHTML='<div id="kim">itt fog megjelenni a kerdes</div> válasz:<span id="kimv">itt lesz</span>';
	kerdesekq.innerHTML+='<input class="inp-text" placeholder="válasz" id="valaszinp">';
	mondkerdez();
}
function ertekel() {
	//	kerdesjoe();
	

		 a='<div id="containerxx"> ';
  		 a+='<div id="bar-1" class="bar-main-container azure">';
  		 a+='<div class="wrap">';
       	a+=' <div class="bar-percentage" data-percentage="80"></div><hr>';
     	 a+='<div class="bar-container">';
         a+='<div class="barx"></div>';
     	 a+='</div></div></div> </div>';
     	 kerdesekq.innerHTML=a;
     	 document.getElementsByClassName("barx")[0].className="bar";
     	 percentage=Math.floor(pontszam/kerdess*100)+'%';
         	 $('.bar-percentage[data-percentage]').each(function () {
  $(this).text(percentage) && $(this).siblings().children().css('width',percentage);
});
}
//-----------------------------------------
//----BACKSTAGES---------------------------
//-----------------------------------------

//-----------------------------------------
//-----CORE--------------------------------
//-----------------------------------------
function kerdesjoe() {//exam
	if (kerdesholjar>=kerdess){//ha vegigkerdezte
		menuin.innerHTML='<button onClick="kerdesjoe();ertekel();" class="btn-b">Eredmény</button>'
		
	}	
	if (kerdesholjar>kerdess) {	
	valaszinp.disabled=true;
	return true;
	}		
	else {
		if (valaszinp.value==valasz[jkerdes])
		{
	 	pontszam++;
		pontok.innerHTML=pontszam;
		}
	valaszinp.value="";
	kerdesholjar++;
	kerdesjar.innerHTML=kerdesholjar;
	}
}
function mondkerdez() {//kerzeo
	x('kimv');
	jkerdes=Math.floor(Math.random()*kerdess+1)
	if (kerdes[jkerdes].search("http://")=="-1")
	{
	kim.innerHTML=kerdes[jkerdes];
	}
	else {
	kim.innerHTML='<img src="'+kerdes[jkerdes]+'" width="150px">';
	}
	kim.innerHTML+=' ?'
	gombvalasz.disabled=false;
}
function mondvalasz() {//valaszolo
	kimv.innerHTML=valasz[jkerdes];
	gombvalasz.disabled=true;
}
function insertexamwahl() {
kerdesekq.innerHTML='Kérjük írja be a vizsga azonosítóját, így az Ön vizsgáját tudjuk megnyitni:<br><input class="inp-text" type="number" id="openQ"><button onClick="redirexam()" class="btn-b">Megnyitás</button>'
}
function redirexam() {//átirányít
document.location="kivizsgazo.php?id="+openQ.value;

}
//JSON fonfiguration
insertexamwahl();
function ExamAlert() {

exam();

/*
width="300";
	loginform='';
	loginform+='<div id="wn_alert">';
	loginform+='<div style="position:absolute;width:100%;height:100%;background-color:rgba(75,75,75,0.75);top:0px;bottom:0px;left:0px;right:0px;" id="wn_disabler" >';	
	loginform+='</div>';
	loginform+='<div id="wn_mid"style="position:fixed;top:10%;bottom:auto;width:100%;"><div style="margin-left:auto;margin-right:auto;opacity:0.9;border:1px solid rgb(75,75,75);border-radius:5px;background-color:#ffffff;padding:12pt;width:'+width+'pt;" id="wn_form">';
loginform+='<center><b>Figyelem! a Vizsgára korlátozott idő áll rendelkezésre,és csak a PONTOS választ fogadjuk el</b></center><br>';	
	loginform+="<hr><button class='btn-b' style='float:left;'id='no_alert' onClick='CloseAlert();exam();'>Tovább</button>";
	
	loginform+="<button class='btn-r' id='ok_alert' onClick='CloseAlert();'>Felkészülés folytatása</button>";
	
	loginform+='</div></div>';
	loginform+='</div>';
	body.innerHTML+=loginform;*/
}

//RELEASE LOG--------------------------------------------------------------------RL

//ver 1 : original kikerdezo 			[MARC??]
//ver 2 								[JUNI30]
 //   2.1  restarting
 //   2.2  input bug fix
 //   2.3  összeállító finished
 //   2.4  kikérdező finished
 //   2.5  Exam finished, [STRESSTEST]
 
 //   2.6  added back to STAGE(1)		[JULI01]
 //   2.7  debug
 //   2.75 added precentage, [STABLE]
 //   2.8  bugfix with exam points      [JULI02]
 //   2.9  finished erekel.             
 
</script>
	<footer id="footer" >
	<br>
<br>
<br>


	<hr>
	<span id="footname">Qaestium2 BETA . relase:2013juni</span>
	 <a href="#" onClick="gox('ver.html')" class="footlink">verziók</a> | 
	 <a href="#"  onclick="helpIT();" class="footlink">hogyan működik</a> | 
	 
	
	

	</footer>

	<script src="main.rjsx" type="text/javascript"></script>
	<style>
button, .btn-r,.btn-b,.btn-green {
/*font-size:16px;*/
}
</style>
<script>


</script>
	</Body>
</HTML>
