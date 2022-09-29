<?php
include_once "LokalerMenu.php";
include_once "LokalerTexter.php";
include_once "LokalerHeaderTexter.php";
include_once "../aahelpers/PageMetaData.php";
include_once "../aahelpers/TopMenu.php";
include_once "../aahelpers/common-functions.php";

// Steers linked-in CSS and JS files
$pageMetaData = New PageMetaData('');
$t = time();
$pageMetaData->setAdditionalJavaScriptFiles('lokalerHeader.js?dummy=' . $t);
$pageMetaData->setAdditionalJavaScriptFiles('nabben.js');
$pageMetaData->setJquery(true);
$pageMetaData->setBootstrapFyra(true);
$pageMetaData->setJQueryUI(true);
$pageMetaData->setSelect2(true);

//footer info
$introText = ' ';
$updatedDate = '2021-09-17';
$updatedBy = ' ';


$language = getRequestLanguage();
$texts = new LokalerTexter($language);
$headerTexts = new LokalerHeaderTexter($language);

$pageMenu = New TopMenu($language);
$pageMenu->setLokalerSelected();

$sectionMenu = new LokalerMenu($language);
$sectionMenu->setNabbenSelected();
echo getHtmlHead('', $pageMetaData, $language);
?>

    <div class="basePage">

        <?php echo getBannerHTML('fbowide100h.jpg'); ?>
        <?php echo $pageMenu->getHTML(); ?>
        <span id="lang" class="mg-hide-element"><?= getLang($language) ?></span>

        <div class="d-flex mt-2">

            <div>
                <?php echo $sectionMenu->getHTML(); ?>
            </div>

            <div class="std">
                <h2><?php echo $texts->getTxt('nabben-header'); ?></h2>
                <p><?php echo $texts->getTxt('nabben-1'); ?></p>
                <p><?php echo $texts->getTxt('nabben-2'); ?></p>
                <p><?php echo $texts->getTxt('nabben-3'); ?></p>
                <p><?php echo $texts->getTxt('nabben-4'); ?></p>
                <p><?php echo $texts->getTxt('nabben-5'); ?></p>
                <p><?php echo $texts->getTxt('nabben-6'); ?></p>
                <p><?php echo $texts->getTxt('nabben-7'); ?></p>
                <p><?php echo $texts->getTxt('nabben-8'); ?></p>
                <p><?php echo $texts->getTxt('nabben-9'); ?></p>

                <img class="lopande" src="/bilder/icon41_1.gif" width="32" height="32">
                <p><?php echo $texts->getTxt('nabben-10'); ?></p>

            </div>

        </div>



        <?php echo getFormattedPageFooter($introText, $updatedDate, $updatedBy ); ?>
    </div>

<?php echo getHTMLEndWithJS($pageMetaData->getJavaScriptSection());

