<?php
	$username = "vpanchal"; 
	$password = "vp4880";   
	$host = "localhost";
	$database="vpanchal";

	$server = mysql_connect($host, $username, $password);
	$connection = mysql_select_db($database, $server);
	
	$state=  $_POST['state'];
	$sol_home =  $_POST['sol_home'];
	$mem_solar =  $_POST['mem_solar'];

	$myquery = "INSERT INTO graph(state, have_solar, is_member, date) VALUES('$state','$sol_home','$mem_solar',now())";
	$query = mysql_query($myquery);

	if ( ! $query ) {
		echo mysql_error();
		die;
	}

	$conn->close();
?>