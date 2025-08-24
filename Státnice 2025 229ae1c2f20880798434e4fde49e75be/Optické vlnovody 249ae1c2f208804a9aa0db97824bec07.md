# Optické vlnovody

Plazmoniku a fotonické krystaly jsem skipnul → už teď by se o tom dalo v kuse povídat víc jak těch 15 minut (i s obrázky 🙂)

<aside>
🔎

# Základní charaktery fotoniky

Do fotoniky patří prvky a systémy pro generování, přenos a zpracování signálu v optické formě - nosičem signálu je foton

Foton má nulovou hmotnost, lokalizovatelnost je srovnatelné s vlnovou délkou ($\approx 10^{-6}$ m), je to bozon, 

Převážně jsme v oblasti $0.3-3 \mu\text{m}$

</aside>

<aside>
🤔

# Optický vlnovod

Mezi pasivní fotonické vlnovodné struktury patří: optické vlákno, kanálkový vlnovod či integrovaně optický vlnovodný dělič výkonu 

Máme dva základní typy vlnovodů

**Vrstvový vlnovod**

![$n_a$ se občas značí $n_c$ jako cover](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_203243.png)

$n_a$ se občas značí $n_c$ jako cover

Skok v indexu lomu, Homogenní

**Gradientní vlnovod**

![Snímek obrazovky 2025-08-14 203259.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_203259.png)

Index spojitě přechází na jinou hodnotu, Nehomogenní

## Vrstvový vlnovod

Vlnovody fungují na principu totálního odrazu světla → odvozuje se to všechno ze zákona odrazu a lomu rovinné vlny na rozhraní dielektrik → rozlišení TE a TM polarizace → HLAVNĚ= **Spojitost tečných složek intenzit elektrického a magnetického pole**

![Snímek obrazovky 2025-08-14 204435.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_204435.png)

Z toho se následně odvodí, že podélné složky indexu lomu (**nazývané jako efektivní index lomu $N$**) jsou stejné pro **dopadající** (**i-initial**), **odraženou** (**r-refracted**) a **prošlou** (t**-transmited**) vlnu (stejné jsou i vlnová čísla) ⇒ $N_i=N_r=N_t =N$, což vede na

$$
N= n_1\sin\theta_i = n_1\sin\theta_r=n_2\sin\theta_t
$$

Z toho jde zjistit i Fresnelovy koeficienty pro obě polarizace ⇒ jsou to amplitudové koeficienty a tedy celkové $R$ a $T$ jsou komplexní a součet jejich kvadrátů už nemusí být 1.

V oblasti totálního odrazu je modul reflektance roven 1 a fáze závisí na úhlu dopadu

![Snímek obrazovky 2025-08-14 205143.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_205143.png)

![Snímek obrazovky 2025-08-14 205153.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/edda40a7-a30a-4a96-9017-68a697d2f5b0.png)

Musí být splněna podmínka příčné rezonance (podmínka selfkonzistence) → rovinná vlna se po dvou průchodech vrstvou a dvou odrazech od rozhraní musí reprodukovat i co do fáze → vypadne z toho disperzní rovnice ⇒ řeší se numericky, ale nemusí mít také řešení

![N je často větší pro TM než pro TE](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_205739.png)

N je často větší pro TM než pro TE

![Disperzní diagram-nesymetrický vlnovod (všechny 3 indexy lomu jsou jiný) - počet vidů TM je menší nebo rovno počtu vidů TE](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_210001.png)

Disperzní diagram-nesymetrický vlnovod (všechny 3 indexy lomu jsou jiný) - počet vidů TM je menší nebo rovno počtu vidů TE

![Disperzní diagram - symetrický vlnovod (cover a substrát mají stejný index lomu), počet vidů je stejný pro obě polarizace, vlnovodný dvojlom je větší](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_210211.png)

Disperzní diagram - symetrický vlnovod (cover a substrát mají stejný index lomu), počet vidů je stejný pro obě polarizace, vlnovodný dvojlom je větší

![Rozložení pole vidů; do superstrátu taky vnikají vlny (evanescentní); čím větší mód, tím větší hloubka vniku do substrátu](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_210447.png)

Rozložení pole vidů; do superstrátu taky vnikají vlny (evanescentní); čím větší mód, tím větší hloubka vniku do substrátu

## Gradientní vlnovod

Zase se dá nějak odvodit disperzní rovnice → souvisí s tím metoda WKB aproximace (změna fáze už jen tak nejde spočítat - vyjde totiž jako  $e^{-i\pi/2}$)

Gradientní - nenene - **graded-index** - postupná změna indexu lomu

![Rozložení pole (magnet.) TM vidů; maximální amplituda je tam, kde je největší změna indexu lomu - největší útlum (to modrý)](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_210903.png)

