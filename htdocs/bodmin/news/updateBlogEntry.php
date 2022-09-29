<?php

include_once '../../aahelpers/db.php';

$pdo = getDataPDO();

$id = $_POST['id'];
$updater = $_POST['updater'];
$content = $_POST['content'];

updateBlogEntry($pdo, $id, $content, $updater);
