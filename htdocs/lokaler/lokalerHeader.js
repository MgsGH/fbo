
let h = {

    titleText: $('#titleText'),
    bannerHeader: $('#bannerHeader'),
    bannerIntroText: $('#bannerIntroText'),

    lang : {
        current : $('#lang').text(),
    },

}

function getHeaderTexts() {


    // E N G E L S K A
    if (h.lang.current === '1'){

        h.lang.titleText = 'Falsterbo Bird Observatory - Ringing/Banding'
        h.lang.bannerHeader = 'Ringing/Banding - Falsterbo Bird Observatory';
        h.lang.bannerIntroText = 'The migration takes place day and night at different altitudes. The birds try to complete their journey as fast, efficient and safely as possible. For many birds the Baltic Sea is the first difficult barrier to cross on the southward migration route. Therefore, the birds rather follow the south and west coasts of Sweden until they finally reach Falsterbo. On good days you may see hundreds of thousands of birds passing. Most spectacular is the migration of raptors. Birdwatchers from near and far come to enjoy the show.';

    }


    // S V E N S K A
    if (h.lang.current === '2') {
        h.lang.langAsString = 'se';
        h.lang.decDelimiter = ',';
        h.lang.locale = 'sv-SE';

        h.lang.titleText = 'Falsterbo Fågelstation - Fågellokaler på näset och vid Foteviken';
        h.lang.bannerHeader = 'Fågellokaler på näset och vid Foteviken - Falsterbo Fågelstation';
        h.lang.bannerIntroText = 'Falsterbonäset och Foteviken bildar tillsammans ett av Sveriges fågelrikaste områden, framför allt under flyttningen då tiotusentals fåglar av alla de slag rastar här. Även som häckningslokal är området av högsta skyddsvärde och stora arealer är naturreservat. Satellitbilden på startsidan visar några bra lokaler. Klicka på markören (eller i listan nedan t.v.) för att gå vidare till detaljerade kartor, lokal- och vägbeskrivningar.';

    }

}

function setHeaderTexts(){

    h.titleText.text(h.lang.titleText);
    h.bannerHeader.text(h.lang.bannerHeader);
    h.bannerIntroText.text(h.lang.bannerIntroText);




}
