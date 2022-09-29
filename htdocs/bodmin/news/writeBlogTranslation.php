<?php

include_once '../../aahelpers/db.php';

$pdo = getDataPDO();

$dagboksblad_id = $_POST['blogId'];
$text = $_POST['content'];
$language_id = $_POST['language'];
$updater = $_POST['updater'];

writeDagBoksBladsText($pdo, $dagboksblad_id, $language_id, $text, $updater);
