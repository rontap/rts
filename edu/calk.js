/**
 * @author rontap

 * pacage: rontap/Math
 * #CALK.JS
 * #tapcalk.html
 * #tapcalk3.html
 * #tapcalkmini.html
 * #canvas.html
 */ 

//PROGRAM
//INITALIZING--------------------------------------------------------------------
var blurhelp;
var hsi=0;
hist=new Array();
tprim=new Array();
hist[0]="<h2>Tapcalk előzményei ebben a munkamenetben:</h2>";
prim=true;
nagye=''; //ha tul nagy a szam uzenet


function cls() {//programiundulás
	div_output='';
	text_output='';
	}
function eoR() {
	hsave();//mentés
	document.getElementById("output").innerHTML=div_output;
	document.getElementById("outputTEXT").innerHTML=text_output;
	get_output=div_output;	
	gettext_output=text_output;	
	if (coa=false)/*compatibleAgent*/ {if (document.getElementById("kerekit").checked==true) {addKEREKIT();} } //kerekites
	blurhelp="oth";
	}
//futás vége
function eoF() {
	hsave();
	document.getElementById("output").innerHTML=div_output;
	get_output=div_output;
	blurhelp="oth";
	}//funkció vége

function updtINPUT() { //bemenet frissitese
	document.getElementById("mennyi").value=div_input;
	updateLENGHT(); updateLENGHT2();
}


//BASE-FOR-RUN-------------------------------------------------------------------
novel=2;
mennyiD=15;
var mennyiD; //A gepi bemenet
function updateLENGHT() 
	{
	parseInt(mennyiD);
	mennyiD=document.getElementById("mennyi").value;
	/*if (mennyiD>1024) {
		mennyiD=1024;
		}
	if (mennyiD<1) {
		mennyiD=2;
		}*/
	}
var mennyiD2; //A gepi bemenet a mesodik inputra
mennyiD2=2;
function updateLENGHT2() 
	{
	parseInt(mennyiD2);
	mennyiD2=document.getElementById("mennyi2").value;
	/*if (mennyiD2>1024) {
		mennyiD2=1024;
		}
	if (mennyiD2<1) {
		mennyiD2=2;
		}*/
	}

//elso
function addMENNYI()
	{	document.getElementById("mennyi").value++;  updateLENGHT();	}
function vonMENNYI()
	{	document.getElementById("mennyi").value--; updateLENGHT();	} 
//masodik
function addMENNYI2()
	{	document.getElementById("mennyi2").value++; novel++; updateLENGHT2();	}
function vonMENNYI2()
	{	document.getElementById("mennyi2").value--; novel--;updateLENGHT2();	} 



function addKEREKIT()
	{	
	div_output=Math.round(div_output);
	eoF();
	}
//CHG beszúrás-------------------------------------------------------------------


function chgPI()
	{	
	mennyi2.value=Math.PI;
	}
function chgGY()
	{	
	mennyi2.value=Math.SQRT2;
	
	}

//-------------------------------------------------------------------------------
//----------------APPS-----------------------------------------------------------
//-------------------------------------------------------------------------------

//BASE---------------------------------------------------------------------------
function addSZOR()	{cls(); div_output=mennyiD*mennyiD2; eoR();}
function CaddSZOR(be,be2)	{cls(); ki=be*be2; eoR();}
function addNEGY()	{cls(); div_output=mennyiD*mennyiD; eoR();}
function addOSZT()	{cls(); div_output=mennyiD/mennyiD2; eoR();}
function addYNEG()	{cls(); div_output=Math.pow(mennyiD,mennyiD2); eoR();}
function addGYOK()	{cls(); div_output=Math.sqrt(mennyiD); eoR();}
function addPI()	{cls(); div_output=Math.PI; eoR();}
function addGY()	{cls(); div_output=Math.SQRT2; eoR();}
function addAMB2() {cls(); div_output=mennyiD*mennyiD+mennyiD2*mennyiD2-2*mennyiD2*mennyiD; eoR();}
function addAPB2() {cls(); div_output=mennyiD*mennyiD+mennyiD2*mennyiD2+2*mennyiD2*mennyiD; eoR();}
function addA2B2() {cls(); div_output=mennyiD*mennyiD-mennyiD2*mennyiD2; eoR();}

function addVON() {cls(); div_output=mennyiD-mennyiD2; eoR();}
function addADD() {cls(); x_idi=mennyiD+mennyiD2 ;div_output=x_idi; eoR();}//xidi ideiglenes


