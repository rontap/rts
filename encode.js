/*
RONTAP RON-JAVASCRIPT-X  rjsx
RANDOM PACKAGE
*/


	 rjsx.encode =function(cod,mal) {
	
	kim="";
	ext=["","","","","","","","","","","e","r","t","z","u","i","o","p","ő"," ","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","c","v","b","n","m",",",".","!","?","0","1","2","3","4","5","6","7","8","9","<",">","#","ß","ä","%","{","}","[","]","(",")","*","×","÷",",","$","'",'"',"&",";","~","|","–","„","","^","¤","¬","§","”","-","@","_",":","=","q","w","ě","č","ǎ","x"];
		console.log('[ENCODE]');
		if (cod.length>9)
		{
			for (i=0;i<Math.floor(cod.length/9);i++)
			{
				
			}
		}
		else 
		{
			rjsx.procode(cod,mal);
		}
	}
		rjsx.procode = function(cod,mal)
		{
		for (i=0;i<cod.length;i++)
		{
			for (j=0;j<ext.length;j++)
			{
			
				if (ext[j]==cod.charAt(i))
				{
				kim+=j;
				}
			}
		}
			console.log(kim);
			return String(kim*mal);
		}//else
	//fun
	 rjsx.decode = function(cod,mal) {
	
	ext=["","","","","","","","","","","e","r","t","z","u","i","o","p","ő"," ","ú","ö","ü","ó","a","s","d","f","g","h","j","k","l","é","á","ű","í","y","c","v","b","n","m",",",".","!","?","0","1","2","3","4","5","6","7","8","9","<",">","#","ß","ä","%","{","}","[","]","(",")","*","×","÷",",","$","'",'"',"&",";","~","|","–","„","","^","¤","¬","§","”","-","@","_",":","=","q","w","ě","č","ǎ","x"];

	code=Math.round(cod/mal);
	console.log(code);
	stringcode=String(code);
	kim="";
	for (i=0;i<stringcode.length;i=i+2)//mindegyik karakteren
		{
		//console.log(stringcode.charAt(i) + stringcode.charAt(i+1));
		szam=Number(stringcode.charAt(i) + stringcode.charAt(i+1));
		//console.log(ext[szam]);
		kim+=ext[Number(szam)];
		}
	return kim;
	}
	

