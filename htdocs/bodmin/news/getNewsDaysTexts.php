<?php

include_once '../aahelpers/db.php';

$pdo = getPDO();

$data = getAllDaysLanguages($pdo);
echo json_encode($data);