//ADVANCED-FUNCTIONS-------------------------------------------------------------
function calkREND() {//10 ből x-be átvált
cls();
div_output=mennyiD.toString(mennyiD2);
eoR();
}
function calkRENY() {
cls();
div_output=parseInt(mennyiD, mennyiD2);
eoR();
}
function calcFAKT() {
	cls();
	
	fakt=1;
	for (i=mennyiD; i>0; i--) {
		fakt=i*fakt;
	}
	div_output=fakt;
	
	eoR();
	blurhelp="helpFAKT";
	}

function calcNEGY() {
	cls();
	var negyzet;	
	for (i=0; i<mennyiD; i++) {
		negyzet=i;
		negyzet=negyzet*negyzet;
		div_output+=negyzet + ' ';
		}
	eoR();
	blurhelp="helpNEGY";
	}
function calcFIBO() {
	cls();
	var f;
	var fel;
	var fe2;
	f=1;
	fel=0;
	for (i=0; i<mennyiD; i++) {
		fe2=fel;
		fel=f;		
		div_output+=f + ' ';
		f=fel+fe2;
		}
	eoR();
	blurhelp="helpFIBO";
	}

function calcSPIN()
	{
	cls();
	var n ;
	var kn;
	kn=2;
	var nelozo;
	nelozo=2;
	n=2
	nov=4;
	div_output+=kn + ' ';
	kn=kn+nov;
	div_output+=kn+nelozo + ' ';
	nelozo=nelozo+kn;
	for (i=2; i<mennyiD; i++) 
	{	
		kn=kn+nov;	
                n=kn+nelozo;
		
		nelozo=nelozo+kn;
		div_output+=n + ' ';
	}
	eoR();
	blurhelp="helpSPIN";
	}

function calcGYOK()
	{
	cls();
	var x;
	var y;
	var kim;
	x=Math.sqrt(mennyiD);
	y=Math.sqrt(mennyiD2);
	kim=x+y;
	div_output= kim*kim;
	text_output= "√";
	eoR();
	blurhelp="helpGYOK";
	}

function calcRAND() {
	cls();
	div_output=(Math.random()*mennyiD);
	eoR();
	blurhelp="helpRAND";
}
function calcLNKO() {
	cls();
	i=mennyiD;
		while (i>=1)
		{
			if (mennyiD/i%1==0)
			{		
				if (mennyiD2/i%1==0)
				{
				console.log(i);
				c=mennyiD2/i;	
				div_output=i;		
				i=0;
				 			
				}
			}
		i--;
		}
	eoR();
	}

//-PRIMSZAM----------------------------------------------------------------------
function primCALC() {
	prim=true;
	cls();
	kim='';
	szam=mennyiD;
	for (i=2;i<szam;i++) {
		if (szam%i==0)
		{		
		kim+=' , '+i;
		prim=false;
		}
	}
	
		if (prim==false)
		{
			/*if (mennyiD>1023) {
				nagye='<br>A szám 1024-nél nagyobb, nem tudjuk megmutatni az összes osztóját';
			}*/
			div_output='a szám nem prím'+nagye+'<br>osztható: '+kim+' -val.';
		}
	else {
		div_output='A szám prím';
		}
	eoR();
	blurhelp="helpPCAL";
	}
function primSZAM() {
//prim=true;
	parprim=0;
	cls();
	primek=0;
	kim='';
	szam=mennyiD;
	for (i=2;i<=szam;i++)
	{
	prim=true;
		for (y=2;y<i;y++) {//prime
			if (i%y==0)
			{		
				prim=false;
			}
		}
	if (prim==true)
		{
				primek++;
				tprim[primek]=i;
				if (tprim[primek]==tprim[primek-1]+2) {kim+='<span id="red">';}//ha párrim, piros
				kim+=' , '+i;
				if (tprim[primek]==tprim[primek-1]+2) {kim+='</span>'; parprim++;}//lezárás és növelés
				
				
		}
	
	}
	if (mennyiD>1023) {
				nagye='A szám 1024-nél nagyobb. Sajnos jelenleg a prímszámokat csak 1024-ig tudjuk listázni<br>';
			}
	div_output=nagye+kim+'<hr>'+szam+'-ig '+primek+' prímszám található.';	
	div_output+=' Ez a számok '+100*primek/mennyiD+' százaláka';
	
	div_output+='<br>'+szam+'-ig '+parprim+' páros prímszám található. A számok '+100*parprim/mennyiD+' százaláka párosprím. <br>';
	div_output+='A piros számok párosprímet jelentenek. a párrím azt jelenki, hogy a prímszám, és az előtte levő prímszám között 2 a külömbség (tehát ha a 13 piros, akkor a 11 és a 13 párrím és ez 1 db párosprím)';
	eoR();
	blurhelp="helpSPRI";
	}

