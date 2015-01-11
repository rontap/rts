
/**
 * @author rontap
 * co-author: bobarna

 * package: rontap/MathNew
 * #CALKNEW.JS
 * #tapcalk.html
 * #canvas.html
 */

/*
 * created at nov 9
 * compatible only with TapCalk5+
 * and RJSX 7.3+
 */
 

//PROGRAM
//INITALIZING--------------------------------------------------------------------
abc = ["a","b","c","d","e","f","g","h","i","j"];
fn=["Írd be!","Összeadás és kivonás","Szorzás és osztás","Gyökvonás","Hatványozás","Kiemelés és beszorzás","Tömeges összeadás ","Faktoriális ","Számtani ","Mértani","Görbe","Fibonacci","Négyzetszámok","Spinkvantmszám","Szögfüggvények (sin)","Számtani közép (aritmetikai)","Mértani közép (geomatriai)","Harmonikus közép (reciprok)","Négyzetes közép","Prím-e a szám","Prímek listázása","Prímtényezős felbontás","Univerzális átváltás","Átváltás ","Mindent a számról ","Véletlenszerű szám","Kamatszámító","Másodfok","Pireneusi számok","π (pi)","√2 (gyök kettő)"];
halmszam=2;
happyhome=[4,37,58,89,42,145,20,16];
inpn=2; //inputszám a HaMiSaN-hoz
halmaz=[];
functions=[];
validatenumber=true;
for (a=0;a<5;a++)
{
halmaz[a]=[];
}
inpnadd='<button class="inp-text" onClick="addinpn();">Új szám</button>';
a =new Date();
chart='';//grafikonos kirajzoláshoz szűkséges változó
kim=null;
histlength=0;//előzmények
tprim=new Array();
eventfire='';//a SZAMOLD-ra uteskor alkalmazza
prt=new Array("H	Hidrogén","He	Hélium","Li	Lítium","Be	Berillium","B	Bór","C	Szén","N	Nitrogén","O	Oxigén","F	Fluor","Ne	Neon	","Na	Nátrium	","Mg	Magnézium	","Al	Alumínium	","Si	Szilícium","P	Foszfor","S	Kén","Cl	Klór","Ar	Argon","K	Kálium","Ca	Kálcium","Sc	Szkandium	","Ti	Titán	","V	Vanádium	","Cr	Króm	","Mn	Mangán	","Fe	Vas	","Co	Kobalt	","Ni	Nikkel	","Cu	Réz	","Zn	Cink	","Ga	 Gallium","Ge	Germánium	","As	Arzén	","Se	Szelén	","Br	Bróm	","Kr	Kripton	","Rb	Rubídium	","Sr	Stroncium	","Y	Ittrium	","Zr	Cirkónium	","Nb	Nióbium	","Mo	Molibdén	","Tc	Technécium	","Ru	Ruténium	","Rh	Ródium	","Pd	Palládium	","Ag	Ezüst	","Cd	Kadmium	","In	Indium	","Sn	Ón	","Sb	Antimon	","Te	Tellúr	","I	Jód	","Xe	Xenon	","Cs	Cézium	","Ba	Bárium	","La	Lantán	","Ce	Cérium	","Pr	Prazeodímium	","Nd	Neodímium	","Pm	Prométium	","Sm	Szamárium	","Eu	Európium	","Gd	Gadolínium	","Tb	Terbium	","Dy	Diszprózium	","Ho	Holmium	","Er	Erbium	","Tm	Túlium	","Yb	Itterbium	","Lu	Lutécium	","Hf	Hafnium	","Ta	Tantál	","W	Volfrám	","Re	Rénium	","Os	Ozmium	","Ir	Irídium	","Pt	Platina	","Au	Arany	","Hg	Higany	","Tl	Tallium	","Pb	Ólom	","Bi	Bizmut	","Po	Polónium	","At	Asztácium	","Rn	Radon	","Fr	Francium	","Ra	Rádium	","Ac	Aktínium	","Th	Tórium	","Pa	Protaktínium	","U	Urán	","Np	Neptúnium	","Pu	Plutónium	","Am	Amerícium	","Cm	Kűrium	","Bk	Berkélium	","Cf	Kalifornium	","Es	Einsteinium	","Fm	Fermium	","Md	Mendelévium	","No	Nobélium	","Lr	Laurencium	","Rf	Radzerfordium	","Db	Dubnium	","Sg	Sziborgium	","Bh	Borium	","Hs	Hasszium	","Mt	Meitnerium	","Ds	Darmstadtium	","Rg	Röntgenium	","Cn	Kopernícium	","Uut	Ununtrium	","Fl	Flerovium	","Uup	ununpentium	","Lv	Livermorium	","Uuh	Ununszeptium	","Uuo	Ununoktium	","Uue	Ununennium	","Ubn	Unbinilium	","Ubu	Unbiunium");
function makeinput(mal,out) {//legeneralja az input mezőket
for (i=1;i<=mal;i++)
	{
		
		window['input'+i]='<input type="text" class="inp-text-short"  placeholder="5"  ondragenter="return dragEnter(event)" ondrop="return dragDrop(event)"  ondragover="return dragOver(event)"  id="ino'+i+'" >';
	}

for (i=1;i<=out;i++)
	{

		window['output'+i]='<span class="outputtext" ran="'+Math.random()+'" id="ouo'+i+'"></span>';
	}
}


