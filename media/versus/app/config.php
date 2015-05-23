<?
  if(session_id() == '') {
    session_start();
  }
	define('mysql_host','localhost',true);
	define('mysql_user','elementi_al',true);
	define('mysql_pass','PaUNpPuAm9195',true);
	define('mysql_data','elementi_al',true);
  class base
	{
		protected static $con = false;
		protected $id;
		protected $error_out;
		
		public function __construct($id)
		{
			if(!self::$con)
			{
			  self::$con=new mysqli(mysql_host,mysql_user,mysql_pass,mysql_data);
			  if(self::$con->errno)
			  {
				  $this->error(self::$con->connect_error);
			  }
			  self::$con->set_charset('utf8');
			  if(self::$con->errno)
			  {
				  $this->error(self::$con->error);
			  }
			}
			$this->id=$id;
			$this->error_out=array();
		}
		
		public function query($query)
		{
			$result=self::$con->query($query);
			if (!$result)
			{
				$this->error_out['query']=$query;
				$this->error(self::$con->error);
			}
			else
			{
				return $result;
			}
		}
		
		public function error($message,$errno=1)
		{
			$out=array();
			$out['errno']=$errno;
			$out['error']=$message;
			$out['details']=$this->error_out;
			die(json_encode($out));
		}
		
		public function getID()
		{
			return $this->id;
		}
		
		public function insert_id()
		{
		  return self::$con->insert_id;
		}
	}
	$con=new base(0);
  $url='http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  $lapis=json_decode(file_get_contents('http://elemential.net/lapis.php?action=getID&url=' . $url . '&sid=' . $_SESSION['sessionid']));
  if($lapis->{'result'}==0 && !$loginless)
  {
    $con->error('Login required',2);
  }
  $userid=$lapis->{'result'};
?>
