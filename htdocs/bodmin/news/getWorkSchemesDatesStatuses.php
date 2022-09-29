<?php

include_once '../../aahelpers/db.php';
$pdo = getDataPDO();

$lang = $_GET['lang'];

$data = getWorkSchemesDatesStatuses($pdo, $lang);
echo json_encode($data);