function fillt(c) {

  tfill.style.opacity=0;
  setTimeout(function(){tfill.style.opacity=1;
	makeinput(10,10);
	eventfire='';
    textinp="<p>Ebbe a mezőbe, az adatokat VESSZŐVEL elválasztva kell beírni. A tizedesvessző helyett tizedespont van.</p><br><textarea class='inp-text' placeholder='2,3,9,3.1415' id='area'></textarea>";
    graphis(false);
switch (c) 
{
	case "add" : 				
		
				tfill.innerHTML ='<h1>Összeadás:</h1>'+input1+"+"+input2+"= "+output1+"<br>";
				tfill.innerHTML+='<h1>Kivonás:</h1>'+input3+"-"+input4+"= "+output2+"<br>";
				break;
	
	case "szor" : 								
				tfill.innerHTML ='<h1>Szorzás:</h1>'+input1+"×"+input2+"= "+output1+"<br>";
				tfill.innerHTML+='<h1>Osztás:</h1>'+input3+"÷"+input4+"= "+output2+"<br>";
				break;
	case "gyok" : 								
				tfill.innerHTML ='<h1>Gyökvonás:</h1>√'+input1+"="+output1+"<br>";
				tfill.innerHTML+='<h1>Köbgyök:</h1>√<sup>3</sup>'+input2+"= "+output2+"<br>";
				tfill.innerHTML+='<h1>N-edik gyök:</h1>√<sup>'+input3+"</sup>"+input4+"= "+output3+"<br>";
				ino3.style.width="40px";
				break;
	case "negyz" : 								
				tfill.innerHTML ='<h1>Négyzetre emelés:</h1>'+input1+"<sup>2</sup>="+output1+"<br>";
				tfill.innerHTML+='<h1>N-edikre emelés</h1>'+input2+"<sup>"+input3+"</sup>= "+output2+"<br>";
				tfill.innerHTML+='<br><button class="btn-menu" onClick="fillt('+"'negyzet'"+');">Négyzetszámok</button>';
				ino3.style.width="40px";
				break;
		case "besz" : 								
				tfill.innerHTML ='<h1>Kiemelés és beszorzás</h1>(x+y)<sup>2</sup>:<br>('+input1+'+'+input2+")<sup>2</sup>="+output1+"<br>";
				tfill.innerHTML+='(x-y)<sup>2</sup>:<br>('+input3+'-'+input4+")<sup>2</sup>="+output2+"<br>";
	tfill.innerHTML+='x<sup>2</sup>-y<sup>2</sup>:<br>'+input5+'<sup>2</sup>-'+input6+"<sup>2</sup>="+output3+"<br>";
				ino1.style.width="40px";
				ino2.style.width="40px";
				ino3.style.width="40px";
				ino4.style.width="40px";
				ino5.style.width="40px";
				ino6.style.width="40px";
				break;			
	case "toa" :tfill.innerHTML="<h1>Számok összeadása x-től y-ig:</h1>"+input1+"-től "+input2+"-ig <br> a számok összege:"+output1 ;
                graphis(true)
	
				break;	
	case "fakt" : tfill.innerHTML ='<h1>Faktorális</h1>'+input1+'!='+output1+"<hr>";
                graphis(true);
				ino1.style.width="40px";
				break;
					
	case "szamtani" : tfill.innerHTML ='<h1>Számtani sorozat</h1>Első szám : a<sub>1</sub>'+input1;
					  tfill.innerHTML+='<br>Növekmény: d'+input2+'<br>Utolsó szám: '+input3+"<br>"+output1;
				ino3.style.width="40px";
                graphis(true);
				break;	
				
	case "mertani" : tfill.innerHTML ='<h1>Mértani sorozat</h1>első szám : a<sub>1</sub>'+input1;
					  tfill.innerHTML+='<br>Növekmény: q'+input2+'<br>Meddig generálja: '+input3+"<br>"+output1;
				ino3.style.width="40px";
                graphis(true);
				break;	
						
	case "gorbe" : tfill.innerHTML ='<h1>Görbe sorozat</h1>első szám : a<sub>1</sub>'+input1;
					  tfill.innerHTML+='<br>Növekmény: d'+input2+'<br>Növekmény növekménye: e '+input3+'<br>Meddig generálja:'+input4+"<br>"+output1;
				ino4.style.width="40px";
				break;
					
	case "fibo" : tfill.innerHTML ='<h1>Fibonacci sorozat</h1>Első '+input1+'elem<br>'+output1+"<br>";
                 graphis(true)
				ino1.style.width="40px";
				break;
						
	case "negyzet" : tfill.innerHTML ='<h1>Négyzetszámok</h1>Az Első '+input1+' db négyzetszám listázása<br>'+output1+"<br>";		
				ino1.style.width="40px";
                graphis(true)
				break;
	case "spin" : tfill.innerHTML ='<h1>Spinkvantumszám</h1>Az atomok héjain lévő atomok összege<br>1-től '+input1+'. héjig <br>'+output1+"<br>";
				ino1.style.width="40px";
				break;			
	case "primfel" :
				tfill.innerHTML ='<h1>Prímtényezőkre bontás</h1>a szám: '+input1+' <br>'+output1+"<br>";
				break;
	case "primlist" :
				tfill.innerHTML ='<h1>Prímszámok listázása</h1> '+input1+'-ig.  <br>'+output1+"<br>";
                graphis(true);
				break;
		case "primis" :
				tfill.innerHTML ='<h1>Prím-e a szám? </h1> '+input1+' <br>'+output1+"<br>";
				break;
				
				//SZAMRENDSZER
				
	case "szamrend" : 
				tfill.innerHTML ='<h1>Számrendszerek</h1>';
				tfill.innerHTML+='';
				tfill.innerHTML+='Átváltás '+input1+'-ből'+input2+'-ba.<br>A szám:  '+input3+' <br>'+output1;
				//GEOMETRIE
				break;
	//MESELJ
	case "mesel" :
				tfill.innerHTML ='<h1>Mindent a számokról</h1>';
				tfill.innerHTML+='';
				tfill.innerHTML+='Mondj el mindent a(z)  '+input1+'-ról/-ről.<br>' +output1;
				//in1*in1+in2*in2+2*in2*in
				//mennyiD*mennyiD-mennyiD2*mennyiD2
				break;
	case "masodfok" : 
				tfill.innerHTML='<h1>Másodfokú egyenlet megoldás</h1>';
				tfill.innerHTML+=input1+'*X<sup>2</sup> + '+input2+'*X +'+input3+'=0<br>'+output1;
				ino2.style.width="40px";
				ino1.style.width="40px";
				ino3.style.width="40px";
				break;
	case 'pir' :
				tfill.innerHTML='<h1>Pireneusi számok</h1>';
				tfill.innerHTML+='számok generálása'+input1+'<br>'+output1;
                graphis(true)
				break;
	case 'kamat' :
				tfill.innerHTML='<h1>Katamszámítás</h1>';	
				tfill.innerHTML+='Alaptőke: '+input1+'<br>Kamat (%): '+input2+' <br>futamidő (egység): '+input3+' <br>'+output1;
				ino2.style.width="40px";
				break;
	case 'atlszam' :
				makeinput(50,10);
				tfill.innerHTML='<h1>Számtani közép (hétköznapi átlag)</h1>';	
				tfill.innerHTML+='<span id="inpns">'+textinp+'</span><br>átlag:'+output1;
				break;
	case 'atlmer' :
				makeinput(50,10);
				tfill.innerHTML='<h1>Mértani közép</h1>';	
				tfill.innerHTML+='<span id="inpns">'+textinp+'</span><br>mértani átlag:'+output1;
				break;
	case 'atlhar' :
				makeinput(50,10);
				tfill.innerHTML='<h1>Harmónikus közép (oda-vissza)</h1>';	
				tfill.innerHTML+='<span id="inpns">'+textinp+'</span><br>harmónikus átlag:'+output1;
				break;
	case 'atlneg' :	
				makeinput(50,10);
				tfill.innerHTML='<h1>Négyzetes közép (négyzetek átlagolása)</h1>';	
				tfill.innerHTML+='<span id="inpns">'+textinp+'<br>négyzetes átlag:'+output1;
				break;
	case 'sintg' :
				tfill.innerHTML='<h1>Szögfüggvények (sin, cosin, tg, ctg)</h1>Háromszög<br>';	
				tfill.innerHTML+='a oldal '+input1+'<br>b oldal '+input2+' <br>c oldal (átfogó) '+input3+'<br><img src="haromszogek.png"> <br>'+output1;
				break;
	case 'random' :	
			
				tfill.innerHTML='<h1>Véletlenszerű szám generálása<br>'+input1+' tartományban.<br>'+output1+'<br><button class="btn-menu" onClick="window.location='+"'http://rontap.netne.net/#lipusm.html'"+';" style="width:auto;">véletlengeneráló</button>';
				break;
	case 'valszam' :
				tfill.innerHTML='<h1>Kombinatorika</h1>bemenő adatok:'+input1+input2+input3+input4+input5+'<br>ezeknek az összes kombiációja:<br>'+output1;
				ino1.style.width="40px";
				ino2.style.width="40px";
				ino3.style.width="40px";
				ino4.style.width="40px";
				ino5.style.width="40px";

				break;
	case 'pi' : tfill.innerHTML='Pi<br>értéke: 3.14159265359<br>Használata a Tapcalkban: =PI';break;
	case 'formula' : 
				tfill.innerHTML='<h1>formula beírása.</h1> Az = kötelező az elejére!<br>'+input1+'<br>'+output1;
				ino1.style.width="250px";	
				ino1.placeholder="=2*5+(4/8)";
				tfill.innerHTML+='<br>Jelenleg támogatott függvények:<br>=PI<br>=SQRT2<br>=RANDOM (szám közvetlen utána)<br>=RANDF (szám közvetlen utána)';
				break;
	case 'halmaz' :
				
				tfill.innerHTML="Halmazok<br><br><span id='thalm'>A = { "+input1+"  }<br>B = { "+input2+"  }<br></span><button class='inp-text' style='width=20px;' onclick='addhalm()'>Új Halmaz</button><br>&cup;&and;\\"+output1;
				ino1.style.width="300px";
				ino1.placeholder="1;5;szöveg;hörcsög;125"
				ino1.value="1;2;hörcsög;értékek"
				validatenumber=false;
				break;
	case 'atv' :
				tfill.innerHTML=valtkod;
				break;
	case 'lkkt':
				tfill.innerHTML="<h1>LKKT: Legkisebb Közös Többszörös</h1>1. szám: " + input1 + "<br>2. szám: " +input2 + '<br>'+ output1;
				break;
	case 'lnko':
				tfill.innerHTML="<h1>LNKO: Legnagyobb Közös Osztó</h1>1. szám: " + input1 + "<br>2. szám: " +input2 + '<br>'+ output1;
				break;
    case 'stat' :
                tfill.innerHTML="<h1>Statisztika</h1><p>Ebbe a mezőbe, az adatokat VESSZŐVEL elválasztva kell beírni. A tizedesvessző helyett tizedespont van.</p><br><textarea class='inp-text' placeholder='2,3,9,3.1415' id='area'></textarea>"+output1;
                break;
    case 'happy' : 
                tfill.innerHTML="<h1>Boldog-boldogtalan számok</h1>"+input1+"<br>"+output1;
        break;
    case 'romai' :
                tfill.innerHTML='<h1>Átváltás római számokra és vissza</h1>'+
                    input1+'<br><br><input type="radio" name="witch" value="ar" id="egy" checked>Arabról  Rómaira<br><input type="radio" name="witch" value="ra">Rómairól Arabra<br>'+output1;
                validatenumber=false;
}//switch-c
	eventfire=c;
	location.href="#tmain";
	info(eventfire);
	
	},200);
					}//function
					
