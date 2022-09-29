<?php
session_start();
$path = '/home/hkghbhzh/public_html';
if ($_SERVER['HTTP_HOST'] === 'fbo.localhost'){
    $path =  'C:\xampp\apps\fbo\htdocs';
}

include_once $path . '/aahelpers/common-functions.php';
include_once $path . '/aahelpers/db.php';
include_once $path . '/aahelpers/AppMenu.php';
include_once $path . "/aahelpers/PageMetaData.php";

// Steers linked-in CSS and JS files
$pageMetaData = New PageMetaData('');
$pageMetaData->setAdditionalJavaScriptFiles('news.js');
$pageMetaData->setAdditionalJavaScriptFiles('/aahelpers/PhotoPopUp.js');
$pageMetaData->setJquery(true);
$pageMetaData->setJQueryUI(true);
$pageMetaData->setJodit(true);
$pageMetaData->setBootstrapFem(true);
$pageMetaData->setSelect2(true);
$pageMetaData->setCropper(true);

//page configuration
$allowedComingFromPage = array("anywhere");
$permissionRequired = 3;
$module = 2;
$errorPage = 'login\index.php';
$language = getRequestLanguage();

$pdo = getDataPDO();

if (!checkPermissionsOkForModule($allowedComingFromPage, $permissionRequired, $module, $pdo)) {
    header( "location: http://fbo.localhost/bodmin/login/index.php");
    exit;
}

$languageOptions = getLanguageOptionsAsHTML($pdo, $language);     // dropdown for selecting UI language.
echo getHtmlHead('', $pageMetaData, $language);
echo getLoggedInHeader();
$appMenu = new AppMenu($pdo, $_SESSION['userId']);
$appMenu->setSidaSelected(5);
echo $appMenu->getAsHTML();

