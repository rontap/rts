<?
  require_once('config.php');
  if(!isset($_REQUEST['gender'] || $_REQUEST['gender']=='false')
  {
    die('{"errno":1,"message":"Gender required"}');
  }
  if(!isset($_REQUEST['born'])
  {
    die('{"errno":1,"message":"Gender required"}');
  }
  $result=$con->query("INSERT INTO vs_users(id,born,gender) VALUES (" . $userid . "," . $_REQUEST['born'] . "," . $_REQUEST['gender'] . ")");
  $_SESSION['answer_enabled']=false;
  $_REQUEST['id']=$_SESSION['answer_id'];
  $_REQUEST['value']=$_SESSION['answer_value'];
  $dontout=true;
  require_once('answer.php');
  header('Location: ../versus.html?action=showanswers&data=' . json_encode($out));
?>