function outcall(call,x) {
    var x;
    if (x===undefined) {x=1;}
    window['ouo'+x].innerHTML=call;
    addnum(call);   
}
function calkr(call)
	{
	/*if (exists('call'))
		{
			eventfire=call;
			}*/
	console.log("calk: "+eventfire); 
	
	for (j=1;j<=10;j++)
	{
		if ((window['ino'+j]!=undefined))
		{
				
			if (validatenumber==false)
			{
				window['in'+j]=window['ino'+j].value;
				console.log('unvalidated')
			} 
			else {
			 if (window['ino'+j].value=="=PI")
			{
				window['in'+j]=Math.PI;
			}
			else if (window['ino'+j].value=="=E")
			{
				window['in'+j]=Math.E;
			}
			else if (0<=window['ino'+j].value.search("SQRT") && 0==window['ino'+j].value.search("="))
			{
				test=window['ino'+j].value;
				test=test.slice(5,String(test).length);
				window['in'+j]=Math.sqrt(test);
			}
			else if (0<=window['ino'+j].value.search("!") && 0==window['ino'+j].value.search("="))
			{
					
					fakt=1;
					console.log(j);
					test=window['ino'+j].value;
					test=test.slice(1,String(test).length-1);
					console.log(test);
					
					for (i=test; i>0; i--) {
								fakt=i*fakt;
					}
					
				console.log('=!'+fakt);
				window['in'+j]=fakt;
			}
			else if (0<=window['ino'+j].value.search("RANDF") && 0==window['ino'+j].value.search("="))
			{	//egész		
			test=window['ino'+j].value;
			test=test.slice(6,String(test).length);
			if (test=="") {test=1;}
			window['in'+j]=Math.round(Math.random()*test);
			}
			else if (0<=window['ino'+j].value.search("RANDOM") && 0==window['ino'+j].value.search("="))
			{
			
			test=window['ino'+j].value;
			test=test.slice(7,String(test).length);
			if (test=="") {test=1;}
			window['in'+j]=Math.random()*test;
			}
			else if (0==window['ino'+j].value.search("="))
			{
				test=window['ino'+j].value;
				test=test.slice(1,String(test).length);
				window['in'+j]=eval(test);
			}
			else {
			
			window['in'+j]=Number(window['ino'+j].value);// a szamokat atalakitja 
			}
			
			}//validate
		}
		
	}
	validatenumber=true;
	chart='';
	althist=false;	
	precalkr(call);
	}

	function precalkr(call) {
	switch (eventfire) 
{
		//ALAPMŰVELETEK
	case "add" : outcall(in1+in2,1);
				 outcall(in3-in4,2);
				 break;
				 
	case "szor" :
				 outcall(in1*in2)
				 if (in4!=0)
				 {
				 outcall(in3/in4,2);
				 }
                 else {
                  rjsx.notify("nullával nem lehet osztani!","red");   
                 }
				 break;
				 
		case "gyok" : 
                 outcall(Math.pow(in1, 1/2));
				 outcall(Math.pow(in2, 1/3),2);
				 outcall(Math.pow(in4, 1/in3),3);
				 break;
				 
		case "negyz" : 
                 outcall(in1*in1);
				 outcall(Math.pow(in2,in3),2);
				 break;	
		case "besz" :	
			 
				 outcall(in1*in1+in2*in2+2*in2*in1)	; 
				 outcall(in3*in3+in4*in4-2*in4*in3,2)	;
				 outcall(in5*in5-in6*in6,3);
				 break;
				 
		case "toa": kim=0;
					for (i=in1;i<=in2;i++)
					{
					kim+=Number(i);	
					chart+=parseInt(kim)+'-';
					}
					outcall(kim);
				break;
		case "fakt": fakt=1;
					for (i=in1; i>0; i--) {
						chart+=parseInt(fakt)+'-';
						fakt=i*Number(fakt);
						
					}
					outcall(fakt);
				break;
				//SOROZATOK
				
				
		case "szamtani" : 
                     ouo1.innerHTML="";
					for (i=1;i<=in3;i++)
					{
						
					 	ouo1.innerHTML+='<span class="l"onClick="rjsx.notify('+"'Ez a sorozat "+i+". eleme'"+');addnum(\''+in1+'\')">'+in1+'</span> ';
					 	in1=Number(in1+in2);
                        chart+=in1+'-';
					}
					break;
		case "mertani" : 
                     ouo1.innerHTML="";
					for (i=1;i<=in3;i++)
					{
						
					 	ouo1.innerHTML+='<span class="l"onClick="rjsx.notify('+"'Ez a sorozat "+i+". eleme'"+');addnum(\''+in1+'\')">'+in1+'</span> ';
					 	in1=Number(in1*in2);
                         chart+=in1+'-';
					}
					break;
		case "gorbe" : 
					for (i=1;i<=in4;i++)
					{
					
	ouo1.innerHTML+='<span class="l"onClick="rjsx.notify('+"'Ez a sorozat "+i+". eleme. Itt a növekmény."+in3+"'"+');addnum(\''+in1+'\')">'+in1+'</span> ';
					 	in1=Number(in1+in2);
					 	in2=Number(in2+in3);	
					}
					break;
		case "fibo" :
                    ouo1.innerHTML="";
					var f,fel,fe2;
					f=1;
					fel=0;
					for (i=0; i<in1; i++) {
						fe2=fel;
						fel=f;		
						ouo1.innerHTML+='<span class="l"onClick="rjsx.notify('+"'Ez a sorozat "+i+". eleme'"+');addnum(\''+f+'\')">'+f+'</span> ';
						f=Number(fel)+Number(fe2);
						chart+=f+'-';
						}
					break;
					
		case "negyzet" :			
					var negyzet;	
					for (i=0; i<in1; i++) {
						negyzet=i;
						negyzet=negyzet*negyzet;
						chart+=negyzet+'-';
						ouo1.innerHTML+='<span  class="l"onClick="rjsx.notify('+"'Ez a sorozat "+i+". eleme, és egyben a szám gyöke.'"+');addnum(\''+negyzet+'\')">'+negyzet+'</span> ';
						}
					break;	
		case "spin" :
					var n,kn
					kn=2;
					var nelozo;
					nelozo=2;
					n=2
					nov=4;
					ouo1.innerHTML+=kn + ' ';
					kn=kn+nov;
					ouo1.innerHTML+=kn+nelozo + ' ';
					nelozo=nelozo+kn;
					for (i=2; i<in1; i++) 
					{	
						kn=kn+nov;	
						n=kn+nelozo;
		
						nelozo=nelozo+kn;
						ouo1.innerHTML+=n + ' ';
						if (i==7)
						{
						ouo1.innerHTML+="<br>ennél több atomhéjjal rendelkező atomot még nem fedeztek fel :/<br>"
						}
					}
					break;
					//GEOMETRIA
			//PRÍMSZÁMOK
	case "primfel" :
				tpk = new Array();//kitevős
				tpe = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);//másik
				talal=0;
		sqrtis=false;
			call=in1;
			i=call;
            ouo1.innerHTML="";
            addnum(call);
			/*while (i>0)
			{*/
			if (Math.sqrt(call)==Math.floor(Math.sqrt(call)))
			{
				call=Math.sqrt(call);
				sqrtis=true;
			}
				for (y=2;y<i;y++)
				{
					if (call%y==0)
					{
					talal++;
					tpk[talal]=y;
					console.log('call:'+call+'@y'+y);//logging
					ouo1.innerHTML+='('+call+') # '+y+'<br>';
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
			
			ouo1.innerHTML+=output+'1';
			if (sqrtis) {ouo1.innerHTML+='×'+output+'×1';}
				break;
		case "primlist" :
				kimt= new Array;
					parprim=0;
				
				primek=0;
				kim='';
				szam=in1;
                addnum(szam);
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
                            
							if (tprim[primek]==tprim[primek-1]+2) {kim+='<span class="red">';}//ha párrim, piros
							kim+='&nbsp;<span class="l" onclick="addnum('+i+')">'+i+"</span>&nbsp;";
							kimt[primek]=i;
							chart+=i+'-';
							if (tprim[primek]==tprim[primek-1]+2) {kim+='</span>'; parprim++;}//lezárás és növelés
				
				
					}
	
				}
				ouo1.innerHTML=kim+'<hr>'+szam+'-ig '+primek+' prímszám található.';	
				ouo1.innerHTML+=' Ez a számok '+100*primek/in1+' százaláka';
                
				althist=true;
				ahc= in1;
			break;
			
			
		case "primis" : 
					prim=true;
			
			kim='';
			szam=in1;
            addnum(in1);
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
					ouo1.innerHTML='a szám nem prím<br>osztható: '+kim+' -val.';
				}
			else {
				ouo1.innerHTML='A szám prím';
				}
				break;
		case "szamrend" : 
				
				in3=parseInt(in3,in1);
				in3=(in3).toString(in2);
				ouo1.innerHTML=in3+'<sub>('+in2+')</sub>';
                addnum(in3);
				break;
				
		case "mesel" : meselj(); break;
		
		case "masodfok" : 
				meg1=((-1*in2)+Math.sqrt(in2*in2-4*in1*in3))/(2*in1);
				meg2=((-1*in2)-Math.sqrt(in2*in2-4*in1*in3))/(2*in1);
				ouo1.innerHTML='';
				if (!(isNaN(meg1))) {ouo1.innerHTML+='X<sub>1</sub>: '+meg1;addnum(meg1);}
				
				if (!(isNaN(meg2))) {ouo1.innerHTML+='<br>X<sub>2</sub>: '+meg2;addnum(meg1);}
				
				if (ouo1.innerHTML=='')
				 {
				 ouo1.innerHTML+='Nincs megoldás!';
				 }
				 
				/* ouo1.innerHTML+='<hr>Kibontott alak:<br>';
				 ouo1.innerHTML+=*/
				break;
		case "pir":
				can=1;
				kim="";
                addnum(in1);
				segm = 0; segm2 = 0;
				for (i=1;i<=in1;i++)
				{
				can=i/can;
				chart+=Number(can)+'-';

				kim+='<br>'+i+'.: &nbsp;<span onClick="alert('+"'Ez a  "+i+"-nak/nek a pireneusa'"+')">'+can+'</span>';
					if (i==256) {kim+='<hr><b>innentől minimális a növekvény</b><hr>'}	
				}	
				ouo1.innerHTML=kim;
					break;
		case 'kamat' :
				kim='';
				for (i=0;i<in3;i++)
				{
				kim+=i+'. hó : '+(Math.round(in1*1000)/1000)+'<br>';
				in1=Number(in1)+(Number(in1)*(Number(in2)/100));
				}	
				ouo1.innerHTML='A(z) '+i+'. hónapban: '+(Math.round(in1*10000)/10000)+kim;			
				break;
		case 'atlszam' :
				kim=0;
                a=JSON.parse("["+area.value+"]");
				for (i=0;i<a.length;i++)
				{
					kim=kim+a[i];
					console.log(kim+' '+a);
				}
				kim=kim/a.length;
				outcall(kim);
				break;
		case 'atlmer' :
				kim=1;
                a=JSON.parse("["+area.value+"]");
				for (i=0;i<a.length;i++)
				{
					kim=kim*a[i];
					console.log(kim+' '+inpn);
				}
				kim=Math.sqrt(kim);
				outcall(kim);
				break;
		case 'atlhar' :
				kim=0;
                a=JSON.parse("["+area.value+"]");
				for (i=0;i<a.length;i++)
				{
					kim=kim+1/a[i];
					console.log(kim+' '+a);
				}
				kim=1/(kim/2);
				outcall(kim);
				//ouo1.innerHTML=1/(((1/in1)+(1/in2))/2);
				break;
		case 'atlneg' :
				kim=0;inpn=2;
                a=JSON.parse("["+area.value+"]");
				for (i=0;i<a.length;i++)
				{
					kim=kim+a[i]*a[i];
					console.log(kim+' '+a);
				}
				kim=kim/a.length;
				outcall(Math.sqrt(kim));
				
				break;
		case 'sintg' :
				if (ino3.value=="")
				{
				in3=Math.sqrt(in1*in1+in2*in2);
				ino3.value=in3;				
				}
				sin=in1/in3;
				cos=in2/in3;
				tan=in1/in2;
				ctg=in2/in1;
				
				ouo1.innerHTML=' sin: '+sin+'<br> cosin: '+cos+'<br> tan: '+tan+'<br> cotan: '+ctg;
				break;
		case 'random' :
				outcall(Math.random()*in1);
				break;
		case 'valszam':
		   t = [];  
    for (i=0;i<=4;i++)
    {
        t[i]=window['in'+(i+1)];
    }
    i=1;
    kim="";
    for (a=0;a<=4;a++) 
    {     
      for (b=0;b<=4;b++) 
            {                     
             for (c=0;c<=4;c++)
             {                           
                for (d=0;d<=4;d++)
                {             
                  for (e=0;e<=4;e++)
                  {
                   if ((a!=b)&&(a!=c)&&(a!=d)&&(a!=e)&&(b!=c)&&(b!=d)&&(b!=e)&&(c!=d)&&(c!=e)&&(d!=e)) {
                   aa=t[a];
                   aa+=' '+t[b];
                   aa+=' '+t[c];
                   aa+=' '+t[d];
                   aa+=' '+t[e];
                     kim+=aa+ ' : '+i+'<br>';
                     i++;
                   }
               
                  }
              }            
          }
      }
    }
  ouo1.innerHTML=kim;
  break;
  case 'halmaz'   :
  	t=[]

  	for (i=1;i<=halmszam;i++)
  	{	
  		console.log(window['in'+i]);
  		t[i]=window['in'+i].split(";"); 
  	}
  	break;
  case 'formula' :
                outcall(eval(in1)); 
                
        break;
  case 'lkkt' :
				a=unio(primf(in1),primf(in2));
				kim=1;
				for (i=0;i<a.length;i++)
				{
				kim*=a[i];
				}
				 ouo1.innerHTML=kim+' a két szám LKKT-e.';
                 addnum(kim);
	break;
	case 'lnko' :
				a=metszet(primf(in1),primf(in2));
				kim=1;
				for (i=0;i<a.length;i++)
				{
				kim*=a[i];
				}
				 ouo1.innerHTML=kim+' a két szám LNKO-ja.';
                addnum(kim);
	break;
    case 'stat':
        swhat=[];
        squant=[];
        a=JSON.parse("["+area.value+"]");
        a.sort(sortit);
        sum=0;
        se="<br><TABLE><tr><td>Rendezett minta:</td><td>"
        for (i=0;a.length>i;i++) { 
            se+=a[i]+", ";
            sum+=a[i];
            
            if (swhat.indexOf(a[i])>-1)/*módusz*/
            {
             squant[swhat.indexOf(a[i])]++;   
            }
            else {
             swhat[swhat.length]=a[i];
             squant[swhat.length-1]=1;
            }
        };
        se+="</td></tr><tr><td>Átlag:</td><td>"+sum/a.length+"</td></tr>";
        if (a.length%2==0) { median=(a[a.length/2-1]+a[a.length/2])/2; } else { median=a[a.length/2-.5]; };
        se+="<tr><td>Medián:</td><td> "+median+"</td></tr>";
        
        selectedindex=0;
        modus=[];
        for (i=0;i<swhat.length;i++)
        {
         if (squant[i]>selectedindex)
         {
          selectedindex=squant[i];   
         }
        }
        se+="<tr><td>Módusz:</td><td>";
        for (i=0;i<swhat.length;i++)
        {
         if (squant[i]==selectedindex)
         {
             se+=swhat[i]+", ";
         }
        }
        se+="</td></tr></TABLE>"
        ouo1.innerHTML=se;        
    break;
        case  'happy' :
        kim='';
        istrue=true;
            while (istrue)
            {
            
            hold=0;  
            for (i=0;i<String(in1).length;i++)
                {
                hold+=Number(String(in1).charAt(i))*Number(String(in1).charAt(i));   
                    
                }
            
            in1=Number(hold);
                kim+='<span class="l" onclick="addnum('+hold+'">'+hold+"</span>  »";
            for (i=0;i<happyhome.length;i++)
                {   
                    if (happyhome[i]==in1)
                    {
                        istrue=false;
                        kim+="<br><br>Ez a szám nem boldog szám :( innentől a Boldogtalanság gyűrűben megy körbe-körbe:<br><grey>58<br>89<br>145<br>42 <br>20<br>4<br>16<br>37</grey>";
                        i=Infinity;
                    }
                    if (in1==1) {
                     istrue=false; 
                        kim+="<br>Ez egy boldog szám!<br>";
                        i=Infinity;
                    }
                }
                
                
            console.log(in1);
            }
        ouo1.innerHTML=kim;
    break;
        
    case 'romai' : melyik(ino1.value); break;
}//switchú
function sortit(a,b){
return(a-b)
}
//-END OF FUNCTION SWITCH-----------------------------------------------FUNCTION-SWITCH-----------------------------

	vanouo=true;i=0;


		}	
		
	
