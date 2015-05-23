<?
  $loginless=true;
  require_once('config.php');
  $result=$con->query('SELECT id,name FROM vs_themes WHERE id>1 ORDER BY name');
  $out=array();
  $out["errno"]=0;
  $out["result"]=array();
  while($row=$result->fetch_assoc())
  {
    $out["result"][]=array("id" => $row['id'],"name" => $row['name']);
  }
  $out["result"][]=array("id" => 1,"name" => "Egyéb");
  echo json_encode($out);
?>
