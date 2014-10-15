<?php

function e_getlocalstr($strname)
{
$e_loc_local=substr($_SERVER["HTTP_ACCEPT_LANGUAGE"], 0, 2);
$e_loc_global='en';

$e_loc_out=false;

$filepath=('lang/' . $e_loc_global . '.json');

if (file_exists($filepath))
{
	$e_loc_strs=json_decode(file_get_contents($filepath));
	if (isset($e_loc_strs->$strname))
	{
		$e_loc_out=$e_loc_strs->$strname;
	}
}

$filepath=('lang/' . $e_loc_local . '.json');
if (file_exists($filepath))
{
	$e_loc_strs=json_decode(file_get_contents($filepath));
	if (isset($e_loc_strs->$strname))
	{
		$e_loc_out=$e_loc_strs->$strname;
	}
}

return $e_loc_out;
}
?>