f='';	
function info(eventfire) {

	switch (eventfire)
	{
	case 'add' : f='Összeadás: Megadja a számok összegét. (pl.: 2+3=5)<br>Kivonás: Megadja a számok különbségét. Az összeadás ellentéte (pl.: 5-3=2)'; break;
	case 'szor': f="Szorzás:Megadja a számok szorzatát. Egyazon szám többszöri összeadását rövidítő alapművelet. (pl.: 2*3=6 , ami 2+2+2)<br>Osztás: Megadja a számok hányadosát. Egy 'a' elemű halmazban egyforma méretű 'b' csoportot képzünk. (pl.: 6/3=2)"; break;	
	case 'gyok': f='Ha egy számból n-edik gyököt vonunk, akkor megadja azt a számot, melyet az n-edik hatványra emelve megajda az eredeti számot. (pl: gyök(4)=2, mert 2*2=4)'; break;
	case 'negyz': f="('a' a 'b'-ediken) Pozitív egész 'b' szám esetén 'a' szám 'b'-szeri összeszorzását jelenti önmagával. (pl.  6^3= 6*6*6)"; break;
/*	case
kiemelés/		: Műveleti sorrend megváltoztatása zárójel segítségével.
	beszorzás	: ?*/
 	case 'toa'	: f='Sorozat, amely összeadja 1-től a kívánt számig található számokat.<br> pl.: (1+2+3+4+5+6+7+8+9=45)'; break;
	case 'fakt': f='Sorozat, amely összeszorozza a számokat 1-től a kívánt számig.'; break;
//sorozatok		: Számok halmaza, amely kívánt kezdő számtól haladva 'n' értékkel növekszik.
	case 'szamtani'	: f='sorozat, melyben az egymást követő tagok különbsége állandó.<br>	pl.: ( 1,3,5,7)	'; break;
	case 'mertani'	: f='sorozat, melyben a ‘n’ számtól kezdve mindig ‘q’-val szorzunk (pl: 3,9,27)'; break;
	case 'fibo'		: f="Sorozat, melyben a következő tagot mindig az azt megelőző két elem összegéből kapjuk"; break;
	case 'negyzet'	: f="Listázza az első 'n' négyzetszámot. Négyzetszám alatt olyan egész számot értünk, melynek a gyöke egész. <br> a 16 például négyzetszám, mert 4*4=16 "; break;
	case 'spin'		: f='Elektront jellemző, kémiában használt szám.'; break;

//prímszámok		: Egy prímszám alatt olyan természetes (pozitív, egész) számot értünk, amelynek pontosan 2 pozitív osztója van (önmaga és az egy). 

	case 'primis'	: f="Egy prímszám alatt olyan természetes (pozitív, egész) számot értünk, amelynek pontosan 2 pozitív osztója van (önmaga és az egy). <br>Megvizsgálja, hogy a választott szám prím-e, avagy sem."; break;
	case 'primlist'	: f="Listázza a  prímszámokat n-ig"; break;
	case 'primfel'	: f='Felírja a választott számot prímek szorzataként. (ez hasznos lehet például két szám legnagyobb közös osztójának megtalálásában) '; break;


	case 'szamrend' :f=' Átváltja a számot egyik számrendszerből egy másikba. Más számrendszerben más ‘számok’ vannak. Például 8-as számrendszerben nem létezik a ‘9’, helyette az a ‘10’. A 16-os számrendszerben pedit van A,B,C,D,E,F-szám is'; break;

//műveletek végzése	: Műveletek elvégzése más számrendszerben.
//színek			: -
//egyéb			: -
	case 'mesel': f='Elmond mindent a választott számról, amire csak szükségünk lehet.'; break;
	case 'pir' : f='Az első tag 1/1, aminek 1 az eredménye a második tag 2/1 azaz 2, mert a második tagról van szó<br>a harmadik már 3/2 azaz 1.5. Tehát az n-edik tag: (n/az azt megelőző tag)';break;
	
	
	case 'mertani' : f='Értéke egyenlő a számok szorzatának négyzetgyökével. A mértani közepet olyan számok esetén alkalmazzuk,  amelyek összeszorozhatóak. (pl.: banki kamatok, infláció, stb...)';break;
case 'happy' : f='A szám akkor boldog, ha a számjegyeit négyzetre emelve és összeadva többször egymás után előbb-utóbb 1 lesz az eredmény.<br>Például:  28 az boldog szám, mert: 2*2+8*8=68 majd 6*6+8*8=100 és 1*1=1. <br> Amennyiben egy szám nem boldog, akkor a boldogtalanság gyűrűben köt ki.';break;
/*véletlenszerű szám	: Generál egy számot választott halmazból
π (pi)			: A pi egy irracionális szám. Az egységnyi átmérőjű kör kerületével egyenlő.
√2 (gyök kettő)		: A gyök kettő egy irracionális szám, amely azt a számot jelenti, melyet önmagával megszorozva 2-t kapunk.
*/
	default : f='ehhez nem tartozik súgó :/';
	
	
	}
	//console.log(f);
	infopanell.innerHTML=f;
}	