//angyprim
/*function primSZAM() {
//prim=true;
	
	cls();
	primek=0;
	kim='';
	szam=mennyiD;
	for (i=2;i<=szam;i++)
	{
	prim=true;
		for (y=2;y<i;y++) {//prime
			if (i%y==0)
			{		
				prim=false;
			}
		}
	if (prim==true)
		{
		kim+=' , '+i;		
		div_output+=i+ ' ';			
		}
	
	}	
	div_output=nagye+kim+'<hr>'+szam+'-ig '+primek+' prímszám található.';	
	div_output+=' Ez a számok '+100*primek/mennyiD+' százaláka';

	eoR();
	}

*/
	function writSUBP(base,sup) {
	
	output+=base+'<sup>'+sup+'</sup>×';
	
	}
function primFELX() //A MŰÁKÖÖÖDŰ
{
tpk = new Array();//kitevős
tpe = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);//másik
talal=0;
	cls();
	call=mennyiD;
	i=call;
	/*while (i>0)
	{*/
		for (y=2;y<i;y++)
		{
			if (call%y==0)
			{
			talal++;
			tpk[talal]=y;
			console.log('call:'+call+'@y'+y);//logging
			div_output+='('+call+') # '+y+'<br>';
			call=call/y;
			
				if (call%y==0) 
				{
					y--;//ha a kövi is ua. akkor ne menjen fel a mérce					
				}
				if (tpk[talal]==tpk[talal-1])//kitevőrendezés
				{				
					tpe[talal]=tpe[talal]+1;
					talal--;
				}
			}
			
		}
	console.log('TPK is:'+tpk);//fine
	output='';
	for (i=1;i<tpk.length;i++)
	{
	writSUBP(tpk[i],tpe[i+1]);
	console.log('i@'+i+'SUPB '+tpk[i]+'_SUP:'+tpe[i+1]);//lassst
	}
	div_output+=output+'1';
	eoR();
	//}

}

	
	function primFELB() {
		parprim=0;
		holjarszam=1;
		runit=true;
		szamtalal=false;
	cls();
	primek=0;
	kim='';
	szam=mennyiD;
	for (i=2;i<=szam;i++)//generalas
		{
		prim=true;
			for (y=2;y<i;y++)
			{//prime
				if (i%y==0)
				{		
					prim=false;
				}
			}
		if (prim==true)
			{
					primek++;
					tprim[primek]=i;				
			}
		}
///
		while (tprim[holjarszam]<szam)//oszt egyszer
		{
		alert(holjarszam);	
			if (szam%tprim[holjarszam]==0)
			{		
					szam=szam/tprim[holjarszam];
					div_output.innerHTML+=szam;					
			}
			holjarszam++;//
		/*	for (i=1;i<tprim.length;i++)//leallitas ha primtenyezo a szam
			{
				if (szam==tprim[i])
				{
					alert('§');
					szamtalal=true;
				}
			}*/
		 }
	

	//eoR();
	}
	
function calcADDN() {//3+5+6+7 {3,7}
	cls();
	//mennyiD;
	//mennyiD2;
	kim=0;
	for (i=mennyiD2;i<=mennyiD;i++)
		{
		kim+=i;
		//console.log(kim);
		}
	div_output=kim;
	eoR();
	}
	
function sornCALK(f,l) {
	cls();
	meddig=prompt('Hány tagú legyen a sorozat?',25);
	div_output='start'+mennyiD+mennyiD2+'<br>';
	f=Number(mennyiD);
	l=Number(mennyiD2);
	for (i=0;i<meddig;i++)
	{
		f=Number(f+l);
		console.log(mennyiD);
	 div_output+=f+' ';
	}
	blurhelp="helpSORN";
	
	eoR();
}
function sorgCALK(f,l) {
	cls();
	nov=prompt('Mennyivel legyen minden körben a növekmény?\naz első körben pl +20 at hozzű a másodikban +25 öt',5);
	meddig=prompt('Hány tagú legyen a sorozat?',25);
	div_output='start'+mennyiD+mennyiD2+'<br>';
	n=Number(nov);//novekedes novekedese
	f=Number(mennyiD);//a szam
	l=Number(mennyiD2);//novekedes
	for (i=0;i<meddig;i++)
	{
		f=Number(f+l);
		l=Number(l+n);
		console.log(l);
	 div_output+=f+' ';
	}
	blurhelp="helpSORG";
	
	eoR();
}
//-GEOMETRIA---------------------------------------------------------------------
function geo3MAG()
	{
		cls();
		div_output=Math.sqrt(3*mennyiD)/2;
		eoR();
		blurhelp="help3MAG";
	}
