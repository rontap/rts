//rontap 2013 WEBNOTES for STUDENTS
editnow = '';
function Orewiew() {}

nap=[];
for (i=0;i<5;i++)
{
nap[i]=new Array(1+i,2+i,3+i,4+i,5+i,6+i,7+i,8+i,9+i,i+10,i+11,i+12,i+13,'overflow');
}
insert= new Array();

renaming=false;
rows=4;
function Load() {
splan.innerHTML="";

	a='<tr>';
	a+='<td disabled></td>';
	a+='<th>Hétfő</th>';
	a+='<th>Kedd</th>';
	a+='<th>Szerda</th>';
	a+='<th>Csütörtök</th>';
	a+='<th>Péntek</th>';
	a+='</tr>';
	splan.innerHTML=a;
	
	for (i=1;i<rows;i++)
	{
	a='<tr>';
	a+='<th>'+i+'</th>';
	a+='<td ondblclick=Edit("s1'+i+'") id="s1'+i+'">'+nap[0][i]+'</td>';
	a+='<td ondblclick=Edit("s2'+i+'") id="s2'+i+'">'+nap[1][i]+'</td>';
	a+='<td ondblclick=Edit("s3'+i+'") id="s3'+i+'">'+nap[2][i]+'</td>';
	a+='<td ondblclick=Edit("s4'+i+'") id="s4'+i+'">'+nap[3][i]+'</td>';
	a+='<td ondblclick=Edit("s5'+i+'") id="s5'+i+'">'+nap[4][i]+'</td>';
	a+='</tr>';
	splan.innerHTML+=a;

	}
}
function AddRow() {
	rows++;
	Load();
	if (rows>12)
	{
	rowcontrol.disabled=true;
	}
		if (rows>1)
	{
	rowminus.disabled=false;
	}
}
function DesRow() {
	rows--;
	Load();
	if (rows<=12)
	{
	rowcontrol.disabled=false;
	}
		if (rows<=1)
	{
	rowminus.disabled=true;
	}
	
}
function Edit(call) {
console.log(call) ;
//window[call].innerHTML='click';
//renaming

//kill dblclick
/*for (i=1;i<5;i++)
{
	for (y=1;y<rows;y++)
	{
		window['s'+i+y].ondblclick='';
	}
}*/
if (!(renaming))
{
renaming=true;
editnow=call;//outwork
	note=document.getElementById(call).innerHTML;
	document.getElementById(call).innerHTML="<input type='text' id='renamenote' value="+note+" onkeydown='SaveChangesRenameB(event,editnow);'>";
	//document.getElementById(call).ondblclick="";
	console.log(yo);
}
	}

function SaveChangesRenameB(enter,call) { //enter és mentés for RenameNote
	//új cím==ujcim
	if (enter.keyCode == 13)		   
	 {
		    	
		        ujcim=document.getElementById('renamenote').value;
		        document.getElementById(call).innerHTML=ujcim;
		       
		       	ids=window[call].id;//lokálissá
		        console.log(ids.charAt(1));
		       nap[ids.charAt(1)-1][ids.charAt(2)]=ujcim;//kód visszafejtése
		         //   nap[idből visszafej][karakteridbol]=[az ujjonnan megadott cim]
	   			renaming=false;
	   			console.log(renaming);
		   }
	
}

orew_holder.style.marginLeft="18%";

Load();

