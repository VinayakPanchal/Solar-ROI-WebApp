<?php
    $username = "vpanchal"; 
    $password = "vp4880";   
    $host = "localhost";
    $database="vpanchal";
    
    $server = mysql_connect($host, $username, $password);
    $connection = mysql_select_db($database, $server);

    $myquery = "SELECT date, count(is_member) as people FROM graph GROUP BY YEAR(date), MONTH(date) ";
    $query = mysql_query($myquery);
    
    if ( ! $query ) {
        echo mysql_error();
        die;
    }
    
    $data = array();
    
    for ($x = 0; $x < mysql_num_rows($query); $x++) {
        $data[] = mysql_fetch_assoc($query);
    }
    
    echo json_encode($data);     
     
    mysql_close($server);
?>