//500	
function writSUBP(base,sup) {
	
	output+=base+'<sup>'+sup+'</sup>×';
	
	}
function meselj() {
	althist=true;
	ahc= in1;
	pesz=false;
	console.log('meseSTART'+in1);
	kim='A '+in1+' egy ';
//prs prtl	
     if (in1%2==0) { kim+='páros ';}
     else {kim+='páratlan '}
 //besorolás   
	 if (Math.floor(in1)==in1)
	{//egész
        if (in1==0)
        {
        kim+=' se nem pozitív, se nem negatív ';
        }
		else if (Math.abs(in1)==in1)
			{
				kim+='természetes (pozitív) ';
				pesz=true;
			}
		else 
			{
				kim+='negatív ';
			}
        
	kim+='egész szám ';
	}
	
	else {//nem egész
			if (Math.abs(in1)==in1)
			{
				kim+='pozitív ';
			}
		else 
			{
				kim+='negatív ';
			}
			
		kim+='racionális szám ';
	
	}
	
	kim+=', ami '
	//prím e a szám
	prim=true;
	kimen='';
	szam=in1;
	for (i=2;i<szam;i++)
			 {
				if (szam%i==0)
				{		
					kimen+=' , '+i;
					prim=false;
				}
			}		
	if (prim==false)
	{
		kim+=' nem prím, mert<br>osztható: '+kimen+' -val. ';
	}
	else 
	{
	kim+='egy prím.';
	}
//tokeletes szam
	if ((in1==6)||(in1==28)||(in1==496)||(in1==8128))
	{
	kim+='Ez egy tökéletes szám (a szám osztóinak összege a szám).';
	}	
	
//négyzetszám	
	if (Math.floor(Math.sqrt(in1))==Math.sqrt(in1))
	{
	kim+='A szám egy négyzetszám, mégpedig a '+Math.sqrt(in1)+' négyzete . '
	}
	else if (pesz) 
	{
	kim+=' A szám gyöke kb. '+Math.round(Math.sqrt(in1))+' . ';
	}
	kim+=' A szám négyzete a '+in1*in1+' ,';

//fakt
	if (pesz)
	{
	fakt=1;
	for (i=in1; i>0; i--) {
				fakt=i*fakt;
	}
	if (fakt<1000000000)
	{
		kim+=" a szám faktoriálisa "+fakt;
	}
	if (in1>=700000000000000000000)
	{
		kim+="Ez a szám nagyobb mint az univerzumban lévő atomok száma";
		}
	}
//fibo
	var f,fel,fe2;
					f=1;
					fel=0;
					for (i=1; i<in1; i++) {
						fe2=fel;
						fel=f;		
							if (f==in1)
							{
							kim+=' A szám a fibonacci sorozat '+i+'-dik eleme. '
							}
						f=fel+fe2;
						}
//szamosszad/osszeg
	ins=in1.toString();
	if (ins[0]=="-") {
	ins=ins.slice(1,ins.length);
	console.log(ins);
	}
	szor="1";
	add=0;
	for (i=0;i<ins.length;i++)
	{
	szor=szor*Number(ins[i]);
	add=add+Number(ins[i]);
	}
	kim+=" A számjegyeinek az összege "+add+" , a szorzata pedig "+szor+" .";
//per
	if (prt[in1-1]!=undefined)
	{
	kim+="<br>A periódusos rendszerben a "+in1+". elem a(z) "+prt[in1-1]+" . ";
	}
	if (ins.length==3)
	{
	kim+='<div id="outmen" style="background:rgb('+(ins[0]*26+21)+","+(ins[1]*26+21)+","+(ins[2]*26+21)+")"+'">Ennek a számnak szine is van</div>';
	}
	
if (in1==42) {
	kim+="<b>Ez a válasz a világmindenségre</b>"
}
	ouo1.innerHTML=kim;
	
	
	
}
function addinpn() {
inpn++;
inpns.innerHTML+='<br>szám '+(inpn)+' '+window['input'+inpn];

}

