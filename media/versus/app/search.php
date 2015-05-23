<?php
$ExcludeFromSearch=array(
	"a",
	"az",
	"egy",
	"és",
	"vagy",
	"mint"
);

	$srt=Array(); //SearchResultsTEMP vagy SearchRequestsTEMP :)
	$srt1=explode("-",clean($_REQUEST["query"]));
	foreach ($srt1 as $r) if (!in_array($r, $ExcludeFromSearch)) $SearchRequest[]=$r;
	foreach ($SearchRequest as $r) {
		$query="
		SELECT id
		FROM vs_questions
		WHERE 
		LCASE(question) LIKE '%$r%'
		OR
		LCASE(description) LIKE '%$r%'
		OR
		LCASE(yesdesc) LIKE '%$r%'
		OR
		LCASE(nodesc) LIKE '%$r%'
		";
		vard($query,"MySql lekérdezés");
		$result=mysqli_query($db, $query);
		
		
		while ($row = mysqli_fetch_assoc($result)) {
			$srt[]=$row["id"];
		}
	}
	$SearchResults=Array();
	foreach ($srt as $r){
		if (isset($SearchResults[$r])) $SearchResults[$r]++;
		else $SearchResults[$r]=1;
	}
	$max=0;
	$srt=array();
	foreach($SearchResults as $k => $v){
		if ($v>$max) $max=$v;
		$srt[$v]=$k;
	}
	$j=1;
	$SOut=Array();
	for($i=0;$i<=$max;$i++){
		if (isset($srt[$i])){
			$SOut[$srt[$i]]=$i;
		}
	}
	$SOut=array_filter($SOut);
	if (empty($SOut)) {
		?>
		<article onclick="location.href='versus.html'">
			<header>
				Not found!!
				<container class="tags">
				<b>
					<span class=tag onclick="location.href='tag.html'">ERROR</span>
				</b>
				<span class=tag>404</span>
				</container>
			</header>
			<div class="tart">
				Ez a keresés nem járt eredménnyel. <br>
				Keresés: <code><?= $_REQUEST["query"]; ?></code>
				<div class="epik">
					<img src="clock.svg" width="15px" />Rengeteg perc van hátra /
					<img src="people.svg" width="20px" />0 ember szavazott (és fog szavazni) /
					<img src="man.svg" width="15px" />
					<span class="user">Senki se</span>tette fel a kérdést
				</div>
			</div>
		</article>
		<?
	}
	else {
		foreach ($SOut as $id => $level){
			EchoArticle($id, $level);
		}
	}
	vard($SearchRequest,"SearchRequest");
	vard($srt1,"srt1");
?>