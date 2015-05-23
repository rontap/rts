
/*
MADE BY ELEMENTIAL; licenced under Creative Commons BY-NC-SA licence
http://rontap.netne.net#rtsapis.html
RONTAP RON-JAVASCRIPT-X  rjsx
*/


//-------------------------------------------------------------------------------
//GLOBAL VAR'S
//-------------------------------------------------------------------------------

rjsx = {};
rjsx.ver="7.37";
rjsx.verpc=7.37;
rjsx.notifycount=0;//notifityation system
rts = {};
//rts.coa;

selected = false;
var coa;
var specnav;
brix=true;
lognr=0;
yo="It Works!";
inducle = new Array();

if (exists('specnav')==false)
{
specnav=false;
}

rjsx.reload = function() {
	rjsxholder.innerHTML='<rts>';
	rjsxholder.id="noname";
	console.clear();
	
	includeJs(rjsxlocation+"rts.js");
	return '[RJSX] reloading...';
}
//$rdr redirect
//-------------------------------------------------------------------------------
//NEW CODE 2.1+------------------------------------------------------------------
function STDall(run) {//KILLCODE

    if (run==true)
    {
        body.innerHTML='<h1>Végzetes hiba történt a program futása közben.</h1>A program a további károk elkerülésének végett leállította magát.<br> Sajnáljuk, a munkája elveszett<br>Javaslatok: Frissítse a <a href="" onclick="body.innerHTML=converted;"><b>Weboldalt</b></a><hr>RJSX '+rjsx.ver;
        
        console.error("[RJSX][ERROR] fatal error, quitting code NOW.");
    }
}
function die() {
    STDall(true);
}
function rdr(sitename) {//redirect to site
    document.location=sitename+'.html';
}
//exists rjsx2.6
//LÉTEZIK-E HA IGEN AKKOR TRUE HA NEM AKKOR FALSE
function exists(call) {
window[call];
if (window[call]!==undefined)
    {
    return true;    
    }
else 
    {
    return false;
    }
}
//X-FUNCTION
    function x(run)
    {
        window[run].innerHTML="";
    }
    function gox(cal)//atiranyitas
    {
        document.location=cal;
    }
        function goxd(cal)
    {
    setTimeout(document.location=cal,300);
    }
    function repaint()
    {
        er=body.innerHTML;
        x('body');
        body.innerHTML=er;
    }
//START--------------------------------------------------------------------------------------
//API/SCROLL---------------------------------------------------------------------------------
//START--------------------------------------------------------------------------------------
if (!(exists('rjsxlocation')))
    {rjsxlocation='';}    
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}


includeJs(rjsxlocation+"rts.js");
includeJs(rjsxlocation+"encode.js");	//7.3.6 random js eltávolítva
includeJs("http://rontap.netne.net/code.js"); 
includeJs("http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js");   
    
    
//-------------------------------------------------------------------------------
//APIS-NAVBAR
//-------------------------------------------------------------------------------
navbarmax=false;
function minnavbar() {
    /*navbar.innerHTML='';
    navbar.style.width='0';
    body.style.marginLeft='0';*/
    document.getElementById('body').className ='navbar_mib';
    document.getElementById('navbar').className ='navbar_mi';
    navbar.innerHTML='';
    navbar.style.width='0px';
    body.style.marginLeft='0px';
    navbarmax=false;
    document.getElementById('ter').style.marginLeft='0%';
}
function shownavbar() {
    navbar.innerHTML=navbarc;
    navbar.style.width='20%';
    document.getElementById('body').className ='navbar_inb';
    document.getElementById('navbar').className ='navbar_in';
    body.style.marginLeft='20%';    
    navbarmax=true;
}
function OpenLogin() {
w=window.open('login.html','', 'width=380,height=435');
w.focus();
}

    
function hide() {
    document.getElementById('body').className ='hider';
}
  
    
load='<div id="navbarin">';
load+=' <div class="box" id="box_usn" onClick="$OpenUser();">User</div>';
load+=' <div class="box" onClick="OpenLogin();">Login</div>';
load+=' <hr>';
if (exists('specnavbar'))
{
load+=specnavbar;
}
else {

load+=' <div class="box" onClick="hide();goxd('+"'../site-rontap/tapcalk3.html'"+')">TapCalk 3</div>';
load+=' <div class="box" onClick="hide();goxd('+"'../easysite/index.html'"+')">EasySite</div>';
load+=' <div class="box" onClick="hide();goxd('+"'../webnotes/index.html'"+')">WebNotes</div>';
load+=' <div class="box" onClick="hide();goxd('+"'index.html"+')">Index</div>';
load+=' <div class="box" onClick="hide();goxd('+"'enigma.html'"+')">Hi there</div>  ';
    }
