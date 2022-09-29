function initialize()
{
    var bounds = new google.maps.LatLngBounds(); //Makes an empty bounds object
    var latlng = new google.maps.LatLng(55.4220, 12.9067);
    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var point = new google.maps.LatLng(55.3780, 12.8115);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/nabb_s.php',
            title: 'Nabben',
            icon: 'icons/icong1.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });


    var point = new google.maps.LatLng(55.3838, 12.8167);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/nabb_s.php',
            title: 'Falsterbo Fyr',
            icon: 'icons/icong2.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.3841, 12.8226);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/nabb_s.php',
            title: 'Kolabacken',
            icon: 'icons/icong3.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.3910, 12.8220);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/nabb_s.php',
            title: 'Södra Flommen',
            icon: 'icons/icong4.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.3900, 12.8420);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/nabb_s.php',
            title: 'Falsterbo park',
            icon: 'icons/icong5.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4150, 12.8330);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/knosen_s.php',
            title: 'Skanör, Hamnvägen',
            icon: 'icons/icong6.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4220, 12.8450);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/knosen_s.php',
            title: 'Bakdjupet',
            icon: 'icons/icong7.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4380, 12.8420);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/knosen_s.php',
            title: 'Skanörs revlar',
            icon: 'icons/icong8.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4380, 12.8620);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/knosen_s.php',
            title: 'Knösen',
            icon: 'icons/icong9.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4260, 12.8610);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/knosen_s.php',
            title: 'Knävången',
            icon: 'icons/icong10.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4150, 12.8780);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/knosen_s.php',
            title: 'F.d. soptippen',
            icon: 'icons/icong11.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4090, 12.8470);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/knosen_s.php',
            title: 'Skanörs park',
            icon: 'icons/icong12.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4070, 12.8870);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/ljungen_s.php',
            title: 'Banvallen',
            icon: 'icons/icong13.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4000, 12.8780);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/ljungen_s.php',
            title: 'Skanörs Ljung',
            icon: 'icons/icong14.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.3940, 12.8920);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/ljungen_s.php',
            title: 'Ängsnäset',
            icon: 'icons/icong15.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.3860, 12.9230);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/ljungen_s.php',
            title: 'Stenudden',
            icon: 'icons/icong16.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4040, 12.9390);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/ljungen_s.php',
            title: 'Falsterbokanalen',
            icon: 'icons/icong17.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4110, 12.9230);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/ljungen_s.php',
            title: 'Black',
            icon: 'icons/icong18.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4480, 12.9500);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/fotev_s.php',
            title: 'Lilla Hammars näs',
            icon: 'icons/icong19.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4367, 12.9656);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/fotev_s.php',
            title: 'Inre Foteviken',
            icon: 'icons/icong20.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4480, 12.9720);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/fotev_s.php',
            title: 'Vellinge ängar',
            icon: 'icons/icong21.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4777, 12.9549);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/fotev_s.php',
            title: 'Eskilstorps ängar',
            icon: 'icons/icong22.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.4777, 12.9292);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/fotev_s.php',
            title: 'Eskilstorps holmar',
            icon: 'icons/icong23.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });

    var point = new google.maps.LatLng(55.3930, 12.9930);
    var marker = new google.maps.Marker
    (
        {
            position: point,
            map: map,
            url: 'https://www.falsterbofagelstation.se/birdwatch/lokaler/fotev_s.php',
            title: 'Fredshög',
            icon: 'icons/icong24.png'
        }
    );
    bounds.extend(point);

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
        window.open(this.url, '_self');
    });
}