?>

    <!-- main page -->
    <div class="container-fluid mg-white-smoke" xmlns="http://www.w3.org/1999/html">
        <span id="coolLevel" class="mg-hide-element"><?= $_SESSION['userId'] ?></span>
        <span id="langAsNo" class="mg-hide-element"><?= getLang($language) ?></span>

        <div class="d-flex">

            <div class="mg-sidenav-news std">

                <h2 id="hdrMain">XX</h2>
                <p>Ver. 1.2</p>
                <div>
                    <select id="ddLanguage" class="form-select" name="dropDownLanguage">
                        <?= $languageOptions ?>
                    </select>
                    <div id="datepicker" class="mg-top">

                    </div>
                </div>
                <br/>
                <small id="selectedLanguageAndDate"><span id="selectedIntro">Selected:</span><br><span id="selLanguage" class="mg-bold">XYZ</span>, <span id="selDate" class="mg-bold">2010-50-41</span></small>
                <hr>
                <small id="selectInfoHeader"></small><br/>
                <small id="selectInfoBody" class="mg-bold">----</small>
                <div id="infoKeywords"><small id="infoIntroSelectedKeywords">Keywords: </small><br><small id="infoSelectedKeywords" class="mg-bold">----</small></div>
                <div id="infoLabel" style="background-color: aliceblue" class="mg-text-center"><small></small></div>

                <br/>
                <button id="btnKeywords" type="button" class="btn btn-sm btn-primary mt-1">XX</button>&nbsp;
                <button id="btnZeroDay" type="button" class="btn btn-sm btn-primary mt-1">Nolldag</button>&nbsp;
                <br/>
                <div id="help" class="pt-4 pb-5 mg-hide-element">

                </div>
                <br/>
            </div>

            <div class="std">

                <div id="editorDiv">
                    <textarea id="editor" cols="80" rows="40"></textarea>
                </div>

                <div>
                    <button id="btnEdit" type="button" class="btn btn-sm btn-primary mg-top">XX</button>&nbsp;
                    <button id="btnCancel" type="button" class="btn btn-sm btn-secondary mg-top">YCY</button>&nbsp;
                    <button id="btnStatus" type="button" class="btn btn-sm btn-primary mg-top">YY</button>&nbsp;
                    <button id="btnDelete" type="button" class="btn btn-sm btn-danger mg-top">YY</button>&nbsp;
                </div>
                <hr>
            </div>
        </div>
    </div>


    <div id="modalDeleteConfirm" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="modalDeleteConfirmHeader" class="edit-title">xxxx</h5>
                    <button type="button" class="close" id="btnModalDeleteConfirmX" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="modalDeleteWhat">TEST här</p>
                </div>
                <div class="modal-footer">
                    <button id="btnModalDeleteNo" type="button" class="btn btn-secondary" data-dismiss="modal">xxxx</button>
                    <button id="btnModalDeleteYes" class="btn btn-primary">xxxx</button>
                </div>
            </div>
        </div>
    </div>


    <div id="modalZeroDay" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="modalZeroDayHeader" class="edit-title">Zero day</h5>
                    <button type="button" class="close" id="btnModalZeroDayX" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div>
                        <p id="modalZeroDayIntroText"></p>
                    </div>
                    <div id="modalZeroDayCheckBoxes">
                        <form id="zeroDayForm">

                        </form>
                    </div>

                    <div class="text-danger"><small id="selectedXXXWarningText"></small></div>
                    <br/>

                </div>
                <div class="modal-footer">
                    <button id="btnModalZeroDayCancel" type="button" class="btn btn-secondary" data-dismiss="modal">xxxx</button>
                    <button id="btnModalZeroDaySave" class="btn btn-primary">xxxx</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalKeywords" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="modalKeyWordsHeader" class="edit-title">xxxx</h5>
                    <button type="button" class="close" id="btnModalKeywordsX" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                <div id="keywordDropDown">
                    <label id="lblKeywords" for="slctKeywords" >xxxx</label><br>
                    <select id="slctKeywords" class="form-select" style="width: 75%">
                        //
                    </select>

                    <div class="text-danger"><small id="selectedKeywordsWarningText"></small></div>
                    <div>
                        <ul id="selectedBlogKeywords" class="mgUlInline">

                        </ul>
                    </div>
                    <br/>
                </div>


                </div>
                <div class="modal-footer">
                    <button id="btnModalKeyWordsCancel" type="button" class="btn btn-secondary" data-dismiss="modal">xxxx</button>
                    <button id="btnModalKeyWordsSave" class="btn btn-primary">xxxx</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalSignature" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="modalSignatureHeader" class="edit-title">xxxx</h5>
                    <button type="button" class="close" id="btnModalSignatureX" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <label id="lblSignatures" for="ddSignatures">xxxx</label>
                    <select id="ddSignatures" class="form-select" style="width: 75%">
                        //
                    </select>
                    <div class="text-danger"><small id="selectedSignaturesWarningText"></small></div>
                    <div>
                        <ul id="selectedSignatures" class="mgUlInline">

                        </ul>
                    </div>
                    <br/>

                </div>
                <div class="modal-footer">
                    <button id="btnModalSignaturesCancel" type="button" class="btn btn-secondary" data-dismiss="modal">xxxx</button>
                    <button id="btnModalSignaturesSave" class="btn btn-primary">xxxx</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalPublish" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 id="modalPublishHeader" class="edit-title">xxxx</h5>
                    <button type="button" id="btnModalPublishX" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <p id="publishWhat">Text here...</p>
                    <div id="shareSection">
                        <input id="cbShare" type="checkbox" name="published">
                        <label id="lblShare" for="cbShare"></label>
                    </div>
                    <br/>

                </div>
                <div class="modal-footer">
                    <button id="btnModalPublishCancel" type="button" class="btn btn-secondary test">xxxx</button>
                    <button id="btnModalPublishSave" type="button" class="btn btn-primary">xxxx</button>
                </div>
            </div>
        </div>
    </div>

<?php
require $path . "/aahelpers/popUpImage.php";
?>



<?php echo getHTMLEndWithJS($pageMetaData->getJavaScriptSection());


