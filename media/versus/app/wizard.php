<?
  //header('Access-Control-Allow-Origin: *');  
  require_once('config.php');
  $uid=$userid;
  if(empty($_REQUEST['question']))
  {
    $con->error('Missing question');
  }
  if(empty($_REQUEST['desc']))
  {
    $con->error('Missing description');
  }
  if(empty($_REQUEST['yesdesc']))
  {
    $con->error('Missing yesdesc');
  }
  if(empty($_REQUEST['nodesc']))
  {
    $con->error('Missing nodesc');
  }
  if(empty($_REQUEST['lang']))
  {
    $con->error('Missing language');
  }
  if(strlen($_REQUEST['question'])>142)
  {
    $con->error('Question is too long');
  }
  if(strlen($_REQUEST['desc'])>142)
  {
    $con->error('Description is too long');
  }
  if(strlen($_REQUEST['yesdesc'])>142)
  {
    $con->error('Yesdesc is too long');
  }
  if(strlen($_REQUEST['nodesc'])>142)
  {
    $con->error('Nodesc is too long');
  }
  $result=$con->query('SELECT name FROM vs_themes WHERE id=' . $_REQUEST['tid']);
  if($result->num_rows==0)
  {
    $con->error('Theme not found');
  }
  if(empty($_REQUEST['end']))
  {
	$_REQUEST['end']=0;
  }
  $result=$con->query("INSERT INTO vs_questions(uid,question,description,yesdesc,nodesc,tid,lang,end) VALUES (" . $uid . ",'" . $_REQUEST['question'] . "','" . $_REQUEST['desc'] . "','" . $_REQUEST['yesdesc'] . "','" . $_REQUEST['nodesc'] ."'," . $_REQUEST['tid'] . ",'" . $_REQUEST['lang'] . "',FROM_UNIXTIME(" . $_REQUEST['end'] . "))");
  $qid=$con->insert_id();
  if(isset($_REQUEST['tag0']))
  {
    $con->query("INSERT INTO vs_question_tags(qid,tag) VALUES (" . $qid . ",'" . $_REQUEST['tag0'] . "')");
  }
  if(isset($_REQUEST['tag1']))
  {
    $con->query("INSERT INTO vs_question_tags(qid,tag) VALUES (" . $qid . ",'" . $_REQUEST['tag1'] . "')");
  }
  if(isset($_REQUEST['tag2']))
  {
    $con->query("INSERT INTO vs_question_tags(qid,tag) VALUES (" . $qid . ",'" . $_REQUEST['tag2'] . "')");
  }
  if(isset($_REQUEST['tag3']))
  {
    $con->query("INSERT INTO vs_question_tags(qid,tag) VALUES (" . $qid . ",'" . $_REQUEST['tag3'] . "')");
  }
  if(isset($_REQUEST['tag4']))
  {
    $con->query("INSERT INTO vs_question_tags(qid,tag) VALUES (" . $qid . ",'" . $_REQUEST['tag4'] . "')");
  }
  if(isset($_REQUEST['tag5']))
  {
    $con->query("INSERT INTO vs_question_tags(qid,tag) VALUES (" . $qid . ",'" . $_REQUEST['tag5'] . "')");
  }
  echo '{"errno":0,"details":{"message":"Successful question submitting"},"qid":'.$qid.'}';
?>
