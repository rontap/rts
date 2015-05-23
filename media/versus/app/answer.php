<?
  session_start();
  if(!$_REQUEST['id'])
  {
    die();
  }
  if(!isset($_REQUEST['value']))
  {
    $_REQUEST['value']=2;
  }
  $_SESSION['answer_enabled']=true;
  $_SESSION['answer_id']=$_REQUEST['id'];
  $_SESSION['answer_value']=$_REQUEST['value'];
  require_once('config.php');
  $_SESSION['answer_enabled']=false;
  $result=$con->query("SELECT born,gender FROM vs_users WHERE id=" . $userid);
  $row=$result->fetch_assoc();
  $born=$row['born'];
  $age=(time()-strtotime($born))/(365.25*24*60*60)-1;
  $gender=$row['gender'];
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND uid=" . $userid);
  if($result->num_rows==0)
  {
    $con->query("INSERT INTO vs_answers(uid,qid,value,age,gender) VALUES (" . $userid . "," . $_REQUEST['id'] . "," . $_REQUEST['value'] . "," . $age . "," . $gender . ")");
  }
  else
  {
    if($_REQUEST['value']!=2)
    {
      $con->query("UPDATE vs_answers SET value=" . $_REQUEST['value'] . ",age=" . $age . " WHERE uid=" . $userid . " AND qid=" . $_REQUEST['id']);
    }
  }
  if($_REQUEST['value']!=2)
  {
	$result=$con->query("SELECT tag FROM vs_question_tags WHERE qid=" . $_REQUEST['id']);
	while($row=$result->fetch_assoc())
	{
		$result2=$con->query("SELECT id,count FROM vs_user_tags WHERE uid=" . $userid . " AND tag='" . $row['tag'] . "'");
		if($row2=$result2->fetch_assoc())
		{
			$con->query("UPDATE vs_user_tags SET count=" . ($row2['count']+1) . " WHERE id=" . $row2['id']);
		}
		else
		{
			$con->query("INSERT INTO vs_user_tags(uid,tag,count) VALUES (" . $userid . ",'" . $row['tag'] . "',1)");
		}
	}
  }
  
  $out=array();
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0");
  $out['no']=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1");
  $out['yes']=$result->num_rows;
  $out['id']=$_REQUEST['id'];
  $out['results']=array();
  
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0 AND age<15");
  $no=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1 AND age<15");
  $yes=$result->num_rows;
  $out['results'][]=($yes+$no)!=0 ? round(100*$yes/($yes+$no)) : 50;
  
    
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0 AND age>=15 AND age<22");
  $no=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1 AND age>=15 AND age<22");
  $yes=$result->num_rows;
  $out['results'][]=($yes+$no)!=0 ? round(100*$yes/($yes+$no)) : 50;
  
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0 AND age>=22 AND age<40");
  $no=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1 AND age>=22 AND age<40");
  $yes=$result->num_rows;
  $out['results'][]=($yes+$no)!=0 ? round(100*$yes/($yes+$no)) : 50;
  
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0 AND age>=40 AND age<55");
  $no=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1 AND age>=40 AND age<55");
  $yes=$result->num_rows;
  $out['results'][]=($yes+$no)!=0 ? round(100*$yes/($yes+$no)) : 50;
  
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0 AND age>=55");
  $no=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1 AND age>=55");
  $yes=$result->num_rows;
  $out['results'][]=($yes+$no)!=0 ? round(100*$yes/($yes+$no)) : 50;
  
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0 AND gender=0");
  $no=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1 AND gender=0");
  $yes=$result->num_rows;
  $out['results'][]=($yes+$no)!=0 ? round(100*$yes/($yes+$no)) : 50;
  
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=0 AND gender=1");
  $no=$result->num_rows;
  $result=$con->query("SELECT id FROM vs_answers WHERE qid=" . $_REQUEST['id'] . " AND value=1 AND gender=1");
  $yes=$result->num_rows;
  $out['results'][]=($yes+$no)!=0 ? round(100*$yes/($yes+$no)) : 50;
  
  if(!$dontout)
  {
    echo json_encode($out);
    die();
  }
?>
