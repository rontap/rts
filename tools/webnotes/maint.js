/*WEBNOTES MAIN SCRIPT
*made my : rontap
*webnotes made by: deesnow,bobarna,rontap
*edition: BETA2
*2013-04-03

*edition: BETA3
*2013-08-30
* 
*edition: BETA3.1 RJSX7
*2013-11-30 
* 
*edition: RC2
*2014-02-10 
*/
//-------------------------------------------------------------------------------
//GLOBAL VAR'S
//-------------------------------------------------------------------------------



minimalised=false;
notebook_count=3;//hany jegyzet van
RAWszam=0;//elozo szam elmetes
renameing=false; //atnevezesolyamatben
id=0;
noteexists = new Array(null,true,true,true);//leteznek ea tombook
rund=false;//runed before 
//menu_sw.style.opacity='0';
max_notes=25;//maximum jegyzetszam
i_sr=false;
open=false;



note = [];
for (i=0;i<max_notes;i++)
{
	note[i]= { title: 'jegyzet'+i , tart: 'jegyzet '+i }
	}
note[0].title="Üdvözöljük";
note[1].title="Első Jegyzet";
note[2].title="Gyorsjegyzet";

//wn_theme
//---IDEIGLENESE KÓD----
//btn_c.disabled=true;
//-------------------------------------------------------------------------------
//CODE START HERE
//-------------------------------------------------------------------------------

//AJAX ÉS JQUERY IMPLEMENTÁCIÓ
document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>');

//THEME DESIGN
if (localStorage.wn_theme=="")
{
localStorage.wn_theme="20"

}
body.innerHTML+='<style>body {background:url(bg/bg'+localStorage.wn_theme+'.png)  no-repeat center center fixed;}</style>'


//MINIMALIZALAS
function demin_navleft() {
if (minimalised==true) 
	{
	if (i_sr==true)
		{
	document.getElementById('navleft').className ='maxiani';
	//document.getElementById('centralbar').className ='maxtacb';
	var cols =     document.getElementsByClassName('orew');
	  for(i=0; i<cols.length; i++) {
	    cols[i].style.marginLeft="25%";	
		cols[i].style.marginRight="15%"
	  }
	  var tedIT={};
	if (tedIT.innerHTML!==undefined)
	{
	tedIT.style.marginLeft='18%';
	}
	
	navleft.style.width="17%";
	navleft.style.backgroundImage="none";
	navleft.style.backgroundColor="rgba(100,100,100,0.5)";
	navleft.innerHTML=navleft_content;
	
	//centralbar.style.marginLeft="17%";
	if (openNote) {ta_inner.style.marginLeft="20%";document.getElementById('ta_inner').className ='maxta';}
	//ta_inner.style.marginLeft="20%";
	
	minimalised=false;
	i_sr=false;
		}
	else 
		{
		i_sr=true;		
		}
	}
}

function min_navleft() {//NAV minimalizasas
	navleft_content=navleft.innerHTML;
	 document.getElementById('navleft').className ='miniani';
	//document.getElementById('centralbar').className ='mintacb';
	
	navleft.innerHTML='';
	navleft.style.width="2%";
	navleft.style.backgroundColor=" rgba(100,100,100,0.5)";
	navleft.onClick="demin_navleft();";
	var cols =     document.getElementsByClassName('orew');
	  for(i=0; i<cols.length; i++) {
	    cols[i].style.marginLeft="5%";	
		cols[i].style.marginRight="5%"
	  }
	  var tedIT={};
	if (tedIT.innerHTML!==undefined)
	{
	 tedIT.style.marginLeft='5%';
	}
	
	minimalised=true;
	//centralbar.style.marginLeft="2%";
	if (openNote) {ta_inner.style.marginLeft="5%";document.getElementById('ta_inner').className ='minta';}
	
	}

