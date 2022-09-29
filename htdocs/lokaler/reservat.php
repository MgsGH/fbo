<?php

include_once "../aahelpers/PageMetaData.php";
include_once "../aahelpers/common-functions.php";
include_once "../aahelpers/TopMenu.php";

include_once "LokalerMenu.php";
include_once "LokalerTexter.php";
include_once "LokalerHeaderTexter.php";

// Steers linked-in CSS and JS files
$pageMetaData = New PageMetaData('');

$pageMetaData->setAdditionalJavaScriptFiles('lokalerHeader.js');
$pageMetaData->setAdditionalJavaScriptFiles('reservat.js');
$pageMetaData->setJquery(true);
$pageMetaData->setBootstrapFyra(true);
$pageMetaData->setLeafLet(true);

//footer info
$introText = ' ';
$updatedDate = '2021-12-17';
$updatedBy = ' ';

$language = getRequestLanguage();
$texts = new LokalerTexter($language);
$headerTexts = new LokalerHeaderTexter($language);

$pageMenu = New TopMenu($language);
$pageMenu->setLokalerSelected();

$sectionMenu = new LokalerMenu($language);
$sectionMenu->setReservatSelected();
echo getHtmlHead($texts->getTxt('page-title'), $pageMetaData, $language);
?>

    <div class="basePage">
        <?= getBannerHTML('fbowide100h.jpg'); ?>
        <?= $pageMenu->getHTML(); ?>
        <span id="lang" class="mg-hide-element"><?= getLang($language) ?></span>

        <div class="d-flex mt-2">

            <div>
                <?= $sectionMenu->getHTML(); ?>
            </div>

            <div>
                <div class="d-flex">


                    <div class="std">
                        <p>&nbsp;</p>
                        <img src="<?= $texts->getTxt('reservat-image-name') ?>" width="390" height="47" class="icon">
                        <p><?= $texts->getTxt('reservat-intro-i') ?></p>
                        <p><?= $texts->getTxt('reservat-intro-ii') ?></p>
                        <p><?= $texts->getTxt('reservat-intro-iii') ?></p>
                    </div>

                    <div class="std mt-5">
                        <div id="dataMap">
                            <div id="rmap" style="height: 400px"></div>
                        </div>
                    </div>

                </div>

                <div>
                    <p><?= $texts->getTxt('reservat-bullet-intro') ?><p>
                    <ul>
                        <li><?= $texts->getTxt('reservat-bullet-1') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-2') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-3') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-4') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-5') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-6') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-7') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-8') ?></li>
                        <li><?= $texts->getTxt('reservat-bullet-9') ?></li>
                    </ul>
                </div>

            </div>

        </div>






        <?= getFormattedPageFooter($introText, $updatedDate, $updatedBy ); ?>
    </div>

<?= getHTMLEndWithJS($pageMetaData->getJavaScriptSection());

