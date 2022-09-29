$(document).ready(function(){


    // https://ourcodeworld.com/articles/read/269/top-7-best-range-input-replacement-javascript-and-jquery-plugins
    // https://www.jqueryscript.net/form/jQuery-Multiple-Select-Plugin-For-Bootstrap-Bootstrap-Multiselect.html
    // https://www.jqueryscript.net/demo/jQuery-Multiple-Select-Plugin-For-Bootstrap-Bootstrap-Multiselect/
    // https://www.jqueryscript.net/form/jQuery-Multiple-Select-Plugin-For-Bootstrap-Bootstrap-Multiselect.html
    // https://select2.org/


    let v = {
        dataArea : $('#dataArea'),
        dataTabs : $("#dataTabs"),
        lang : {
            metaLang : $("#metaLang"),
            current : ''  // here only for clarity, set below.
        },
        taxon : {
            current : '',
            sexable : '',
            aFilterYears : [],
            maxTime : 0,
            maxDistance : 42,
        },

        ui : {
            // text ids - for setting texts depending on language
            mainHeader : $('#mainHeader'),
            labelSelectTaxa : $('#labelSelectTaxa'),
            labelFilter : $('#labelFilter'),

            cardHeaderRinged : $('#cardHeaderRinged'),
            labelRingedYears : $('#labelRingedYears'),
            labelRingedMonths : $('#labelRingedMonths'),
            labelRingedAge : $('#labelRingedAge'),
            labelRingedSex : $('#labelRingedSex'),

            // controls
            taxaDropDown : $('#slcttaxa'),

        },
    }

    function setLangTexts(){

        // E N G E L S K A
        if (v.lang.current === '1'){
            v.lang.langAsString = 'en';
            v.lang.localeString = 'en_GB';
            v.lang.thousandSeparator = '.';

        }

        // S V E N S K A
        if (v.lang.current === '2'){
            v.lang.langAsString = 'se';
            v.lang.localeString = 'sv_SE';
            v.lang.thousandSeparator = ' ';
        }


    }

    function buildPopUpText(reserve){
       return '<strong>' + reserve.NAME + '</strong><br/>' + reserve.TEXT;
    }

    function loadDataAndSetUpMap(){

        console.log("getReserves.php?lang=" + v.lang.current);

        $.ajax({
            type: "get",
            url: "getReserves.php?lang=" + v.lang.current,
            success: function (data) {

                locations = JSON.parse(data);
                setUpTheMap(locations);

            },

        });

    }

    function setUpTheMap(data){

        let zoom = 11;

        let mymap = L.map('rmap').setView([55.412, 12.88], zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(mymap);


        let markerArray = [];
        for (let i=0; i < data.length; i++){

            console.log(data[i]);

            let lat = data[i].LAT;
            let lon = data[i].LON;
            let popupText = buildPopUpText(data[i]);
            markerArray.push( L.marker([lat, lon]).bindPopup( popupText ) );
        }

        let group = L.featureGroup(markerArray).addTo(mymap);
        //mymap.fitBounds(group.getBounds());

    }

    resolveLanguage(v);
    loadDataAndSetUpMap();

    getHeaderTexts();
    setHeaderTexts();

});





