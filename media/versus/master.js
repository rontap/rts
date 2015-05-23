//keresőmező hozzáadása
for (i = 0; i < document.getElementsByClassName("user").length; i++) {
    document.getElementsByClassName("user")[i].title = "Kattints ide a profil megnyitásához";
}

aui = "me.html";
setTimeout(function () {
    rfocim.innerHTML += '<span class="notification"  onclick=$(".notification").addClass("on");><img src="http://rontap.netne.net/tahr/keres.png"><span id="keresterm" contenteditable onkeypress="alignbox();" onkeyup="alignbox();" >keress itt</span></span>';

}, 1800);

was = false;

function alignbox() {
    if (map[17]) {
        $('.notification.on').css('background', '#48F');
        console.log('GO');
        //IDE KELL IRNI AZ ÁTIRÁNYÍTÓ KÓDIT
    }
    if ($('#keresterm').width() < 550) {
        $('.notification.on').css('width', $('#keresterm').width() + 53);
    }

    if ((keresterm.innerHTML == "") && (was)) {
        $('.notification.on').removeClass("on");
        $('.notification').css('width', 20);
        keresterm.innerHTML = "keress itt";
    }
    if ((keresterm.innerHTML == "") && ((map[8]) || map[46])) {
        was = true;
    } else {
        was = false
    };

}

sem = "";


//depi
function llapis() { //alap form
    dataf.innerHTML = "";
    lf = '<div id="lapis_form">';
    lf += '  <center><img src="http://elemential.net/lapis/lapis.png">';
    lf += '  </center>';
    lf += '  <div id="lapis_wrapper">';
    lf += '    <div id="lapis_box">';
    lf += '      <span id="lapis_errorfield" onClick="lapis.closeerror()"></span>';
    lf += '        <div class="lapis_header">';
    lf += '          <h4>Még egy lépés</h4>';
    lf += '        </div>';
    lf += '        <center> Meg kell adnod még kettő információt a regisztáció véglegesítéséhez';
    lf += '        <br><br>';
    lf += '        <b class="ubuntu">Nemed?</b><br>';
    lf += '          <input type="radio" name="a" id="vs_male"/> Férfi';
    lf += '          <input type="radio" name="a" id="vs_female"/> Nő';
    lf += '        <br><br>';
    lf += '        <b class="ubuntu">Mikor születtél?</b><br>';
    lf += '        <input type="number" placeholder="év" min="1900" max="2010" id="vs_yy"/>';
    lf += '        <input type="number" placeholder="hó" min="1" max="12" id="vs_mm"/>';
    lf += '        <input type="number" placeholder="nap" min="1" max="31" id="vs_dd"/>';
    lf += '        <input type="submit" value="Regisztráció befejezése" onclick="lapis.closeform()" id="lapis_regbutton" style="margin-bottom:5px;"><br>';
    lf += '        <small style="display:block;margin:0px 20px 10px 20px; "><grey>';
    lf += '          Ezek az információk a részletes elemzéshez kellenek, nem adjuk tovább harmadik félnek. Senki sem látja azt hogy';
    lf += '          te pontosan mire szavaztál, csak azt hogy valaki szavazott rá, aki mondjuk férfi.';
    lf += '        </grey></small>';
    lf += '      </center>';
    lf += '    </div>';
    lf += '  </div>';
    lf += '</div>';
    dataf.innerHTML = "<span id='fullblack'>&nbsp;</span>";
    dataf.innerHTML += lf;

}

function lauth() { //már bejelentkezettek kezelése
    dataf.innerHTML = "";
    lf = '         <div id="lapisform">';
    lf += '                <center><img src="http://elemential.net/lapis/lapis.png">';
    lf += '                </center>';
    lf += '                <div id="wrapper">';
    lf += '                      <div id="box">';
    lf += '                        <div class="header">';
    lf += '                          <h4>';
    lf += '                           Üdv újra, {{username}}';
    lf += '                            </h4>';
    lf += '                         </div>                     ';
    lf += '                            <center>Erősísd meg a lapis és a {{app}} összekötését!                      ';
    lf += '                          <input type="submit" value="Belépés és megerősítés" onclick="klapis()" id="lregbutton" style="margin-bottom:5px;">';
    lf += '                          <small class="c"><a class="l c">nem te vagy? lépj be itt.</a></small>';
    lf += '                          </center> ';
    lf += '                      </div>';
    lf += '            </div>';
    lf += '    </div>';
    dataf.innerHTML = "<span id='fullblack'>&nbsp;</span>";
    dataf.innerHTML += lf;
}

