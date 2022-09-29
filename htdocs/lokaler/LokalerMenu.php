<?php

class LokalerMenu
{

    const Overview = 0;
    const Reserves = 1;
    const FalsterboSidan = 2;
    const Nabben = 3;
    const Fyren = 4;
    const Kolabacken = 5;
    const Flommen = 6;
    const Falsterbopark = 7;
    const SkanorSidan = 8;
    const Hamnvagen = 9;
    const Bakdjupet = 11;
    const Revlarna = 10;
    const Knosen = 12;
    const FdSoptippen = 13;
    const SkanorsPark = 14;
    const SkFboKanalen = 15;
    const Banvallen = 16;
    const Ljungen = 17;
    const Angsnaset = 18;
    const Kanalen = 19;
    const FotevikenOmradet = 20;
    const LillaHammarsNas = 21;
    const InreFoteviken = 22;
    const VellingeAngar = 23;
    const EskiltorpsAngar = 24;
    const GessieAngar = 25;
    const Fredshog = 26;

    const Selected = 3;
    const HasChildren = 4;

    public function __construct($lang)
    {

        if (!isset($lang)) {
            $this->language = 'sv';
        } else {
            $this->language = $lang;
        }

        if ($this->language == 'sv') {

            $this->links = array(
                /* level in the menu, file-to-run, text, active or selected, has children */
                array(1, "/lokaler/index.php", "Översikt", false, false),
                array(1, "/lokaler/reservat.php", "Naturreservat", false, false),
                array(1, "/lokaler/falsterbo-sidan.php", "Falsterbosidan", false, true),
                array(2, "/lokaler/nabben.php", "Nabben", false, false),
                array(2, "/lokaler/falsterbofyr.php", "Falsterbo fyr", false, false),
                array(2, "/lokaler/kolabacken.php", "Kolabacken", false, false),
                array(2, "/lokaler/flommen.php", "Södra flommen", false, false),
                array(2, "/lokaler/falsterbo-park.php", "Falsterbo park", false, false),
                array(1, "/lokaler/skanor-sidan.php", "Skanörsidan", false, true),
                array(2, "/lokaler/hamnvagen.php", "Hamnvägen", false, false),
                array(2, "/lokaler/revlarna.php", "Revlarna", false, false),
                array(2, "/lokaler/bakdjupet.php", "Bakdjupet", false, false),
                array(2, "/lokaler/knosen.php", "Knösen", false, false),
                array(2, "/lokaler/fd-soptippen.php", "Före detta soptippen", false, false),
                array(2, "/lokaler/skanors-park.php", "Skanörs park", false, false),
                array(1, "/lokaler/skanor-falsterbo-kanalen.php", "Skanör/Falsterbo - kanalen", false, true),
                array(2, "/lokaler/banvallen.php", "Banvallen", false, false),
                array(2, "/lokaler/ljungen.php", "Skanörs ljung", false, false),
                array(2, "/lokaler/angsnaset.php", "Ängsnäset", false, false),
                array(2, "/lokaler/kanalen.php", "Kanalen", false, false),
                array(1, "/lokaler/foteviken-och-fredshog.php", "Foteviken och Fredshög", false, true),
                array(2, "/lokaler/lilla-hammars-nas.php", "Lilla Hammars Näs", false, false),
                array(2, "/lokaler/inre-foteviken.php", "Inre Foteviken", false, false),
                array(2, "/lokaler/vellinge-angar.php", "Vellinge ängar", false, false),
                array(2, "/lokaler/eskiltorps-angar.php", "Eskiltorps ängar", false, false),
                array(2, "/lokaler/gessie-angar.php", "Gessie ängar", false, false),
                array(2, "/lokaler/fredshog.php", "Fredshög", false, false)
            );
        } else {

            $this->links = array(
                /* level in the menu, file-to-run, text, active or selected, has children */
                array(1, "/lokaler/index.php?lang=en", "Overview", false, false),
                array(1, "/lokaler/reservat.php?lang=en", "Protected areas", false, false),
                array(1, "/lokaler/falsterbo-sidan.php?lang=en", "The Falsterbo side", false, true),
                array(2, "/lokaler/nabben.php?lang=en", "Nabben", false, false),
                array(2, "/lokaler/falsterbofyr.php?lang=en", "Falsterbo lighthouse", false, false),
                array(2, "/lokaler/kolabacken.php?lang=en", "Kolabacken", false, false),
                array(2, "/lokaler/flommen.php?lang=en", "South Flommen", false, false),
                array(2, "/lokaler/falsterbo-park.php?lang=en", "Falsterbo park", false, false),
                array(1, "/lokaler/skanor-sidan.php?lang=en", "The Skanör side", false, true),
                array(2, "/lokaler/hamnvagen.php?lang=en", "Harbour road", false, false),
                array(2, "/lokaler/revlarna.php?lang=en", "Revlarna", false, false),
                array(2, "/lokaler/bakdjupet.php?lang=en", "Bakdjupet", false, false),
                array(2, "/lokaler/knosen.php?lang=en", "Knösen", false, false),
                array(2, "/lokaler/fd-soptippen.php?lang=en", "Storevång and ex. dump", false, false),
                array(2, "/lokaler/skanors-park.php", "Skanör's park", false, false),
                array(1, "/lokaler/skanor-falsterbo-kanalen.php", "Skanör/Falsterbo - canal", false, true),
                array(2, "/lokaler/banvallen.php", "Old railway embarkment", false, false),
                array(2, "/lokaler/ljungen.php", "Skanörs ljung", false, false),
                array(2, "/lokaler/angsnaset.php", "Ängsnäset", false, false),
                array(2, "/lokaler/kanalen.php", "Canal", false, false),
                array(1, "/lokaler/foteviken-och-fredshog.php", "Foteviken och Fredshög", false, true),
                array(2, "/lokaler/lilla-hammars-nas.php", "Lilla Hammars Näs", false, false),
                array(2, "/lokaler/inre-foteviken.php", "Inner Foteviken", false, false),
                array(2, "/lokaler/vellinge-angar.php", "Vellinge meadows", false, false),
                array(2, "/lokaler/eskiltorps-angar.php", "Eskiltorp's meadows", false, false),
                array(2, "/lokaler/gessie-angar.php", "Gessie meadows", false, false),
                array(2, "/lokaler/fredshog.php", "Fredshög", false, false)
            );
        }
    }

    
    function setLokalerSelected(){
        $this->links[LokalerMenu::Overview][3] = true;
    }

