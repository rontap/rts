mostev=new Date().getFullYear();

document.addEventListener('polymer-ready', function () {
            var navicon = document.getElementById('navicon');
            var drawerPanel = document.getElementById('drawerPanel');
            navicon.addEventListener('click', function () {
                drawerPanel.togglePanel();
            });
        });

        colors=['#e51c23','#9e9e9e','#673ab7','#3f51b5','#5677fc','#03a9f4','#00bcd4','#009688','#259b24','#607d8b','#ff9800','#ffeb3b','#795548']
        function wayout() {
            for (i = document.getElementsByTagName('core-menu')[0].getElementsByTagName("core-item").length; i >= 0; i--) {

                wayfunction(i);

            }
        }

        function wayfunction(i) {
            setTimeout(function () {
                console.log(i);
                document.getElementsByTagName('core-menu')[0].getElementsByTagName("core-item")[i].style.marginLeft = "-256px";
                document.getElementsByTagName('core-menu')[0].getElementsByTagName("core-item")[i].style.border = "none";
            }, (i * 2) * 10);
        }

        function goto(site) {
            switch (site) {
            case "home" : 
                $('core-toolbar').css('background', '#5677fc');
                wayout();
                setTimeout(function(){location.href="index.html"},400);
                    break;
            case "tantárgyak":
                $('core-toolbar').css('background', '#009688');
                wayout();
                break;
            case "szakterületek":
                $('core-toolbar').css('background', '#259b24');
                wayout();
                setTimeout(function(){location.href="szak.html"},400);
                break;
            case "tanarok":
               
                gotoinsite(site);
                 loadtanar();
                    break;
            case "kozosseg":
                loadkozszolg();
                gotoinsite(site);
                    break;
            case "tankonyv":
                    setTimeout(function(){
                        $('#tk-collapse-1').css('max-height',$('#tk-collapse-1 b').height());                   
                                         },800);
                    gotoinsite(site);
                    break;
            case "konyv" : 
                   setTimeout(function(){
                        $('#konyv-collapse-1').css('max-height',$('#konyv-collapse-1 b').height());
                       $('#konyv-collapse-2').css('max-height',$('#konyv-collapse-2 b').height());
                       $('#konyv-collapse-3').css('max-height',$('#konyv-collapse-3 b').height());
                       $('#konyv-collapse-4').css('max-height',$('#konyv-collapse-4 b').height());
                       $('#konyv-collapse-5').css('max-height',$('#konyv-collapse-5 b').height());
                        },800); 
                    gotoinsite(site);
                    break;
            case "osztalyok" : 
                    loadosztalyok();
                    gotoinsite(site);
break;
            default:
                gotoinsite(site);
            }
            paperRipple();

        }
        whereAreWe='home';
        function gotoinsite(id) {
            
                $('#menuelements>div' ).removeClass('on');
                $('#menuelements>div').css('display', 'none');
                $('#' + id).css('display', 'block');
                whereAreWe=id;
            setTimeout(function () {
                
                $('#' + id).addClass('on');
            }, 100);
        }
        
        function switchtab(loc,ik,db) {//tab váltás. loc:hely, ik:melyik legyen, db mennyi van
            
            $('#'+loc+'-tab').height($('#'+loc+'-tab-'+ik).height());                        
            for (i=0;i<db;i++) {
                $('#'+loc+'-tab-'+i).css('opacity','0');   
                 switchtab_helper(loc,i);           
            }           
            setTimeout(function(){     
             $('#'+loc+'-tab-'+ik).css('display','inline-block'); 
                $('#'+loc+'-tab-'+ik).css('opacity','0');  
            },501);
            setTimeout(function(){              
                $('#'+loc+'-tab-'+ik).css('opacity','1');   
            },802);
        }
        function switchtab_helper(loc,i)
        {
           setTimeout(function(){
                     $('#'+loc+'-tab-'+i).css('display','none');   
            },500); 
        }
        
           function loadimg(id) {
             setTimeout(function(){
                $(id+' img').css('opacity',1); 
                $(id+' img').removeClass('load');
             },2200)   
            }
        
        //ripple automatisation 
        function paperRipple() {
         for (i=0;i<$('.card paper-ripple').length;i++)
            {
                $($('.card paper-ripple')[i]).width($($('.card paper-ripple')[i]).parent().width()+20)
                $($('.card paper-ripple')[i]).height($($('.card paper-ripple')[i]).parent().height()+20)
            }   
        }
