<?php


include_once '../../aahelpers/db.php';
$pdo = getDataPDO();

$blogId = $_POST['blogId'];
$user = $_POST['userId'];
$blogDate = $_POST['currentBlogDate'];

dbLog('Initialt blog id ' . $blogId );
dbLog('Blog id is ' . gettype($blogId) );


if ($blogId === '0' ){

    // create blog record (id) before continuing
    $resultArray = writeBlogRecord($pdo, $blogDate, $user);

    // get the id written
    $blogId = $resultArray[0]['ID'];

    dbLog('Written blog id ' . $blogId );

}

removeKeywordsForBlog($pdo, $blogId);

// rewrite keyword(s)
$aKeywords = explode(',', $_POST['keywordIds']);
foreach ($aKeywords as $keywordId) {
    writeBlogKeyword($pdo, $blogId, $keywordId, $user);
}
