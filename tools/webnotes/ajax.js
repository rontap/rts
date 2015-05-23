/*WEBNOTES AJAX SCRIPT
*made my : deesnow
*webnotes made by: deesnow,bobarna,rontap
*edition: BETA1
*2013-04-04
*/
//-------------------------------------------------------------------------------
//GLOBAL VAR'S
lastestCount=3; //Hány objektumot listázzon ki bejelentkezéskor

//-------------------------------------------------------------------------------
//CODE START HERE
//-------------------------------------------------------------------------------
console.log('ajax.js initialized');
//BETOLTES
$(document).ready(function(){
  $.get('/ajax/user.php',function(data){
		if (data=='badlogin')
			{
			viewLoginForm();
			}
		else
			{
			$("#user_cont").text(data);
			onLoad();
			}
	});
});

function onLoad()
{
loadBooks();
loadLastest(lastestCount);
}

//LOGINFORM
function viewLoginForm()
{
	loginform='';
	loginform+='<div id="wn_login">';
	loginform+='<div style="position:absolute;width:100%;height:100%;background-color:rgba(75,75,75,0.75);top:0px;bottom:0px;left:0px;right:0px;" id="wn_disabler" >';	
	loginform+='</div>';
	loginform+='<div style="position:fixed;top:30%;bottom:auto;width:100%;"><div style="margin-left:auto;margin-right:auto;text-align:center;opacity:0.8;border:1px solid rgb(75,75,75);border-radius:5px;background-color:#ffffff;padding:12pt;width:200pt;" id="wn_form">';
	loginform+='<form id="lapis_form">';
	loginform+='	<input id="lapis_username" class="csomag" style="background-color:white;margin:4pt;width:168pt;"><br>';
	loginform+='  <input id="lapis_password" class="csomag" style="background-color:white;margin:4pt;width:168pt;"><br>';
	loginform+='  <div id="lapis_submit" class="csomag" style="margin:4pt;width:168pt;">Bejelentkezés</div>';
	loginform+='  <div onClick="onRegister();" class="csomag" style="margin:4pt;width:168pt;">Regisztráció</div>';
	loginform+='  <div onClick="onSkip();" class="csomag" style="margin:4pt;width:168pt;">Offline munka</div>';
	loginform+='  <small>Login provided by <a href="http://lapis.webuda.com">Lapis</a></small>';
	loginform+='  <input name="rd" type="hidden" value="http://webnotes.comze.com/ajax/login.php">';
	loginform+='  <script src="http://lapis.webuda.com/sys/ext.js"></script>';
	loginform+='</form>';
	loginform+='</div></div>';
	loginform+='</div>';
	$('body').append(loginform);
}

function onSkip()
{
	$('#wn_login').html('');
}

function onRegister()
{
$('#lapis_username').attr('value','');
$('#lapis_form').submit();
}

//-------------------------------------------------------------------------------
//RON'S CODE START HERE
//Variables:
//	data - xml file vagy string, a visszakapott érték - lásd /docs
//-------------------------------------------------------------------------------

//JEGYZETTOMBOK LISTAJANAK BETOLTESE
function loadBooks()
{
$.get('/ajax/books.php',function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZETTOMB BETOLTESE
function loadBook(bookname)
{
$.get('/ajax/notes.php?book='+bookname,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET BETOLTESE
function loadNote(bookname,notename)
{
$.get('/ajax/note.php?book='+bookname+'&note='+notename,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET MENTESE
function loadNote(bookname,notename,content)
{
$.get('/ajax/savenote.php?book='+bookname+'&note='+notename+'&content='+content,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//LASTEST BETOLTESE
function loadLastest(count)
{
$.get('/ajax/lastest.php?count='+count,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZETTOMB KESZITESE
function createBook(bookname)
{
$.get('/ajax/createbook.php?book='+bookname,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET KESZITESE
function createNote(bookname,notename,color)
{
$.get('/ajax/createnote.php?book='+bookname+'&note='+notename+'&color='+color,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZETTOMB TORLESE
function deleteBook(bookname)
{
$.get('/ajax/deletebook.php?book='+bookname,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET TORLESE
function deleteNote(bookname,notename)
{
$.get('/ajax/deletenote.php?book='+bookname+'&note='+notename,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZETTOMB ATNEVEZESE
function renameBook(bookname,newname)
{
$.get('/ajax/renamebook.php?book='+bookname+'&name='+newname,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET ATNEVEZESE
function renameNote(bookname,notename,newname)
{
$.get('/ajax/renamenote.php?book='+bookname+'&note='+notename+'&name='+newname,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET ATSZINEZESE
function repaintNote(bookname,notename,color)
{
$.get('/ajax/renamenote.php?book='+bookname+'&note='+notename+'&color='+color,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET MEGOSZTASA
function shareNote(bookname,notename,user)
{
$.get('/ajax/sharenote.php?book='+bookname+'&note='+notename+'&user='+user,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//MEGOSZTAS TORLESE
function shareNote(bookname,notename,user)
{
$.get('/ajax/unsharenote.php?book='+bookname+'&note='+notename+'&user='+user,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//JEGYZET HOZZAFERHETOSEGENEK KILISTAZASA
function isShared(bookname,notename)
{
$.get('/ajax/isshared.php?book='+bookname+'&note='+notename,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//MEGOSZTOTT JEGYZETEK KILISTAZASA
function viewShared()
{
$.get('/ajax/viewshared.php',function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//MEGOSZTOTT JEGYZET BETOLTESE
function readShared(user,bookname,notename)
{
$.get('/ajax/readshared.php?book='+bookname+'&note='+notename+'&user='+user,function(data){
//RON'S CODE START

//RON'S CODE END
});
}

//-------------------------------------------------------------------------------
//EXTERNAL CODE
//-------------------------------------------------------------------------------

function hex2rgb(hex, opacity) {
  var rgb = hex.replace('#', '').match(/(.{2})/g);
 
  var i = 3;
  while (i--) {
    rgb[i] = parseInt(rgb[i], 16);
  }
 
  if (typeof opacity == 'undefined') {
    return 'rgb(' + rgb.join(', ') + ')';
  }
 
  return 'rgba(' + rgb.join(', ') + ', ' + opacity + ')';
};