Rozložení pole (magnet.) TM vidů; maximální amplituda je tam, kde je největší změna indexu lomu - největší útlum (to modrý)

## Módy vlnovodu

Jde odvodit vlnová rovnice z MR → celkové pole ve Vlnové rovnici lze rozložit do polarizací TM a TE a řešit zvlášť → vede to na úlohu vlastních čísel a funkce lineárního diferenciálního operátoru (různá vlastní čísla $N^2$ a operátory pro obě polarizace)

Módy vlnovodu se klasifikují podle N^2

![Substrátové mají jenom jeden totální odraz, je jich spojité spektrum; Zářivé: žádný totální odraz, taky spojité spektrum; Evanescentní: $N$ je čistě komplexní  ](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-14_211533.png)

Substrátové mají jenom jeden totální odraz, je jich spojité spektrum; Zářivé: žádný totální odraz, taky spojité spektrum; Evanescentní: $N$ je čistě komplexní  

Módy kanálkových vlnovodů jsou hybridní - mají všechny složky pole nenulové - není zde nikde čistě mód TM/TE

Existují přibližné metody na řešení → Marcatiliho metoda, metoda efektivního indexu lomu, numerické metody

## Integrovaná optika

K technologiím vlnovodů se řadí

- Silica on silicon (tavenina křemene na křemíku) - $\text{Si}/$$\text{SIO}_2/\text{SiO}_2$
- Polymery
- $\text{LiNbO}_3$, APE (annealed proton exchange - protonová výměna)
    - čištění substrátu, ovrstvení fotorezistem a expozice, vyvolání fotorezistu, depozice titanu, lift-off, difuze titanu
    - U APE - depozice chromu, ovrstvení fotorezistem a expozice, vyvolání a vytvrzení rezistu, leptání chromu, APE v kyselině benzoové, odstranění chromu a žíhání
- Polovodiče
- Silicon on Insulator $\text{Si}/\text{SIO}_2/\text{Si}$

Jedny ze základních prvků IO jsou právě optické vlnovody. Dají se využít s takovými kroužky → vznik mikrorezonátorů (záleží jestli je vlnovod vedle (hůř se dělá mezera mezi vlnovody a loopem) nebo pod(těžší na výrobu) )→ vlny se navazují díly evanescentním vlnám

![Snímek obrazovky 2025-08-15 162350.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_162350.png)

Dále se využívají různá rozvětvení (symetrické/asymetrické, zleva/zprava), odbočnice, děliče (výkonu, interferenční)

Následují krásný obrázky

![Snímek obrazovky 2025-08-15 163245.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_163245.png)

![Snímek obrazovky 2025-08-15 163307.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_163307.png)

![Dělič s mnohovidovou interferencí](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_163328.png)

Dělič s mnohovidovou interferencí

![Když je úhel malý a výstupní větve asymetrické → chová se to jako oddělovač vidů a né dělič výkonu](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_163256.png)

Když je úhel malý a výstupní větve asymetrické → chová se to jako oddělovač vidů a né dělič výkonu

![Směrová odbočnice - přelejvá se to sem a tam - různě pro vlnové délky](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_163317.png)

Směrová odbočnice - přelejvá se to sem a tam - různě pro vlnové délky

Nejzajímavější je Spektrální demultiplexor - AWG - arrayed waveguide grating demux

![Snímek obrazovky 2025-08-15 163401.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_163401.png)

Vstup je vlnovod → do planárního úseku (vznik ekvifázových ploch) → navázání do plan. vlnovodů (různě dlouhé) →na střední vlnové délce se vytvoří ekvifázová plocha → Roulandova kružnice →vyvázání

Problém s teplotou

Využívají se principy

- magneto-optický
- termo-optický
- elektrooptický
- MZ interferometrický modulátor
- elektro/absorpce/refrakce

Šíření optického záření závisí na zakřivení vlnovodu → fázová rychlost vlny roste lineárně se zakřivením → pro velké poloměry by překročila rychlost světla v substrátu → odpovídající část výkonu je vyzářena do okolí → záření Čerenkova typu → **efektivní index lomu bude komplexní** → výkonové ztráty budou exp na exp se vzrůstajícím se zakřivením

Když navazuju nanofotonické vlnovody a třeba vlákna - hard → buď se musí vlnovod zužovat → velká lokalizace pole →mathcuje to co bude ve vlákně → nicméně ta špička jde blbě udělat

Lepší je udělat segmentovaný vlnovod → dají se udělat o dost větší oblasti → menší lokalizace pole, což vede na menší ztráty

</aside>

<aside>
🧵

# Optická vlákna

Základní schéma vypadá

