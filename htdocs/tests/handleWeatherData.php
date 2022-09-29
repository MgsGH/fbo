<?php
date_default_timezone_set("CET");
setlocale(LC_ALL, 'swedish');
$path = '/home/hkghbhzh/public_html';
if ($_SERVER['HTTP_HOST'] === 'fbo.localhost'){
    $path =  'C:\xampp\apps\fbo\htdocs';
}
include $path . '/aahelpers/db.php';

$file = $path . '/aahelpers/db.php';

logDBPostData();


$pdo = getDataPDO();

//deklarerar alla variabler som tomma
$vader_s = '';
$vader_e = '';
foreach ($_REQUEST['vader'] as $vdr) {
    switch ($vdr) {
        case 'XX':
            $vader_s .= ', INGET SIGNIFIKANT (AUTO)';
            $vader_e .= ', NOTHING SIGNIFICANT (AUTO)';
            break;
        case '00':
            $vader_s .= ', INGET SIGNIFIKANT VÄDER';
            $vader_e .= ', NO SIGNIFICANT WEATHER';
            break;
        case '01':
            $vader_s .= ', MOLNFRITT';
            $vader_e .= ', CLOUDLESS';
            break;
        case '02':
            $vader_s .= ', NÄSTAN MOLNFRITT';
            $vader_e .= ', ALMOST CLOUDLESS';
            break;
        case '03':
            $vader_s .= ', DELVIS MOLNIGT';
            $vader_e .= ', PARTLY CLOUDY';
            break;
        case '04':
            $vader_s .= ', NÄSTAN MULET';
            $vader_e .= ', ALMOST OVERCAST';
            break;
        case '05':
            $vader_s .= ', MULET';
            $vader_e .= ', OVERCAST';
            break;
        case '10':
            $vader_s .= ', FUKTDIS';
            $vader_e .= ', MISTY';
            break;
        case '11':
            $vader_s .= ', MARKDIMMA';
            $vader_e .= ', SHALLOW FOG';
            break;
        case '13':
            $vader_s .= ', KORNBLIXT';
            $vader_e .= ', SHEET LIGHTNING';
            break;
        case '15':
            $vader_s .= ', NEDERBÖRD INOM SYNHÅLL';
            $vader_e .= ', PRECIPITATION WITHIN SIGHT';
            break;
        case '17':
            $vader_s .= ', ÅSKA PÅ AVSTÅND';
            $vader_e .= ', DISTANT THUNDER';
            break;
        case '19':
            $vader_s .= ', TROMB';
            $vader_e .= ', SMALL TORNADO';
            break;
        case '30':
            $vader_s .= ', SNÖDREV';
            $vader_e .= ', SNOW DRIFT';
            break;
        case '40':
            $vader_s .= ', DIMMA PÅ AVSTÅND';
            $vader_e .= ', DISTANT FOG';
            break;
        case '44':
            $vader_s .= ', DIMMA';
            $vader_e .= ', FOG';
            break;
        case '46':
            $vader_s .= ', UNDERKYLD DIMMA';
            $vader_e .= ', FREEZING FOG';
            break;
        case '50':
            $vader_s .= ', DUGGREGN';
            $vader_e .= ', DRIZZLE';
            break;
        case '56':
            $vader_s .= ', UNDERKYLT DUGGREGN';
            $vader_e .= ', FREEZING DRIZZLE';
            break;
        case '60':
            $vader_s .= ', REGN';
            $vader_e .= ', RAIN';
            break;
        case '66':
            $vader_s .= ', UNDERKYLT REGN';
            $vader_e .= ', FREEZING RAIN';
            break;
        case '69':
            $vader_s .= ', SNÖBLANDAT REGN';
            $vader_e .= ', SLEET';
            break;
        case '70':
            $vader_s .= ', SNÖFALL';
            $vader_e .= ', SNOWFALL';
            break;
        case '77':
            $vader_s .= ', KORNSNÖ';
            $vader_e .= ', SNOW GRAIN';
            break;
        case '80':
            $vader_s = ', REGNSKURAR';
            $vader_e = ', RAIN SHOWERS';
            break;
        case '83':
            $vader_s .= ', BYAR AV SNÖBLANDATREGN';
            $vader_e .= ', SLEET SHOWERS';
            break;
        case '85':
            $vader_s .= ', SNÖBYAR';
            $vader_e .= ', SNOW SHOWERS';
            break;
        case '87':
            $vader_s .= ', SNÖHAGELBYAR';
            $vader_e .= ', HAILSTORM';
            break;
        case '89':
            $vader_s .= ', HAGELBYAR';
            $vader_e .= ', HAILSTORM';
            break;
        case '95':
            $vader_s .= ', ÅSKA';
            $vader_e .= ', THUNDERSTORM';
            break;
    }
    $vader_s = substr($vader_s, 2);
    $vader_e = substr($vader_e, 2);
}
$obs_s = 'Kl. ' . $_REQUEST ['obstid'] . ' ' . $_REQUEST['tkoden'] . ': ';
$obs_e = 'At ' . $_REQUEST ['obstid'] . ' ' . $_REQUEST['tkoden'] . ': ';

