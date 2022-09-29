<?php


class LokalerHeaderTexter
{
    var $texts;

    public function __construct($language)
    {
        if ($language == 'sv'){
            $this->texts = $this->getTextsSv();
        }

        if ($language == 'en'){
            $this->texts = $this->getTextsEn();
        }

    }

    function getTextsSv(){

        $texts = array(
            'page-title' => 'Lokaler',
            'header' => 'Fågellokaler - Falsterbonäset och Foteviken' ,
            'header-text' => 'Falsterbonäset och Foteviken bildar tillsammans ett av Sveriges fågelrikaste områden, framför allt under flyttningen då tiotusentals fåglar av alla de slag rastar här. Även som häckningslokal är området av högsta skyddsvärde och stora arealer är naturreservat. Här presenteras ett antal bra lokaler. ',
            'lokal' => 'Lokal, omständigheter, samt referens'

        );

        return $texts;
    }

    function getTextsEn(){

        $texts = array(
            'page-title' => 'Birding sites',
            'header' => 'Birding sites - Falsterbo Peninsula and Foteviken',
            'header-text' => 'The Falsterbo Peninsula and Foteviken form one of the areas in Sweden with the highest density of birds, especially during migration seasons. Additionally, it is also an important breeding area, especially for shore birds. Here are the best localities for bird watching presented.',
            'lokal' => 'Locality, circumstances and reference'
        );

        return $texts;
    }

    function getTxt($txt){
        return $this->texts[$txt];
    }


}