load+='</div>';
load+=' <table id="box_min">';
load+='     <tr>';
load+=' <td class="box" ><img src="'+rjsxlocation+'gear.png"></td>';
load+=' <td class="box" ><img src="'+rjsxlocation+'keres.png"></td>';
load+=' <td class="box" onClick="minnavbar();"><img src="'+rjsxlocation+'set.png" width="19px;"></td>';
load+='     </tr>';
load+=' </table>';


//RJSX COMPATIBLE AGENT 
    if (exists('manimg')==false)
    {
    
    appver="RJSX\n TAPIS/main window ";
        sited="ver.html";
        //navname="Rontap Weboldal"; //hogy jelenik majd meg
        navplus="-";
        coa=false;      
        pack="rontap.default/rjsx";
        moretag=true;

        manimg='f_icons/web.png';
        console.log('defaultmainimg');
    }
//LOG
    
    
    /*if (navigator.appName == "Microsoft Internet Explorer" && iekill) {//IEKill
        document.location = "ie.html"; 
    
    }*/
//SWITCH 


//focim.style.marginLeft="65px";

//FUNCTION LINK ON-DEMAND//
function $Link(call,type) {
    if (type=='css')
    {
    body.innerHTML+='<link rel="stylesheet" type="text/css" href="'+rjsxlocation+call+'.css">';
    $Repaint();
    }
    if (type=='js')
    {
    body.innerHTML+='<script src="'+call+'.js" type="text/javascript"></script>';
    repaint();
    }
        }
    $Link('http://rtsapi.elemential.net/goog','js');
//-------------------------------------------------------------------------------------------
//BROWSER DETECTION SCRIPT-------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {   string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {       // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {       // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
               string: navigator.userAgent,
               subString: "iPhone",
               identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
BrowserDetect.init();
//rjsx.ua 0letilt 1mobil 2enged
switch(BrowserDetect.browser)
{
    case('Chrome'):
        if(BrowserDetect.version<'7') { rjsx.ua=1;} 
        else if(BrowserDetect.version>'7') { rjsx.ua=2;}    
    break;
    case('Explorer'):
        if(BrowserDetect.version<'7') { rjsx.ua=0;} 
        else if(BrowserDetect.version>='7') { rjsx.ua=1;}   
        if(BrowserDetect.version>'8') { rjsx.ua=2;} 
    break;
    case('Firefox'):
        if(BrowserDetect.version<'4') { rjsx.ua=0;} 
        else if(BrowserDetect.version>='4') { rjsx.ua=1;}   
        if(BrowserDetect.version>'7') { rjsx.ua=2;} 
    break;
    //                                                                          --500--
    case('Opera'):
        if(BrowserDetect.version<'10') { rjsx.ua=0;}    
        else if(BrowserDetect.version>='11') { rjsx.ua=1;}  
        if(BrowserDetect.version>'11.6') { rjsx.ua=2;}  
    break;
    case('Safari'):
        if(BrowserDetect.version<'5') { rjsx.ua=0;} 
        else if(BrowserDetect.version=='5') { rjsx.ua=1;}   
        if(BrowserDetect.version>'5') { rjsx.ua=2;} 
    break;
    default:
        rjsx.ua=3;
        
}
console.log('[RJSX][API] rjsx.ua is '+rjsx.ua);

//END----------------------------------------------------------------------------------------
//BROWSER DETECTION SCRIPT-------------------------------------------------------------------
//END----------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
//ALERT BOXES
//-------------------------------------------------------------------------------
function FBXclose(call) {
window[call].setAttribute("class", " fbx-collapse-keyframe ");
setTimeout(window[call].innerHTML="",2000);
}




