<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700|Noto+Serif:400,700&subset=latin,cyrillic,greek,latin-ext' rel='stylesheet' type='text/css'>
<link rel="import" href="../../polyfome/include_minimalist.html">
<link rel="import" href="wikidata/header.html">


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
    echo  file_get_contents ( 'https://hu.wikipedia.org/wiki/London');
    ?>
</container>
<script>
setTimeout(function() {
	console.clear();
	removeStyles(document.body);
	$('link[rel="stylesheet"]').remove();
	$('body').prepend('<mw-nav-header-element></mw-nav-header-element>');
	$('body').prepend('<mw-bottom-navigator></mw-bottom-navigator>');
	
	//definite
	$('#mw-head-base').append('<div class="toc_nav"><paper-icon-button icon="view-day"></paper-icon-button><span>Tartalomjegyzék</span></div>');
    
     
        $('.ujinfobox').addClass('card away maximise');
    
     
    
    $('.toc_nav').click(function(){
	$('body').toggleClass('toctoggle_open');
})
    $('#mw-fr-revisiontag').html('');
    $('.mw-editsection').html('');
    
   

},2500);


</script>

<style>
    
.toc {
	position:fixed;
	top:50px;
	bottom:0px;
	/*white-space:wrap;*/
	overflow-y:auto;
	width:250px;
    left:-250px;
    background:rgb(238, 238, 238);
 
}
.toctoggle_open .toc {
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
        /*acitve*/
        .toc_nav {
            position:fixed;
            left:20px;
            top:50px;
            
        }
        .toc_nav paper-icon-button {
            vertical-align:-13px;
        }

        .toctoggle_open  .toc_nav {
            left:270px;
        }
        .toctoggle_open  .toc_nav span{
            opacity:0;
        }
        .toctoggle_open .mw-body {
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
 #toctitle ,.toc,.mw-body,.toc_nav  {
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
h1,h2,.toc,.mw-headline {
font-family: 'PT Sans', sans-serif;
    margin-top:30px;
    margin-bottom:10px;
}
    .maximise {
        width:800px;
    }
    .focus_links a {
        transition:color .4s;
        text-decoration:none;
        color:#222;
    }
    img.panorama {
        position:
    }
    .gallery.mw-gallery-traditional
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
        
        for (i=0;i<$('img');i++)
        {
            if ($('img')[i].css('width')>'600px') {
                $($('img')[i]).addClass('panorama');
            }
        }
    },3500);
</script>