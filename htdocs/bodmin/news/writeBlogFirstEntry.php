<?php

include_once '../../aahelpers/db.php';

$pdo = getDataPDO();

$dateToWrite = $_POST['dateToWrite'];
$language = $_POST['language'];
$updater = $_POST['updater'];
$content = $_POST['content'];

// write the head
$resultArray = writeBlogRecord($pdo, $dateToWrite, $updater);

// get the id written
$writtenId = $resultArray[0]['ID'];

//write the language version
writeDagBoksBladsText($pdo, $writtenId, $language, $content, $updater);