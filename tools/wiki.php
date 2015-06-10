<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700|Noto+Serif:400,700&subset=latin,cyrillic,greek,latin-ext' rel='stylesheet' type='text/css'>

<link rel="import" href="../../polyfome/include_minimalist.html">
<link rel="import" href="wikidata/header.html">

</head>
<script>

console.log('hello');

function removeStyles(el) {
    el.removeAttribute('style');

    if(el.childNodes.length > 0) {
        for(var child in el.childNodes) {
            /* filter element nodes only */
            if(el.childNodes[child].nodeType == 1)
                removeStyles(el.childNodes[child]);
        }
    }
   
}


</script>



<container id="ULTRAC">
    <?php
    if (isset( $_GET['q']))
    {
        echo  file_get_contents( $_GET['q'] );
    }
    else {
         echo file_get_contents('wikidata/welcome.html');
    }
    ?>
</container>
<div id="ULTILOAD_WRAP">&nbsp;</div>
<img src="https://thomas.vanhoutte.be/miniblog/wp-content/uploads/spinningwheel.gif" id="ULTILOAD">

<style>
    body:not(.XRT-LOADED) #firstHeading {z-index:999; position:fixed; top:50px; left:0px; right:0px; text-align:center; border:none;}
    #ULTILOAD_WRAP, #ULTILOAD { transition:.4s;}
    #ULTILOAD_WRAP { position:fixed; top:0; left:0; right:0; bottom:0; background:#ededee;}
#ULTILOAD {position:fixed;top:0; left:calc(50% - 161px); top:calc(50% - 111px);}
    .XRT-LOADED #ULTILOAD,.XRT-LOADED #ULTILOAD_WRAP {opacity:0; !important; z-index:-2;}
</style>

<script>
setTimeout(function() {
	console.clear();
	removeStyles(ULTRAC);
	$('#ULTRAC link[rel="stylesheet"]').remove();
	$('body').prepend('<mw-nav-header-element></mw-nav-header-element>');
	$('body').prepend('<mw-bottom-navigator></mw-bottom-navigator>');
	 
	//definite
	$('#mw-head-base').append('<div class="toc_nav"><paper-icon-button icon="view-day"></paper-icon-button><span>Tartalomjegyzék</span></div>');
    $('#mw-head-base').append('<div class="plang_nav"><paper-icon-button icon="language"></paper-icon-button><span>Nyelv</span></div>');
     
        $('.ujinfobox').addClass('card away maximise');
    
     
    
    $('.toc_nav').click(function(){
	   $('body').toggleClass('toctoggle_open');
    })
    $('.plang_nav').click(function(){
	   $('body').toggleClass('plangnav_open');
    })
    $('#mw-fr-revisiontag').html('');
    $('.mw-editsection').html('');
    
   
    $('img[alt="Searchtool right.svg"]').each(function() {
       setImageToSVG(this,more_info_bar);
    });
     $('img[alt="Wiki letter w.svg"]').each(function() {
       setImageToSVG(this,expand_article_bar);
    });
     $('img[alt="Ambox important.svg"]').each(function() {
       setImageToSVG(this, warning_article_bar);
    });
   
    $('.navbox').addClass('card away');
    $('body').addClass('XRT-LOADED');
},2500);

function setImageToSVG(img,svg){
  var xml = (new XMLSerializer).serializeToString(svg);
  img.src = "data:image/svg+xml;charset=utf-8,"+xml;
}
</script>


<div style="display:none;" id="new_age_images">
<svg id="more_info_bar" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block;"><g><path d="M22 3h-15c-.69 0-1.23.35-1.59.88l-5.41 8.12 5.41 8.11c.36.53.97.89 1.66.89h14.93c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm-13 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="#48F"></path></g></svg>

<svg id="expand_article_bar" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block;"><g><path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm4-4.5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-6 12h18v-2h-18v2zm2-11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm4 3.5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-14-13.5v2h18v-2h-18zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4-3.5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" fill="#f44"></path></g></svg>    
   
    
    <svg id="warning_article_bar" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" fit="" style="pointer-events: none; display: block;"><g><path d="M1 21h22l-11-19-11 19zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#f44"></path></g></svg>
</div>



<style>
    
   #more_info_bar { fill:#48F;}
    img[alt="Searchtool right.svg"] { width:20px; height:20px;}
   #new_age_images {
       display:none;
       
   }
   .wb-langlinks-edit a {  display:none;}
    .navbox td:not(:empty) {
        border: 1px solid #999;
    }
    .navbox { font-family: RobotoDraft, sans-serif;}
     .navbox td:empty { display:none;}
    .navbox th span:first-child { display:none;}
    .navbox th span:last-child { font-size:25px; margin:10px;}
