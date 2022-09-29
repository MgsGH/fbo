<?php


include_once '../../aahelpers/db.php';
$pdo = getDataPDO();

$date = $_GET['date'];

$data = getZeroDayData( $pdo, $date );
echo json_encode($data);

