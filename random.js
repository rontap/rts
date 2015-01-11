console.log('[RJSX][RANDOM] initialing...');
	function eoRND() {progbar.max=rndinput.value;}
	function initRND() {progbar.value=1;}
	function eeernd()//szöveg EszpErEntE
	{
	initRND();
	output.innerHTML="";
	text=rndinput.value;
	var eszperente=new Array();	eszperente=["eszperente ", "nyelven ", "bemehet ", "bemehetek ", "megehetlek ", "megehetsz ", "teljesen ", "egyenesen ", "ez ", "ezen ", "eme ", "ezt ", "tetves ", "esztelen ", "kedves  	","hetyeg ", "meg ", "egyenleg ", "egyenes ", "lefetyel ", "gyerek ", "gyerekek ", "kevered ", "kenegeted ", "nyelved ", "mekeg ", "mekegve ", "megy ", "elviselhetetlen ", "elem ", "eleven ", "belenevelem ", "zerge ", "eped ", "eper ", "epernedv ", "ezer ", "egy ", "ezeregy ", "hetven ", "hetvenkedel ", "leveled ", "kerek ", "kerekdek ", "feneked ", "hely ", "nem ", "helyezem ", "helyen ", "fenekem ", "ezennel ", " ", "ebbe ", "feleslegesen ", "fel ", "fellebez ", "ezennel ", "keres ", "eszeget ", "te ", "ez ", "ezen ", "kecsegtet ", "rebeg ", "csere ", "felnevel ", "nevel ", "ezerrel ", "bevesz ", "ment ", "elment ","helyes ","helytelen",", ezzel",". ",", ",". ","!<br>","nem teljesen, ","ezen "," helyen "," elengedhetetlen "," fel "," le "," kedves "," kedvtelen "," keres "," kedves "," kerested "," eszegeted ","kerekded "," felneveled "," nevet "," lent fent "," helyzet "," helyes "," helytelen "," fejetlen "," delejes "," megevett "," szeretett "," zene "," szent ","keret "," kerevet "," terelget "," beletett "," lerendezett "," rendez "," meglehet "," veled "," neked "," eset "," eszeveszett "," elveszett ","megveszett "," cseszeget "," lent "," nevezett "," evezett "," emberek "," embertelen "," engeded "," ereszt "," nevek "," lehetnek "," Ferenc "," tej "," fekete ","nem "," benevez "," mese "," messze "," reszket "," rekettye "," egres "," kecske "," cet "," eledel ","szem "," szemtelen "," rettenetes "," elme "," elver "," keksz ","semerre "," becstelen "," estefele "," szerkesztett "," elv "," nyelv "," nyel "," sejt "," sejk "," megfenyeget "," fej "," zseb "," leves "," heves "," sebes ","lekever "," tele "," teletext "," erre "," berreg "," tekereg "," megvet "," kerepel "," elfelejtettem "," lebzsel "," fest "," fess "," keskeny "," beleszeret ","remek "," kell "," szervezet "," december "," szerel "," szeptember "," berezel "," vesz "," feljegyez "," mester "," ne ellenkezz "," lehell "," persze "," Teller hEde "," beperel "," bestseller ","  beteges "," felettese "," se "," felett "," ne "," bekebelez "," kedvez "," versezet "," perc "," perceg "," eresz "," remeg "," medve "," lep "," ellep "," meglep "," telep "," telepes "," seb "," hegy "," mente "," lepereg "," penget "," jegy "," nemzet "," pezseg "," perzsel "," szer "," szerelem "," lebeg "," hetven "," negyven "," negyvenegy "," ezeregy "," ketten ","nyest "," kert "," kertel "," keleszt "," elmegy "," lehetetlen "," ehetetlen enyves ","fenyves "," menny "," szellem "," szellemes "," szenved "," kellemetlen "," Gergely "," perec "," nyeldekel "," erezet "," lelkek "," kell "," szerzetes "," szerencse "," szerecsen "," keret "," kerecsen "," nefelejcs "," ezredes "," eleped "," esdekel "," szerepel ","<br>",".",".","."];
	//<br bennelegyen?>
	meddig=eszperente.length-1;	
	
	//	
	for (i=1;i<text;i++)
		{	
			//$EventProgress();
			mit=Math.floor(Math.random()*meddig);	
			output.innerHTML+=eszperente[mit];
		}
	//alert(output.length);	
	eoRND();
	}

	function textrnd()//szöveg
	{
	initRND();
	output.innerHTML="";
	text=rndinput.value;
	var betu=new Array();
	betu=["q","w","e","r","t","z","u","i","o","p","ő","ú","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","x","c","v","b","n","m","ö","ü","ó","! ","? S","no, ","q","w","e","r","t","z","u","i","o","p","ő","ú","a","s","d","f","g","h","j","k","l","Ł","ł","ű","í","y","¸","c","v","b","n","m","ö","ü","ó","! ","? W","wrizkoniv, ","nedinow. ","mo shik","t W"," "," "," "," "," "," "," "," "," "," "," "," "," "," ","<br>"];
	//<br bennelegyen?>
	meddig=betu.length-1;	
	if (brix==true)	{	meddig=betu.length;	}
	//	
	for (i=1;i<text;i++)
		{	
			
			mit=Math.floor(Math.random()*meddig);	
			output.innerHTML+=betu[mit];
		}
	eoRND();
	}
	function onernd()//fej/iras
	{	
		
		output.innerHTML="";
		mitir=Math.floor(Math.random()*2);
		var fejir=new Array();
		fejir=["fej","iras"];
		output.innerHTML=fejir[mitir];
		eoRND();
	}
	function colrnd()
	{
		
		r=Math.floor(Math.random()*255);
		g=Math.floor(Math.random()*255);
		b=Math.floor(Math.random()*255);
		output.style.backgroundColor="rgb("+r+","+g+","+b+")";
		eoRND();
	}
	function textcolrnd()
	{
		
		r=Math.floor(Math.random()*255);
		g=Math.floor(Math.random()*255);
		b=Math.floor(Math.random()*255);
		output.style.color="rgb("+r+","+g+","+b+")";
		eoRND();
	}

	function pinrnd() {
        
	hossz=bet.value;
	mennyi=db.value;
	   
	if (enumx.checked==true) {level='num';}
	else if (ehex.checked==true) {level='hex';}
	else if (emin.checked==true) {level='min';}
	else if (emid.checked==true) {level='mid';}
	else if (emax.checked==true) {level='max';}
	else if (eext.checked==true) {level='ext';}
	outputjelszo.innerHTML="";
        
	var full=new Array();
	var sel=new Array();
	num=["0","1","2","3","4","5","6","7","8","9"];
	hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	min=["q","w","e","r","t","z","u","i","o","p","ő","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","x","c","v","b","n","m"];
	mid=["q","w","e","r","t","z","u","i","o","p","ő","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","x","c","v","b","n","m","Q","W","E","R","T","Z","U","I","O","P","Ő","Ú","Ö","Ü","Ó","A","S","D","F","G","H","J","K","L","É","Á","Ű","Í","Y","X","C","V","B","N","M","0","1","2","3","4","5","6","7","8","9"];
	max=["q","w","e","r","t","z","u","i","o","p","ő","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","x","c","v","b","n","m","Q","W","E","R","T","Z","U","I","O","P","Ő","Ú","Ö","Ü","Ó","A","S","D","F","G","H","J","K","L","É","Á","Ű","Í","Y","X","C","V","B","N","M","#","&","@","!","?","+","-","*","/","0","1","2","3","4","5","6","7","8","9","ß","$","Ł","Ł","€","'","(",")","&lt;","&gt;","[","]","-","_","đ","|"];
	ext=["q","w","e","r","t","z","u","i","o","p","ő","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","x","c","v","b","n","m","Q","W","E","R","T","Z","U","I","O","P","Ő","Ú","Ö","Ü","Ó","A","S","D","F","G","H","J","K","L","É","Á","Ű","Í","Y","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0","§","'","+","-","*","!","%","/","=","(",")",",","|","¶","ŧ","–","€","Í","„","”","÷","×","ä","đ","Đ","ħ","[","]","ł","Ł","$","ß","¤","&lt;","&gt;","#","&","@","{","}",",",";","?","_","¬","ˇ","~","˘","°","˛","`","˙","'","˝","¸","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","ф","ы","в","а","п","р","о","л","д","ж","э","я","ч","с","м","и","т","ь","б","ю"];
	  sd="";
	console.log(mennyi);
	for (j=0;j<mennyi;j++)
	{
		a=j+1;
        
		sd+='<core-item><paper-ripple></paper-ripple>'+a+': &nbsp;'; 
		for (i=0;i<hossz;i++)
		{	
			
			mit=Math.floor(Math.random()*window[level].length);	
           
			sd+=window[level][mit];
		}
		sd+='</core-item>';
	}
        outputjelszo.innerHTML=sd;
	}//ee
	
	function rndVERS() {
	output.innerHTML="";
	text=rndinput.value;
		
			var tati_DATAT=[" alma"," józsi", ];
			var titaMA=[" csapat"," nagyon"," magyar", " akár"," neon",  " alatt" ," csakúgy"," magát"," fejét"," vagyok" ," vadul" ," fülét"," barát" ," finom" , " Titán" , " magas" , " magát" , " rövid" , " Felé" , " akár" , " való" , " fehér", " fogás", " fehér"," pedig"," mihelyt",  " hevert" , " idő"," szerep", " kezük" , " szekér"," tenyér"]
			for (i=1;i<text;i++)
			{
				dataPRT=Math.floor(Math.random()*titaMA.length);		
				output.innerHTML+=titaMA[dataPRT];
				if (i%5==0) {
					output.innerHTML+="<br>";
				}
			}
			console.log(yo);
	}
	
	i=0;
	j=0;
	
