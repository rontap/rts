
/*
	MADE BY ELEMENTIAL; licenced under CC licence
	http://rontap.netne.net#rtsapis.html
	RONTAP RON-JAVASCRIPT-X  rjsx
 -RTS addon

 Requied: main.js
 */
 extrahover=true;
 var holotheme;
 var downnav;
 if (downnav === undefined) {
     downnav = [[],[],[],[],[],[]];
     }
swfocus = 0;
//select focus set to 0
var triggernightmode = "";
minrjsx_ver = 7.2;
navv3color = new Array('#3498db', '#ffd071', '#f0776c', '#1abc9c', '#666','#3498db','#ffd071');
navv0color = new Array('#48F', '#F44', '#22B94F', '#F84', '#62C',"#666",'#48F','#22B94F');
navv2color = new Array('#0E90D2' , "#8058A5" ,"#5EB95E" ,"#DD514C" ,"#FAD232",'#0E90D2',"#5EB95E");
var navcolor ;
var navcolor = navcolor || 'no';
// navigációs szín beállítása
if (navcolor == 'no')
{
	if ((rjsxThemeOnSite !== undefined)||(localStorage.rjsx_mainthemel !== undefined))
	{
		if ((rjsxThemeOnSite == 2)||(localStorage.rjsx_mainthemel == 2))
		{
			navcolor=navv3color;
		}
				else if ((rjsxThemeOnSite == 0)||(localStorage.rjsx_mainthemel == 0))
		{
			navcolor=navv0color;
		}
		else if ((rjsxThemeOnSite == 3)||(localStorage.rjsx_mainthemel == 3))
		{
			navcolor=navv2color;
			rjsxThemeOnSite=2;
		}
	}
	}
