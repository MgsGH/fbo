<?php
session_start();
include_once "RingTexter.php";
include_once "RingmarkningMenu.php";
include_once "../aahelpers/PageMetaData.php";
include_once "../aahelpers/TopMenu.php";
include_once "../aahelpers/common-functions.php";
include_once "../aahelpers/db.php";


// Steers linked-in CSS and JS files
$pageMetaData = New PageMetaData('');
$pageMetaData->setAdditionalJavaScriptFiles('ringmarkningHeader.js');
$pageMetaData->setAdditionalJavaScriptFiles('aterfynd.js');
$pageMetaData->setJquery(true);
$pageMetaData->setBootstrapFyra(true);
$pageMetaData->setJQueryUI(true);
$pageMetaData->setMultiSelect(true);
$pageMetaData->setSelect2(true);
$pageMetaData->setLeafLet(true);

//footer info
$introText = ' ';
$updatedDate = '2021-12-03';
$updatedBy = ' ';

$pdo = getDataPDO();

$language = getRequestLanguage();
$langAsNo = 2;
if (isset($_GET['lang'])){
    if ($_GET['lang'] === 'en'){
        $langAsNo = 1;
    }
}

$texts = new RingTexter($language);

$arterData = getRingedAndRecoveredTaxa($pdo, $langAsNo);

//
$defaultArt = 'BLMES';
$selectedArt = getSessionThenRequestLastDefaultValue('art', $defaultArt);
if (!selectedTaxaAmongArterData($selectedArt, $arterData)){
    $selectedArt = $defaultArt;
}

$defaultYear = getCurrentYear()-1;
$selectYear = getSessionThenRequestLastDefaultValue('year', $defaultYear);
$startYear = 1947;
$dropDownRingingYears = getDropDownYears($startYear);

$pageMenu = New TopMenu($language);
$pageMenu->setMarkningSelected();

$sectionMenu = new RingmarkningMenu($language);
$sectionMenu->setAterfyndSelected();

echo getHtmlHead('', $pageMetaData, $language);

