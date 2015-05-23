<?
  session_start();
  $_SESSION['sessionid']=$_GET['sessionid'];
  $loginless=true;
  require_once('config.php');
  if($userid==0)
  {
    echo '{"errno":0,"details":{"message":"Successful logout"}}';
  }
  else
  {
    if($_SESSION['answer_enabled'])
    {
	    $result=$con->query("SELECT id FROM vs_users WHERE id=" . $userid);
	    if($result->num_rows==0)
	    {
		    echo '{"errno":3,"details":{"message":"Additional data required"}}';
	    }
	    else
	    {
        $_SESSION['answer_enabled']=false;
        $_REQUEST['id']=$_SESSION['answer_id'];
        $_REQUEST['value']=$_SESSION['answer_value'];
        //$dontout=true;
        require_once('answer.php');
        //header('Location: ../versus.html?action=showanswers&data=' . json_encode($out));
      }
    }
    else
    {
      echo '{"errno":0,"details":{"message":"Successful login"}}';
    }
  }
?>