//2es stílushoz
if (rjsx.verpc < minrjsx_ver) {
    console.error('[RJSX][RTS] Error. This version of RTS.rjsx is not compatible with main.rjsx v' + rjsx_ver);
    console.error('[RJSX][RTS] Error. The minimum version of main.rjsx is v' + minrjsx_ver);
}
//else {coa=true;}
if (coa == true || rjsx.verpc > minrjsx_ver) {


    function ChangeNight() {
        a = localStorage.rts_nightmode;
        if (a == "false") {
            a = "true"
        } else {
            a = "false";

        }
        localStorage.rts_nightmode = a;
    }

    //RND-FUNCTION EXPORTED TO RANDOM.RJSX
    //wait:folyamatjelző. lehet üres is

    //-------------------------------------------------------------------------------
    //CODE START HERE
    //-------------------------------------------------------------------------------
    fbelement = '';
    //RTS-TAG-MAKE START-HERE
    //-------------------------------------------------------------------------------
    if (!(exists('rjsxlocation'))) {
        rjsxlocation = '';
    }

    if (moretag == true) {
        //body.innerHMTL+=insert;
        //newrtsdata='<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>';
        if (rjsx.ua == 2) {//desktop
        
            if (localStorage.rts_mobile != "true") {//innterD
                newrtsdata = ' <link rel="stylesheet" type="text/css" href="' + rjsxlocation + 'main.css">';
                newrtsdata += ' <link rel="stylesheet" type="text/css" href="' + rjsxlocation + 'newrtsapi.css">';
                if (localStorage.rts_nightmode == "true") {
                    newrtsdata += ' <link rel="stylesheet" type="text/css" href="' + rjsxlocation + 'themes.night.css">';
                }
                if (localStorage.rts_fancy == undefined) {
                    localStorage.rts_fancy = "true";
                }
                if (localStorage.rts_fancy == "true") {
                    newrtsdata += ' <link rel="stylesheet" type="text/css" href="' + rjsxlocation + 'fancy.css">';
                }
                
                if (holotheme==true)
                {
                                    newrtsdata += ' <link rel="stylesheet" type="text/css" href="' + rjsxlocation + 'night.css">';
                }
                //newrtsdata+=' <link rel="stylesheet" type="text/css" href="'+rjsxlocation+'main.css">';
                //newrtsdata+=' <link rel="stylesheet" type="text/css" href="rts.css">';
                //RTS NAVIGATON INSTERT*-----------------------*---------------------------
                var rjsxThemeOnSite;
                if ((rjsxThemeOnSite === undefined)) {
                    if (localStorage.rjsx_mainthemel === undefined) {
                        localStorage.rjsx_mainthemel = 0;
                        rjsx_maintheme = Number(localStorage.rjsx_mainthemel);
                    } else {
                        rjsx_maintheme = Number(localStorage.rjsx_mainthemel);
                    }
                } else {
                    rjsx_maintheme = rjsxThemeOnSite;
                }

                if (!(exists('rjsx_mainthemel'))) {

                    console.log('[RJSX] MainTheme is:' + rjsx_maintheme);
                }
                fillbrandmin = "";
                switch (rjsx_maintheme) {
                    case 0 :
                

                        newrtsdata +='<hr id="loadhr" class="loadhr"><div class="focim" id="rfocim">';
                        newrtsdata +='  <hr><img src="setnew.png" id="havonal" onClick="vonalmenu();">';
                        newrtsdata +='  <div id="nev22" class="ubuntu">';
                        newrtsdata +='      ';
                        newrtsdata +='      <img src="'+manimg+'" onclick="rjsx.gotop();" class="hover">';
                        newrtsdata +='      <span>';
                        newrtsdata +=navname;
                        newrtsdata +='      </span>';
                        newrtsdata +='  </div>';
                        newrtsdata += '         <span id="ter">';
                        newrtsdata += fbelement;
                        //newrtsdata+='         <img src="'+rjsxlocation+'set.png" width="20px" class="options" style="float:left;padding:6px;padding-bottom:7px;" onClick="shownavbar();">';

                        if (specnav == false) {
                            newrtsdata += '             <a id="th1"href="http://rontap.netne.net#tapcalk.html">Tapcalk</a>';
                            newrtsdata += '             <a id="th2"href="http://rontap.netne.net#clock.html">Óra</a>';
                            newrtsdata += '             <a id="th3"href="http://rontap.netne.net#elemential.html" >Rólunk</a>';
                                                        newrtsdata += '             <a id="th4"href="http://elemential.net/rombo" >RomboFight</a>';
                        } else {
                            for ( i = 0; i < specnavi.length; i++) {
                                j = i + 1;
                                newrtsdata += '<a href="'+specnavil[i]+'" id="th'+(i+1)+'" onmouseover="thm('+i+');" onmouseout="extrahover=false">'+specnavi[i]+'</a>';
                               
                            }
                        }
                        newrtsdata += '</span></span terbox>';
                        newrtsdata+='<!--img src="'+rjsxlocation+'opt.png" id="set" onclick="SRenameNotes()"--></div>';//settings kell
                        
                         newrtsdata+='<div id="extrafoot" onmouseover="extrahover=true" onmousemove="extrahover=true" onmousein="extrahover=true" onmouseout="extrahover=false"><a class="l">LINK A</a><a class="l">LINK B</a><a class="l">LINK C</a><a class="l">LINK D</a></div>';
                         
                         newrtsdata+="<style id='nca'>";
                         for (i=1;i<=navcolor.length;i++)
                        {
							newrtsdata+='ter a #th'+i+' { border-bottom:2px solid '+navcolor[i-1]+' !important; }; ';
							
						}
                          newrtsdata+="</style>";
                         
// DESIGN NO 1                         
                        break;
                    case 1  :
                        //téma 2
                        //newrtsdata+=' <span id="ter"></span><span id="">';
                        newrtsdata += ' <div id="navv2">';
                        newrtsdata += '<div id="navv2name">';
                        newrtsdata += '     <div class="boxmq NH">';
                        newrtsdata += '<img class="" src="' + rjsxlocation + manimg + '">';
                        newrtsdata += '</div><br>';
                        newrtsdata += ' <center id="ninedeg">';
                        newrtsdata += navname;
                        newrtsdata += '</center>';

                        newrtsdata += '<br><br><br></div>';

                        if (!(exists('specnavi'))) {
                            newrtsdata += '     <a href="" class="noa"><div class="boxmq" >';
                            newrtsdata += '<img id="magassag" src="f_icons/partner.svg">Link A</div></a>';

                            newrtsdata += '     <a href="" class="noa"><div class="boxmq" >';
                            newrtsdata += '<img class="" src="f_icons/partner.svg">Link B</div></a>';

                            newrtsdata += '     <a href="" class="noa"><div class="boxmq" >';
                            newrtsdata += '<img class="" src="f_icons/partner.svg">Link C</div></a>';
                        } else {

                            for ( i = 0; i < specnavi.length; i++) {
                                if (exists('specnavimg'))//ha van kép hozzárendelve
                                {
                                    newrtsdata += '     <a href="' + specnavil[i] + '" class="noa"><div class="boxmq" >';
                                    newrtsdata += '<img class="" src="' + specnavimg[i] + '">' + specnavi[i] + '</div></a>';
                                } else {
                                    newrtsdata += '     <a href="' + specnavil[i] + '" class="noa"><div class="boxmq" >';
                                    newrtsdata += '<img class="" src="f_icons/partner.svg">' + specnavi[i] + '</div></a>';
                                }

                            }
                        }

                        newrtsdata += '<center style="bottom:25px;">';
                        newrtsdata += '     <div class="boxy"  onClick="SRenameNotes()"><img class="" src="' + rjsxlocation + 'gear.png"></div>';
                        newrtsdata += '     <div class="boxy" onClick="pageScroll();"><img class=""  src="' + rjsxlocation + 'up.png"></div>';
                        newrtsdata += '     <div class="boxy"><img class="" src="' + rjsxlocation + 'set.png"></div>';
                        newrtsdata += '</center> </div>';

                        body.style.paddingLeft = "5%"
                        body.style.paddingTop = "2%";
                        break;
                    //CASE 2
//DESIGN NO 2     és no 4               
                    case 2 :
                    case 4 : 
                        //theme 2 side
                        newrtsdata += '<div id="navv3" class="main-menu">';
                        newrtsdata += '<center ><div class="fa boxy boxylogO"><img src="' + rjsxlocation + manimg + '" height="12%"></div>';
                        newrtsdata += '<span class="nav-text navx">'+navname+'</span>'
                        newrtsdata += '</center><span id="aholder">';
                        if (!(exists('specnavi'))) {
                            newrtsdata += '<a href="tapcalk.html" class="noa ah1"><div  >TapCalk 4</div> </a>';
                            newrtsdata += '<a href="clock.html" class="noa ah2"><div >Óra</div> </a>';
                            newrtsdata += '<a href="elemential.html" class="noa ah3"><div  >Rólunk</div> </a>';
                            newrtsdata += '<a href="rtsapis.html" class="noa ah4"><div  >RJSX</div> </a>';
                            newrtsdata += '<a href="enigma.html" class="noa ah5"><div  >Enigma</div>    </a>';
                        } else {

                            for ( i = 0; i < specnavi.length; i++) {
                                j = i + 1;
                                newrtsdata += '<a href="' + specnavil[i] + '" class="noa ah' + j + '"> ';
                                newrtsdata += '<e  href="#">'+specnavi[i].toLocaleUpperCase().slice(0,1)+'</e><span class="nav-text"';
                              var rjsxMouseUp = rjsxMouseUp || false;//be lehet állítani true-ra
                             if (rjsxMouseUp)  {
								newrtsdata += ' onmouseup="navv3.style.background=navcolor[' + i + '];'
							  }
                                 newrtsdata +='onmouseover="thm('+i+');" onmouseout="extrahover=false" >' + specnavi[i] + '</span> </a>';
                            }
                        }
                        newrtsdata += '</span>';
                        newrtsdata += '<center style="bottom:25px;" id="navimgs">';
                        newrtsdata += '     <img  onClick="SRenameNotes();" class="box boxyt"id="nv3opt" src="' + rjsxlocation + 'gear.png">';
                        newrtsdata += '     <img onClick="pageScroll();" class="box boxyt" id="nv3fel" src="' + rjsxlocation + 'up.png">';
                        newrtsdata += '     <img class="box boxyt"  src="' + rjsxlocation + 'set.png" id="nv3menu">';
                        newrtsdata += '</center> </div>';
                        newrtsdata += '<div id="extrafoot2" onmouseover="extrahover=true" onmousemove="extrahover=true" onmousein="extrahover=true" onmouseout="extrahover=false"></div>';
                        newrtsdata+='<style id="nxa">';
                       /* for (i=1;i<=navcolor.length;i++)
                        {
							newrtsdata+='#aholder .ah'+i+' { border-left: 10px solid '+navcolor[i-1]+' !important; }';
							newrtsdata+='#navv3 #aholder a.ah'+i+':after{ background: '+navcolor[i-1]+'; }';
						}*/
						  newrtsdata+='</style>';
                        body.style.paddingLeft = "17%"
                        body.style.paddingTop = "2%";
                        break;
                }//CASE

            }

        }//if-desktop
        //mobile
        if (!(exists('mobileview'))) {
            mobileview = false;
        }
        if ((localStorage.rts_mobile == "true") || (mobileview)) {//innterD{
            newrtsdata = ' <link rel="stylesheet" type="text/css" href="mobile.css">';
            newrtsdata += '<div id="mnav">';
            newrtsdata += '<center>';
                    for ( i = 0; i < specnavi.length; i++) {
                        newrtsdata += '<div class="link" id="mobilv'+i+'"><a href="' + specnavil[i] + '" class="' + j + '">' + specnavi[i] +'</a></div>';
                    };
            newrtsdata += '</center>';
            newrtsdata += '<a href="mobile_nav.html">';
            newrtsdata += "<div id='mholder'></div>"
            newrtsdata += ' <img src="' + rjsxlocation + 'set.png" alt="beállítások"  height="20px" ></a>';
            newrtsdata += '<b id="linkhome">' + navname + '</b>';

            newrtsdata += '<img src="' + rjsxlocation + 'keres.png" alt="beállítások"   height="20px" >';
            newrtsdata += '<img src="gear.png" alt="beállítások"  height="20px" id="gearsetting" onClick="SRenameNotes()">';
            newrtsdata += '</div>';
            
        }//else-mobile

        text = body.innerHTML;
        converted = text.replace(/<rts>/g,'<span id="rjsxholder">'+ newrtsdata + '</span>');
        body.innerHTML = '<comment><div id="inner" onresize="rjsx.footer();" ><span id="dataf"></span>';
        body.innerHTML += converted;
       // body.innerHTML +='</div>'+ a+'</comment></div></div></s><span id="dataf"></span><style id="stylus"></style>';//body lezáró

    }
         
    //--RTAS COLLAPSE/INAPSE

    //EXTERNAL APIS
    //VERSION HISTORY
    /*++added use in package
    */
    //-------------------------------------------------------------------------------
    //
    //-------------------------------------------------------------------------------
    //GEN.DATE/ABOUT
    //$ FUNCTIONS NEED 2BE PORTED 2 ROPI


    //$$SetupDrawAlert();
    cim = "alma";
    szoveg = "lipsum";
    function enter(event) {
        if (event.which == 13 || event.keyCode == 13) {
            alert('alma');
            return false;
        }
        return true;
    };


    function $DrawSelButton(nev, on, id) {
        box = '<button  class="btn-b" id="' + id + '" onClick="' + on + '">' + nev + '</button>';
        navleft.innerHTML += box;

    }

    navbarmax = false;
    
    function OpenLogin() {
        w = window.open('login.html', '', 'width=380,height=435');
        w.focus();
    }

    if (!(exists('rjsxlocation'))) {
        rjsxlocation = '';
    }
    function hide() {
        document.getElementById('body').className = 'hider';
    }

    

    function SRenameNotes() {

        width = "450";
        //DrawAlert("","Kérjük adja meg a jegyzet új nevét:<br>"+a,3,"Átnevez","alert(yo);","Mégse","");
        loginform = '';
        loginform += '';
        loginform += '<div style="position:absolute;width:100%;height:100%;background-color:rgba(75,75,75,0.75);top:0px;bottom:0px;left:0px;right:0px;" id="wn_disabler" >';
        loginform += '</div>';
        loginform += '<div id="wn_mid"style="position:fixed;top:10%;bottom:auto;width:100%;"><div style="margin-left:auto;margin-right:auto;opacity:0.9;border:1px solid rgb(75,75,75);border-radius:5px;background-color:#ffffff;padding:12pt;width:' + width + 'pt;" id="wn_form">';
        loginform += '<center><b>Beállítások</b></center><br>';
        loginform += '<TABLE> <tr>  <td>Alapértelmezett Mobil nézet</td>    <td>         <div class="slide" >       <input type="checkbox" value="None" id="slide"  />  <label for="slide" onClick="MobileS();" ></label> </div>    </td> </tr>  <tr>   <td>Effektek</td>   <td>         <div class="slide" >       <input type="checkbox" value="None" id="slide2" checked />  <label for="slide2" ></label> </div>    </td> </tr>  <tr>   <td>Előre töltés (béta)</td>    <td>         <div class="slide" disabled>       <input type="checkbox" value="None" id="slide3" disabled />     <label for="slide3" disabled></label> </div>    </td> </tr> <tr>    <td>Autómata Éjszakai Mód (21-05)</td>  <td>         <div class="slide" onClick="Night();">     <input type="checkbox" value="None" id="slide4" />  <label for="slide4"' + triggernightmode + ' ></label> </div>    </td> </tr> <tr>    <td>Éjszakai mód</td>   <td>         <div class="slide slide_r" id="s5" >       <input type="checkbox" value="None" id="slide5"  onClick="ChangeNight();" />    <label for="slide5" ></label> </div>    </td> </tr>  <tr>   <td>Reklámok</td>   <td>         <div class="slide" >       <input type="checkbox" value="None" id="slide6"  />     <label for="slide6" ></label> </div>    </td> </tr> </TABLE>';

        loginform += "<hr><button class='btn-b btn--right' id='ok_alert' onClick='CloseAlert();setTimeout(function(){location.reload()},100);'>Mentés</button>";
        loginform += "<button class='btn-r btn--left' style='float:left;'id='no_alert' onClick='CloseAlert();'>Kilépés</button>";

        loginform += '</div></div>';
        loginform += '';
        wn_alert.innerHTML = loginform;
        if (localStorage.rts_nightmode == "true") {
            slide5.checked = true;
            console.log("night");
        }
    }

    function CloseAlert() {
        tedIT.style.display="block";
        wn_alert.innerHTML='';
    }

    /*2013.09.16 SELECT TEG*/

    function swselect(call) {
        swfocus = call;
        stitle.innerHTML = window['s' + call].innerHTML;

    }

    function selecter(id) {

        if (!(selected)) {
            var aac = $('#' + id);
            aac.addClass('selecth');
            selected = true;
        } else {
            var aac = $('#' + id);
            aac.removeClass('selecth');
            selected = false;
        }
    }


}//coa



