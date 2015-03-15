/*
RONTAPPARTY1 API
KÖSZÖNJÜK A HASZNÁLATÁT
version : 0.1 normal
CC-NC-AC licenc alatt

*/


szem=true;

egj();

function egj() {
szinv();
if (szem==true) {setTimeout(function(){egj();},100);}
}
function szinv() {
r=Math.floor(Math.random()*255);
g=Math.floor(Math.random()*255);
b=Math.floor(Math.random()*255);

document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";


rp=Math.floor(Math.random()*255);
gp=Math.floor(Math.random()*255);
bp=Math.floor(Math.random()*255);
document.body.style.color="rgb("+rp+","+gp+","+bp+")";

}
/*
USED DICTORIES FROM THE RONTAP RON-JAVASCRIPT-X JAVASCRIPT LANGEUGE   rjsx2
*/


/*
RONTAPPARTY1 API
KÖSZÖNJÜK A HASZNÁLATÁT
version : 0.3 for FB
CC-NC-AC licenc alatt

*/
ptags = new Array();
 ptags=document.getElementsByTagName("div");
 //returns all elements on page
////
szem=true;
egj();
function egj() {
szinv();
if (szem==true) {setTimeout(function(){egj();},100);}
}
function szinv() {
r=Math.floor(Math.random()*255);
g=Math.floor(Math.random()*255);
b=Math.floor(Math.random()*255);

document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";
contentArea.style.backgroundColor="rgb("+r+","+g+","+b+")";
rightCol.style.backgroundColor="rgb("+r+","+g+","+b+")";

rp=Math.floor(Math.random()*255);
gp=Math.floor(Math.random()*255);
bp=Math.floor(Math.random()*255);
document.body.style.color="rgb("+rp+","+gp+","+bp+")";

resultStats.innerHTML="Nagyjából PARTY találat (L,0L másodperc)";
}


/*
USED DICTORIES FROM THE RONTAP RON-JAVASCRIPT-X JAVASCRIPT LANGEUGE   rjsx2
*/
szem=true;

egj();

function egj() {
szinv();
if (szem==true) {setTimeout(function(){egj();},100);}
}
function szinv() {
r=Math.floor(Math.random()*255);
g=Math.floor(Math.random()*255);
b=Math.floor(Math.random()*255);

document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";


rp=Math.floor(Math.random()*255);
gp=Math.floor(Math.random()*255);
bp=Math.floor(Math.random()*255);
document.body.style.color="rgb("+rp+","+gp+","+bp+")";
resultStats.innerHTML="Nagyjából PARTY találat (L,0L másodperc)";
}