function addhalm()
{
	halmszam++;
	thalm.innerHTML+=abc[halmszam-1].toUpperCase()+" = { "+window['input'+halmszam]+" } <br>";

}

function gochart() {
	
rjsx.notify("Grafikon betöltése...","blue")
	
calkr(eventfire);

myWindow=window.open('','','width=650,height=300')
myWindow.document.location="tapcalkgraph.html#"+chart;
myWindow.title="Tapcalk 5 grafikon";
myWindow.resizable=false;
myWindow.focus();

}
// metszetek 

function metszet(a,b)
{	kim=[];

for (i=0;i<a.length;i++)
{
	for (j=0;j<b.length;j++)
	
	{
	if (a[i]==b[j])
	{
	kim[kim.length]=a[i];
	}
	
	}
}
	return kim;
}
function unio(a,b) 
{	kim=[];
	for (i=0;i<a.length;i++)
	{
	kim[kim.length]=a[i];
	}
	for (i=0;i<b.length;i++)
	{
		mehet = true;
		for (j=0;j<kim.length;j++)
		{
		if (kim[j]==b[i])
			{
				mehet=false;
			}
		}
		if (mehet)	{
			kim[kim.length]=b[i];
		}
	}
	return kim;
}
function kul(a,b)
{	kim=[];
	for (i=0;i<a.length;i++)
{
	mehet=true;
	for (j=0;j<b.length;j++)	
		{
		if (a[i]==b[j])
			{
				mehet=false;
			}
	
		}
	if (mehet==true)
	{
	kim[kim.length]=a[i];
	}
	//1000 sor 2013 12 14 TC4.5.6
}
	return kim;
}

