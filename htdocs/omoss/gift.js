$(document).ready(function() {

    let v = {

        orderButton : $('#orderButton'),
        gVar : $('#g-var'),
        logi : $('#logi'),
        lVar : $('#l-var'),
        sumSlider : $('#sum'),
        sumValue : $('#sumValue'),

        lang: {
            current: $('#lang').text(),
        },

        formwarnings : {

            generalWarning          : $('#generalWarning'),
            motifWarning            : $('#motifWarning'),
            dateWarning             : $('#dateWarning'),
            toWhomWarning           : $('#toWhomWarning'),
            greetingWarning         : $('#greetingWarning'),
            wishesWarning           : $('#wishesWarning'),
            deliveryNameWarning     : $('#deliveryNameWarning'),
            deliveryAddressWarning  : $('#deliveryAddressWarning'),
            payeeNameWarning        : $('#payeeNameWarning'),
            payeeContactWarning     : $('#payeeContactWarning'),

        },

        // fields
        deliveryDate : $( "#deliveryDate" ),
        formFields : {
            jubilee : $('#jubilee'),
            greeting : $('#greeting'),
            wishes : $('#wishes'),
            deliveryLastName : $('#deliveryLastName'),
            deliveryFirstName : $('#deliveryFirstName'),
            deliveryAddressStreet : $('#deliveryAddressStreet'),
            deliveryAddressZipCode : $('#deliveryAddressZipCode'),
            deliveryAddressCity : $('#deliveryAddressCity'),
            payeeFirstName : $('#payeeFirstName'),
            payeeLastName : $('#payeeLastName'),
            payeeEmail : $('#payeeEmail'),
            payeeTelephone : $('#payeeTelephone'),

        },

        formTexts : {
            orderHereHeader : $('#orderHereHeader'),
            motifHeader : $('#motifHeader'),
            motifPrompt : $('#motifPrompt'),

            dateHeader : $('#dateHeader'),
            dateLabel : $('#dateLabel'),
            dateLabelSuffix : $('#dateLabelSuffix'),

            jubileeLabel : $('#jubileeLabel'),

            greetingLabel : $('#greetingLabel'),

            wishesLabel : $('#wishesLabel'),

            deliveryAddressHeader    : $('#deliveryAddressHeader'),

            payeeHeader : $('#payeeHeader'),

            sumHeader : $('#sumHeader'),

        },



    }



    function setLangTexts(){

        // E N G E L S K A
        if (v.lang.current === '1'){

            v.lang.langAsString = 'en';
            v.lang.giftTitles = {

                siskin: 'Redpoll',
                osprey : 'Osprey',
                blames : 'Blue tits',
                swallows : 'Barn swallows',
                eagle : 'White-tailed Eagle',
                flommen : 'Flommen',
                avocets : 'Avocets',
                redstart : 'Redstart',

            }

            v.lang.formWarnings = {
                generalWarning          : 'There is a problem with the form. You may have to scroll up to locate it.',
                motifWarning            : 'You have to select a letter.',
                dateWarning             : 'A date must be given.',
                toWhomWarning           : 'A name must be given.',
                greetingWarning         : 'A greeting must be given',
                wishesWarning           : 'From who must be given.',
                deliveryNameWarning     : 'Delivery name must be given',
                deliveryAddressWarning  : 'A full delivery address must be given',
                payeeNameWarning        : 'Payee information must be given',
                payeeWrongEmailWarning  : 'Invalid email address given.',
            }

            v.lang.formTexts = {
                orderHereHeader      : 'Order here',
                motifHeader          : 'Motif',
                motifPrompt          : 'Select the letter type below (click on the image).',
                dateHeader           : 'Date and greetings',
                dateLabel            : 'Date',
                dateLabelSuffix      : 'Last date for when the letter should be delivered',
                jubileeLabel         : 'Person(s) celebrating her/his/their anniversary',
                greetingLabel        : 'Wishes',
                greetingText         : 'Hj??rtligaste gratulationer till',
                wishesLabel          : 'Wishes',
                deliveryAddressHeader   : 'Delivery address',
                deliveryAddressFirstName: 'First name',
                deliveryAddressLastName : 'Last name',
                deliveryAddressStreet   : 'Street and number',
                deliveryAddressZipCode  : 'Zip code',
                deliveryAddressCity     : 'Place',
                payeeHeader             : 'Payee',
                payeeFirstName          : 'First name',
                payeeLastName           : 'Last name',
                payeeEmail              : 'E-mail address',
                payeeTelephone          : 'Telephone number',
                sumHeader               : 'Sum',
                orderButton             : 'Order your gift',
                ConfirmationHeader      : 'Kindly confirm your order as per below',
                buttonCancel            : 'Cancel',
                buttonOK                : 'Confirm',
            };

            v.lang.closeButtonText = 'Close';

        }


        // S V E N S K A
        if (v.lang.current === '2'){

            v.lang.langAsString = 'se';
            v.lang.giftTitles = {

                siskin: 'Gr??siska',
                osprey : 'Fiskgjuse',
                blames : 'Bl??mesar',
                swallows : 'Ladusvalor',
                eagle : 'Havs??rn',
                flommen : 'Flommen',
                avocets : 'Avocets',
                redstart : 'Redstart',

            };

            v.lang.formWarnings = {
                generalWarning          : 'Det ??r problem med n??got f??lt ovan. Du kanske m??ste scrolla upp f??r att se det.',
                motifWarning            : 'Ett motiv m??ste v??ljas.',
                dateWarning             : 'Ett datum m??ste anges.',
                toWhomWarning           : 'Jubilar(er) m??ste anges.',
                greetingWarning         : 'En h??lsning m??ste anges.',
                wishesWarning           : 'Givare m??ste anges.',
                deliveryNameWarning     : 'Ett komplett namn m??ste anges.',

                deliveryAddressWarning  : 'En komplett leveransadress m??ste anges.',
                payeeNameWarning        : 'Inbetalarens namn m??ste anges.',
                payeeContactWarning     : 'Inbetalarens korrekta kontaktuppgifter m??ste anges.',
                payeeWrongEmailWarning  : 'Ogiltig email adress angiven.',

            };

            v.lang.formTexts = {
                orderHereHeader      : 'Best??ll h??r',
                motifHeader          : 'Motiv',
                motifPrompt          : 'V??lj motiv nedan (klicka p?? bilden).',
                dateHeader           : 'Datum och h??lsning',
                dateLabel            : 'Datum',
                dateLabelSuffix      : 'D?? hyllningsbrevet skall vara framme hos mottagaren',
                jubileeLabel         : 'Jubilar(er)',
                greetingLabel        : 'H??lsning',
                greetingText         : 'Hj??rtligaste gratulationer till',
                wishesLabel          : '??nskar',
                deliveryAddressHeader   : 'Leveransadress',
                deliveryAddressFirstName: 'F??rnamn',
                deliveryAddressLastName : 'Efternamn',
                deliveryAddressStreet   : 'Gata och nummer',
                deliveryAddressZipCode  : 'Postnummer',
                deliveryAddressCity     : 'Postort',
                payeeHeader             : 'Inbetalare',
                payeeFirstName          : 'F??rnamn',
                payeeLastName           : 'Efternamn',
                payeeEmail              : 'E-post adress',
                payeeTelephone          : 'Telefonnummer',
                sumHeader               : 'Summa',
                orderButton             : 'Best??ll din g??va',
                ConfirmationHeader      : 'V??nligen konfirmera din best??llning',
                buttonCancel            : 'Avbryt',
                buttonOK                : 'Bekr??fta',
            };

            v.lang.closeButtonText = 'St??ng';

        }


        v.formTexts.orderHereHeader.text(v.lang.formTexts.orderHereHeader);
        v.formTexts.motifHeader.text(v.lang.formTexts.motifHeader);
        v.formTexts.motifPrompt.text(v.lang.formTexts.motifPrompt);
        v.formTexts.dateHeader.text(v.lang.formTexts.dateHeader);
        v.formTexts.dateLabel.text(v.lang.formTexts.dateLabel);
        v.formTexts.dateLabelSuffix.text(v.lang.formTexts.dateLabelSuffix);
        v.formTexts.jubileeLabel.text(v.lang.formTexts.jubileeLabel);
        v.formTexts.greetingLabel.text(v.lang.formTexts.greetingLabel);
        v.formFields.greeting.text(v.lang.formTexts.greetingText);
        v.formTexts.wishesLabel.text(v.lang.formTexts.wishesLabel);
        v.formTexts.deliveryAddressHeader.text(v.lang.formTexts.deliveryAddressHeader);
        v.formFields.deliveryFirstName.attr('placeholder', v.lang.formTexts.deliveryAddressFirstName);
        v.formFields.deliveryLastName.attr('placeholder', v.lang.formTexts.deliveryAddressLastName);
        v.formFields.deliveryAddressZipCode.attr('placeholder', v.lang.formTexts.deliveryAddressZipCode);
        v.formFields.deliveryAddressStreet.attr('placeholder', v.lang.formTexts.deliveryAddressStreet);
        v.formFields.deliveryAddressCity.attr('placeholder', v.lang.formTexts.deliveryAddressCity);
        v.formTexts.payeeHeader.text(v.lang.formTexts.payeeHeader);
        v.formFields.payeeFirstName.attr('placeholder', v.lang.formTexts.payeeFirstName);
        v.formFields.payeeLastName.attr('placeholder', v.lang.formTexts.payeeLastName);
        v.formFields.payeeEmail.attr('placeholder', v.lang.formTexts.payeeEmail);
        v.formFields.payeeTelephone.attr('placeholder', v.lang.formTexts.payeeTelephone);
        v.formTexts.sumHeader.text(v.lang.formTexts.sumHeader);
        v.orderButton.text(v.lang.formTexts.orderButton);

    }


    function validateForm(){

        let ok = true;
        clearFormWarnings();

        if ($('input[name = "gift"]:checked').val() === undefined){
            ok = false;
            v.formwarnings.motifWarning.text(v.lang.formWarnings.motifWarning);
        }

        if (ok){
            if (v.deliveryDate.val().trim() === ''){
                ok = false;
                v.formwarnings.dateWarning.text(v.lang.formWarnings.dateWarning);
            }
        }

        if (ok){
            if (v.formFields.jubilee.val().trim() === ''){
                ok = false;
                v.formwarnings.toWhomWarning.text(v.lang.formWarnings.toWhomWarning);
            }
        }

        if (ok){
            if (v.formFields.greeting.val().trim() === ''){
                ok = false;
                v.formwarnings.greetingWarning.text(v.lang.formWarnings.greetingWarning);
            }
        }

        if (ok){
            if (v.formFields.wishes.val().trim() === ''){
                ok = false;
                v.formwarnings.wishesWarning.text(v.lang.formWarnings.wishesWarning);
            }
        }

        if (ok){
            if ((v.formFields.deliveryLastName.val().trim() === '') || (v.formFields.deliveryFirstName.val().trim() === '')) {
                ok = false;
                v.formwarnings.deliveryNameWarning.text(v.lang.formWarnings.deliveryNameWarning);
            }
        }

        if (ok){

            if ((v.formFields.deliveryAddressStreet.val().trim() === '') || (v.formFields.deliveryAddressCity.val().trim() === '') || (v.formFields.deliveryAddressZipCode.val().trim() === '')) {
                ok = false;
                v.formwarnings.deliveryAddressWarning.text(v.lang.formWarnings.deliveryAddressWarning);
            }
        }


        if (ok){

            if ((v.formFields.payeeLastName.val().trim() === '') || (v.formFields.payeeFirstName.val().trim() === '')) {
                ok = false;
                v.formwarnings.payeeNameWarning.text(v.lang.formWarnings.payeeNameWarning);
            }
        }

        if (ok){

            if ((v.formFields.payeeEmail.val().trim() === '') || (v.formFields.payeeTelephone.val().trim() === '')) {
                ok = false;
                v.formwarnings.payeeContactWarning.text(v.lang.formWarnings.payeeContactWarning);
            }
        }

        if (ok){
            if (!checkEmailAddress(v.formFields.payeeEmail.val())){
                ok = false;
                v.formwarnings.payeeContactWarning.text(v.lang.formWarnings.payeeWrongEmailWarning);
            }
        }


        if(!ok){
            v.formwarnings.generalWarning.text(v.lang.formWarnings.generalWarning);
        }

        return ok;

    }


    function clearFormWarnings(){

        v.formwarnings.motifWarning.text('');
        v.formwarnings.dateWarning.text('');
        v.formwarnings.toWhomWarning.text('');
        v.formwarnings.greetingWarning.text('');
        v.formwarnings.wishesWarning.text('');
        v.formwarnings.deliveryNameWarning.text('');
        v.formwarnings.deliveryAddressWarning.text('');
        v.formwarnings.payeeNameWarning.text('');
        v.formwarnings.payeeContactWarning.text('');
        v.formwarnings.generalWarning.text('');

    }


    v.modalShowPhoto = {

        window : $('#modalShowPhotoWindow'),
        header : $('#modalShowPhotoHeader'),
        close : $('#btnModalShowPhotoCancel'),
        closeButtons : $('.closeModalShowPhoto'),
        showSection : $('#showSection'),

    }


    v.modalShowOrder = {

        window      : $('#modalShowOrderWindow'),
        header      : $('#modalShowOrderHeader'),
        buttonClose : $('#btnModalShowOrderCancel'),
        buttonOK    : $('#btnModalShowOrderConfirm'),
        closeButtons: $('.closeModalShowOrder'),
        showSection : $('#showOrderSection'),

    }


    v.modalShowPhoto.closeButtons.on('click', function(){
        v.modalShowPhoto.window.modal('hide');
    });

    v.modalShowOrder.closeButtons.on('click', function(){
        v.modalShowOrder.window.modal('hide');
    });


    $('.gift-button').on('click', function(){

        v.formwarnings.motifWarning.text('');
        let gift = $('input[name = "gift"]:checked').val();
        let imageName = "";
        let title = "";

        switch(gift){

            case "svalor":
                imageName = 'gift-1-maxi.jpg';
                title = v.lang.giftTitles.swallows;
                break;

            case "fiskgjuse":
                imageName = 'gift-2-maxi.jpg';
                title = v.lang.giftTitles.osprey;
                break;

            case "blamesar":
                imageName = 'gift-3-maxi.jpg';
                title = v.lang.giftTitles.blames;
                break;

            case "grasiska":
                title = v.lang.giftTitles.siskin;
                imageName = 'xmas-1-maxi.jpg';
                break;

            case "havsorn":
                title = v.lang.giftTitles.eagle;
                imageName = 'gift-4-maxi.jpg';
                break;

            case "skarflackor":
                imageName = 'gift-6-maxi.jpg';
                title = v.lang.giftTitles.avocets;
                break;

            case "rodsjart":
                title = v.lang.giftTitles.redstart;
                imageName = 'gift-7-maxi.jpg';
                break;

            case "flommen":
                title = v.lang.giftTitles.flommen;
                imageName = 'gift-5-maxi.jpg';
                break;

        }

        v.selectedTemplateLetter = title;
        v.modalShowPhoto.header.text(title);
        v.modalShowPhoto.close.text(v.lang.closeButtonText);
        // Populate modal and make it visible
        v.modalShowPhoto.showSection.html('<img class="shadow" alt="artbild" src=images/' + imageName +'?nocache=' + Date.now() + '">' );
        v.modalShowPhoto.window.modal('show');
        
    });


    $("#orderGift").submit(function(e){
        e.preventDefault();
    });


    v.deliveryDate.on('change', function(){
        v.formwarnings.dateWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.jubilee.on('change', function(){
        v.formwarnings.toWhomWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.greeting.on('change', function(){
        v.formwarnings.greetingWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.wishes.on('change', function(){
        v.formwarnings.wishesWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.deliveryLastName.on('change', function(){
        v.formwarnings.deliveryNameWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.deliveryFirstName.on('change', function(){
        v.formwarnings.deliveryNameWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.deliveryAddressStreet.on('change', function(){
        v.formwarnings.deliveryAddressWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.deliveryAddressCity.on('change', function(){
        v.formwarnings.deliveryAddressWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.deliveryAddressZipCode.on('change', function(){
        v.formwarnings.deliveryAddressWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.payeeFirstName.on('change', function(){
        v.formwarnings.payeeNameWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.payeeLastName.on('change', function(){
        v.formwarnings.payeeNameWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.payeeTelephone.on('change', function(){
        v.formwarnings.payeeContactWarning.text('');
        v.formwarnings.generalWarning.text('');
    });

    v.formFields.payeeEmail.on('change', function(){
        v.formwarnings.payeeContactWarning.text('');
        v.formwarnings.generalWarning.text('');
    });


    v.orderButton.on('click', function(){


        if (validateForm()){

            $('#modalShowOrderHeader').text(v.lang.formTexts.ConfirmationHeader);

            let orderText = '';
            orderText += '<div class="container-fluid">';
            orderText += '<div class="row">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.motifHeader + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + v.selectedTemplateLetter + '</div>';
            orderText += '</div>';

            orderText += '<div class="row mb-3">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.dateLabelSuffix + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#deliveryDate').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.greetingLabel + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#greeting').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.jubileeLabel + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#jubilee').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row mb-3">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.wishesLabel + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#wishes').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.deliveryAddressHeader + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#deliveryFirstName').val() + ' ' + $('#deliveryLastName').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row">';
            orderText += '<div class="col-md-5">' + ' ' + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#deliveryAddressStreet').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row mb-3">';
            orderText += '<div class="col-md-5">' + ' ' + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#deliveryAddressZipCode').val() + ' ' + $('#deliveryAddressCity').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.payeeHeader + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#payeeFirstName').val() + ' ' + $('#payeeLastName').val() + '</div>';
            orderText += '</div>';

            orderText += '<div class="row">';
            orderText += '<div class="col-md-5">' + '   ' + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#payeeEmail').val()  + '</div>';
            orderText += '</div>';

            orderText += '<div class="row mb-3">';
            orderText += '<div class="col-md-5">' + '   ' + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#payeeTelephone').val()  + '</div>';
            orderText += '</div>';

            orderText += '<div class="row mb-3">';
            orderText += '<div class="col-md-5">' + v.lang.formTexts.sumHeader + '</div>';
            orderText += '<div class="col-md-5 col-md-offset-2">' + $('#sum').val()  + '</div>';
            orderText += '</div>';

            orderText += '</div>';
            $('#showOrderSection').html(orderText);

            v.modalShowOrder.buttonOK.text(v.lang.formTexts.buttonOK);
            v.modalShowOrder.buttonClose.text(v.lang.formTexts.buttonCancel);
            v.modalShowOrder.window.modal('show');

        }

    });


    v.modalShowOrder.buttonOK.on('click', function(){

        let formData = new FormData;
        formData.append('gift' , v.selectedTemplateLetter);
        formData.append('date' , $('#deliveryDate').val());
        formData.append('towhom',$('#jubilee').val());
        formData.append('greeting', $('#greeting').val());
        formData.append('wishes', $('#wishes').val());
        // delivery details
        formData.append('deliveryFirstName', $('#deliveryFirstName').val());
        formData.append('deliveryLastName', $('#deliveryLastName').val());
        formData.append('deliveryAddressStreet', $('#deliveryAddressStreet').val());
        formData.append('deliveryAddressZipCode', $('#deliveryAddressZipCode').val());
        formData.append('deliveryAddressCity', $('#deliveryAddressCity').val());
        // payee
        formData.append('payeeFirstName', $('#payeeFirstName').val());
        formData.append('payeeLastName', $('#payeeLastName').val());
        formData.append('payeeEmail', $('#payeeEmail').val());
        formData.append('payeeTelephone', $('#payeeTelephone').val());
        formData.append('sum', $('#sum').val());

        $.ajax({
            type: "POST",
            url: "handleGiftOrder.php",
            data: formData,
            processData: false,
            contentType: false,
            success: function()
            {
                // do nothing
            },
            error: function ()
            {

            }

        });

        v.modalShowOrder.window.modal('hide');

    });


    v.deliveryDate.datepicker({ dateFormat: "yy-mm-dd" }).val();

    v.sumSlider.on('change', function(){
        v.sumValue.text(v.sumSlider.val());
    });

    v.sumSlider.trigger('change');

    setLangTexts();


});
