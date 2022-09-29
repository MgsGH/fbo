$(document).ready(function(){

    /*
    All days (up to today) are selectable in the ui. All on-season days should have a blog entry (but not necessarily a free text).
    On-season days with no activity(ies), must be activated as a "zero day", so we can handle missing data gracefully.

    Off-season days may, or may not have a blog entry.

    Certain data is common between the day blog entries in different languages; Zero day, keywords.

    The blog base record is created when:
    * the first blog entry (in a language) is created;
    * the date is tagged as a zero-day;
    * keywords are created for the day;

    handleDateOrLanguageChange() is fundamental at approximately 760. It is called after selecting a date or changing language.

    There are quite a few modals called in this module
    1 - Zero Day
    2 - Keywords for the blog;
    3 - Publish the day
    4 - Pick-up signatures
    5 - Add photo to the blog entry
    6 - Publish
    7 - Remove blog entry (confirmation)

    Selecting a day in the calendar start everything @ line 590 - handleDateOrLanguageChange()

     */

    let v = {};

    v.currentModule = '2';

    v.language = {
        current : $('#langAsNo').text(),
        editing : '0'
    };


    
    v.loggedinUserId = $('#coolLevel').text();
    v.ongoingActivity = 'idle';       // default until edit is pressed
    v.selectedDate = {};

    v.blog = {
        entries : [],
        currentId : '0',
        entryExistsForSelectedDateAndLanguage : false,
    }
    
    v.editorSection = {
        theEditor : $('#editor'),
        ui : {
            btnEdit : $('#btnEdit'),
            btnStatus : $('#btnStatus'),
            btnCancel : $('#btnCancel'),
            btnDelete : $('#btnDelete'),
            btnKeywords : $('#btnKeywords')
        }
    }


    // control panel elements
    v.controlPanel = {
        ui : {
            selectedIntro : $('#selectedIntro'),
            selectedLanguageInfo : $('#selLanguage'),
            infoIntroSelectedKeywords : $('#infoIntroSelectedKeywords'),
            infoSelectedKeywords : $('#infoSelectedKeywords'),
            ddLanguage : $('#ddLanguage'),
            theDatePicker : $('#datepicker'),
            selectedDateInfo : $('#selDate'),
            selectInfoBody : $('#selectInfoBody'),
            selectInfoHeader : $('#selectInfoHeader'),
            btnZeroDay : $('#btnZeroDay'),
            help : $('#help'),
        }

    }


    v.modalPublish = {
        ui : {
            window : $('#modalPublish'),
            lblShare : $('#lblShare'),
            shareSection : $('#shareSection'),
            publishWhat : $('#publishWhat'),
            publishHeader : $('#modalPublishHeader'),
            btnModalPublishX : $('#btnModalPublishX'),
            btnYes : $('#btnModalPublishSave'),
            btnNo : $('#btnModalPublishCancel'),
        }
    }

    v.modalDelete = {
        ui : {
            window : $('#modalDeleteConfirm'),
            btnYes : $('#btnModalDeleteYes'),
            btnNo : $('#btnModalDeleteNo'),
            btnModalDeleteConfirmX : $('#btnModalDeleteConfirmX'),
        }
    }

    v.modalKeywords = {

        ui : {
            window : $('#modalKeywords'),
            selectedKeywords : $('#selectedBlogKeywords'),
            lblKeywords : $('#lblKeywords'),
            ddKeywords : $('#slctKeywords'),
            btnCancel : $('#btnModalKeyWordsCancel'),
            btnModalKeywordsX : $('#btnModalKeywordsX'),
            btnSave : $('#btnModalKeyWordsSave')
        }
    };

    v.modalZeroDay = {
        ui : {
            window : $('#modalZeroDay'),
            modalZeroDayHeader : $('#modalZeroDayHeader'),
            btnModalZeroDayX : $('#btnModalZeroDayX'),
            btnCancel : $('#btnModalZeroDayCancel'),
            btnSave : $('#btnModalZeroDaySave'),
            modalZeroDayIntroText : $('#modalZeroDayIntroText'),
            modalZeroDayCheckBoxes : $('#zeroDayForm'),
        }
    };

    v.modalSignature = {

        ui : {
            window : $('#modalSignature'),
            modalSignatureHeader : $('#modalSignatureHeader'),
            selectedSignatures : $('#selectedSignatures'),
            lblSignatures : $('#lblSignatures'),
            ddSignatures : $('#ddSignatures'),
            btnModalSignatureX : $('#btnModalSignatureX'),
            btnCancel : $('#btnModalSignaturesCancel'),
            btnSave : $('#btnModalSignaturesSave')
        }
    };


    v.editorSection.theEditor = new Jodit('#editor', {
        extraButtons: [ {
            name : 'mgcamera',
            iconURL: '../../aahelpers/img/editor/camerax.png',
            tooltip: 'Upload and insert image from disk (memory card/camera)',
            exec: function (editor) {
                newImage(editor);
            }
        },
            {
                name : 'mgstrack',
                iconURL: '../../aahelpers/img/editor/bins.png',
                tooltip: 'Get Nabben data for this day',
                exec: function (/*editor*/) {
                    alert('Retrieve data for Nabben - Work flow not clear');
                }
            },
            {
                name : 'mgringing',
                iconURL: '../../aahelpers/img/editor/ring.png',
                tooltip: 'Get ringing data for this day',
                exec: function (/*editor*/) {
                    alert('Retrieve ringing data for this day - Workflow not yet ready');
                }
            },
            {
                name : 'mgsignatures',
                iconURL: '../../aahelpers/img/editor/dummy.png',
                tooltip: 'Insert signature(s)',
                exec: function (editor) {
                    insertSignatures(editor);
                }
            }
        ],
    });


    function setEditingTexts(sLanguage){

        // E N G E L S K A
        if (sLanguage === '1') {

            v.controlPanel.editinglang = {

                initialPrompt : 'Create an entry for selected day in English',

                months : [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                dateSuffixes : [
                    ' of',
                    'st',
                    'nd',
                    'rd',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'st',
                    'nd',
                    'rd',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'th',
                    'st',
                ],
                weekdays : [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ]

            }

        }

        // S V E N S K A
        if (sLanguage === '2') {

            v.controlPanel.editinglang = {

                initialPrompt : 'Skapa ett inlägg för vald dag på Svenska',

                months : [
                    'januari',
                    'februari',
                    'mars',
                    'april',
                    'maj',
                    'juni',
                    'Juli',
                    'augusti',
                    'september',
                    'oktober',
                    'november',
                    'december'
                ],
                dateSuffixes : [
                    '',
                    ':a',
                    ':a',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':a',
                    ':a',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':e',
                    ':a',
                ],
                weekdays : [
                    'söndag',
                    'måndag',
                    'tisdag',
                    'onsdag',
                    'torsdag',
                    'fredag',
                    'lördag'
                ]

            }


        }

    }


    function setLangTexts(){

        v.language.dateTexts = getDateTexts(v.language.current);

        // E N G E L S K A
        if (v.language.current === '1'){

            v.language.title = 'News';
            v.language.hdrMain = v.language.title;
            v.language.loggedinText = 'Logged in as ';
            v.language.logOutHere = 'Log out here';

            v.language.langAsString = 'en';


            v.editorSection.language = {

                editPublishedDisclaimer : "If you request to edit a published blog entry, it will be automatically de-published. Once you ready with the editing, you will have to publish it again.",

                calendarDisabledMessage : ', unpublished (hidden from viewing)',
                published : ', published ',

                // buttons
                btnStatusUnPublish : 'Open the day for editing',
                btnEditDefault : 'Create entry',
                btnEditEdit : 'Edit the day',
                btnEditSave : 'Save',
                btnStatusDefault : 'Publish',
                btnCancel : 'Cancel',
                btnDelete : 'Delete',
                btnKeywords : "Keywords"

            };


            v.controlPanel.language = {
                selectInfoHeader : 'Status',
                selectedIntro : 'Selected language and date: ',
                infoIntroSelectedKeywords : 'Keywords: ',
                pending : ', pending publishing ',
                published : ', published ',
                lastChangedBy : 'Last changed ',
                by : ' by ',
                noDataThisDate : "No entries in any language.",
                zeroDayTitleEnabled : "Click here to set no activities carried out today",
                zeroDayTitleDisabled : "Off season day today. Not possible to set no activities carried out",
                noKeywordsSelected : "No keywords selected",
            }


            v.modalDelete.language = {
                in : ' in ',
                ja : "Yes",
                nej : "No",
                deletePrompt : "Remove entry?"
            }


            v.modalPublish.language = {
                ja : "Yes",
                nej : "No",
                in : " in ",
                lblShare : "Share through Facebook? (*not yet operational!*)",
                publishHeader : "Publish?",
                publishHeaderUnPublish : "Open the day for editing?"
            }

            v.modalSignature.language = {
                btnSave : 'Save',
                btnCancel : 'Cancel',
                modalSignatureHeader : 'Add signature(s)',
                lblSignatures : "Available persons with signature",
                ddTaxaNoValue : "--Select a person (signature)--"
            }

            v.modalKeywords.language = {
                btnSave : 'Save',
                btnCancel : 'Cancel',
                ddKeywordsNoValue : "--Select keywords here--",
                keyWordHeader : 'Manage keywords for ',
                lblKeywords : 'Available keywords'
            }

            v.modalZeroDay.language = {
                modalZeroDayHeader : 'Zero Day',
                modalZeroDayIntroText : 'Kindly update status for activities scheduled to be carried out today',
                modalZeroCommentLabel : 'Comment',
                modalZeroWarning : 'You have to give a reason',
            }

        }

        // S V E N S K A
        if (v.language.current === '2'){

            v.language.title = 'Nyheter';
            v.language.hdrMain = v.language.title;
            v.language.loggedinText = 'Inloggad som ';
            v.language.logOutHere = 'Logga ut här';

            v.language.langAsString = 'se';


            v.editorSection.language = {

                editPublishedDisclaimer : "Om du väljer att editera (ändra) ett redan publicerat blog inlägg, tas det automatisk bort från visning på webbsajten. När du är färdig med dina ändringar, får du publicera inlägget ånyo.",

                calendarDisabledMessage : ', opublicerad (gömd från visning)',
                published : ', publicerad',
                editQuestion : "Vill du fortsätta (du tappar dina ändringar)?",

                // buttons
                btnStatusUnPublish : 'Opublicera',
                btnEditDefault : 'Skapa dagboksblad',
                btnEditEdit : 'Editera texten',
                btnEditSave : 'Spara',
                btnStatusDefault : 'Publicera',
                btnCancel : 'Avbryt',
                btnDelete : 'Tag bort',
                btnKeywords : "Nyckelord"

            };


            v.modalKeywords.language = {
                btnSave : 'Spara',
                btnCancel : 'Avbryt',
                ddKeywordsNoValue : "--välj ett nyckelord--",
                keyWordHeader : 'Hantera nyckelord för ',
                lblKeywords : 'Tillgängliga nyckelord',
                laguageDropDownDisabledMessage : "Du editerar en dag. För att välja ett nytt språk måste du först trycka Spara eller Avbryt nedan."

            }


            v.modalSignature.language = {
                btnSave : 'Spara',
                btnCancel : 'Avbryt',
                modalSignatureHeader : 'Lägg till signatur',
                lblSignatures : "Tillgängliga personer med signatur",
                ddTaxaNoValue : "--Välj en person (signatur)--"
            }


            v.controlPanel.language = {
                selectInfoHeader : 'Språk, status, senast ändrad, av vem',
                selectedIntro : 'Valt språk och datum: ',
                infoIntroSelectedKeywords : 'Nyckelord: ',
                pending : 'påbörjad',
                published : 'publicerad',
                lastChangedBy : 'Senast ändrad ',
                by : ' av ',
                noDataThisDate : "Inga dagboksblad på något språk.",
                zeroDayTitleEnabled : "Klicka här för att sätta att schemaladga aktiviteter inte har utförts.",
                zeroDayTitleDisabled : 'Denna dag är utanför schemalagda säsonger. Det är därför inte möjlig att sätta denna dag som en "nolldag"',
                noKeywordsSelected : "Inga valda nyckelord",

            }


            v.modalDelete.language = {
                in : ' på ',
                ja : "Ja",
                nej : "Nej",
                deletePrompt : "Tag bort dagboksblad?"
            }


            v.modalZeroDay.language = {
                modalZeroDayHeader : 'Nolldag',
                modalZeroDayIntroText : 'Uppdatera status för dagens schemalagda aktiviteter',
                modalZeroCommentLabel : 'Kommentar',
                modalZeroWarning : 'Vänligen ange en anledning',
            }


            v.modalPublish.language = {
                ja : "Ja",
                nej : "Nej",
                in : " på ",
                lblShare : "Dela via Facebook? (*Inte gjord ännu*)",
                publishHeader : "Publicera?",
                publishHeaderUnPublish : "Opublicera dagen (dölj från visning på sajten)?"
            }

        }


        $(document).attr('title', v.language.title);
        $("html").attr("lang", v.language.langAsString);
        $('#loggedinText').text(v.language.loggedinText);
        $('#hdrMain').text(v.language.hdrMain);

        v.controlPanel.ui.selectInfoHeader.text(v.controlPanel.language.selectInfoHeader);
        v.controlPanel.ui.infoIntroSelectedKeywords.text(v.controlPanel.language.infoIntroSelectedKeywords);
        v.controlPanel.ui.selectedIntro.text(v.controlPanel.language.selectedIntro);

        v.editorSection.ui.btnCancel.text(v.editorSection.language.btnCancel);
        v.editorSection.ui.btnDelete.text(v.editorSection.language.btnDelete);
        v.editorSection.ui.btnStatus.text(v.editorSection.language.btnStatusDefault);
        v.editorSection.ui.btnEdit.text(v.editorSection.language.btnEditDefault);
        v.editorSection.ui.btnKeywords.text(v.editorSection.language.btnKeywords);

        v.modalKeywords.ui.btnCancel.text(v.modalKeywords.language.btnCancel);
        v.modalKeywords.ui.btnSave.text(v.modalKeywords.language.btnSave);

        v.modalPublish.ui.btnNo.text(v.modalPublish.language.nej);
        v.modalPublish.ui.btnYes.text(v.modalPublish.language.ja);
        v.modalPublish.ui.lblShare.text(v.modalPublish.language.lblShare);

        v.modalSignature.ui.btnCancel.text(v.modalSignature.language.btnCancel);
        v.modalSignature.ui.modalSignatureHeader.text(v.modalSignature.language.modalSignatureHeader);
        v.modalSignature.ui.btnSave.text(v.modalSignature.language.btnSave);
        v.modalSignature.ui.lblSignatures.text(v.modalSignature.language.lblSignatures);


        v.modalZeroDay.ui.modalZeroDayIntroText.html(v.modalZeroDay.language.modalZeroDayIntroText);


        if (v.loggedinUserId !== '0'){
            let loggedInInfo = '<a href="/v/loggedout/index.php" class="mg-hdrLink">' +  ' ' + v.language.logOutHere + '</a>';
            $('#loggedStatus').html(loggedInInfo);
        }

    }


    // Load all blog entries
    // Set up the datepicker and define its behaviour, including high-lighting of cells
    function loadBlogEntries(){
        // get dates with blog entries, for populating the calender
        $.ajax({
            type:"GET",
            async: false,
            url: "getBlogDates.php",
            success: function(data) {

                v.controlPanel.dagBoksDates = JSON.parse(data);

                v.controlPanel.ui.theDatePicker.datepicker({
                    changeMonth: true,
                    changeYear: true,
                    firstDay: 1, // Start with Monday
                    yearRange: "1959:+0", //
                    maxDate: 0,
                    dateFormat: 'yy-mm-dd',

                    beforeShowDay: function(d) {

                        let returnVal = [true,"",""];

                        if (isDatePresent(getDateAsYMDString(d), v.controlPanel.dagBoksDates)) {
                            returnVal = [true, "highlight",""];
                        }

                        if (v.controlPanel.ui.theDatePicker.datepicker( "isDisabled" )){
                            returnVal = [true,"", v.language.calendarDisabledMessage];
                        }

                        return returnVal;
                    },


                    onSelect : function() {
                        handleDateOrLanguageChange();
                    }

                });

            }
        });
    }


    function handleDateOrLanguageChange(){

        // handle language change
        setEditingTexts(v.language.editing);

        v.selectedDate.ymd = v.controlPanel.ui.theDatePicker.datepicker("option", "dateFormat", "yy-mm-dd" ).val();

        v.selectedDate.humanReadable = getFormattedDate(v.selectedDate.ymd, v);

        // inform the user about current selections, left hand side below calendar
        v.controlPanel.ui.selectedDateInfo.html(v.selectedDate.humanReadable);
        v.controlPanel.ui.selectedLanguageInfo.html($( "#ddLanguage option:selected" ).text());

        let offSeasonDay = ! getAnySystematicActivitiesToday();

        v.controlPanel.ui.btnZeroDay.attr('title', v.controlPanel.language.zeroDayTitleEnabled);
        v.controlPanel.ui.btnZeroDay.attr('disabled', false);
        if (offSeasonDay){
            // No systematic activities today, disable zero day button and inform user
            v.controlPanel.ui.btnZeroDay.attr('disabled', true);
            v.controlPanel.ui.btnZeroDay.attr('title', v.controlPanel.language.zeroDayTitleDisabled);
        }


        defaultUserInterface();

        tryLoadExistingData();
        updateUserInterface();

    }


    // Only date change trigger a *complete* data refresh - this is ignored here.
    // When changing language, the date is already selected, which steers overall data retrieval
    function tryLoadExistingData(){
        
        v.editorSection.currentRecord = null;
        v.blog.currentId = '0';
        v.blog.entries = [];
        v.blog.entryExistsForSelectedDateAndLanguage = false;

        // We may, or may not, already have a blog entry for this page in *some* language.
        // get data for this date
        $.ajax({
            type: "GET",
            async: false,
            url: "getBlogAndBlogEntriesForDate.php?d=" + v.selectedDate.ymd,
            success: function(data) {

                const tmp = JSON.parse(data);  // array[2]. array-0 : blog record data, array-1 : blog entries. Empty arrays returned if no data.

                if (tmp[0].length > 0){
                    const t = tmp[0][0];
                    v.blog.currentId = t.ID;
                }

                // if we have any data, in any language - create summary section
                if ( tmp[1].length > 0){
                    v.blog.entries = tmp[1];
                }

                // Create the status summary section
                createBlogDaySummary();
                updateKeywordInformation();

                // getExistingData in selected editing language - if present - populate the editor
                v.editorSection.currentRecord = getDataRecord();

                if (v.editorSection.currentRecord !== null) {
                    v.blog.entryExistsForSelectedDateAndLanguage = true;
                    v.editorSection.theEditor.setEditorValue(v.editorSection.currentRecord['TEXT']);
                } else {
                    v.editorSection.theEditor.setEditorValue(v.controlPanel.editinglang.initialPrompt);
                }

            }
        });

    }


    function updateKeywordInformation(){

        v.controlPanel.ui.infoSelectedKeywords.text(v.controlPanel.language.noKeywordsSelected);

        if (v.blog.currentId !== '0') {
            let enteredKeywords = '';
            // load previously added keywords (if any)
            $.ajax({
                type:"get",
                url: "getKeywordsForBlog.php?id=" + v.blog.currentId + "&lang=" + v.language.current,
                success: function(data) {

                    v.blog.keywords = JSON.parse(data);
                    if (v.blog.keywords.length > 0){
                        $.each(v.blog.keywords, function(index, value) {
                            enteredKeywords = enteredKeywords + value.TEXT + ', ';
                        });

                        v.controlPanel.ui.infoSelectedKeywords.text(enteredKeywords.substring(0, enteredKeywords.length-2));

                    }

                }
            });
        }

    }


    function getAnySystematicActivitiesToday(){

        // For any day, we need to know if any systematic activities were scheduled, and if we actually did these systematic (scheduled) activities.
        // During seasons, the blog will show "data for activity x not entered yet" until we tell the system we didn't carry out any work this date (for this activity).
        // If we have systematic activities scheduled this day - we show the "Zero day" button, the option to state "no activities".

        const monthDay = v.selectedDate.ymd.substring(5, 10);

        let answer = false;
        const l =  v.standardSeasons.length;
        for (let i = 0; i < l; i++ ){

            const fom = v.standardSeasons[i].STARTDUMMYDATE.substring(5);
            const tom = v.standardSeasons[i].ENDDUMMYDATE.substring(5);

            if ((monthDay >= fom) && (monthDay <= tom)){
                answer = true;
                break;
            }

        }

        return answer;

    }


    function defaultUserInterface(){

        // default all ui components
        v.controlPanel.ui.ddLanguage.prop('disabled', false);
        v.controlPanel.ui.ddLanguage.attr('title', "");
        v.controlPanel.ui.theDatePicker.datepicker( "option", "disabled", false );
        v.controlPanel.ui.theDatePicker.attr('title', "");
        v.editorSection.theEditor.setReadOnly(true);

        v.editorSection.ui.btnKeywords.attr('disabled', false);

        v.editorSection.ui.btnEdit.text(v.editorSection.language.btnEditDefault);
        v.editorSection.ui.btnEdit.attr('disabled', false);

        v.editorSection.ui.btnCancel.attr('disabled', true);

        v.editorSection.ui.btnStatus.text(v.editorSection.language.btnStatusDefault);
        v.editorSection.ui.btnStatus.attr('disabled', true);

        v.editorSection.ui.btnDelete.attr('disabled', true);

        $(window).unbind('beforeunload');


    }


    function updateUserInterface(){

        if (v.ongoingActivity === 'editing') {
            // we have decided to edit - it changes settings that differ from "default"
            setUserInterfaceEditing();
        }

        if (v.ongoingActivity === 'idle') {

            // we have just selected date/language - but not yet initiated editing
            // or we have saved something.
            if (v.blog.entryExistsForSelectedDateAndLanguage){

                // we have a text since before in selected language

                // publishing status can always be changed when we have a record at hand
                v.editorSection.ui.btnStatus.attr('disabled', false);
                v.editorSection.ui.btnEdit.text(v.editorSection.language.btnEditEdit);

                if (v.editorSection.currentRecord['PUBLISHED'] === '1') {

                    // Existing record in selected language is published
                    // so set status button text accordingly
                    v.editorSection.ui.btnStatus.text(v.editorSection.language.btnStatusUnPublish);

                }

                if (v.editorSection.currentRecord['PUBLISHED'] === '0') {

                    // record exist but not (yet) published
                    v.editorSection.ui.btnDelete.attr('disabled', false);
                    v.editorSection.ui.btnStatus.text(v.editorSection.language.btnStatusDefault);

                }

                v.editorSection.ui.btnEdit.text(v.editorSection.language.btnEditEdit);

            }

        }

    }


    // ---------------------------------------------------------- Language Drop down change --------------------------
    v.controlPanel.ui.ddLanguage.change(function() {

        v.language.editing = v.controlPanel.ui.ddLanguage.val();
        handleDateOrLanguageChange();

    });


    // ---------------------------------------------------------- Edit Blog ------------------------------------------
    v.editorSection.ui.btnEdit.on('click', function(){

        if (v.ongoingActivity === 'idle'){

            // We have just requested "edit/new"
            // figure out which one (the mode) it is

            if (v.blog.entryExistsForSelectedDateAndLanguage){

                v.mode = "edit";

                if (v.editorSection.currentRecord['PUBLISHED'] === '1'){

                    alert(v.editorSection.language.editPublishedDisclaimer);

                    let formData = new FormData;
                    formData.append('id' ,v.editorSection.currentRecord['BLOG_TEXT_ID']);
                    formData.append('status', '0');
                    formData.append('updater', v.loggedinUserId);

                    // update
                    $.ajax({
                        url: "changePublishingStatus.php",
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: formData,
                        type: 'POST',
                        success: function() {
                            createBlogDaySummary();
                        }
                    });

                }

            } else {
                v.mode = "new";
                v.editorSection.theEditor.value = '';
            }

            let text = v.editorSection.theEditor.value;
            v.editorSection.theEditor.execCommand('selectall');
            v.editorSection.theEditor.s.insertHTML(text);
            v.editorSection.theEditor.s.focus();
            v.ongoingActivity = 'editing';
            setUserInterfaceEditing();

        } else if (v.ongoingActivity === 'editing'){

            // We are editing, and we have pressed "save"
            // reset
            v.ongoingActivity = 'idle';

            // three cases
            // 1. write a brand-new entry for a day never written before
            // 2. write a translation of a present entry
            // 3. update an already present entry

            let formData = new FormData;
            formData.append('dateToWrite', v.selectedDate.ymd);
            formData.append('language', v.language.editing);
            formData.append('updater',  v.loggedinUserId);
            formData.append('content', v.editorSection.theEditor.value);

            // 1. nothing written for this day - yet
            if (v.blog.entries.length === 0) {

                let earlierDate = v.controlPanel.ui.theDatePicker.datepicker('getDate');

                $.ajax({
                    url: "writeBlogFirstEntry.php",
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: formData,
                    type: 'POST',
                    success: function()
                    {

                        // simulate, as when we enter the page at first.
                        // set selected date to earlier date
                        v.controlPanel.ui.theDatePicker.datepicker("setDate", earlierDate );

                        // simulate a change to set ui, data, etc.
                        handleDateOrLanguageChange();
                    }
                });

            }

            // 2. Day exists, but not in this language
            if ((v.blog.entries.length > 0) && (!v.blog.entryExistsForSelectedDateAndLanguage)) {

                formData.append('blogId', v.blog.currentId );

                let earlierDate = v.controlPanel.ui.theDatePicker.datepicker('getDate');

                // write translation
                $.ajax({
                    url: "writeBlogTranslation.php",
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: formData,
                    type: 'POST',
                    success: function()
                    {

                        // simulate, as when we enter the page at first.

                        // set selected date to earlier date
                        v.controlPanel.ui.theDatePicker.datepicker("setDate", earlierDate );

                        // simulate a change to set ui, data, etc.
                        handleDateOrLanguageChange();

                    }
                });

            }

            // 3. Update blog entry
            if  (v.blog.entryExistsForSelectedDateAndLanguage) {

                formData.append('id', v.editorSection.currentRecord['BLOG_TEXT_ID']);

                // update
                $.ajax({
                    url: "updateBlogEntry.php",
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: formData,
                    type: 'POST',
                    success: function()
                    {
                        // we simulate a change
                        handleDateOrLanguageChange();
                    }
                });

            }

        }

    });


    function newImage(editor){

        v.editorSection.cursorLocation = editor.s.save();

        const params = {
            mode : 'add',
            imageId : 0,
            languageId : getLanguageAsNo(),
            loggedInUserId : getLoggedInUserId(),
        }

        v.photoEditModal.openModal(params);

    }


    function insertSignatures(editor){

        v.editorSection.cursorLocation = editor.s.save();
        // clean previously added
        v.modalSignature.ui.selectedSignatures.empty();
        v.modalSignature.ui.ddSignatures.val('0');
        // default logged in user
        v.modalSignature.ui.selectedSignatures.append(v.loggedInUserSignature);
        v.modalSignature.ui.window.modal('show');

    }


    v.editorSection.ui.btnCancel.on('click', function(){
        // we simulate a change
        v.ongoingActivity = 'idle';
        handleDateOrLanguageChange();
    });


    v.editorSection.ui.btnDelete.on('click', function(){

        let s = v.selectedDate.humanReadable + ' ' + v.modalDelete.language.in + v.controlPanel.ui.ddLanguage.find('option:selected').text();
        v.modalDelete.ui.btnYes.text(v.modalDelete.language.ja);
        v.modalDelete.ui.btnNo.text(v.modalDelete.language.nej);
        $('#modalDeleteConfirmHeader').text(v.modalDelete.language.deletePrompt);
        $('#modalDeleteWhat').text(s);
        v.modalDelete.ui.window.modal('show');

    });


    v.editorSection.ui.btnKeywords.on('click', function(){

        v.modalKeywords.ui.btnSave.text(v.modalKeywords.language.btnSave);
        v.modalKeywords.ui.btnCancel.text(v.modalKeywords.language.btnCancel);
        v.modalKeywords.ui.lblKeywords.text(v.modalKeywords.language.lblKeywords);
        $('#modalKeyWordsHeader').text(v.modalKeywords.language.keyWordHeader + ' ' + v.selectedDate.humanReadable);

        // clean previously added
        v.modalKeywords.ui.selectedKeywords.empty();

        // load previously added key words (if any)
        $.each(v.blog.keywords, function(index, value) {
            v.modalKeywords.ui.selectedKeywords.append('<li class="mgLiInline" id="' + value.KEYWORD_ID + '">' + value.TEXT + '  <button type="button" class="btn btn-link itemSelected"><i class="fa fa-close"></i></button></li>');
        });

        v.modalKeywords.ui.window.modal('show');

    });


    v.controlPanel.ui.btnZeroDay.on('click', function(){

        v.modalZeroDay.ui.btnSave.text(v.modalKeywords.language.btnSave);
        v.modalZeroDay.ui.btnCancel.text(v.modalKeywords.language.btnCancel);
        v.modalZeroDay.ui.modalZeroDayHeader.text(v.modalZeroDay.language.modalZeroDayHeader + ' ' +  v.selectedDate.humanReadable);
        $('.warning').text('');

        // clean previously added
        v.modalZeroDay.ui.modalZeroDayCheckBoxes.empty();
        v.modalZeroDay.ui.modalZeroDayCheckBoxes.append('<div><br/><br/><img src="../../aahelpers/img/loading/ajax-loader.gif" alt="loading" class="mx-auto d-block"><br/><br/></div>');
        let zeroSeriesThisDate = [];
        // load previously status data (if any)
        $.ajax({
            type:"GET",
            url: "getZeroDayData.php?date=" + v.selectedDate.ymd,
            success: function(data) {
                zeroSeriesThisDate = JSON.parse(data);

                let boxes = '';
                $.each(v.standardSeasons, function(index, value) {

                    const testDate = '1000-' + v.selectedDate.ymd.substring(5);


                    if ((testDate >= value.STARTDUMMYDATE) && (testDate <= value.ENDDUMMYDATE)){
                        // Today's date is within the "season" span for this scheme. Populate the ui with controls for allowing
                        // the user to state "no activity".

                        // Check if we have data entered since before for this scheme/date.
                        const len = zeroSeriesThisDate.length;
                        let previousStatus = '0';
                        let previousText = '';

                        for (let i = 0; i < len; i++){
                            if (zeroSeriesThisDate[i].WORKSCHEME_ID === value.WORKSCHEME_ID){
                                previousStatus = zeroSeriesThisDate[i].STATUS;
                                previousText = zeroSeriesThisDate[i].TEXT;
                                break;
                            }
                        }

                        boxes += '<div class="mb-4" id="workSchemeId-' + value.WORKSCHEME_ID + '">';
                        boxes += '<div class="mb-2">';
                        boxes += '<label for="scales">' + value.TEXT +  '</label><br/>';
                        boxes += '<select class="form-select">';
                        let l = v.zeroDayStatuses.length;
                        for (let i = 0; i < l; i++) {
                            let option = "<option value='" + v.zeroDayStatuses[i].WDS_ID + "'>" + v.zeroDayStatuses[i].TEXT + "</option>";
                            if (v.zeroDayStatuses[i].WDS_ID === previousStatus){
                                option = '<option value="' + v.zeroDayStatuses[i].WDS_ID + '" selected>' + v.zeroDayStatuses[i].TEXT + '</option>';
                            }
                            boxes += option;
                        }

                        boxes += '</select>';
                        boxes += '</div>';
                        boxes += '<div class="mb-4">';
                        boxes += '<label for="comments">' + v.modalZeroDay.language.modalZeroCommentLabel +  '</label><br/>';
                        boxes += '<textarea name="comments" rows="2" cols="60">' + previousText + '</textarea><br/>';
                        boxes += '<div class="text-danger"><small class="warning"></small></div>';
                        boxes += '</div>';
                        boxes += '</div>';

                    }
                });

                v.modalZeroDay.ui.modalZeroDayCheckBoxes.empty();
                v.modalZeroDay.ui.modalZeroDayCheckBoxes.append(boxes);

                v.modalZeroDay.ui.window.modal('show');

            }
        });

    });


    v.modalKeywords.ui.btnSave.on('click', function(){

        let formData = new FormData;
        formData.append('keywordIds', getListOfMModalKeywordsSelectedKeywords());

        formData.append('blogId', v.blog.currentId);
        formData.append('userId', v.loggedinUserId);
        formData.append('currentBlogDate', v.selectedDate.ymd);

        $.ajax({
            url: "updateBlogKeyWords.php", // Creates the base record if not present
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            type: 'POST',
            success: function()
            {
                // we simulate a change
                updateKeywordInformation();
            }
        });

        v.modalKeywords.ui.window.modal('hide');

    });


    v.modalZeroDay.ui.btnSave.on('click', function(){

        $('.warning').text('');
        if (validateData()) {

            let workSchemeDays = getListOfZeroDayNoActivities();

            let values = {
                'blogId' : v.blog.currentId,
                'userId' : v.loggedinUserId,
                'date' : v.selectedDate.ymd,
                'zeroDays' : workSchemeDays
            };

            $.ajax({
                type: 'POST',
                url: "updateZeroDayData.php",
                data: values,
                success: function()
                {
                    // we simulate a change
                    updateKeywordInformation();
                }
            });

            v.modalZeroDay.ui.window.modal('hide');

        }


    });


    function validateData(){

        let ok = true;

        let blocks = $('div[id^="workSchemeId-"]');
        blocks.each(function( /* index*/ ) {

            let selectBox = $( this ).find('select');

            // save only "cancelled" or "no birds caught" "days" thus id 1 ignored
            if (selectBox.val() !== '1'){

                let textArea = $( this ).find('textarea');

                if (textArea.val().trim() === ''){
                    ok = false;
                    let warningText = $( this ).find('small');
                    warningText.text(v.modalZeroDay.language.modalZeroWarning);
                }

            }

        });

        return ok;

    }


    v.modalDelete.ui.btnYes.on('click', function(){

        v.modalDelete.ui.window.modal('hide');

        let earlierDate = v.controlPanel.ui.theDatePicker.datepicker('getDate');

        let formData = new FormData;
        formData.append('id', v.editorSection.currentRecord['dagboksbladstext_id']);
        formData.append('blogId', v.editorSection.currentRecord['dagboksblad_id']);

        $.ajax({
            url: "deleteBlogEntry.php",
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            type: 'POST',
            success: function()
            {

                // simulate, as when we enter the page at first.

                // set selected date to earlier date
                v.controlPanel.ui.theDatePicker.datepicker("setDate", earlierDate );

                // simulate a change to set ui, data, etc.
                handleDateOrLanguageChange();

            }
        });

    });


    v.editorSection.ui.btnStatus.on('click', function(){

        let s = v.selectedDate.humanReadable + ' ' + v.modalPublish.language.in + v.controlPanel.ui.ddLanguage.find('option:selected').text();
        v.modalPublish.ui.publishWhat.text(s);
        v.modalPublish.ui.publishHeader.text(v.modalPublish.language.publishHeader);
        v.modalPublish.ui.lblShare.text(v.modalPublish.language.lblShare);

        v.modalPublish.ui.shareSection.toggleClass('mg-hide-element', false);

        // if already published ask for de-publishing and hide facebook share option
        if (v.editorSection.currentRecord['PUBLISHED'] === '1'){
            v.modalPublish.ui.shareSection.toggleClass('mg-hide-element', true);
            v.modalPublish.ui.publishHeader.text(v.modalPublish.language.publishHeaderUnPublish);
        }
        v.modalPublish.ui.window.modal('show');

    });


    v.modalPublish.ui.btnYes.on('click', function(){

        let newStatus = '1';
        if (v.editorSection.currentRecord['PUBLISHED'] === '1'){
            newStatus = '0';
        }

        let formData = new FormData;
        formData.append('id' ,v.editorSection.currentRecord['BLOG_TEXT_ID']);
        formData.append('status', newStatus);
        formData.append('updater', v.loggedinUserId);

        // update
        $.ajax({
            url: "changePublishingStatus.php",
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            type: 'POST',
            success: function()
            {
                // we simulate a change - causing UI to be updated
                v.ongoingActivity = 'idle';
                handleDateOrLanguageChange();
            }
        });

        v.modalPublish.ui.window.modal('hide');
    });


    function setUserInterfaceEditing(){

        v.editorSection.theEditor.setReadOnly(false);

        v.controlPanel.ui.theDatePicker.attr('title', v.language.calendarDisabledMessage);
        v.controlPanel.ui.theDatePicker.datepicker( "option", "disabled", true );

        v.controlPanel.ui.ddLanguage.prop('disabled', true);
        v.controlPanel.ui.ddLanguage.attr('title', v.controlPanel.language.laguageDropDownDisabledMessage);

        v.editorSection.ui.btnDelete.attr('disabled', true);

        v.editorSection.ui.btnEdit.text(v.editorSection.language.btnEditSave);

        v.editorSection.ui.btnCancel.attr('disabled', false);
        v.editorSection.ui.btnStatus.attr('disabled', true);
        v.editorSection.ui.btnKeywords.attr('disabled', true);

        $(window).on('beforeunload', function(){
            return confirm();
        });

    }


    function getDataRecord(){

        let returnValue = null;
        const blogEntries = v.blog.entries.length;

        for (let i=0; i < blogEntries; i++){

            if (v.language.editing === v.blog.entries[i].LANGUAGE_ID){
                returnValue = v.blog.entries[i];
                break;
            }

        }

        return returnValue;

    }


    function createBlogDaySummary(){

        let html = '<p class="mg-bold">';

        if (v.blog.entries.length > 0){

            for (let i=0; i < v.blog.entries.length; i++){

                html += v.blog.entries[i].LANGUAGE_TEXT;
                let statusText = v.controlPanel.language.published;

                if (v.blog.entries[i].PUBLISHED === '0'){
                    statusText = v.controlPanel.language.pending;
                }
                html += ', ' + statusText;
                html +=  ', ' + v.blog.entries[i].CHANGED_AT.substring(0, 16);
                html += ', ' + '<span title="' + v.blog.entries[i].FNAMN + ' ' + v.blog.entries[i].ENAMN + '">' + v.blog.entries[i].SIGNATURE + '</span>';
                html +=  '<br>';

            }
        } else {
            html += v.controlPanel.language.noDataThisDate;
        }

        html += '</p>';

        v.controlPanel.ui.selectInfoBody.html(html);

    }


    function isDatePresent(sYMDdate, aCheckInThis){

        let returnValue = false;
        for (let i=0; i < aCheckInThis.length; i++){

            if (sYMDdate === aCheckInThis[i].BLOGDATE) {
                returnValue = true;
                break;
            }
        }

        return returnValue;

    }


    v.modalKeywords.ui.ddKeywords.change(function() {

        let selected = $("#slctKeywords option:selected" );
        if (!getListOfSelectedBlogKeywords().includes(selected.val()) && (selected.val() !== '0')){
            v.modalKeywords.ui.selectedKeywords.append('<li class="mgLiInline" id="' + selected.val() + '">'  + selected.text() + '  <button type="button" class="btn btn-link itemSelected"><i class="fa fa-close"></i></button></li>');
        }

    });


    function getListOfSelectedBlogKeywords(){

        let keywordIds = [];

        $('#selectedBlogKeywords li').each(function( /* index*/ ) {
            keywordIds.push($( this ).attr('id'));
        });

        return keywordIds.toString();

    }


    function getListOfMModalKeywordsSelectedKeywords(){

        let keywordIds = [];

        $('#selectedBlogKeywords li').each(function( /* index*/ ) {
            keywordIds.push($( this ).attr('id'));
        });

        return keywordIds.toString();

    }


    function getListOfZeroDayNoActivities(){

        let a = [];

        let blocks = $('div[id^="workSchemeId-"]');
        blocks.each(function( /* index*/ ) {
            let area= [];
            let selectBox = $( this ).find('select');

            // save only cancelled or no birds caught "days" - id 1 ignored
            if (selectBox.val() !== '1'){
                let s = $( this ).attr('id').substring(13);
                area.push(s);

                area.push(selectBox.val());

                let text = $( this ).find('textarea');
                area.push(text.val());

                a.push(area);
            }

        });

        return a;

    }


    v.modalKeywords.ui.selectedKeywords.on('click', '.itemSelected', function(){
        $( this ).parent().remove();
    });


    v.modalSignature.ui.selectedSignatures.on('click', '.itemSelected', function(){
        $( this ).parent().remove();
    });


    function populateModalDropDowns(){

        // retrieve logged in user's signature
        let usid = getLoggedInUserId();

        $.ajax({
            type: "get",
            url: "getLoggedInUsersSignature.php?usid=" + usid,
            success: function (data) {

                let sign = JSON.parse(data);

                if (sign.length > 0) {
                    let t = sign[0].FNAMN + ' ' + sign[0].ENAMN + ' (' + sign[0].SIGNATURE + ')';
                    v.loggedInUserSignature = '<li class="mgLiInline" id="' + sign[0].SIGNATURE + '">' + t + '  <button type="button" class="btn btn-link itemSelected"><i class="fa fa-close"></i></button></li>'
                }

            }
        });


        // persons - signatures
        $.ajax({
            type: "GET",
            url: "getAllPersonSignatures.php",
            success: function (data) {

                let thisOption = '<option value="0" selected>' + v.modalSignature.language.ddTaxaNoValue  + '</option>';
                v.modalSignature.ui.ddSignatures.append(thisOption);

                let signs = JSON.parse(data);

                const l = signs.length;
                for (let i = 0; i < l; i++) {
                    v.modalSignature.ui.ddSignatures.append($("<option></option>").attr("value",signs[i].SIGNATURE).text(signs[i].TEXT));
                }

            }
        });



        // keywords - day
        $.ajax({
            type: "GET",
            url: "../../api/getKeywordsForCategory.php?cat=15&lang=" + v.language.current,
            success: function (data) {

                let thisOption = '<option value="0" selected>' + v.modalKeywords.language.ddKeywordsNoValue  + '</option>';
                v.modalKeywords.ui.ddKeywords.append(thisOption);

                let keyw = JSON.parse(data);
                for (let i = 0; i < keyw.length; i++) {
                    v.modalKeywords.ui.ddKeywords.append($("<option></option>").attr("value", keyw[i].ID).text(keyw[i].TEXT));
                }

            }
        });

        // work scheme day statuses
        $.ajax({
            type: "GET",
            url: "getWorkSchemesDatesStatuses.php?lang=" + v.language.current,
            success: function (data) {
                v.zeroDayStatuses = JSON.parse(data);
            }
        });

    }


    v.modalSignature.ui.ddSignatures.change(function() {

        let selected = $("#ddSignatures option:selected" );
        if (!getListOfSelectedSignatures().includes(selected.val()) && (selected.val() !== '0')){
            v.modalSignature.ui.selectedSignatures.append('<li class="mgLiInline" id="' + selected.val() + '">'  + selected.text() + ' (' + selected.val() + ')' + '  <button type="button" class="btn btn-link itemSelected"><i class="fa fa-close"></i></button></li>');
        }

    });


    function getListOfSelectedSignatures(){

        let ids = [];
        $('#selectedSignatures li').each(function( /*index*/ ) {
            ids.push($( this ).attr('id'));
        });

        return ids.toString();

    }


    v.modalKeywords.ui.btnModalKeywordsX.on('click', function(){
        v.modalKeywords.ui.window.modal('hide');
    });


    v.modalDelete.ui.btnNo.on('click', function(){
        v.modalDelete.ui.window.modal('hide');
    });


    v.modalDelete.ui.btnModalDeleteConfirmX.on('click', function(){
        v.modalDelete.ui.window.modal('hide');
    });


    v.modalKeywords.ui.btnCancel.on('click', function(){
        v.modalKeywords.ui.window.modal('hide');
    });


    // Publish modal
    v.modalPublish.ui.btnNo.on('click', function(){

        v.modalPublish.ui.window.modal('hide');
        v.editorSection.theEditor.s.focus();

    });


    v.modalPublish.ui.btnModalPublishX.on('click', function(){

        v.modalPublish.ui.window.modal('hide');
        v.editorSection.theEditor.s.focus();

    });


    const currentImageId = $('#currentImageId');
    // const currentMode = $('#currentMode');

    currentImageId.change(function() {

        // restore cursor position from where it was when popup was called.
        v.editorSection.theEditor.s.focus();
        v.editorSection.theEditor.s.restore(v.editorSection.cursorLocation);


        // get id, transform to url and insert URL on page.

        let id = JSON.parse(currentImageId.val());
        let imgHTML = '<img src="/v2images/maxipics/maxipic-' + id + '.jpg" alt="photo">'
        v.editorSection.theEditor.s.insertHTML(imgHTML);

    });


    v.modalSignature.ui.btnSave.on('click', function(){

        v.modalSignature.ui.window.modal('hide');

        // restore cursor position from where it was when popup was called.
        v.editorSection.theEditor.s.focus();
        v.editorSection.theEditor.s.restore(v.editorSection.cursorLocation);
        let signatureHTML = getSignaturesHTML();
        v.editorSection.theEditor.s.insertHTML(signatureHTML);

    });


    function getSignaturesHTML(){

        let text = '';
        let html = '(';
        $('#selectedSignatures li').each(function( /*index*/ ) {
            text = $( this ).text();
            let signStart = text.indexOf('(');
            let signStop = text.indexOf(')');
            html = html + '<span title="'+ text.substring(0,signStart-1) +'">' + text.substring(signStart+1, signStop) + '</span>, ';
        });

        html = html.substring(0, html.length-2);
        html = html + ')';

        return html;

    }


    v.modalSignature.ui.btnCancel.on('click', function(){
        v.modalSignature.ui.window.modal('hide');
    });

    v.modalSignature.ui.btnModalSignatureX.on('click', function(){
        v.modalSignature.ui.window.modal('hide');
    });


    v.modalZeroDay.ui.btnModalZeroDayX.on('click', function(){
        v.modalZeroDay.ui.window.modal('hide');
    });

    v.modalZeroDay.ui.btnCancel.on('click', function(){
        v.modalZeroDay.ui.window.modal('hide');
    });


    function getAllStandardSeasons(){

        $.ajax({
            type: "get",
            url: "/api/getSystematicSeasonsData.php?language=" + v.language.current,
            success: function (data) {

                v.standardSeasons = JSON.parse(data);
                // simulate a change to set ui, data, etc.
                handleDateOrLanguageChange();

            }
        });

    }


    $(document).on('select2:open', () => {
        document.querySelector('.select2-search__field').focus();
    });

    v.modalKeywords.ui.ddKeywords.select2({
        dropdownParent: v.modalKeywords.ui.window

    });


    v.modalSignature.ui.ddSignatures.select2({
        dropdownParent: v.modalSignature.ui.window
    });
/*
    function getFormattedDate(ymdString){

        let ydmTo = ymdString.split("-");
        let month = parseInt(ydmTo[1]);
        let year = ydmTo[0];
        let day = parseInt(ydmTo[2]);

        // we need the week day as well, thus..
        let d = new Date(ymdString);
        let weekday = d.getDay();

        let monthName = v.controlPanel.editinglang.months[month-1];

        if (v.lang.current === '2'){   // Svenska
            monthName = monthName.toLowerCase();
        }
        let dayString = v.controlPanel.editinglang.weekdays[weekday];

        // Wednesday, 5th of November, 2020
        // Onsdag 12:e maj 2012
        //return dayString + ' ' + day + v.controlPanel.editinglang.dateSuffixes[day] + v.controlPanel.editinglang.dateSuffixes[0] + ' ' + monthName + ' ' + year;
        return dayString + ' ' + day + ' ' + monthName + ' ' + year;
    }
*/


    loadBlogEntries();
    getAllStandardSeasons();

    setLangTexts();
    populateModalDropDowns();
    $("#tabs").tabs();

    // initially, simulate,
    // "set language"
    v.controlPanel.ui.ddLanguage.val('2'); // default Swedish
    v.language.editing = v.controlPanel.ui.ddLanguage.val();
    setEditingTexts(v.language.editing);

    // create the instance even if we never use it.
    v.photoEditModal = new PhotoPopUp();

    showHelpIfItExists(v);

    // set selected date to today.
    //v.controlPanel.ui.theDatePicker.datepicker("setDate", "0");


});







