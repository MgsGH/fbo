<?php

include_once '../../aahelpers/db.php';
dbLog('in zeroData.php');
$days = $_POST['zeroDays'];

$t = $days[0][1];
dbLog($t);

//logDBPostData();