function tema(swfocus) {

setTimeout (function() {localStorage.rjsx_mainthemel=swfocus;location.reload()},500);
} 
//7

rjsx.setopen=false;
rjsx.checkboxcount=0;
rjsx.gotop  = function() {
  $('html, body').animate({ scrollTop: 0 }, 'normal');
};

rjsx.footer = function() 
{
//@debug: off. rjsx7.html 
};
function settings()
{
    if (rjsx.setopen)
    {
    rjsx_footer.innerHTML=rjsx.setsave;
    rjsx_footer.style.height="50px";
    rjsx_footer.style.position='initial';
    rjsx_footer.style.width='auto'; 
    rtop.style.marginTop= "-30px";
    set.src="opt.png";
    rjsx.setopen=false; 
    setTimeout(function(){rjsx.footer();},150);
    }
    else
     {
    rjsx.setsave=rjsx_footer.innerHTML;
    rjsx_footer.style.position='fixed';
    rjsx_footer.style.bottom='0';
    rjsx_footer.style.width='100%';
    rjsx_footer.style.height=window.innerHeight-15+'px';
        a='<div id="settings">';
        a+='<div class="ubuntu big uline">Globális Beállítások</div><br>';
        a+="<table>"
        a+='<tr><td>Mobil mód: </td>';
        a+='<td>'+rjsx.checkbox('')+'</td></tr>';
        a+='<tr><td>Éjszakai mód: </td>';
        a+='<td>'+rjsx.checkbox('')+'</td></tr>';
        a+='<tr><td><br style="margin-top:5px;">Weboldal design: </td>';
        //a+='<td>'+rjsx.checkbox('')+'</td></tr>';
        a+='<td><div id="aa" class="select" onclick="selecter('+"'aa'"+');"><center><span id="stitle">oldalstílus</span> &nbsp;<img src="triangle.png" height="10px"></center><div onclick="swselect(0);tema();" id="s0">0 : alapértelmezett (felül)</div><div onclick="swselect(1);tema();" id="s1">1 : jobboldalt, kompakt</div><div onclick="swselect(2);tema();" id="s2">2 : jobboldalt, normál</div></div>';
        a+='</td></tr>'
    a+='</table></div>';
    rjsx_footer.innerHTML=a;
    set.src="x.png";
    rjsx.setopen=true;
    }
    
}
rjsx.checkbox = function(call,checked) {
    rjsx.checkboxcount++;
    if (checked) {check='checked';} 
    else {check='';}
    a='<div class="slide">   '  ;
    a+='    <input type="checkbox" value="None" id="slide'+rjsx.checkboxcount+'" '+check+'> ';  
    a+='    <label for="slide'+rjsx.checkboxcount+'" onclick="'+call+'"></label> ';
    a+='</div>';
    return a;
};
rjsx.footer();