![Snímek obrazovky 2025-08-15 092651.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_092651.png)

- **Jádro** - $\text{SiO}_2$ dopovaný Ge, P ,$\ldots$ - oblast s vyšším indexem lomu
    - 2a - průměr jádra (2-50 um)
- **Plášť** - $\text{SiO}_2$ nedopovaný či dopovaný (dopování snižuje index lomu - B, Al)
    - 2b - průměr pláště (125 um; 250 um, …)
- **Primární** (absorbuje uniklé záření z jádra do pláště-nedochází k narušení signálu) a **sekundární ochrana** (aby to nepodléhalo vnějším vlivům) - polymer

## Typy vláken

- Mnohovidová vlákna - gradientní; se skokovým profilem
- Jednovidová vlákna - standartní; zachovávající polarizaci PM
- PCS (polymer-coated silica)
- Plastová …

![Snímek obrazovky 2025-08-15 093154.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_093154.png)

Vlákna zachovávající polarizaci máme dvojího typu - panda/bow-tie ⇒ dvojlom vyvolaný v jádře pnutím vede k různým konstantám šíření pro vidy různé polarizace

Napěťové tyče/segmenty - materiály s různou tepelnou roztažností

![Snímek obrazovky 2025-08-15 093441.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_093441.png)

## Důležité pojmy

### Numerická apertura

Sinus maximálního úhlu vůči ose vlákna, pod kterým vstupují paprsky šířící se ve vlákně

$$
\sin\theta = \sqrt{n_1^2-n_2^2}= \sqrt{n_1^2(0)-n_2^2} = NA
$$

Vztah s $n_1^2(0)$ je pro vlákno s graded-indexem.

![Snímek obrazovky 2025-08-15 095444.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_095444.png)

### V-parametr/normovaná frekvence

Určuje počet módů/vidů ve vlákně 

$$
V = \frac{2\pi a}{\lambda}NA = k_0a\sqrt{n_1^2-n_2^2}
$$

Pro Single-mode vlákno nesmí být hodnota větší jak 2.405

## Teorie lineárně polarizovaných vidů

Vlna se šíří vláknem s efektivním indexem lomu $N=\beta/k_0$ ⇒ disperzní rovnice ⇒ řešení je parametrizováno celým čísle $l$ (pro každé číslo máme několik řešení $N_{lm}$ - $l$ je azimutální index a $r$ je radiální index)  ⇒ Lineárně polarizované (LP) vidy

![Disperzní křivky vidů LP se step-index](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_101610.png)

Disperzní křivky vidů LP se step-index

![Rozložení pole nejnižších vidů LP](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_101654.png)

Rozložení pole nejnižších vidů LP

Pro $l=0$ → čistě módy TE/TM → vyšší jsou pak hybridní

Základní mód vlákna LP$_{01}$ se dá aproximovat Gaussem ⇒ dělá se z to důvodu, že se při spojení vláken vyskytují ztráty a díky Gaussovi se dají dobře najít

Spojují se svářením, uhlíkovým provázkem, wolframem a nebo konektory - typicky konektory mají větší ztráty

Spojnice dvou vláken se zaoblí ⇒ snížení efektu Newtonových kroužků (interferenční obrazce)

![Snímek obrazovky 2025-08-15 102034.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_102034.png)

![Snímek obrazovky 2025-08-15 102053.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_102053.png)

## Útlum konvenčních vláken

Shrnuje to následující obrázek

![V kratších vlnových délkách tam hraje roli Rayleighův rozptyl](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_103450.png)

V kratších vlnových délkách tam hraje roli Rayleighův rozptyl

True-wave - časem se ty OH skupiny zase dostanou do vlákna⇒ zase se vytvoří ten pík

Kdybychom šli více vpravo ⇒ absorpce v $\text{SiO}_2$

Pásma jsou

- O (original) - 1260-1310 nm
- E (Extended) - 1360-1460 nm
- S (Short) - 1460-1525 nm

- C (Conventional) 1530-1565 nm
- L (Long) 1565-1625 nm
- U (Ultra) >1625 nm

## Disperze optických vláken

Založeno na předpokladu úzkopásmového signálu (jeho spektrum je soustředěno do malé oblasti) → komplexní signál jde popsat komplexní obálkou násobenou komplexní harmonickou funkcí → Modulované vstupní záření se naváže do všech vedených vidů →na začátku bude superpozice vidů →každý se šíří jinou konstantou šíření $\beta_m(\omega)$ → konstantu šíření je možné aproximovat Taylorem (v blízkém okolí)

$$
\beta_m(\omega) \approx \beta_m(\omega_0) + \left.\frac{d\beta_m}{d\omega}\right\vert_{\omega_0}(\omega-\omega_0) + 1/2 \left.\frac{d^2\beta_m}{d\omega^2}\right\vert_{\omega_0}(\omega-\omega_0)^2 \ldots
$$