    function setReservatSelected(){
        $this->links[LokalerMenu::Reserves][3] = true;
    }

    function setFalsterboSidanSelected(){
        $this->links[LokalerMenu::FalsterboSidan][3] = true;
    }

    function setNabbenSelected(){
        $this->links[LokalerMenu::Nabben][3] = true;
    }

    function setFalsterboFyrSelected(){
        $this->links[LokalerMenu::Fyren][3] = true;
    }

    function setKolabackenSelected(){
        $this->links[LokalerMenu::Kolabacken][3] = true;
    }

    function setFalsterboParkSelected(){
        $this->links[LokalerMenu::Falsterbopark][3] = true;
    }

    function setFlommenSelected(){
        $this->links[LokalerMenu::Flommen][3] = true;
    }

    function setSkanorSidanSelected(){
        $this->links[LokalerMenu::SkanorSidan][3] = true;
    }

    function setHamnvagenSelected(){
        $this->links[LokalerMenu::Hamnvagen][3] = true;
    }

    function setRevlarnaSelected(){
        $this->links[LokalerMenu::Revlarna][3] = true;
    }

    function setBakdjupetSelected(){
        $this->links[LokalerMenu::Bakdjupet][3] = true;
    }

    function setKnosenSelected(){
        $this->links[LokalerMenu::Knosen][3] = true;
    }

    function setfdSoptippenSelected(){
        $this->links[LokalerMenu::FdSoptippen][3] = true;
    }

