function dafault(){

sor=sorozat.innerHTML;
sorozat.innerHTML="";

ext=extr.innerHTML;
extr.innerHTML="";

geo=geom.innerHTML;
geom.innerHTML="";

pri=prims.innerHTML;
prims.innerHTML="";

alm=am.innerHTML;
am.innerHTML="";

cnst=cns.innerHTML;
cns.innerHTML="";
}

function kib(call)
{
	
	act_cont.innerHTML=window[call];
	document.getElementById('act_cont').className ='show_cont';
}
function kiball() {
	act_cont.innerHTML+=cns;
	act_cont.innerHTML+=sor;
	act_cont.innerHTML+=ext;
	act_cont.innerHTML+=geo;
	act_cont.innerHTML+=pri;
	act_cont.innerHTML+=alm;
}
dafault();

function sa() {
alert('Összeadja a számokat a..b ig.\n ha a két szám 7 és 3, akkor\n3+4+5+6+7 lesz az eredmény');
document.getElementById('saw').innerHTML='x?y';
}