//LIGHTBULB 7.3
//-----------------------------------------------------------------------------------------------------
//------DROPDOWN-LIST----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

function thm(i)
{   
	 // ter.style.opacity='1';
	 
     if (rjsx_maintheme==2)
// DESIGN NO 2 
     {
    extrafoot2.innerHTML='';   
    if (downnav[i].length!=0)//ha van neki
        {
            for (j=0;j<downnav[i].length;j++)
            {
            extrafoot2.innerHTML+='<a href="'+downnavl[i][j]+'"class="l">'+downnav[i][j] +'</a><br>';      
            }
            for (j=0;j<aholder.getElementsByTagName('a').length;j++)
            {
                 /*aholder.getElementsByTagName('a')[j].style.background="inherit";
                 aholder.getElementsByTagName('a')[j].style.color="#444";*/
            } 

                extrafoot2.style.left="17.5%";
                extrafoot2.style.opacity="1";  
                extrafoot2.style.width="18%";  
               /* aholder.getElementsByTagName('a')[i].style.color="#ddd";*/

                extrafoot2.style.background=navcolor[i];    
        }
        else {//ha ez üres
             
                extrafoot2.style.width="0px";  
                extrafoot2.style.opacity="0";  
             //aholder.getElementsByTagName('a')[i].style.background=navcolor[i];
             
            }
         extrafoot2.style.background=navcolor[i];
         console.log(extrafoot2.style.background);
       /* aholder.getElementsByTagName('a')[i].style.background=navcolor[i];  */
         }
// DESIGN NO 0         
     else {
		 extrafoot.style.left="0%";
    extrafoot.innerHTML='';  
    if (downnav[i].length!=0)//ha van neki
		
        {
            for (j=0;j<downnav[i].length;j++)
            {
            extrafoot.innerHTML+='<a href="'+downnavl[i][j]+'"class="l">'+downnav[i][j] +'</a>';      
            }
            for (j=0;j<ter.getElementsByTagName('a').length;j++)
            {
                 ter.getElementsByTagName('a')[j].style.background="inherit";
                // ter.getElementsByTagName('a')[j].style.color="#444";
            } 
            if (window.innerWidth>700)
            {    
				 extrafoot.style.opacity=1;
                extrafoot.style.top="53px";
                extrafoot.style.height="43px";
                //ter.getElementsByTagName('a')[i].style.color="#ddd";
            }
            else if (window.innerWidth<400)//mobil
            {
				 extrafoot.style.opacity=1;
				ter.style.display="block";
				setTimeout(function(){
					
					extrafoot.style.top="58px";
                extrafoot.style.height="100%";
                extrafoot.style.left="40%";
                ter.style.width="40%";
					},200);
				
                
				}
            else {//pici
				 extrafoot.style.opacity=1;
                extrafoot.style.top="93px";
                extrafoot.style.height="45px";
                ter.getElementsByTagName('a')[i].style.color="#ddd";
                ter.style.opacity='1';
                ter.style.paddingTop="5px";
                }  
           
                   
            extrafoot.style.background=navcolor[i];
        }
        else {
                         for (j=0;j<ter.getElementsByTagName('a').length;j++)
            {
                 ter.getElementsByTagName('a')[j].style.background="inherit";
                 //ter.getElementsByTagName('a')[j].style.color="#444";
            } 
             extrafoot.style.opacity=0;
             extrafoot.style.top="0px";
             extrafoot.style.height="0px";     
             ter.getElementsByTagName('a')[i].style.background=navcolor[i];
            }
         ter.getElementsByTagName('a')[i].style.background=navcolor[i];
         }
         
     extrahover=true;
     tho();
        
    }
    
    // FUNCTION THO
    