/*
RONTAP RON-JAVASCRIPT-X  rjsx
RANDOM PACKAGE
*/


	function code() {
	cod=codetext.value;
	mal=pin.value;
	kim='';
	outputPSW.innerHTML='';
	ext=["","","","","","","","","","","e","r","t","z","u","i","o","p","ő"," ","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","c","v","b","n","m",",",".","!","?","E","R","T","Z","U","I","O","P","Ő","Ú","Ö","Ü","Ó","A","S","D","F","G","H","J","K","L","É","Á","Ű","Í","Y","C","V","B","N","M","0","1","2","3","4","5","6","7","8","9","-","@","_",":","=","q","w","Q","W","X","x"];
			console.log('start');
		if (cod.length>9)
		{
		outputPSW.innerHTML='<b>Hiba! a TapCoder2 jelenleg csak 9 karakternél rövidebb kódot tud írni/olvasni. </b>'
		}
		else 
		{
		for (i=0;i<cod.length;i++)
		{
			for (j=0;j<ext.length;j++)
			{
			
				if (ext[j]==cod.charAt(i))
				{
				kim+=j;
				}
			}
		}
			console.log(kim);
			outputPSW.innerHTML+=String(kim*mal);
		}//else
	}//fun
	function decode() {
	kim='';
	outputPSW.innerHTML='az üzenet: ';
	ext=["","","","","","","","","","","e","r","t","z","u","i","o","p","ő"," ","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","c","v","b","n","m",",",".","!","?","E","R","T","Z","U","I","O","P","Ő","Ú","Ö","Ü","Ó","A","S","D","F","G","H","J","K","L","É","Á","Ű","Í","Y","C","V","B","N","M","0","1","2","3","4","5","6","7","8","9","-","@","_",":","=","q","w","Q","W","X","x"];
kim='';
	cod=decodetext.value;
	mal=depin.value;
	code=Math.round(cod/mal);
	console.log(code);
	stringcode=String(code);
	
	for (i=0;i<stringcode.length;i=i+2)//mindegyik karakteren
		{
		//console.log(stringcode.charAt(i) + stringcode.charAt(i+1));
		szam=Number(stringcode.charAt(i) + stringcode.charAt(i+1));
		//console.log(ext[szam]);
		kim+=ext[Number(szam)];
		}
	outputPSW.innerHTML+=kim;
	}
	


	
