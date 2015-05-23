<?
  $loginless=true;
  require_once('config.php');
  $time=time();
  if($userid)
  {
    $result=$con->query("SELECT count FROM vs_user_tags WHERE uid=" . $userid . " ORDER BY count DESC LIMIT 1");
    if($row=$result->fetch_assoc())
    {
      $maxtags=$row['count'];
    }
    $result=$con->query("SELECT last FROM vs_user_tags WHERE uid=" . $userid . " ORDER BY last DESC LIMIT 1");
    if($row=$result->fetch_assoc())
    {
      $lasttag=$row['last'];
    }
    $result=$con->query("SELECT COUNT(*) AS rowcount FROM vs_questions");
    $row=$result->fetch_assoc();
    $pass=false;
    $count=0;
    $maxcount=$row['rowcount'];
    $result=$con->query("SELECT MAX(id) AS id FROM vs_questions");
    $row=$result->fetch_assoc();
    $maxid=$row['id'];
    while(!$pass)
    {
      $shallpass=true;
      $like=0.1;
      $counted=0;
      $id=mt_rand(1,$maxid);
	  $result=$con->query("SELECT id FROM vs_questions WHERE id=" . $id);
	  if(!$result->num_rows)
	  {
		$shallpass=false;
	  }
      $result=$con->query("SELECT tag FROM vs_question_tags WHERE qid=" . $id);
      while($row=$result->fetch_assoc())
      {
        $result2=$con->query("SELECT count FROM vs_user_tags WHERE tag='" . $row['tag'] . "'");
        if($row2=$result2->fetch_assoc())
        {
          $like=($like*$counted+($row2['count']/$maxtags))/($counted+1);
          $counted=$counted+1;
        }
      }
      $pass=(mt_rand()/mt_getrandmax())<$like;
      if(!$shallpass) //You shall not pass!
      {
        $pass=false;
      }
      if($count>$maxcount)
      {
        $pass=true;
      }
      $count=$count+1;
    }
  }
  else
  {
    $result=$con->query("SELECT MAX(id) AS id FROM vs_questions");
    $row=$result->fetch_assoc();
    $id=mt_rand(1,$row['id']);
  }
  $_REQUEST['id']=$id;
  require_once('question.php');
?>