// Beräkna kyleffekten
if ($_REQUEST['vsty'] == 0) {
    $kyl = $_REQUEST['temp'];
} else {
    setlocale(LC_ALL, 'sve');
    $tempen = $_REQUEST['temp'];
    $vist = $_REQUEST['vsty'];
    $kyla = 13.126667 + (0.6215 * $tempen - 13.924748 * pow($vist, 0.16)) + (0.4875195 * $tempen * pow($vist, 0.16));
    $k_effekt = round($kyla, 1);
    if ($k_effekt > 0) {
        $kyl = '+' . $k_effekt;
    } elseif ($k_effekt == 0) {
        $kyl = '±' . $k_effekt;
    } else {
        $kyl = $k_effekt;
    }
}

//Skicka data till dagb_vader
//variabler:
$dbmoln = $_REQUEST ['moln'];
$dbvrik = $_REQUEST ['vrikt'];
$dbvsty = $_REQUEST ['vsty'];
$vindTot = $dbvsty . ' ' . $dbvrik;
$dbtemp = $_REQUEST ['temp'];
$dbsikt = $_REQUEST ['sikt'];
$dbtryck = $_REQUEST ['tryck'];
$obstid = $_REQUEST ['obstid'];
$dbdatum = date('Y-m-d');
$dbkl = substr($obstid, 0, 2);
$obsTider = array('01:00', '07:00', '13:00', '19:00', '02:00', '08:00', '14:00', '20:00');

if (in_array($obstid, $obsTider)) {

    $dbsvader = strtolower($vader_s);
    $dbevader = strtolower($vader_e);

    writeDbVader($pdo, $dbdatum, $dbkl, $dbmoln, $dbvrik, $dbvsty, $dbtemp, $dbsikt, $dbtryck, $dbsvader, $dbevader);

}

//Skapa textfiler
file_put_contents('obsen_s.txt', $obs_s . '#' . $vader_s . $dbmoln . '#' . $vindTot  . '#' . $dbtemp  . '#' .  $kyl  . '#' . $dbsikt  . '#' .  $dbtryck);
file_put_contents('obsen_e.txt', $obs_e . '#' . $vader_e . '#' . $vader_s . $dbmoln . '#' . $vindTot  . '#' . $dbtemp  . '#' .  $kyl  . '#' . $dbsikt  . '#' .  $dbtryck);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../bluemall.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <title>Obsen</title>
</head>

<body>

<div style="alignment: center">

    <p style="font-size: 12px">
        <?= $obs_s .= '<b>' . $vader_s . '</b><br/>' ?>
        <?= $obs_e .= '<b>' . $vader_e . '</b>' ?>
    </p>


        <table style="width: 300px">
            <thead>
                <th>Moln</th>
                <th>Vind</th>
                <th>Temp.</th>
                <th>Kyleffekt</th>
                <th>Sikt</th>
                <th>Lufttryck</th>
            </thead>
            <tr>
                <td><b><?=$dbmoln?> /8 </b></td>
                <td><b><?=$vindTot?></b></td>
                <td><b><?=$dbtemp?> °C </b></td>
                <td><b><?=$kyl?> °C</b></td>
                <td><b><?=$dbsikt?> km </b></td>
                <td><b><?=$dbtryck?> hPa </b></td>
            </tr>
        </table>


    <p style="font-size: 12px">
        Hemsidan är nu uppdaterad...<br>
        <a href="../admin/present_weather.php">Gå tillbaka till formuläret.</a><br>
        Behöver något ändras - fyll i formuläret på nytt (alla fält).
    </p>
</div>
</body>
</html>