//UJ JEGYZET
function AddNewNotize() {

notebook_count++;
if (notebook_count<=max_notes)
	{
	notes.innerHTML+='<div class="btn-wahl" id="noteID'+notebook_count+'"                    onClick="SwitchNote('+notebook_count+');"                                                   ondblclick="RenameNote('+notebook_count+');">Jegyzet'+notebook_count+'</div>';
	//SwitchNote(notebook_count); //tempo
	noteexists[notebook_count]=true;
	Orewiew();
	}
else {
	notebook_count--;
	btn_c.disabled=true;
	}
	ColorNote(true);
}
	function lovcall(call)
	{
lov='<div id="tedIT"class="textedit" >';
lov+=' <div class="menu">';
lov+=' <button onClick="converttextedit('+"'bold'"+');" class="norjsx"><b>B</b></button>';
lov+='  <button  onClick="converttextedit('+"'italics'"+');" class="norjsx"><i>&nbsp;I&nbsp;</i></button>';
lov+='  <button  onClick="converttextedit('+"'underline'"+');" class="norjsx"><u> U </u></button>';
lov+='  <button  onClick="converttextedit('+"'link+'"+');" style="position:absolute;" class="norjsx">';
lov+='  	<img src="../rontap/link.png" height="20px" align="middle" class="norjsx">';
lov+='  </button>   ';
lov+='  <button id="textedit-done" onClick="switchCE();" class="norjsx">';
lov+='  <img src="../rontap/ok.png" height="20px" align="middle" id="textedit_done_img" >';
lov+='  <div id="textedit_done_text">Done Editing</div>';
lov+='  </button>';

lov+=' </div>';

lov+='  <hr style="border:1px solid #888; height:0px; margin:5px -5px 0 -5px;" >';
lov+=' <div contenteditable id="text1" >';
lov+=call;
lov+='</div>';
lov+='</div>';
return lov;
	}
function Orewiew() {
ta_holder.innerHTML='';
for (i=1;i<notebook_count+1;i++)
{
	if (noteexists[i]==true)
	{
		temp=note[i].tart;
		//console.log(window['note_content_'+i]);
		kim='<div id="orew_holder" >';
		kim+='<div class="orew" id="noteow_1" onClick="OpenNote('+i+');">';
		kim+='	<span id="cimo">';
		kim+=note[i].title;
		kim+='	</span>';
		kim+='	<div id="contc">';
		kim+='<div value="linux" class="prew" disabled>'+temp+'</div>';//'+window['note_content_'+i]+'
		kim+='	</div>';
		kim+='</div></div>';
		ta_holder.innerHTML+=kim;
		//orew_png.style.
	openNote=false;
	
	if (window['noteID'+i].style!==undefined)
		{
			window['noteID'+i].style.background="transparent";
		}
	}
}
}
//--error antiszöveg 
errorsav.innerHTML='';
//----------------
//JEGYZET VALTASA
//----------------

function SwitchNote(szam) {
//deleting others 
	btn_c.disabled=false;
	
	//OfflineNote();//notesz mentése
	
	for (i=0;i<=notebook_count;i++)
		{
		if (document.getElementById("noteID"+i)!=undefined)//osszes atallitasa
			{
			document.getElementById("noteID"+i).style.backgroundColor="rgba(100,100,100,0.0)";		
			}
		}
	select="noteID"+szam;
	//save in note_content
	if (exists('tedIT')) {
	note[RAWszam].tart=text1.innerHTML;
	//ta_inner.value=window[ 'note_content_' + szam ];
	ta_holder.innerHTML=lovcall(note[szam].tart);
	}
	else {
	OpenNote(szam);//ha megis csak ugy valt	
	}
	//console.log(ta_inner.value);
	if (renameing==false)
		{
		//centralbar.innerHTML=document.getElementById(select).innerHTML+" jegyzet.";
		}
	//note switch 
	
	
	
	document.getElementById(select).style.backgroundColor="rgba(100,100,100,0.65)";
	//console.log('change_noteBook');
	RAWszam=szam;//raw szam jelenleg notebook
	//LoadOfflineNote();
	/*if (rund==false)
	{
	ta_holder.innerHTML='<textarea id="ta_inner" value="§E:tainner" onkeyup="OfflineNote();"></textarea>';
	
	rund=true;
	}*/
	openNote=true;
	text1.style.height=window.innerHeight/2+"px";
}
function QuickSaveNote(id)
{
note[id].tart=text1.innerHTML;
console.log(note[id].tart);
}
function OpenNote(id) {//jegyzet megnyitasa Switch Note

select="noteID"+id;
	RAWszam=id;
//ta_holder.innerHTML='<textarea id="ta_inner" value="§E:tainner" onkeyup="OfflineNote();"></textarea>';
//ta_inner.value=window[ 'note_content_' + id ];
ta_holder.innerHTML=lovcall(note[RAWszam].tart);
		if (renameing==false)
		{
		//centralbar.innerHTML=document.getElementById(select).innerHTML+" jegyzet.";
		}	
	//style	
	for (i=0;i<=notebook_count;i++)
		{
		if (document.getElementById("noteID"+i)!=undefined)//osszes atallitasa
			{
			document.getElementById("noteID"+i).style.backgroundColor="rgba(100,100,100,0.0)";		
			}
		}
	if (document.getElementById(select)!==null)
	{
	document.getElementById(select).style.backgroundColor="rgba(100,100,100,0.65)";
	}
	document.getElementById('text1').style.height=window.innerHeight/2+"px";
	openNote=true;
}
//----------------
//RENAME NOTEBOOK
//----------------
function RenameNote(id) {
	renameing=true;
	note=document.getElementById('noteID'+id).innerHTML;
	document.getElementById('noteID'+id).innerHTML="<input type='text' id='renamenote' value="+note+" onkeydown='SaveChangesRename(event,"+id+");'>";
	document.getElementById('noteID'+id).ondblclick="";
	console.log(yo);
	}

	function SaveChangesRename(enter,id) { //enter és mentés for RenameNote
	//új cím==ujcim
	if (enter.keyCode == 13)
		    {
		    	
		        ujcim=document.getElementById('renamenote').value;
		        document.getElementById('noteID'+id).innerHTML=ujcim;
		        note[id].title=ujcim;
		       _ren(id);
				
		    }
	renameing=false;
	
}
	function NewRenameNote(id) { //enter és mentés for RenameNote
	//új cím==ujcim

		    	
		        ujcim=document.getElementById('renote').value;
		        document.getElementById('noteID'+id).innerHTML=ujcim;
		        note[id].title=ujcim;
		       _ren(id);						    
	renameing=false;
	
}