function klapis() { //kilépés

    lapisform.style.opacity = "0.1";
    fullblack.style.background = "rgba(200,200,200,0)";
    setTimeout(function () {
        dataf.innerHTML = "";
    }, 100);
}

function lreg() { //regisztáció füg
    $('#lloginID').removeClass('active');
    $('#lregID').addClass('active');
    lregbutton.value = "Regisztrálás";
    lregfield.style.maxHeight = "250px";

    errorfield.innerHTML = "";
    errorfield.style.height = "0px";
    errorfield.style.border = "0px solid transparent";

}

function lin() { //login fül
    $('#lloginID').addClass('active');
    $('#lregID').removeClass('active');
    lregbutton.value = "Bejelentkezés!";
    lregfield.style.maxHeight = "0px";
}

function lerror(call) { //hibaüzenet
    errorfield.innerHTML = call;
    errorfield.style.height = "30px";
    errorfield.style.borderTop = "1px solid #F22";
    errorfield.style.borderBottom = "1px solid #F22";
}


body.innerHTML += "<img src='keyboard.png' id='key' onclick='togglekey();'>";


lf = '<div id="keynote" class="nope" style="opacity:0;">';
lf += '        <h4>Gyorsbillentyűk</h4>';
lf += '        <br>';
lf += '        <table class="norjsx">';
lf += '            <tr>';
lf += '                <td>Következő</td>';
lf += '                <td>j</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>Hátra</td>';
lf += '                <td>k</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>Szavaz mellette</td>';
lf += '                <td>Alt + j</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>Szavaz ellene</td>';
lf += '                <td>Alt + k</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>Megosztás</td>';
lf += '                <td>Alt + s</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>Új kérdés feltevése</td>';
lf += '                <td>Alt + n</td>';
lf += '            </tr>';
lf += '';
lf += '            <tr>';
lf += '                <td>téma megnyitása</td>';
lf += '                <td>Alt + t</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>Ugrás az tagre</td>';
lf += '                <td>Alt + 1..5</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>Kilépés a versusból</td>';
lf += '                <td>AltGr l</td>';
lf += '            </tr>';
lf += '            <tr>';
lf += '                <td>témasáv megjelenítése</td>';
lf += '                <td>TAB</td>';
lf += '            </tr>';
lf += '        </table>';
lf += '       ';
lf += '    </div>';
lf += '         <img src="triangle.png" id="trim">';
body.innerHTML += lf;

document.getElementsByTagName("footeri")


setTimeout(function () {
    if ($('footeri').length == 0) {
        key.style.bottom = "20px";
        $('#keynote').addClass("pici");
        $('#trim').addClass("pici");
    } else {
        document.getElementsByTagName("footeri")[0].onmouseenter = function () {
            key.style.opacity = 0
        };
        document.getElementsByTagName("footeri")[0].onmouseout = function () {
            key.style.opacity = 1
        };
    }

}, 3000);
var map = []; // Or you could call it "key"
onkeydown = onkeyup = function (e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    if (map[74]) {
        calkr();
        map = [];
    } else if (map[18] && map[78]) {
        window.location.href = "wizard.html";
        console.log('a');
        map = [];
    } else if (map[9]) {
        openme();
        map = [];
    } else if (($('.notification').hasClass('on')) && (map[13])) {
        location.search = "query=" + keresterm.innerHTML;

    }
    console.log(map);
}

toggleit = false;

function togglekey() {
    if (!toggleit) {
        toggleit = true;
        $('#keynote').addClass("on");
        $('#trim').addClass("on");
    } else {
        toggleit = false;
        $('#keynote').removeClass("on");
        $('#trim').removeClass("on");
    }
}

console.log('a');