//1000 2014-02-10
function kutat(hiv) {
for (i=1;i<fn.length;i++)
{
	console.log(hiv);
if (fn[i].toUpperCase().search(hiv.toUpperCase())!=-1)
	{
	$(".omenu")[i].style.opacity='1';
	$(".omenu")[i].style.minHeight='23px';
	$(".omenu")[i].style.padding='5px';

	}
else {
	$(".omenu")[i].style.opacity='.2';
	$(".omenu")[i].style.height='0';
	$(".omenu")[i].style.minHeight='0px';
	$(".omenu")[i].style.padding='0';
	}
}
}

//PRIMFELBONTÁS

function primf(call)
{
	callo=call;
	ki = [];
	for (i=2;i<callo;i++)
	{
		if (call%i==0)
		{
		ki[ki.length]=i;
		call=call/i;
		i=2;		
		}
	}
	return ki;
}
//----------------------------------------------------------------------
//ROMAI---------------------------------------------------------------------------------------------ATVALT---------
//----------------------------------------------------------------------
   e=""; //eredmény 

function melyik(call){
    
    if (egy.checked) {
        valtar(call);
    } else {
        valtra(call);
    }
}

function valtar(call)
{
    e="";
    while (call>0) {
         if (call>=1000) {
             call-=1000;
             e+="M";
         }
         else if (call>=500) {
             call-=500;
             e+='D';
         }
         else if (call>=100) {
             call-=100;
             e+='C';
         }
         else if (call>=50) {
             call-=50;
             e+='L';
         }
         else if (call>=10) {
             call-=10;
             e+='X';
         }
         else if (call>=5) {
             call-=5;
             e+='V';
         }
         else if (call>=1) {
             call-=1;
             e+='I';
         }
    }
    
        //csere=['IIII','XXXX','CCCC'];
        //csere2=['IV','XL','CD'];
        //MDCCCCLXXXXVIIII
        //M.D.CD.L.XL.IX.
        //MCMXCIX
        console.log(e);
        e = e.replace(/CCCC/g,'CD');
        e = e.replace(/XXXX/g,'XL');
        e = e.replace(/XXXX/g,'XL');
        e = e.replace(/VIIII/g,'IX');
        e = e.replace(/IIII/g,'IV');
        console.log(e);
    
    outcall(e);
}

 e="";
    ertek=[1,5,10,50,100,500,1000];
    romak=['I','V','X','L','C','D','M'];
    asd=[];