function _ren(id) {
//document.getElementById('noteID'+id).ondblclick=RenameNote(id);
}


//------------------
//DELETE NOTES
//-------------------
function DeleteNote() {//delete

//ta_inner.value=window[ 'note_content_' + szam ];
document.getElementById('noteID'+RAWszam).innerHTML='';
document.getElementById('noteID'+RAWszam).style.opacity=0;
document.getElementById('noteID'+RAWszam).style.Zindex="-100";
document.getElementById('noteID'+RAWszam).style.position="fixed";

note[RAWszam].title="Jegyzet"+RAWszam;
note[RAWszam].tart="-";

noteexists[RAWszam]=false;
RAWszam--;
console.log('deleted noteID'+RAWszam);
max_notes++;
notebook_count--;

btn_c.disabled=false;

Orewiew();
}
//menu
function ShowMenu() {
	if (open==false)
	{
	menu_out.style.opacity='1';
	menu_out.style.zIndex='99';
		menu_out.style.top="38px";
		menu_out.style.bottom="0px";
	body.onClick='ShowMenu()';
	menu_out.innerHTML=menubar;
	open=true;
	}
	
	else {
	menubar=menu_out.innerHTML;
	menu_out.style.top="38px";
	menu_out.style.bottom="100%";
	//menu_out.innerHTML='';
	menu_out.style.opacity='0.5';
	setTimeout(menu_out.style.zIndex='-10',250);
	
	open=false;
	}
}
function HideMenu() {
menubar=menu_out.innerHTML;
	menu_out.innerHTML='';
	
}
//COLOR NOTE
function ColorMenu() {
	width='350';
	loginform='';
	loginform+='';
	loginform+='<div style="position:absolute;width:100%;height:100%;background-color:rgba(75,75,75,0.75);top:0px;bottom:0px;left:0px;right:0px;" id="wn_disabler" >';	
	loginform+='</div>';
	loginform+='<div id="wn_mid"style="position:fixed;top:30%;bottom:auto;width:100%;"><div style="margin-left:auto;margin-right:auto;opacity:0.8;border:1px solid rgb(75,75,75);border-radius:5px;background-color:#ffffff;padding:12pt;width:'+width+'pt;" id="wn_form">';
	loginform+='<div id="alert_cim"Jegyzettömb átszinezése</div>';
	loginform+='kérjük válassza ki a kívánt színt: <input type="color" id="color_note">';
	loginform+="<hr><button class='csomag' id='ok_alert' onClick='ColorNote(color_note.value);wn_alert.innerHTML="+'""'+";'>Átszinez</button>";
	
	loginform+='</div></div>';
	loginform+='';
	//DrawAlert('','',2,"Szinezés!");
	wn_alert.innerHTML=loginform;
}
function ColorNote(uj) {
console.log('cns');
	
	adt=".btn-wahl {border-right:5px solid "+uj+";}";
	adt+=".btn-wahl:hover {border-right:9px solid "+uj+";}";
	adt+=".orew {border-left:3px solid "+uj+";}";
	adt+=".orew:hover {border-left:6px solid "+uj+";}";
	adt+=".orew:active {border:1px solid "+uj+"; border-left:6px solid "+uj+";}";
	adt+="#splan tr td,#orew_holder .rb {border-color:"+uj+";}"
	adt+="#splan tr td:hover,#orew_holder .rb:hover {background-color:"+uj+";}";
	qst.innerHTML=adt;
	
	
}

