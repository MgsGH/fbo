<?php


class StrackTexter
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
            '-------------------------gemensamma---------------------------------' => '',
            '1' =>'januari',
            '2' =>'februari',
            '3' =>'mars',
            '4' =>'april',
            '5' =>'maj',
            '6' =>'juni',
            '7' =>'juli',
            '8' =>'augusti',
            '9' =>'september',
            '10' =>'oktober',
            '11' =>'november',
            '12' =>'december',
            'intro-i' => 'Summorna som visas här är de faktiska antalen som räknats respektive dag. Inga omräkningar med hänsyn till observatörsinsats eller annat förekommer i denna redovisning. De jämförelsetal som visas bygger på samma underlag, exempelvis medelvärdet för alla säsonger.',
            'intro-ii' => 'Omräknade summor används vid visningen av långsiktiga trender (se <a href="miljö-övervakning/miljo-overvakning.php">Miljöövervakning</a>). ',
            'foto' => 'Foto:',
            'ar' => 'År',
            'Summa' => 'Summa',
            'summa' => 'summa',
            'art' => 'art',
            'Art' => 'Art',
            'valj-art' => 'Välj art',
            'show-data' => 'Show data',
            '------------------------- intro ---------------------------------' => '',
            'visa-data-knapp' => 'Visa data',
            'header' => 'Sträckräkning',
            'page-title' => 'Sträckräkning',
            'header-text' => 'Sträckräkning har bedrivits vid Falsterbo i olika perioder sedan Gustaf Rudebecks pionjärstudier i början av 1940-talet. Den nuvarande serien har pågått oavbruten sedan hösten 1973 och ingår sedan 1978 i Naturvårdsverkets övervakning av populationsförändringar hos fåglar.',
            'info' => 'T.o.m hösten 2018 har <strong>83,954,113</strong> fåglar räknats från Nabben, sedan starten 1973.',
            'info-one' => 'Kalender för val av dagar här.',
            '-------------------------?? ---------------------------------' => '',
            'till-idag' => 'Till och med dagens datum (och dessa arter)',
            'Dagssumma' => 'Dagssumma',
            'Denna-sasong' => 'Denna säsong',
            'Medel-alla-ar' => 'Medelvärde alla år',
            '---------------------------------------------------------' => '',
            'info-art-alla-ar' => 'Art drop down here',
            'header-alla-ar' => 'En art alla år',
            'intro-alla-ar' => '...',
            'header-miljo-overvakning' => 'Miljöövervakning',
            'info-m-o' => 'Lite introduktion har...',
            'intro-art-trend' => 'Trendsidor..',
            'info-art-trend' => 'Art drop down here',
            'header-art-trend' => 'Populationstrender',
            'intro-korrelationer' => 'Korrelationer',
            'info-korrelationer' => 'Sortering av vising har samt info',
            'header-korrelationer' => 'Korrelationer',
            'intro-metodik' => 'Metodik, sidan finns..',
            'header-metodik' => 'Metodik',
            '---------------------------strack en art ett år--------------------------------' => '',
            'aas-header' => 'Hoho',
            'aa-main-header' => 'Art - år',
            'aas-intro-i' => 'Nedan visas alla månader då någon',
            'aas-intro-ii' => 'sträckt ut detta år.',

            '---------------------------strack tio dagar--------------------------------' => '',
            'tio-dagar-ar' => 'Välj år och period',
            'tio-dagar-knapp' => 'Visa urval',
            'info-tio-dagar' => 'Drop downs för perioder här',
            'header-tio-dagar' => 'Tiodagarssummor',
            '-------------------------strack ETT år ---------------------------------' => '',
            'ar-valj-ar' => 'Välj år',
            'ar-knapp' => 'Visa urval',
            'info-ar' => 'År drop down här med tiden',
            'ar-intro-text-2' => 'Medelvärdet omfattar inte det senaste året för att detta ska kunna jämföras med de föregående.',
            'ar-intro-text-3' => 'För långsiktiga trender används delvis omräknade summor (se Miljöövervakning).',
            'header-ar' => 'Årssummor',
            'lokal' => 'Lokal, omständigheter, samt referens',
            'augusti' => 'augusti',
            'september' => 'september',
            'oktober' => 'oktober',
            'november' => 'november',
            'medel' => 'Medelvärde',
            '------------------------- ALLA ar ---------------------------------' => '',
            'alla-ar-header' => 'Art - alla år',
            'totalt' => 'Totalt alla år',
            'alla-ar-medel' => 'Medeltal per år',
            'alla-ar-summary' => 'Sammanfattning',
            '------------------------- metodik ---------------------------------' => '',
            'm-intro-header' => 'Introduktion',
            'm-intro' => 'Systematiska räkningar av fågelsträcket över Falsterbohalvön genomfördes första gången av Gustaf Rudebeck höstarna 1942-1944 (Rudebeck 1950). Under perioden 1949-1960 organiserade Skånes Ornitologiska Förening räkningar som huvudsakligen bedrevs från den sydvästligaste udden, Nabben (Ulfstrand m. fl. 1974). Ett stort antal olika observatörer var inblandade i räkningarna genom åren. Räkningsperioderna varierade något mellan åren, mycket beroende av tillgången på observatörer.',
            'm-standard-roos-header' => 'Standardiserade räkningar 1973-2000 (Gunnar Roos)',
            'm-standard-roos-i' => 'Hösten 1973 inleddes räkningar av sträcket över Falsterbohalvön enligt strikt standardiserade metoder. Den årliga observationsperioden sattes till 11 augusti-20 november. Räkningarna inleddes en halvtimme innan soluppgången varje dag och pågick, oberoende av väderlek, fram till 14.00 svensk normaltid. Observationerna utfördes av en ensam observatör stationerad på den sydvästligaste udden, Nabben. Han utnyttjade huvudsakligen handkikare för att upptäcka sträckande fåglar, medan tubkikaren endast användes för att artbestämma avlägsna individer/flockar. År 1978 upptogs projektet som en del i Naturvårdsverkets Miljöövervakningsarbete, där det f.ö. fortfarande ingår. Som räknare tjänstgjorde Bengt Bengtsson 1973-1974, medan Gunnar Roos (GR) skötte bevakningen 1975-2000.',
            'm-standard-roos-ii' => 'I princip räknades samtliga sträckande arter med undantag av storskarv, trutar och kentsk tärna. Ett antal relativt svårbestämda eller svårseparerade artpar: stor/smålom, fisk/silvertärna, bo/bergfink samt större/mindre korsnäbb separerades dock inte närmare. Framför allt i början fördes även en förhållandevis stor andel till generella grupper som obestämd gås, vråk, labb, svala etc. Inga fåglar ålders- eller könsbestämdes. Resultaten redovisades i årliga rapporter (Roos 2001 och tidigare).',
            'm-rovisar-header' => 'Rovfågelräkningar 1986-2000 (Nils Kjellén)',
            'm-rovisar' => 'Höstarna 1986-2000 bedrevs en speciell studie av rovfågelsträcket över Falsterbohalvön av Nils Kjellén (NK). Observationsperioden var 1 augusti-20 november och den dagliga insatsen sträckte sig från gryningen och så länge som påtagligt rovfågelsträck pågick. Samtliga rovfåglar räknades och fåglarna köns- och åldersbestämdes så långt möjligt. Utöver rovfåglarna bokfördes i mån av tid ett varierande antal övriga arter. Flertalet sparsamma sträckare räknades således alltid medan arter som ejder och ringduva bokfördes mer oregelbundet och allmänna arter som bo/bergfink, svalor och ärlor normalt inte alls. Resultaten redovisades i årliga rapporter (Kjellén 2001 och tidigare) samt utgjorde en stor del i NKs doktorsavhandling (Kjellén 1999).',
            'm-std-header' => 'Standardiserade räkningar 2001--> (N. Kjellén, M. Ullman)',
            'm-std-i' => 'Hösten 2001 ändrades rutinerna i och med att Nils Kjellén (NK) tog över ansvaret. Räkningarna påbörjas sedan dess redan den 1 augusti och två observatörer är verksamma perioden 11 augusti–10 november. Säsongen avslutas som tidigare 20 november. Alla arter räknas fram till 14.00 svensk normaltid, medan rovfåglar därefter räknas så länge påtagligt sträck pågår. I undantagsfall avbryts arbetet tidigare på grund av att sträcket är obefintligt till följd av otjänlig väderlek.',
            'm-std-ii' => 'Samtliga sträckande arter, med undantag av storskarv, gråtrut, havstrut och kentsk tärna, räknas.',
            'm-std-iii' => 'Svårbestämda artpar som fisk/silvertärna, sillgrissla/tordmule och större/mindre korsnäbb räknas om efter bestämd procentandel (se nedan).',
            'm-std-iv' => 'Ett varierande stickprov av svanar, gäss, rovfåglar, tranor och måsfåglar åldersbestäms för att erhålla ett mått på häckningsframgången under året.',
            'm-std-v' => 'En detaljerad rapport publiceras årligen (t.ex. Kjellén 2006).',
            'm-omr-header' => 'Omräkningar',
            'm-omr-i' => 'För att öka jämförbarheten i de standardiserade räkningarna utförda av GR resp. NK har de förstnämnda kompletterats med siffror från Falsterbo Fågelstations dagbok från dagar när den aktuella arten ej räknats av NK (1986-2000). Mängden kompletterande material varierar något mellan åren, men detta torde delvis jämnas ut av den långa serien. Medeltalet från femtonårsserien (1986-2000) från Gunnar Roos’ räkningar har sedan korrelerats med motsvarande värde från rovfågelräkningarna. I de fall en art har räknats parallellt åren 1986-2000 och serierna är signifikant korrelerade har siffrorna från räkningarna t.o.m. 2000 (GR) multiplicerats med den genomsnittliga skillnaden, förutsatt att medeltalet från rovfågelserien var högre.',
            'm-omr-ii' => 'Detta medförde uppräkningar på upp till tre gånger för rovfåglar och några sparsamt sträckande tättingar. Det inkluderar även kompensation för att räkningarna fr.o.m. 2001 påbörjades den 1 istället för den 11 augusti och för att räkningarna av rovfåglar fortsätter efter kl. 14.00.',
            'm-omr-iii' => 'Andra arter som sträcker redan under första augustidekaden, som vadare och tärnor, har räknats upp med den genomsnittliga procentandel som registrerats under de första tio augustidagarna åren 1986-2000.',
            'm-omr-iv' => 'Gruppen storlom/smålom i GRs räkningar har jämförts med smålom i NKs, då den senare arten dominerar klart i Falsterbo.',
            'm-omr-v' => 'De till arten ej bestämda grupperna silvertärna/fisktärna, sillgrissla/tordmule samt större/mindre korsnäbb i GRs räkningar har räknats om efter en bestämd procentandel per tiodagarsperiod under perioden 1986-2000.',
            'm-omr-vi' => 'Detaljer för omräkningen av enskilda arter redovisas av <a href="https://www.falsterbofagelstation.se/arkiv/pdf/212.pdf">Kjellén (2002)</a>.',
            'm-omr-vii' => 'Även om årssummorna som beskrivits ovan i många fall räknats om, finns förstås originalsiffrorna från räkningarna 1973-2000 kvar för framtida analyser.',
            'm-sammanfattning' => 'På webplatsen förekommer alltså två dataset:',
            'm-bullet-i' => 'Omräknade säsongssummor - används vid visningen av långsiktiga trender.',
            'm-bullet-ii' => 'Originalsummor - används i alla andra sammanhang. För de arter, som räknades parallellt 1986-2000 t.ex. rovfåglar, har de högsta summorna valts.',
            'm-ref-header' => 'Referenser',
            'm-ref-i' => 'Kjellén, N. 1999. Differential migration in raptors. Lund.',
            'm-ref-ii' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/198.pdf">Kjellén, N. 2001. Rovfågelsträcket över Falsterbohalvön hösten 2000. - Fåglar i Skåne 2000: 51-69</a> .',
            'm-ref-iii' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/212.pdf">Kjellén, N. 2002. Sträckfågelräkningar i Falsterbo förr och nu. - Anser 41:114-123</a>.',
            'm-ref-iv' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/230.pdf">Kjellén, N. 2006. Sträckfågelräkningar vid Falsterbo hösten 2005. - Fåglar i Skåne 2005:7-44</a>.',
            'm-ref-v' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/206.pdf">Roos, G. 2001. Sträckfågelräkningar vid Falsterbo hösten 2000. - Fåglar i Skåne 2000: 77-90</a>.',
            'm-ref-vi' => 'Rudebeck, G. 1950. Studies on Bird Migration. - Vår Fågelvärld, Suppl. 1.',
            'm-ref-vii' => 'Ulfstrand, S., Roos, G., Alerstam, T. & Österdahl, L. 1974. Visible Bird Migration at Falsterbo, Sweden. -Vår Fågelvärld, Suppl. 8.',
            'footer-text' => 'Sammanställt av Nils Kjellén',
            '------------------------- Miljöövervakning - oversikt texter nedan ---------------------------------' => '',
            'mo-oversikt-hdr' => 'Översikt - populationstrender',
            'mo-oversikt-show-how' => 'Visa hur',
            'mo-oversikt-show-what' => 'Visa vad',
            'mo-oversikt-show-pref' => 'Endast förstaval',
            'mo-oversikt-show-all' => 'Allt',
            'mo-oversikt-show-om' => 'Fallande signifikans',
            'mo-oversikt-show-sys' => 'Systematisk ordning',
            'mo-oversikt-intro-i' => '',
            'mo-oversikt-intro-ii' => 'Listorna visar de arter som för närvarande är aktuella för övervakning av beståndsväxlingar.',
            'mo-oversikt-intro-iii' => 'Systematisk ',
            'mo-legend-header' => 'Signifikansnivåer',
            'mo-increasing' => 'Ökande',
            'mo-decreasing' => 'Minskande',
            'mo-stable' => 'Oförändrade',
            'mo-select-hdr' => 'Välj visningssätt',
            'mo-species' => 'arter',
            'mo-intro-1' => 'De långsiktiga sträckräkningarna som bedrivs från Nabben skapar en unik tidsserie. Analyser av denna tidsserie ger information om pågående förändringar av fågelfaunan och därmed miljön omkring oss - med andra ord miljöövervakning. ',
            'mo-intro-2' => 'Alla höstar är de samma, men samtidigt är ingen höst som någon annan. Data varierar därför mellan åren. Med hjälp av statistiska metoder kan man analysera dessa data och skapa solid information. Analyser av antal visar att vissa arter ökar och att andra minskar, medan några verkar vara stabila. Om flyttningsförloppet istället granskas, visar det sig att detta också ändrar sig för vissa arter. En del arter flyttar tidigare, och andra senare numera, jämfört med för 20-30 år sedan. Detta i sin tur är värdefullt för vidare analyser - vad driver förändringarna?',
            'mo-intro-3' => 'Här i sektionen "Sträck - Miljöövervakning" presenterar vi resultatet av de trendanalyser som görs löpande med avseende på antal baserat på sträckräkningsdata. Samma typ av analyser görs även av ringmärkningsdata. ',

            'strack-trend-intro-i' => 'OBS. För vissa arter används delvis omräknade summor. Justeringarna är gjorda för att öka jämförbarheten mellan år med olika observationsperioder eller observatörsinsatser. Se <a href="metodik/metodik.php">metodik</a> för ytterligare info.',
            '------------------------- Strack rakning dagssummor ---------------------------------' => '',
            'dag-cal-title' => 'Välj en dag',
            'page-header' => 'Dagssummor',
            'page-sub-header' => 'Dag - ',
            '------------------------- Tio i topp ----------------------------------' => '',
            'tio-i-topp-valj-art' => 'Välj art',
            'tio-i-topp-header' => 'Art - tio i topp',
            'strack-10-dagsumme-header' => 'Dagssummor',
            'strack-10-season-header' => 'Säsongssummor',
            'strack-10-datum' => 'Datum',
            'strack-10-antal' => 'Antal',
            'strack-10-ar' => 'År',
            '------------------------- Monitoring ----------------------------------' => '',
            'mo-pop-trender-hdr' => 'Artvisa populationstrender',
            'mo-pop-average' => 'Periodmedelvärden',
            'mo-pop-average-sum' => 'Summa',
            'mo-n-s' => 'ej signifikant',
            'mo-too-small' => 'Vi har alltför lite data för XXX, för meningsfulla analyser.',
            '------------------------- Monitoring diagram texter ----------------------------------' => '',
            'chart-header' => 'Diagrammet',
            'staplar-i' => 'Staplar',
            'staplar-ii' => 'Säsongssumma',
            'bollar-i' => 'Röd linje',
            'bollar-ii' => 'Rullande femårsmedelvärden',
            'spearman' => 'Spearman\'s rangkorrelation',
            '-------------------------strack en art, ett år ---------------------------------' => '',
            'header-ar-art' => 'En art - ett år',
            'xxx' => '',
            '-------------------------Art, bra dagar ---------------------------------' => '',
            'header-ar-sasong' => 'Art - toppdagar',
            'header-over-table' => 'Toppdagar',
            'table-header-md' => 'Månad-dag',
            'table-header-antal-i' => 'Antal gånger denna dag varit toppdag för',
            'table-header-antal-ii' => 'under en säsong',
            'xyx' => ''

        );

        return $texts;
    }

    function getTextsEn(){

        $texts = array(
            '-------------------------gemensamma---------------------------------' => '',
            '1' =>'january',
            '2' =>'february',
            '3' =>'march',
            '4' =>'april',
            '5' =>'may',
            '6' =>'june',
            '7' =>'july',
            '8' =>'august',
            '9' =>'september',
            '10' =>'october',
            '11' =>'november',
            '12' =>'december',
            'intro-i' => 'Totals shown here are the original numbers recorded each year. No adjustments are made according to effort or others aspects are made here. Hence, the numbers are not, as reported here, suitable for long term trends. ',
            'intro-ii' => 'For long time trends adjusted figures are used, (more here - <a href="miljö-övervakning/miljo-overvakning.php">environmental monitoring</a>). ',
            'foto' => 'Photo:',
            'ar' => 'Year',
            'summa' => 'sum',
            'Summa' => 'Sum',
            'art' => 'Species',
            'Art' => 'Species',
            'valj-art' => 'Select species',
            'show-data'=> 'Show data',
            '--------------------------------------------------------------------' => '',
            'till-idag' => 'Up to today\'s date',
            'Dagssumma' => 'Today',
            'Denna-sasong' => 'This season',
            'Medel-alla-ar' => 'Season average',
            '-------------------------?? ---------------------------------' => '',
            'visa-data-knapp' => 'Show data',
            'header' => 'Migration monitoring',
            'page-title' => 'Migration monitoring',
            'header-text' => "Migration counts at Falsterbo started with Gustaf Rudebeck's studies in the early 1940s. Since 1973 the autumn migration has been monitored every year. From 1978 onwards the counts are included in the Bird Monitoring Programme run by The Swedish Environmental Protection Agency (Naturvårdsverket). ",
            'info' => 'Incl. autumn 2018, <strong>83,954,113</strong> birds have been counted since the start in 1973.',
            'info-one' => 'Calender for selection of days here..',
            'info-tio-dagar' => 'Drop downs for periods here',
            'intro-text-tio-dagar' => 'Totals shown here are the original numbers recorded each year. No adjustments are made according to effort or other aspects are made here. Hence, the numbers are not, as reported here, suitable for long term trends.',
            'header-tio-dagar' => 'Ten days periods',
            'info-tio-i-topp' => 'Artbox dropdown in due course.',
            'header-tio-i-topp' => 'Tio i topp',
            'info-art-alla-ar' => 'Art drop down here',
            'header-alla-ar' => 'Art - alla år',
            'intro-alla-ar' => '...',
            'header-miljo-overvakning' => 'Environmental monitoring',
            'info-m-o' => 'Lite introduktion har...',
            'intro-art-trend' => 'Trend pages..',
            'info-art-trend' => 'Species drop down here',
            'header-art-trend' => 'Population trends',
            'intro-korrelationer' => 'Correlations..',
            'info-korrelationer' => 'Sorting here along with some info',
            'header-korrelationer' => 'Correlations',
            '-------------------------strack tio dagar ---------------------------------' => '',
            'tio-dagar-ar' => 'Select year and period',
            'tio-dagar-knapp' => 'Show selection',
            '---------------------------strack en art ett år--------------------------------' => '',
            'aas-header' => 'Hoho',
            'aa-main-header' => 'Species by year',
            'aas-intro-i' => 'Below are all months shown when ',
            'aas-intro-ii' => 'migrated this year.',
            '-------------------------strack år ----------------------------------------' => '',
            'ar-valj-ar' => 'Select year',
            'ar-show-knapp' => 'Show selection',
            'ar-info' => 'Season totals',
            'alla-ar-medel' => 'Season average',
            'ar-header' => 'Season totals',
            'ar-intro-text-1' => 'Totals shown here are the original numbers recorded each year. No adjustments are made according to effort or other aspects are made here. Hence, the numbers are not, as reported here, suitable for long term trends. ',
            'ar-intro-text-2' => 'Long term average does not include the most recent year, making it possible to compare this year with previous years. For long time trends adjusted figures are used, (more here - environmental monitoring).',
            'ar-intro-text-3' => '',
            '------------------------- ALLA ar ---------------------------------' => '',
            'alla-ar-header' => 'Migration monitoring - one species, all years',
            'medel' => 'Average per year',
            'totalt' => 'All years total',
            'alla-ar-summary' => 'Summary',
            '------------------------- metodik ---------------------------------' => '',
            'header-metodik' => 'Methodology',
            'm-intro-header' => 'Introduction',
            'm-intro' => 'Systematic counts of migrating birds at Falsterbo were carried out for the first time during 1942-44 by Gustaf Rudebeck (Rudebeck 1950). Then, during 1949-1960 counts were organised by the Ornithological Society of Scania. Most counts were carried out from Nabben, the southwesternmost point of the Falsterbo peninsula (Ulfstrand et al. 1974). A large number of observers took part in the counts over the years. Depending in the availability of observers, the coverage of the migration season varied between years.',
            'm-standard-roos-header' => 'Standardised counts 1973-2000 (Gunnar Roos)',
            'm-standard-roos-i' => 'In the autumn of 1973 strictly standardised counts  were introduced. The annual observation period was set to 11 August-20 November. The observations started at about 30 minutes before sunrise every day, independently of weather conditions, and continued till 2 p.m. (CET). One single observer at Nabben counted the migrating birds. The observer mainly used binoculars to find migrating birds, and telescope was only used to determine species in remote flocks/individuals. In 1978, the project was included in the National Monitoring Scheme run by the Swedish Environmental Protection Agency (Naturvårdsverket), and has remained there since then. Observers were Bengt Bengtsson 1973-1974 and Gunnar Roos (GR) 1975-2000.',
            'm-standard-roos-ii' => 'All migrants were counted except Great Cormorant, some Gulls species and Sandwich Tern. A number of species, less easy to determine or separate, were put together in pairs: Black-throated/Red-throated Diver, Common/Arctic Tern, Chaffinch/Brambling and Parrot/Common Crossbill. During the first years there were also some groups of species-undetermined birds like goose sp., buzzard sp., swallow sp. etc. No ageing or sexing of the birds was carried out (and not required). The results were presented in annual reports. (Roos 2001 and before).',
            'm-rovisar-header' => 'Raptor counts 1986-2000 (Nils Kjellén)',
            'm-rovisar' => 'During the autumns 1986-2000 a special study of the raptor migration was carried out by Nils Kjellén (NK). The observation period was 1 August-20 November and the daily effort from dawn and as long as significant migration was going on. All raptors were counted and, if possible, aged and sexed. Additionally and time allowing, a number of other species were counted. Most species occurring in relatively small numbers were always counted, while for example Common Eider and Wood Pigeon were registered more irregularely and very common passerines were left out. The results were presented in annual reports (Kjellén 2001 and before) and were a large part of NK\'s thesis (Kjellén 1999).',
            'm-std-header' => 'Standardised counts 2001--> (Nils Kjellén)',
            'm-std-i' => 'In 2001 the standardised counts were slightly modified when Nils Kjellén took over after Gunnar Roos. Since then, the counts start on 1 August and two observers work together 11 August–10 November. The season ends on 20 november as before. All species are counted untill 2 p.m. (CET), while raptors are counted as long as significant migration is going on. Exceptionally, during bad weather conditions when no birds migrate, the counts stop before 2 p.m.',
            'm-std-ii' => 'All migrating species are counted, except Great Cormorant, Herring Gull, Great Black-backed Gull and Sandwich Tern.',
            'm-std-iii' => '"Paired species" like Common/Arctic Tern, Guillemot/Razorbill and Parrot/Common Crossbill are separated to species by percentages of the number of species-determined birds in each pair.',
            'm-std-iv' => 'A various sample of swans, geese, raptors, cranes and gulls are aged in order to get an indication of annual breeding success.',
            'm-std-v' => 'The results are presented in annual reports (like Kjellén 2006).',
            'm-omr-header' => 'Recalculations',
            'm-omr-i' => 'In order to increase the comparability between the standarised counts carried out by GR and NK respectively some recalculations were made. GR\'s counts were completed with numbers from the Falsterbo B.O. log on days when the species in question was not counted by NK (this is during 1986-2000). The amount of additional material varies between years, but this should be of less importance in the long-term perspective view. Averages 1985-2000 from Gunnar Roos’s counts were then compared to the corresponding numbers in the raptor counts. Some species, that were counted simultaneously by GR and NK show significant correlations and thus they were easy to recalculate, mainly by enumerating GR\'s numbers with the average difference, since the numbers in the raptor counts generally were larger.',
            'm-omr-ii' => 'In some raptors and sparsely occurring passerines the original figures were tripled with this method of recalculation. It also includes compensation for the first ten days in August and for raptor counts continuing after 2 p.m. (CET).',
            'm-omr-iii' => 'Other groups of species, like waders and terns, migrating already during the first ten days in August, were enumerated with the average percentages from the same period 1986-2000.',
            'm-omr-iv' => 'Black-throated/Red-throated Diver in GR\'s counts were considered as all Red-throated, since it is by far the most frequent at Falsterbo, and thus compared to this species in NK\'s counts.',
            'm-omr-v' => 'Common/Arctic Tern, Guillemot/Razorbill and Parrot/Common Crossbill in GRs counts were separated to species by percentages of the number of species-determined birds in each pair per ten day period during 1986-2000.',
            'm-omr-vi' => 'Species-specific recalculation details are presented by <a href="https://www.falsterbofagelstation.se/arkiv/pdf/212.pdf">Kjellén (2002)</a>.',
            'm-omr-vii' => 'Although the totals have been recalculated for many species, the original figures 1973-2000 have been stored for future analyses.',
            'm-sammanfattning' => 'At this website, two sets of data are used:',
            'm-bullet-i' => 'Recalculated seasonal totals - used for long-term trends.',
            'm-bullet-ii' => 'Original seasonal totals - used in every other context. In species which were counted simultaneously 1986-2000, like raptors, the highest totals were selected.',
            'm-ref-header' => 'References',
            'm-ref-i' => 'Kjellén, N. 1999. Differential migration in raptors. Lund.',
            'm-ref-ii' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/198.pdf">Kjellén, N. 2001. Rovfågelsträcket över Falsterbohalvön hösten 2000. - Fåglar i Skåne 2000: 51-69</a> .',
            'm-ref-iii' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/212.pdf">Kjellén, N. 2002. Sträckfågelräkningar i Falsterbo förr och nu. - Anser 41:114-123</a>.',
            'm-ref-iv' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/230.pdf">Kjellén, N. 2006. Sträckfågelräkningar vid Falsterbo hösten 2005. - Fåglar i Skåne 2005:7-44</a>.',
            'm-ref-v' => '<a href="https://www.falsterbofagelstation.se/arkiv/pdf/206.pdf">Roos, G. 2001. Sträckfågelräkningar vid Falsterbo hösten 2000. - Fåglar i Skåne 2000: 77-90</a>.',
            'm-ref-vi' => 'Rudebeck, G. 1950. Studies on Bird Migration. - Vår Fågelvärld, Suppl. 1.',
            'm-ref-vii' => 'Ulfstrand, S., Roos, G., Alerstam, T. & Österdahl, L. 1974. Visible Bird Migration at Falsterbo, Sweden. -Vår Fågelvärld, Suppl. 8.',
            'footer-text' => 'Compiled by Nils Kjellén',
            '------------------------- Miljöövervakning - texter nedan  ---------------------------------' => '',
            'mo-oversikt-hdr' => 'Overview - population trends',
            'mo-pop-intro-sida-hdr' => 'Environmental monitoring',
            'mo-pop-trender-hdr' => 'Population trends',
            'mo-pop-average' => 'Annual average for the period',
            'mo-pop-average-sum' => 'Sum',
            'mo-oversikt-show-how' => 'Show what',
            'mo-oversikt-show-what' => 'Display how',
            'mo-oversikt-show-pref' => 'Only first choice',
            'mo-oversikt-show-all' => 'All',
            'mo-oversikt-show-om' => 'Significance, high to lower',
            'mo-oversikt-show-sys' => 'Systematic order',
            'mo-oversikt-intro-i' => 'Correlations are calculated for the period 1980 to 2018.',
            'mo-oversikt-intro-ii' => 'Species lists are restricted to those species currently subject to population monitoring. For details on this, kindly see <a href="/strack/metodik.php?lang=en">methodology section</a>',
            'mo-legend-header' => 'Levels of significance',
            'mo-increasing' => 'Increasing',
            'mo-decreasing' => 'Descreasing',
            'mo-species' => 'species',
            'mo-stable' => 'Unchanged',
            'mo-select-hdr' => 'Chose display of data',
            'mo-n-s' => 'non-significant',
            'mo-too-small' => 'The material is too small..',
            'mo-intro-1' => 'The long term migration monitoring done in Falsterbo build a unique time series. Analyses of this time series yield information about ongoing changes in the bird fauna and thus, in the environment surrounding us - in other words environmental monitoring. ',
            'mo-intro-2' => 'All autumns are the same, but at the same time, and no autumn is as any other. Due to this, data ta varies between years. With the help of statistic methods this variation can be analyzed and solid information can be created. Not surprisingly, results shows that some species are doing very well, while others are diminishing, and yet others remain the same. Other results may reveal changing migration timing. Some species come or leave, earlier or later today, than they "used to do". This, in turn, is very useful information for further studies - what drives the changes?',
            'mo-intro-3' => 'This section of the web site, "Migration monitoring - Environmental monitoring" presents results from the trend analysis updated annually based on the visible migration monitoring. The same type of analysis is also done based on ringing data. ',


            'strack-trend-intro-i' => 'Note, for some species, yearly totals are adjusted. Adjustments were made in order to increase comparability between years depending on observation period, observer efforts etc. See <a href="metodik/metodik.php?lang=en">methodoly</a> for further explanation.',
            '------------------------- Strack rakning dagssummor ---------------------------------' => '',
            'dag-cal-title' => 'Select a day',
            'page-header' => 'Day totals',
            'page-sub-header' => 'Day - ',
            '------------------------- Tio i topp ----------------------------------' => '',
            'tio-i-topp-valj-art' => 'Select species',
            'tio-i-topp-header' => 'Top ten',
            'strack-10-dagsumme-header' => 'Day totals',
            'strack-10-season-header' => 'Season totals',
            'strack-10-datum' => 'Date',
            'strack-10-antal' => 'Sum',
            'strack-10-ar' => 'Year',
            '-------------------------strack ETT år ---------------------------------' => '',
            'ar-knapp' => 'Show selection',
            'header-ar' => 'Migration monitoring, Nabben, annual total',
            'lokal' => 'Lokal, omständigheter, samt referens',
            'augusti' => 'Augusti',
            'september' => 'September',
            'oktober' => 'October',
            'november' => 'November',
            'chart-header' => 'The chart',
            'staplar-i' => 'Bars',
            'staplar-ii' => 'Season total',
            'bollar-i' => 'Filled<br/>circles',
            'bollar-ii' => 'Five-year rolling averages',
            'spearman' => 'Spearman\'s rank correlation',
            '-------------------------strack en art, ett år ---------------------------------' => '',
            'header-ar-art' => 'One species - one year',
            'bollar-ii' => 'Five-year rolling averages',
            '-------------------------Art, bra dagar ---------------------------------' => '',
            'header-ar-sasong' => 'Species - top days',
            'header-over-table' => 'Top days',
            'table-header-md' => 'Month-day',
            'table-header-antal-i' => 'Number of times this day has been the top day for',
            'table-header-antal-ii' => 'during a season',
            'xyx' => ' '
        );

        return $texts;
    }


    function getTxt($txt){
        return $this->texts[$txt];
    }


}