function valtra(call) {
    
    e=0;
    ertek=[1,5,10,50,100,500,1000];
    romak=['I','V','X','L','C','D','M'];
    asd=[];
    
    for ( i = 0; i < call.length; i++) {
            
            if (romak.indexOf(call.charAt(i)) < romak.indexOf(call.charAt(i+1)))
            {
                
                e += ertek[romak.indexOf(call.charAt(i+1))] - ertek[romak.indexOf(call.charAt(i))];
                i++;
            }
            else {
            //MCD
                if (call.charAt(i)=='I') {
                    e+=1;
                }   
                else if (call.charAt(i)=='V') {
                    e+=5;
                }
                else if (call.charAt(i)=='X') {
                    e+=10;
                }
                else if (call.charAt(i)=='L') {
                    e+=50;
                }
                else if (call.charAt(i)=='C') {
                    e+=100;
                }
                else if (call.charAt(i)=='D') {
                    e+=500;
                }
                else if (call.charAt(i)=='M') {
                    e+=1000;
                }
            }
    }//nagyelse
   outcall(e);
}



//----------------------------------------------------------------------
//ATVALT---------------------------------------------------------------------------------------------ATVALT---------
//----------------------------------------------------------------------
  obj = {
            'tomeg' : {
                'szam': [1,1000,0.1,0.01,0.31103,0.373241,20411,100],
                'nev' : ['kilogramm (kg)','tonna (t)','dekakilogramm (dkg)','gramm (g)','uncia','font','barge','mázsa [metrikus]']
            
            },
            'terfogat' : {
                'szam': [1000,1,0.001,0.005,0.015,4.54609],
                'nev' : ['köbméter','köbdeciméter/liter','milliliter','teáskanál','evőkanál','gallon']
            
            },
            'terulet' : {
                'szam': [1,100,10000,1000000, 0.83612736],
                'nev' : ['négyzetméter','ár','hektár','négyzetkilóméter','négyzetyard']
            
            },
            'hossz' : {
                'szam': [1,1000,0.01,0.001,0.3048,1609.344,0.0245,149597870691,9460730472580800,0.000375,0.000000001],
                'nev' : ['méter','kilóméter','centiméter','miliméter','láb','mérföld','hüvelyk (Inch)/ Kaliber','csillagászati egység','fényév','pont','ångström / nanométer']
            
            },
            'ido' : {
                'szam': [1,60,3600,86400,604800,2592000,31536000],
                'nev' : ['másodperc(s)','perc (min)','óra','nap','hét','hónap(30 napos)','év (365 nap)']
            
            },
            'sebesseg' : {
                'szam': [1,0.00008466667,0.000423333,0.00508,0.0254,0.2777778,0.3048,0.44704,0.514444,26.8224,1609.344,],
                'nev' : ['méter per másodperc (m/s)','láb per óra (ft/h)','hüvelyk per perc (in/min)','láb per perc (ft/min)','hüvelyk per másodperc (in/s)',
                                'kilométer per óra (km/h)','láb per másodperc (ft/s)','mérföld per óra (mi/h)','csomó(NM/h)','mérföld per perc (mi/min)',
                                'mérföld per másodperc (mi/s)']
            
            }
        }
        function valt(mennyit)
        {
           
            return Number(Number(mennyit)*Number( mirol.options[mirol.selectedIndex].value));
           
        }
        
        function valt2(mennyit)
        {
           
            return Number(Number(mennyit)/Number( mire.options[mire.selectedIndex].value));
             
        }
        function ir() {
            console.log(valt2(valt(Number(rol.value))));
            kime.innerHTML=valt2(valt(Number(rol.value)))
        }
        function kat(call) {
            
            mire.innerHTML=""; //innerhtml nullázása
            mirol.innerHTML=""; //innerhtml nullázása

            for (i = 0; i < obj[call].szam.length; i++)
            {
                mire.innerHTML+='<option value="'+obj[call].szam[i]+'">'+obj[call].nev[i]+'</option>';
                mirol.innerHTML+='<option value="'+obj[call].szam[i]+'">'+obj[call].nev[i]+'</option>';//innerhtml átállítása
            }
        }
        //alap();
        
        valtkod='<h1>Univerzális átváltás</h1><table class="norjsx"><tr><td>Miben</td><td>     <select id="kategoria" onchange="kat(kategoria.options[kategoria.selectedIndex].value)" class="inp-text"><!--ħ-->       <!--ħ-->        <option value="tomeg">Tömeg</option><!--ħ-->        <option value="terfogat">Térfogat</option><!--ħ-->        <option value="hossz">Hossz</option><!--ħ-->        <option value="terulet">Terület</option><!--ħ-->        <option value="ido">Idő</option><!--ħ-->        <option value="sebesseg">Sebesség</option><!--ħ-->    </select><!--ħ-->    </td></tr><!--ħ-->    <tr><td><!--ħ-->    <!--ħ-->    Mennyit</td><td> <input type="text" id="rol" onkeyup="ir()"><!-- Mennyit szeretnénk átváltani? --></td></tr><!--ħ-->   <tr><!--ħ-->    <td>Miről</td><!--ħ-->    <td><!--ħ-->    <select id="mirol" onchange="ir()" class="inp-text"><!--ħ-->         <option value="1">kilogramm (kg)</option><!--ħ-->        <option value="1000">tonna (t)</option><!--ħ-->        <option value="0.1">dekakilogramm (dkg)</option><!--ħ-->        <option value="0.001">gramm (g)</option><!--ħ-->        <option value="0.31103">uncia</option><!--ħ-->        <option value="0.373241">font</option><!--ħ-->        <option value="1000">tonna</option><!--ħ-->        <option value="20411">barge</option><!--ħ-->        <option value="100">mázsa [metrikus]</option><!--ħ-->    </select><!--ħ-->    </td></tr><!--ħ-->   <tr><td> Mire </td><!--ħ-->   <td><!--ħ-->    <select id="mire" onchange="ir()" class="inp-text"><!--ħ-->        <option value="1">kilogramm (kg)</option><!--ħ-->        <option value="1000">tonna (t)</option><!--ħ-->        <option value="0.1">dekakilogramm (dkg)</option><!--ħ-->        <option value="0.001">gramm (g)</option><!--ħ-->        <option value="0.31103">uncia</option><!--ħ-->        <option value="0.373241">font</option><!--ħ-->        <option value="1000">tonna</option><!--ħ-->        <option value="20411">barge</option><!--ħ-->        <option value="100">mázsa [metrikus]</option><!--ħ-->    </select><!--ħ-->    </td></tr><!--ħ-->  <!--ħ-->    <!--ħ-->    </table><!--ħ-->    <!--ħ-->    <span id="kime"  placeholder="eredmény" onclick="addnum(kime.innerHTML)" class="l"></span> <!-- Eredmény kiírása --><!--ħ-->  '

/**end*/