function settingpop() {

options.style.height="85px";
options.style.opacity="1";
options.style.width="132px";
user_cont.style.width="132px";
user_cont.style.borderRadius="4px 4px 0 0";
}



//OFFLINE WORK
function SaveNote() {//save note every keypress
		window[ 'note_content_' + RAWszam ]=ta_inner.value;
}

function OfflineNote()//save offline note
{
/*SaveNote();
if(typeof(Storage)!=="undefined")
  {
  	if (note_content_1!="§No_content")
  	{
  	localStorage.WNnote_content_1=note_content_1;
  	}
  	console.log("offline...");
  	//alert(localStorage.WNnote_content_1);
  }
*/
}/*
function LoadOfflineNote() {//load offline note
//FORM:
//WNnote_UID<md5>_content_<id>
//WNnote_UID2ea2d153121684dfa6e5f4_content_5
if(typeof(Storage)!=="undefined")
  {
  	note_content_1=localStorage.WNnote_content_1;
  	ta_inner.value=localStorage.WNnote_content_1;
  }

}*/
//OPTIONS-MENU
function die(eget) {
if (eget==true)
{$STDall(true);}
else {console.error('[RJSX][ERROR] VÉGZETES HIBA.\na kód futtatása folytatódik');
alert('hiba történt.\nMentse a munkáját minél hamarabb, és frissítse a weboldalt.')
}
}
function opt_aboutus() {

a='Programozta by: deesnow, rontap \nÖtletek, tesztelés: bobarna \nFordítás: twinky (Angol) ; rontap, bobarna (Német) \nKöszönet: Kamubának a weboldal teszteléséért';
	kim='';
	kim+='<div class="orew" id="noteow_1">';
	kim+='	<span id="cimo">';
	kim+='Webnotes NÉVJEGY';
	kim+='	</span>';
	kim+='	<div id="contc">';
	kim+='<textarea value="linux" class="prew" disabled style="height:150px;">'+a+'</textarea>';//'+window['note_content_'+i]+'
	kim+='	</div>';
	kim+='</div>';
		orew_holder.innerHTML+=kim;
b='LAPIS bejelentkező (irta deesnow)\nRJSX (irta rontap)\nJQuery a googletől\nA weboldalt a 000webhost tartja fenn'
		kim='';
	kim+='<div class="orew" id="noteow_1">';
	kim+='	<span id="cimo">';
	kim+='KÖLSŐ EZKÖZÖK';
	kim+='	</span>';
	kim+='	<div id="contc">';
	kim+='<textarea value="linux" class="prew" disabled style="height:150px;">'+b+'</textarea>';//'+window['note_content_'+i]+'
	kim+='	</div>';
	kim+='</div>';
	orew_holder.innerHTML+=kim;
}
//RUNNNNN
function FirstRun() {

loginform='<div style="position:absolute;width:100%;height:100%;background-color:rgba(15,15,15,0.85);top:0px;bottom:0px;left:0px;right:0px;" id="wn_disabler" ></div>';
loginform+='<div id="centraltext">Welcome To webnotes<br></span></div>'	;
body.innerHTML+=loginform;
}


//RUN
//FirstRun();
HideMenu();



window.onresize = function() {
    if (window.innerWidth<650)
    {
    wnt.innerHTML="WN";
    }
    else {
    wnt.innerHTML="WebNotes"
    }
}
/*
<h2>Webnotes CREDITS</h2>
Programozta by: deesnow, rontap \n
Ötletek, tesztelés: bobarna \n
Fordítás: twinky (Angol) ; rontap, bobarna (Német) \n
LAPIS bejelentkezőt irta:deesnow \n
Köszönet: Kamubának a weboldal teszteléséért \n
*/