    function setSkanorsParkSelected(){
        $this->links[LokalerMenu::SkanorsPark][3] = true;
    }

    function setSkanorFalsterboKanalenSelected(){
        $this->links[LokalerMenu::SkFboKanalen][3] = true;
    }

    function setBanvallenSelected(){
        $this->links[LokalerMenu::Banvallen][3] = true;
    }

    function setLjungenSelected(){
        $this->links[LokalerMenu::Ljungen][3] = true;
    }

    function setAngsnasetSelected(){
        $this->links[LokalerMenu::Angsnaset][3] = true;
    }

    function setKanalenSelected(){
        $this->links[LokalerMenu::Kanalen][3] = true;
    }
    function setFotevikenOmradetSelected(){
        $this->links[LokalerMenu::FotevikenOmradet][3] = true;
    }

    function setLillaHammarsNasSelected(){
        $this->links[LokalerMenu::LillaHammarsNas][3] = true;
    }

    function setInreFotevikenSelected(){
        $this->links[LokalerMenu::InreFoteviken][3] = true;
    }

    function setVellingeAngarSelected(){
        $this->links[LokalerMenu::VellingeAngar][3] = true;
    }

    function setEskiltorpsAngarSelected(){
        $this->links[LokalerMenu::EskiltorpsAngar][3] = true;
    }


    function setGessieAngarSelected(){
        $this->links[LokalerMenu::GessieAngar][3] = true;
    }

    function setFredshogSelected(){
        $this->links[LokalerMenu::Fredshog][3] = true;
    }

    function getHTML(){

        $var = "<div> \n\r" . "<ul  class=\"lokaler-menu\"> \n\r";
        $i = 0;

        while ($i < count($this->links)){

            $page = $this->links[$i];
            $link = $this->createTheLink($page);
            $var = $var . $link . "\n\r";

            if ($page[LokalerMenu::HasChildren]){ // OK we have children - should we show them?

                $showSubLevel = $page[LokalerMenu::Selected]; // if current (parent) selected - show them
                // if a child is selected, show the children
                if (!$showSubLevel){
                    $showSubLevel = $this->anyChildSelected($this->links, $i);
                }


                // parent done - now the first child
                $i++;
                $page = $this->links[$i];
                $level = $page[0];
                while (($i < count($this->links)) && ($page[0] == $level)) {

                    if (($showSubLevel) ) {  // show them!
                        $link = $this->createTheLink($page);
                        $var = $var . $link . "\n\r";
                    }

                    $i++;
                    if ($i < count($this->links)) {
                        $page = $this->links[$i];
                    }

                }

            } else {
                $i++;
            }

        }

        $var = $var . "</ul> \n\r </div> \n\r";
        return $var;
    }


    function createTheLink($page){


        $stylingClasses = "";
        $linkStart = "<a";
        $classString = "";
        $linkEnd = "href=\"" . $page[1] . "\">" . $page[2] . "</a>";

        // Check which level and implement styling. Only 2nd level implemented here
        // first level items defaulted, no class needed
        if ($page[0] == 2){
            $stylingClasses = "lvl-ii";
        }

        // Check if the menu item is selected, if so style it accordingly
        if ($page[LokalerMenu::Selected]) {
            $stylingClasses = $stylingClasses . " active";
        }

        $stylingClasses = trim($stylingClasses);

        if (strlen($stylingClasses) > 0) {
            $classString = "class=\"" . $stylingClasses . "\" ";
        }

        $link = $linkStart . " " . $classString . $linkEnd;

        return "<li>" . $link . "</li>";
    }

    function anyChildSelected($links, $i){

        $i++;
        $page = $links[$i];
        $level = $page[0];
        $selected = false;

        while (($i < count($this->links)) && ($page[0] == $level)) {
            $selected = $page[3];

            if ($selected){
                break;
            }
            $i++;

            if ($i < count($links)){
                $page = $links[$i];
            }

        }

        return $selected;
    }

}