?>

    <div class="basePage">

        <?php echo getBannerHTML('ringmvinjett.jpg'); ?>
        <?php echo $pageMenu->getHTML(); ?>
        <span id="lang" class="mg-hide-element"><?= $langAsNo ?></span>

        <div class="d-flex mt-2">

            <div>
                <?php echo $sectionMenu->getHTML(); ?>
            </div>

            <div class="container">
                <h2 id="mainHeader"><?= $texts->getTxt('aterfynd') ?></h2>
                <div class="control-panel pt-3 px-3 py-0 pb-3">

                    <div>
                        <div>
                            <label for="slcttaxa" id="labelSelectTaxa">V??lj en ringm??rkt (och ??terfunnen) art</label>
                            <select name="art" class="form-select js-example-basic-single" id="slcttaxa">
                                <?php
                                foreach ($arterData as $art){
                                    echo getDropDownOption($art['NAME'], $art['SHORTNAME'], $selectedArt);
                                }
                                ?>
                            </select>
                        </div>
                        <div class="pt-2">
                            <span id="labelFilter">Filtrera data ytterligare</span>
                        </div>

                    </div>

                    <div>
                        <div class="d-flex">
                            <div class="card">
                                <div class="card-header">
                                    <strong id="cardHeaderRinged">M??rkdata</strong>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="mr-2">
                                            <label for="slctRingingYears" id="labelRingedYears">??r</label><br/>
                                            <select name="year" class="select" multiple="multiple" id="slctRingingYears">
                                                <?php
                                                echo getDropDownOption($texts->getTxt('alla-ar'), 'alla', $selectYear);
                                                foreach ($dropDownRingingYears as $year){
                                                    $txt = $year;
                                                    echo getDropDownOption($txt, $year, $selectYear);
                                                }
                                                ?>
                                            </select>
                                        </div>
                                        <div class="ml-2">
                                            <label for="slctRingingMonths" id="labelRingedMonths">M??nad</label><br/>
                                            <select name="months" multiple="multiple" class="select" id="slctRingingMonths">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="pt-3">
                                        <label for="slctage" id="labelRingedAge">??lder</label><br/>
                                        <select class="select" multiple="multiple" id="slctage">
                                        </select>
                                    </div>
                                    <div id="sexDropDownSection" class="pt-3">
                                        <label for="slctsex" id="labelRingedSex">K??n (om arten till??ter detta)</label><br/>
                                        <select class="select" multiple="multiple" id="slctsex">
                                            <option value="1">Hanarx</option>
                                            <option value="2">Honorx</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="card ml-3">
                                <div class="card-header">
                                    <strong id="cardHeaderRecoveries">??terfyndsdata</strong>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="mr-2">
                                            <label for="slctRecoveryYears" id="labelRecoveriesYears">??r</label><br/>
                                            <select name="recoveryYears" class="form-select" multiple="multiple" id="slctRecoveryYears">
                                            </select>
                                        </div>
                                        <div class="ml-2">
                                            <label for="slctRecoveryMonths" id="labelRecoveriesMonths">M??nad</label><br/>
                                            <select name="recoveryMonths" multiple="multiple" class="select" id="slctRecoveryMonths">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="Xmt-2">

                                        <div class="mgFull mt-3">
                                            <label for="inputTime" id="labelInputTime">Tidsintervall:</label>
                                            <input type="text" id="inputTime" readonly style="border:0; color:#2333e7; ">
                                            <div id="sliderTime"></div>
                                        </div>

                                        <div class="row">
                                            <div class="col-6 text-left">
                                                <small id="sliderTimeMinValue">0</small>
                                            </div>
                                            <div class="col-6 text-right">
                                                <small id="sliderTimeMaxValue">max</small>
                                            </div>
                                        </div>

                                        <div class="mgFull mt-3">
                                            <label for="inputDistance" id="labelInputDistance">Avst??ndsintervall:</label>
                                            <input type="text" id="inputDistance" readonly style="border:0; color:#2333e7; ">
                                            <div id="sliderDistance"></div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6 text-left">
                                                <small id="sliderDistanceMinValue">0</small>
                                            </div>

                                            <div class="col-6 text-right">
                                                <small id="sliderDistanceMaxValue">max</small>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <br/>
                </div>
                <div id="datatabs">
                    <div class="pb-3">
                        <ul>
                            <li><a href="#dataMeta"><span id="tabHeaderSummary">Sammanst??llning</span></a></li>
                            <li id="tabMap"><a href="#dataMap"><span id="tabHeaderMap">Karta</span></a></li>
                            <li><a href="#dataList"><span id="tabHeaderList">Lista</span></a></li>
                            <li><a href="#dataInfo"><span id="tabHeaderGoodToKnow">Bra att veta</span></a></li>
                        </ul>
                    </div>
                    <div id="dataList">
                        <div id="areaList">
                            <table class="table striped">
                                <thead>
                                    <tr>
                                        <th id="tabListRingingData">M??rkdata</th>
                                        <th id="tabListRecoveryData">??terfyndsdata</th>
                                    </tr>
                                </thead>
                                <tbody id="tableRecoveries">

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div id="dataMeta">
                        <div id="areaMeta" class="d-flex">
                            <div>
                                <h5 id="dataMetaHeader">Xxxx</h5>
                                <p><strong><span id="taxonGrandTotal">Totalt</span></strong><br/>
                                    <span id="rmTot">999</span><span id="taxonGrandTotalOne"> ringm??rkta, av dessa ??r </span><span id="totRecoveries">XX</span> (<span id="rmProcent">x</span>% )<span id="taxonGrandTotalTwo"> ??terfunna (inkl lokala fynd) </span><br/>
                                </p>
                                <strong><span id="filteringHeader">Efter filtering enligt ovan</span></strong><br/>
                                <span id="rmFilterTot">65</span> (<span id="rmFilterProcent">x</span>% )<span id="filteringSuffix"> ??terfynd.</span><br/>
                            </div>

                        </div>
                        <div class="d-flex pt-4">
                            <div class="pr-2">
                                <strong><span id="distanceListHeader">Mest l??ngv??ga fynd</span></strong>
                                <p id="avstandsLista"></p>
                            </div>
                            <div class="pl-2">
                                <div class="pr-2">
                                    <strong><span id="timeListHeader">St??rsta tidsintervall</span></strong>
                                    <p id="tidsLista"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="dataMap">
                        <div id="rmap" style="height: 600px"></div>
                    </div>

                    <div id="dataInfo">

                        <strong>Artlistan</strong>
                        <p>Listan inneh??ller endast de arter/raser som har givit (minst ett) ??terfynd av f??glar m??rkta vid Falsterbo.</p>

                        <p>F??glar som ringm??rkts p?? andra platser och kontrollerats vid Falsterbo ing??r t.v. inte. Inte heller kontroller av egna m??rkningar.</p>

                        <p>F??r sm??f??glar ??r ??terfyndsandelen mycket l??g, ofta bara n??gon enstaka procent. Varje urval minskar antalet fynd som visas och kan allts?? till slut resultera i att inga fynd visas.</p>

                        <strong>??lder vid m??rktillf??llet</strong>
                        <p>Majoriteten av sm??f??glarna ??r m??rkta som flygga ??rsungar. Vadare och st??rre f??glar inneh??ller en st??rre andel fynd av f??glar m??rkta som adulta. Boungem??rkning i st??rre skala har utf??rts p?? m??sar, t??rnor, bl??mes, talgoxe och stare samt i mindre omfattning p?? tornfalk, kattuggla, r??dstj??rt och svartvit flugsnappare.</p>
                        <p>Endast de ??ldrar som ??r registrerade f??r vald art och de f??glar som ??terfunnits visas bland ??ldersvalen. </p>

                        <strong>K??n</strong>
                        <p>K??nsurval visas endast d?? arten ??tminstone i vissa dr??kter/??ldrar kan k??nsbest??mmas.</p>

                        <strong>Tidsperiod</strong>
                        <p>Endast ??r och m??nader d?? vald art har f??ngats (och senare ??terfunnits) visas i tidsurvalet i sektionen m??rkdata. Detsamma g??ller ??terfyndsdata, endast ??r och m??nader d?? en ringm??rkt f??gel har p??tr??ffats visas.</p>
                        <p>Det ??r inte ovanligt att datum f??r p??tr??ffande ??r oklart. Dessa fynd filteras inte med hj??lp av tids reglaget, d?? vi inte vet hur l??ng tid som har f??rflutit sedan m??rkningen. </p>

                        <strong>Avst??nd</strong>
                        <p>P?? kartorna visas alla fynd som gjorts f??r vald art.</p>

                        <strong>F??rfluten tid</strong>
                        <p>Genom att begr??nsa tidavst??ndet mellan m??rk- och fynddatum kan man t.ex. v??lja ut fynd under samma s??song. Observera att f??rfluten tid inte alltid ??r samma sak som f??gelns ??lder.</p>

                        <strong>Kartorna</strong>
                        <p>F??rdelningen av fynd p?? kartorna visar i grova drag f??glarnas flyttningsv??gar, h??cknings- eller ??vervintringsomr??den. Man m??ste dock t??nka p?? att f??rdelningen i h??g grad ??ven ??r relaterad till m??nsklig n??rvaro och m??nskliga aktiviteter (t.ex. jakt, ringm??rkning).</p>
                    </div>
                </div>
            </div>

        </div>

        <?php echo getFormattedPageFooter($introText, $updatedDate, $updatedBy ); ?>
    </div>

<?php echo getHTMLEndWithJS($pageMetaData->getJavaScriptSection());