function tho(i) {
    
    setTimeout(function() {
    if ((!extrahover))
    {
           

        if (rjsx_maintheme==2)
        {
       
       	
        extrafoot2.style.width="0px";  
        extrafoot2.style.opacity="0";
            for (j=0;j<aholder.getElementsByTagName('a').length;j++)
            {
                /* aholder.getElementsByTagName('a')[j].style.background="inherit";
                 aholder.getElementsByTagName('a')[j].style.color="#444";*/
            }    
        }
        
        
        
        else 
        {            
             for (j=0;j<ter.getElementsByTagName('a').length;j++)
            {
                 ter.getElementsByTagName('a')[j].style.background="inherit";
               //  ter.getElementsByTagName('a')[j].style.color="#444";
            }   
         extrafoot.style.opacity=0;
        extrafoot.style.top="0px";
        extrafoot.style.height="0px"; 
        
         if (window.innerWidth<400) {
			 ter.style.width="60%";
			// vonalmenu();
			}
		 if (window.innerWidth>400)
    {
		ter.style.display="inline-block";
		ter.style.opacity='1';
		ter.style.display='initial';
		ter.style.padding="5px 0 0 5px";
		ter.style.width="100%";
		}
		if (window.innerWidth>700)
		{
			ter.style.display="inline";
			ter.style.padding="5px 0 0 5px";
			rfocim.style.paddingTop="13px";
			}
           
            }// else
       
    
    }//0
   
    tho();
    },500);           
}
tho();