function geo3TER() 
	{
		cls();
		div_output=Math.sqrt(3*mennyiD*mennyiD)/4;
		eoR();
		blurhelp="help3TER";
	}
function geo3PIT()
	{
		cls();
		text_output="√";
		div_output+=mennyiD*mennyiD+mennyiD2*mennyiD2;	
		eoR();
		blurhelp="helpPIT";
	
	}
function geoKKER() 
	{
		cls();
		a=mennyiD*Math.PI;
		div_output=2*a;	
		eoR();
	}
function geoKTER() 
	{
		cls();
		a=mennyiD*Math.PI;
		div_output=a*mennyiD;	
		eoR();
	}
//-HELP-system-------------------------------------------------------------------
function  helpIT() {
	
	switch (blurhelp) {
	case "helpFIBO":
		alert('Kiszamolja a Fibonacci sorozat tagjait n-szer (elso mezoben kell megadni). 1-el kezdi, és az elptte lévő két számot összeadja. ');
		break;
	case "helpNEGY":
		alert('Negyzetszamokat ir ki n-szer (elso mezoben kell megadni). negyzetszam pl a 9 mert 3*3 az kilenc. 16 is mert 4*4.');
		break;
	case "helpFAKT":
		alert('Kiszamolja egy szam faktorialisat. 9! az 9*8*7*6*5*4*3*2*1, tehat az n-szamtol kezdve szorozza össze a számokat 1-ig');
		break;
	case "helpSPIN":
		alert('Kiszamolja az adott hélyon lévő maximális elektronok számát. [Kémia] n-hélyig (elso mezoben kell megadni)');
		break;
	case "helpGYOK":
		alert('Osszead ket gyok alatt levo szamot ugy, hogy a vegeredmegy is gyok alatt legyen. (mindket mezo kell)');
		break;
	case "help3MAG":
		alert('kiszamolja az adott szabalyos haromszog oldalanak a  magassagat  (elso mezoben kell megadni a-oldalt)');
		break;
	case "help3TER":
		alert('kiszamolja az adott szabalyos haromszog teruletet (elso mezoben kell megadni a-oldalt)');
		break;
	case "helpPIT":
		alert('kiszamolja az adott derekszogu haromszog atfogojat ha a masik ket oldal meg van adva');		
		break;
	case "helpRAND":
		alert('visszaad egy random számot. az elso mezoben megadott szam lesz a maximum. pl n:15 akkor az ertek 0-15 lehet. ajánlott a kerekítés funkció használata.')
		break;
	case "helpSORN":
		alert('sorozat. az első szám a kezdő szám, a második pedig a növekvény. a promtba kell beirni hogy meddig');
		break;
	case "helpSORG":
		alert('sorozat. az első szám a kezdő szám, a második pedig a növekvény. az elso promptba kell beirni, hogy mennyivel növekedjen a növekmény. \n tehát ha ez 5, akkor az elsö körben pl +10 ad hozzá, a másodikban +15öt a harmadikban +15öt stb\na második promtba kell beirni hogy meddig');
		break;
	case "helpSPRI":
		alert('kilistazza a primeket');
		break;
	default:
		alert("Ehez sajnos nem tartozik súgó... keress rá a googleban!")
	}
}
//HISTORY-SYSTEM-----------------------------------------------------------------
	function hsave() 
	{
		hsi++;		
		hist[hsi]=div_output;	
	}
	function showsave()//kiirja a mentest
	{
		div_output="";
		for (i=0;i<hist.length;i++)
		{
			
			div_output+=hist[i];
			div_output+="<hr><hr>";
			output.innerHTML=div_output;
		}
		
		output.innerHTML+='<br><button  class="btn-b" id="" onClick="dsave();">Előzmények törlése</button>';
	}
	function dsave() {
	output.innerHTML='Az Előzmények sikeresen törlése kerültek! [innentől nem működik az előzmény]' ;
/*500*/
	hsi=0;
	hist='';
	}
	console.log('[CALK] Succesfull');

