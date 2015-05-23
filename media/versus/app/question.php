<?
  if(!$_REQUEST['id'])
  {
    die();
  }
  $loginless=true;
  require_once('config.php');
  $out=array();
  $result=$con->query('SELECT uid,question,description,yesdesc,nodesc,tid FROM vs_questions WHERE id=' . $_REQUEST['id']);
  $row=$result->fetch_assoc();
  $out['question']=$row['question'];
  $out['desc']=$row['description'];
  $out['yesdesc']=$row['yesdesc'];
  $out['nodesc']=$row['nodesc'];
  $out['id']=$_REQUEST['id'];
  $out['uid']=$row['uid'];
  $out['tid']=$row['tid'];
  $out['tags']=array();
  $result=$con->query('SELECT tag FROM vs_question_tags WHERE qid=' . $_REQUEST['id']);
  while($row=$result->fetch_assoc())
  {
    $out['tags'][]=$row['tag'];
  }
  $result=$con->query('SELECT name FROM vs_themes WHERE id=' . $out['tid']);
  $row=$result->fetch_assoc();
  $out['theme']=$row['name'];
  $result=$con->query('SELECT nick FROM vs_users WHERE id=' . $out['uid']);
  $row=$result->fetch_assoc();
  $out['user']=$row['nick'];
  echo json_encode($out);
?>