//személyi
        function loadkozszolg() {
            a='';
            for (i=0;i<kozosg.length;i++) {
                a+=' <div class="chip inline-table wide"><div class="chip-top mo';
                if (kozosg[i].pic!==undefined)  a+='">   <img src="tanarok/'+kozosg[i].pic+'" class="load">';
                else {
                    a+=' self-load" style="background:'+colors[Math.floor(Math.random()*colors.length)]+';-webkit-animation-delay:'+i/10+'s;">'
                       loadchip('#fillkozos',i);  
                }
                a+='            </div>';
                a+='            <div class="chip-bottom">';
                a+='                 <bb>'+kozosg[i].nev+'</bb><br>';
                a+='                <span>'+kozosg[i].cim;
                if (kozosg[i].kap!='') a+='<br>'+kozosg[i].kap;
                if (kozosg[i].con!='') a+='<br><a href="'+kozosg[i].con+'">'+kozosg[i].con+'</a>';
                a+='</span> </div>   </div> ';
            }
            fillkozos.innerHTML=a;
            
            setTimeout(function(){loadimg('#fillkozos');},1300);
        }


        function loadtanar() {
            a='';
            for (i=0;i<tanarhad.length;i++) {
                a+=' <div class="chip inline-table"><div class="chip-top mo';
                if (tanarhad[i].pic!==undefined)  a+='">   <img src="tanarok/'+tanarhad[i].pic+'" class="load">';
                else {
                    a+=' self-load" style="background:'+colors[Math.floor(Math.random()*colors.length)]+';-webkit-animation-delay:'+i/10+'s;">'
                    loadchip('#filltanars',i);  
                }
                a+='            </div>';
                a+='            <div class="chip-bottom">';
                a+='                 <bb>'+tanarhad[i].name+'</bb><br>';
                a+='                <span>'+tanarhad[i].post;
                if (tanarhad[i].xtra!='') a+='<br>'+tanarhad[i].xtra;
                if (tanarhad[i].mail!='') a+='<br>'+tanarhad[i].mail;
                a+='</span> </div>   </div> ';
            }
            filltanars.innerHTML=a;
            
            setTimeout(function(){loadimg('#filltanars');},1300);
        }
        function loadosztalyok() {
            as=''; 
           for (issa=0;issa<dosztalyok.length;issa=issa+4) {
                  as+='<div class="item';
                    comp=Number(dosztalyok[issa+1]);
                    if (mostev>comp) { as+=' vegzett';
                                   }
              
                  as+='" onclick="clickosztaly(this.id,this)" id="mogacsholder'+issa/4+'">'
                  as+='  <div class="label" fit=""><table class="mogacs"><tr>'
                    as+='<td>'+dosztalyok[issa]+'</td>'+'<td>'+dosztalyok[issa+1]+'</td>'+'<td>'+dosztalyok[issa+2]+'</td>'+'<td>'+dosztalyok[issa+3]+'</td>'
                  as+='</tr></table></div>';
               var tanholder='';
               //getid
              
               for (var ibs=0;ibs<tanulok[issa/2+1].length;ibs++)
               {
                 tanholder+="<k>"+tanulok[tanulok.length-((issa/2)+1)][ibs]+"</k>"
               }
                as+='<span>'+tanholder+'</span>' ;
                  as+='  <paper-ripple fit=""></paper-ripple>';
                  as+='</div>';
              
                  
           }
           fillosztalyok.innerHTML=as;
        }

        function loadchip(loc,i) {
         setTimeout(function(){
             $($(loc+' .chip .chip-top')[i]).css('opacity',1);
             $($(loc+' .chip .chip-top')[i]).css('-webkit-animation','none');
          //   console.log(i);
         },i*100+1800);  
            
        }
osztalyokon=true;
function osztalyballag() {
    if (osztalyokon==true) {
        $('.item.vegzett').addClass('hidden');
        osztalyokon=false;
        }
    else {
         $('.item.vegzett').removeClass('hidden');
        osztalyokon=true;
        }
    return osztalyokon;
    }

dik=0;
function clickosztaly(call,me) {
    src=4*(Number(call.slice(12,100)));
    

        $(me).addClass('selected');
        console.log()
    
}

function outcollapse(id) {
    $('#'+id).css('max-height','2000px')  ;
    $('#'+id).addClass('on')  ;
}
        goto('homex');
        $('#io-rendeles').css('height',$('#io-alap').height());
       setTimeout(function(){
           switchtab('io',0,3);
           loadimg('kepholder');
           $('img[src="szepvpg.jpg"]').css('width',window.innerWidth-254);
           
       },1000);

osztalyok.onscroll = function() {
  console.log($('.content').offset().top);  
};