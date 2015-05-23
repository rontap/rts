<?php
function EchoArticle($id,$info=false,$title=false,$tags=false){
	global $db, $firstar;
	if ($firstar){
		echo "</span><span class=\"arholder\">"; //</span> (Ha valaki NPP-t használ, érteni fogja ezt a kommentet(Túl okos az NPP)))
	}
	$firstar = !$firstar;
	switch ($id) {
		case 0:
			$tags=explode(' ', $tags);
			reset($tags);
			if (list(,$tag)=each($tags)) $tagsT="<b><span class=\"tag\" onclick=\"location.href='tag.html'\">$tag</span></b>"; //tagsTemp
			while(list(,$tag)=each($tags))
			{
				$tagsT.=" <span class=\"tag\">$tag</span>";
			}
			?>
			<article onclick="location.href='versus.html'">
				<header>
					<?= $title ?>
					<container class="tags">
						<?= $tags ?>
					</container>
				</header>
				<div class="tart">
					<?= $info ?>
					<div class="epik">
						<img src="clock.svg" width="15px" />
						Rengeteg perc van hátra /
						<img src="people.svg" width="20px" />
						0 ember szavazott (és fog szavazni) /
						<img src="man.svg" width="15px" />
						<span class="user">
							Senki se
						</span>
						tette fel a kérdést
					</div>
				</div>
			</article>
			<?
		break;
		default:
			$query="SELECT * FROM vs_questions WHERE id='$id'";
			$res=mysqli_query ($db, $query);
			if ($res->num_rows==0) {
				EchoArticle(0,"ERROR 404 - Ez a kérdés nem található. (ID: $id)<br>MySQL lekérdezés: <code>$query</code>")
				?>
				<article onclick="location.href='versus.html'">
					<header>
						Not found!!
						<container class="tags">
						</container>
					</header>
					<div class="tart">
						ERROR 404 - Ez a kérdés nem található. (ID: <?= $id; ?>)<br>
						MySQL lekérdezés: <code><?=$query; ?></code>
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
				$ar=mysqli_fetch_array($res);
				$res=$db->query("SELECT tag FROM vs_question_tags WHERE qid='$id'");
				$row=mysqli_fetch_assoc($res);
				$tags="<b><span class=\"tag\" onclick=\"location.href='tag.html'\">".$row['tag']."</span></b>";
				while($row=mysqli_fetch_assoc($res))
				{
					$tags.=" <span class=\"tag\">".$row['tag']."</span>";
				}
				?>
					<article onclick="location.href='versus.html'">
						<header>
							<?= $ar["question"] ?>
							<container class="tags">
								<?= $tags; ?>
							</container>
						</header>
						<div class="tart">
							<?= $ar["description"] ?>
							<div class="epik">
								<img src="clock.svg" width="15px" />35 perc van hátra /
								<img src="people.svg" width="20px" />5763 ember szavazott /
								<img src="man.svg" width="15px" />
								<span class="user">Józsi</span>tette fel a kérdést
							</div>
						</div>
					</article>
				<?
			}
		break;
	}
}

function clean($string) {
	$string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
	$string = preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
	$string = strtolower($string);
	
	return preg_replace('/-{2,}/', '-', $string); // Replaces multiple hyphens with single one.
}

function vard($var, $info=false){
	global $db, $firstar, $dev;
	if ($dev){
		if ($firstar){
			echo "</span><span class=\"arholder\">"; //</span> (Ha valaki NPP-t használ, érteni fogja ezt a kommentet(Túl okos az NPP :) ))
		}
		$firstar = !$firstar;
		?>
		<article onclick="location.href='versus.html'">
			<header>
				Információ fejlesztőknek
				<container class="tags">
					<b>
						<span class="tag" onclick="location.href='tag.html'">Debug</span>
					</b>
					<span class="tag">var_dump</span>
					<span class="tag"><?=$info;?></span>
				</container>
			</header>
			<div class="tart">
				A <code><?= $info ?></code> változó tartalma:<br>
				<code><? var_dump($var); ?></code>
				<div class="epik">
					<img src="clock.svg" width="15px" />Néhány bugfix van hátra /
					<img src="people.svg" width="20px" />0 ember szavazott /
					<img src="man.svg" width="15px" />
					<span class="user">Developer</span>tette fel a kérdést
				</div>
			</div>
		</article>
		<?
	}
}

/*
function beautifi($in, $mode="html", $tag_opened=false){
	$out="";
	$in=str_split($in);
	$end=true;
	$input=&$in;
	function checkNextString($in){
		global $i, $input;
		$length= (is_string($in) ? length($in) : $in);
		$in=str_split($in);
		
		for ($j=0;$j<$length;$j++){
			if ($input[$i+$j]<>$in[$j]) return false;
		}
		return true;
	}
	
	{
		for ($i=1;!$end;$i++){
			$it=$i; //$iTEMP
			$char=&$out[$i];
		}
		$end=false;
	}
	
	{
		for (;!$end;$i++){
			if ( ($out.=$in[$i]) == "/n" ) $end=true;
		}
		$end=false;
	}
	
	if (leftstr($out,1,10)<>"<!DOCTYPE ") $out="<!DOCTYPE HTML>";
	$i=1;
	{
		for ($i=1;!$end;$i++){
			$it=$i;
			$char=&$out[$i];
			switch ($mode) {
				"html":
				default:
					switch ($char){
						"<":
							if ($in[$it++]=='/') $tag_opened=false;
							else $tag_opened=true;
							break;
					}
					break;
			}
		}
		$end=false;
	}
}
*/
?>