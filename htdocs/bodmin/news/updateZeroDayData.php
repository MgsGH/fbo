<?php

include_once '../../aahelpers/db.php';

$pdo = getDataPDO();

$blogId = $_POST['blogId'];
$userId = $_POST['userId'];
$date = $_POST['date'];
$days = $_POST['zeroDays'];


if ($blogId === '0' ){

    // create blog record (id) before continuing
    $resultArray = writeBlogRecord($pdo, $date, $userId);

    // get the id written
    $blogId = $resultArray[0]['ID'];

    dbLog('Written blog id ' . $blogId );

}


removeZeroDayData($pdo, $date);


foreach ($days as $day) {
    writeZeroDayData($pdo, $date, $userId, $day[0], $day[1], $day[2] );
}