.toc, #p-lang{
	position:fixed;
	top:50px;
	bottom:0px;
	/*white-space:wrap;*/
	overflow-y:auto;
	width:250px;
    left:-250px;
    background:rgb(238, 238, 238);
    
    background: white;
  margin-top: 0px !important;
  margin-bottom: 26px !important;
 
}
    .toctoggle_open .toc ,.plangnav_open #p-lang {
        left:0px;
    }
    .toc li a {
        color:#444;
         text-decoration:none;
    }  
    
    .toclevel-1>a>span{
        color:#111 !important; 
        margin-top:5px;
        display:block;
    }
    .toc ul{
        -webkit-padding-start: 14px;
    }
    .toc li {
        list-style-type: none;
    }
    .toc_nav paper-icon-button /deep/ core-icon{
        fill:#48F;
    }
    .plang_nav paper-icon-button /deep/ core-icon{
        fill:#22B94F;
    }
        /*acitve*/
        .toc_nav, .plang_nav {
            position:fixed;
            left:20px;
            top:50px;        
        }
         .plang_nav {
            top:90px;
        }
        .toc_nav paper-icon-button,.plang_nav paper-icon-button {
            vertical-align:-13px;
        }

        .toctoggle_open  .toc_nav , .plangnav_open .plang_nav{
            left:270px !important;
        }
    .toctoggle_open  .plang_nav {opacity:0;}
    .plangnav_open .toc_nav {opacity:0;}
        .toctoggle_open  .toc_nav span, .plangnav_open .plang_nav span{
            opacity:0;
        }
        .toctoggle_open .mw-body , .plangnav_open .mw-body {
          padding-left:250px;
        } 
        .mw-body {
        max-width:800px;
        margin:50px auto;
        line-height:1.2;
        font-family: 'Noto Serif', serif;
        }
    
.mw-editsection,.mw-notification-area, .flaggedrevs_short_basic,.mw-fr-revisiondetails, .flaggedrevs_short_details,.tocnumber,  #toctitle, #siteSub,.noprint.plainlinks.navbar,#jump-to-nav {
display:none !important;
opacity:0;
}
 #toctitle ,.toc,.mw-body,.toc_nav, #p-lang, .plang_nav  {/*expand navigation bar transition*/
 transition:all .4s;
    }
body {
-webkit-user-select:initial;
    margin-top:50px;
}
#firstHeading {
text-align:center;
font-size:3em;
}
h1,h2,.toc,.mw-headline,#p-lang {
font-family: 'PT Sans', sans-serif;
    margin-top:30px;
    margin-bottom:10px;
}
    .maximise {
        width:800px;
    }
    .focus_links a { /*focus linux*/
        transition:color .4s;
        text-decoration:none;
        color:#222;
    }
    .focus_links .reference {
        opacity:0;
    }
    img.panorama {
       position:absolute;
        left:0px;
        right:0px;
        
            
    }
    .mw-headline-anchor {
        color:#999;
        margin-left:-20px;
        margin-right:20px;
        text-decoration:none;
    }
    .mw-headline-anchor:hover {
        color:#62c;
    }
    .toccoulours {
          padding: 10px;
          margin: 5px;
          box-shadow: 0 2px 3px #BBB;
          background: white;
          border-radius: 0px 0px 2px 2px;
    }
    .dablink {
          margin: 20px 10px;
        font-family: 'PT Sans', sans-serif;
    }
    .dablink * { font-style: normal !important; }
   /* .gallery.mw-gallery-traditional*/
    #asGard {
        margin:0 auto;
        width:800px;
    }
    #asGard input {
        border:none;
        border-bottom:2px solid #48F;
        backgrond:white;
        padding:15px;
        margin:0;
    }
</style>

<script>

 setTimeout(function(){
        document.body.onscroll=function(){
            if (window.scrollY>60) {
                $('html /deep/ nav').addClass('on');
                $('html /deep/ nav span').html(firstHeading.innerHTML);
            }
            else {
                $('html /deep/ nav').removeClass('on');
            }
        }
        
        for (var isv=0;isv<$('img').length;isv++)
        {   console.log($($('img')[isv]).css('width'));
            if ($($('img')[isv]).attr('width')>600) {
                $($('img')[isv]).addClass('panorama');
                $($('img')[isv]).css('width',innerWidth);
            }
        }
        $('a[href*="wiki"]').each(function(){
            $(this).attr('href', 'wiki.php?q=http://hu.wikipedia.org'+$(this).attr('href'));
        })
    },3500);
</script>