menuopen=false;
function vonalmenu() {
    if (menuopen==false)
    {
        havonal.style.left="-10px";
        ter.style.display="block";
        setTimeout(function(){
			ter.style.width="60%";
        ter.style.opacity='1';
        ter.style.padding="10px 0 10px 5%";
			
			},50);
       

        menuopen=true;
    }
    else 
    {
         havonal.style.left="0px";
       ter.style.width="0%";
        ter.style.opacity='0';
        ter.style.padding="0";
		setTimeout(function(){ter.style.display="none";},300);
        menuopen=false;
        
        }
    }
    
   //GAN
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40937417-1', 'elemential.net');
  ga('send', 'pageview');
  
 //load animations 
      function aL()
    {
    
    $('a').click(function() {    
        $("html, body").animate({   
	            scrollTop: $( $(this).attr("href") ).offset().top - 60 
        }, 500);   
        return false;    
    });

}
setTimeout(function(){
	aL();
	},500);//betölt, várakozási idő
  
	function chg() {
        		if (window.innerWidth<600)
        		{
        			repaint();
        			
        		}
        		
        	}
        	window.onresize=function(){chg();}
        	
/*500 nov17*/
/*2013 10 03 RJSX 6.53 GOETHE*/

/*700 13 jan 18*/
/*2014 01 18 RJSX 7.2 LIGHTBULB*/
