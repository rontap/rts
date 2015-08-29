<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700|Noto+Serif:400,700&subset=latin,cyrillic,greek,latin-ext' rel='stylesheet' type='text/css'>



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

<?php
	 header('Content-type: text/html; charset=utf-8');

	 
	$html = file_get_contents('http://mek.oszk.hu/' .  $_GET['q'] );
	libxml_use_internal_errors(true); //Prevents Warnings, remove if desired
	$dom = new DOMDocument();
	$dom->loadHTML($html);
	$body = "";
	foreach($dom->getElementsByTagName("body")->item(0)->childNodes as $child) {
		
		
		
		$body .= $dom->saveHTML($child);
	}
	echo $body;
?>

<meta charset="UTF-8">
<script>
	
$("img").error(function () { 
    $(this).hide(); 
});
</script>