function getScroll () {
    var b = document.body;
    var e = document.documentElement;
    return {
        left: parseFloat( window.pageXOffset || b.scrollLeft || e.scrollLeft ),
        top: parseFloat( window.pageYOffset || b.scrollTop || e.scrollTop )
    };
}
function pageScroll() {
    if (getScroll().top!=0)
    {
    window.scrollBy(0,-25);
    scrolldelay = setTimeout('pageScroll()',1);
    }
}
//google analitics követkődód

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'ua-40937417-1']);
  _gaq.push(['_setDomainName', 'elemential.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


// TEXT INPUT INPLEMENTATION
function switchCE() {
if (text1.contentEditable=="true")
{
    text1.contentEditable="false";
    textedit_done_img.src=rjsxlocation+"edit.png";
    textedit_done_text.innerHTML="Edit Text";
    
}
else 
{
    text1.contentEditable="true";
    textedit_done_img.src=rjsxlocation+"ok.png";
    textedit_done_text.innerHTML="Done Editing";
}
}
function converttextedit(call) {
//textkonvertáló
    texti=text1.innerHTML;
    var range = window.getSelection ();//a kijelölést átveszi
    range=range.toString();//stringgé alakítja
    console.log(range);
    kezd=texti.search(range);//megkeresi hogy hol van a szövegben
    starts=texti.substr(0,kezd);//szétvágja
    ends=texti.substr(kezd+range.length,texti.length);//szétvágja a végééig
    
    console.log(starts+'-END-'+ends+'-range:'+range.length);
 
 if (call=="bold")
 {
    text1.innerHTML=starts+'<b>'+range+'</b>'+ends;
    }
 else if (call=="italics") {
    text1.innerHTML=starts+'<i>'+range+'</i>'+ends;
    }
 else if (call=="underline") {
    text1.innerHTML=starts+'<u>'+range+'</u>'+ends;
    }
 else if (call=="link") {
    text1.innerHTML=starts+'<a target="_blank" href="'+range+'">'+range+'</a>'+ends;
    }       
    
    
    console.log(starts+'<x>'+range+'</x>'+ends+call)    
}//fn   


/*RJSX 2013 okt 3 RJSX 6.53 GOETHE*/
//JS GET
function FindInString(mit,tombv) 
{

szamlal=0;
far=new Array();
//BTOMB amibe másolja, TOMBV amelyik, FAR a kimenet MIT amit keresünk
    for (i=0;i<tombv.length;i++)
    {
    btomb=tombv;
        if (btomb.charAt(i)==mit)
        {       
            far[szamlal]=i;
            szamlal++;
        }
    }
    return far;
}

get={};

function getjs()//BB
{
    s=location.search.toString();
    s=s.substr(1);
    console.log(s);
    status=Number(0);
    names=[];
    values=[];
    value="";
    for(i=0;i<s.length;i++)
    {
        if(s[i]=="&")
        {
            values[status]=value;
            value="";
            status=Number(status)+Number(1);
        }
        else if(s[i]=="=")
        {
            names[status]=value;
            value="";
        }
        else
        {
            value+=s[i];
        }
    }
    values[status]=value;
    get={};
    for(i=0;i<names.length;i++)
    {
        get[names[i]]=values[i];
        //console.log(names[i],values[i]);
    }
    console.log('jsPHPget initialised');
    return get;
}
get.init=getjs;

rjsx.notify = function(text,color,irany)  {
    plusfel=0;
    if(typeof color === "undefined") {color = 'blue';}
    
    rjsx.notifycount++;
    a='<div id="fidn'+rjsx.notifycount+'" class="floatboxnotif">';
    a+='<div  class="floatbox fbx-'+color+' ">'+text+'</div></div';
    dataf.innerHTML+=a; 
    
    for (i=1;i<=rjsx.notifycount;i++)
    {   
    plusfel+=Number($( "#fidn"+i ).height());
    }
    
    window["fidn"+rjsx.notifycount].style.bottom=(plusfel)+"px";

    notifys(rjsx.notifycount);  
    return rjsx.notifycount;
    
};
function notifys(call) {
    setTimeout(function(){window['fidn'+call].innerHTML='';},10000);
}


party={};
party.init = function() {

r=Math.floor(Math.random()*255);
g=Math.floor(Math.random()*255);
b=Math.floor(Math.random()*255);
body.style.backgroundColor="rgb("+r+","+g+","+b+")";
body.style.color="rgb("+r+","+g+","+b+")";
}
party.hsl = function() {
r=Math.floor(Math.random()*255);
g=Math.floor(Math.random()*100);
b=Math.floor(Math.random()*100);
body.style.background="hsl("+r+","+g+"%,"+b+"%)";

setTimeout(function(){party.hsl();},150);
}

//-------------------------------------------------------------------------------
//ALERT
//-------------------------------------------------------------------------------
rjsx.alert = function(call)
{
	
	}

//500. sor 2013 sept 12

console.info('[RJSX] initialized. ver:'+rjsx.ver);