Prvně se nechává aproximace do první derivace ⇒ Pole je superpozice jednotlivých módů, ale každý z nich je posunutý jinde (blízko posunuté módy vytvoří na detektoru jeden větší puls) →každý je zpožděný v čase o grupové zpoždění ($m$ značí vid)

$$
\begin{split}\tau_{g,m} = \frac{z}{v_{g,m}} \qquad v_{g,m} = \left(  \frac{d\beta_m}{d\omega}\right)^{-1}\end{split}
$$

Impuls se rozšíří v závislosti na nejmenším a největším grupovém zpoždění

$$
\sigma_\tau\approx \tau_{g,max} - \tau_{g,min}
$$

→šířka impulzu $\sigma$ je úměrná délce vlákna →toto rozšíření dělá **Mezividová disperze**

Obrácená hodnota šířky impulzu se nazývá **přenosová šířka** → často se udává v součinu s délkou vlákna

**Mezividová disperze se odstraní přidáním dalšího člena rozvoje Taylora** → teď budou různé grupové rychlosti pro různé frekvence ($\forall$ materiály mají disperzi) → **disperzní koeficient:**

$$
D_\omega = \left. \frac{d^2\beta}{d\omega^2}\right\vert_{\omega_0}\qquad D_\lambda = -\frac{2\pi c}{\lambda^2}D_\omega
$$

Během šíření signálu  se frekvence mění lineárně (lineární frekvenční modulace) a směr změny je dán znaménkem disperzního koeficientu

**Normální disperze** - ($D_\lambda <0$ nebo $D_\omega>0$) - vyšší frekvence se šíří pomaleji - linear chirp

**Anomální disperze** - vyšší frekvence se šíří rychleji

![Snímek obrazovky 2025-08-15 111038.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_111038.png)

Vždy budeme mít nějakou disperzi (vyšší řády) a disperze se získává nejen z materiálu, ale i vlnovodu

Celkové rozšíření impulsu na konci trasy je dáno absolutní hodnotou algebraického součtu příspěvků různých úseků → kombinací více úseků je možno vykompenzovat 

$$
\Delta t_{tot} = \vert D_{\lambda,1}L_1 + \ldots\vert \Delta\lambda
$$

</aside>

<aside>
🧵

# Vláknové zesilovače

Před nimi byly elektronické zesilovače → nutnost detekovat signál a fungují jen pro jedno modulaci

Přechod na Erbium Doped Fiber Amplifier (EDFA)

![Optický izolátor - propouští záření v 1 směru (v druhém je silný útlum); Vazební člen - spektrálně závislý, navazuje vlnové délky](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_160352.png)

Optický izolátor - propouští záření v 1 směru (v druhém je silný útlum); Vazební člen - spektrálně závislý, navazuje vlnové délky

Využívají se tedy linkové optické zesilovače (vzdálenost až 100 km - limit… pak disperze útlum atd)

Funguje na principu stimulované emise

Výhody EDFA:

- široké pásma zesílené (zesílení na různých vlnových délkách - WDM)
- nezávisí na polarizaci
- nízké šumové číslo - signal to noise ratio

Problémy s ASE (zesílená spontánní emise)  → jede vpřed i vzad a zesiluje se

</aside>

<aside>
🧵

# Vláknové lasery

Podmínka, že zisk aktivního média kompenzuje ztráty + fázový synchronizmus - signál je zpětné vazby je sfázován s původním signálem

Typicky se využívá Fabry-Perotův rezonátor

![FBG - Bragg. mřížky](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_161301.png)

FBG - Bragg. mřížky

Je možnost i kruhového rezonátoru

![Optický rezonátor - na Faraday. principu → jinak by vznikly svázané vlnové délky](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_161526.png)

Optický rezonátor - na Faraday. principu → jinak by vznikly svázané vlnové délky

Využívají se i se synchronizací módů → u Q-spínání mají problémy - pro vysoké výkony jsou nutné vysoké čerpání, které nejde provozovat s jednovidovým laserem

Využívá se Er,Yb, Pr, Tm

Dají se čerpat skrz plášť →  vnitřní plášť slouží jako mnohovidové vlákno pro čerpací záření → aby se to dobře čerpalo musí se ty průřezy trošku zchaotit

![Snímek obrazovky 2025-08-15 162017.png](Optick%C3%A9%20vlnovody%20249ae1c2f208804a9aa0db97824bec07/Snmek_obrazovky_2025-08-15_162017.png)

Využívají se v optických komunikací, v medicíně, zpracování materiálu, LIDAR a v Ramanovské spektroskopii

</aside>