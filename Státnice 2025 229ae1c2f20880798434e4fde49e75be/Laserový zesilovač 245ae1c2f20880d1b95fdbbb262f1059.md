# Laserový zesilovač

<aside>
🤔

### Proč zesilujeme?

Skoro ve všech pracích (průmyslové, vojenské, medicínské…) je nutné mít vysoce-energetické (i velké výkony) zdroje laserového záření

Tak vysoké energie ze samotného oscilátoru nedostaneme (ten určuje délku impulzu, divergenci a spektrální šířku) → nutnost použití laserových zesilovačů

![Schématický příklad, jak může zesilovač vypadat.](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_131254.png)

Schématický příklad, jak může zesilovač vypadat.

</aside>

Když oscilátor pracuje na prahu (v blízkosti), pak má výstupní svazek menší divergenci a spektrální šířku.

Přidáme-li zesilovač, tak dostaneme větší energie, nebo menší divergence a užší spektrální čáry.

Zesilovač zvyšuje jas laserového systému.

$$
B = \dfrac{P}{A\Omega},
$$

- $B$ - je jas $\text{W}\cdot\text{cm}^{-2}\cdot\text{sr}^{-1}$
- $P$ - výstupní výkon
- $A$ - příčný průřez aktivního média
- $\Omega$  - úhel divergence svazku

Jak probíhá zesilování v konvenčních zesilovačích popisuje následující obrázek

![Snímek obrazovky 2025-08-08 133902.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_133902.png)

Toto je ovšem za předpokladu homogenně načerpaného AP.

V první části se to zesiluje exponenciálně → pak lineárně → od určitého okamžiku dojde k [saturaci zesílení](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059.md). Je tedy dobré mít správnou délku AP, aby nedocházelo k velkým ztrátám (načerpáme celý krystal, ale využije se jen část načerpané energie). **Zisk je tedy dán délkou AP a energie je dána průměrem zesilovaného prostředí.**

<aside>
🤔

# Saturace zesílení

Nastává, když zisk na jednotku délky bude právě vyvažovat ztráty na jednotku délky.

</aside>

Pokud v zesilovači dojde k saturaci → nutnost zvětšení svazku a většího příčného průřezu AP (teleskop se využije na zvětšení svazku - spojka a rozptylka) → tedy další zesilující systémy → !!!! Kombinací metod zesilování se většinou snižuje opakovací frekvence ( ⬆️energie impulzů, ⬆️ špičkový výkon)

Je nutné si dávat pozor na zpětné odrazy, jelikož ty dokáží úplně vpoho odbouchnout předcházející systémy (velké energie no) → využívají se např. Faradayův rotátor

Zesilovač se především používá pro zesilování impulzů (cw moc ne)

Dále si popíšeme dva režimy zesilování (oba dva znají saturaci zesílení)

<aside>
🔥

# Ustálený režim

Pokud délka impulzu $\Delta t$ je delší než fluorescenční doba života AP $\tau_f,$ pak je ze zesilovač charakterizován ustáleným ziskem.

**Zisk závisí na hustotě výkonu**

Spontánní emise (ASE) a čerpání (musí být stabilní) ovlivňují proces zesílení.

Inverze populace a koeficient zisku sledují intensitu kvasi-stacionárním způsobem.

Nelineární charakteristiky zisku mohou být analyzovány pro aktivní média s ne/homogenním rozšířením čáry.

V homogenním případě klesá zisk proporcionálně k celkové čáře přechodu.

V nehomogenním nastává spektrální “vyhoření”, jestliže je vstupující signál je úzko-pásmovým signálem

Pro zisk máme

$$
g(x) = \dfrac{g_0}{1+I(x)/I_S},
$$

kde $g_0$ je malý signální zisk a $I_S$ je saturační hustota.

Je tady takový šikovný vztah

$$
\dfrac{I_{in}}{I_S} = \dfrac{\ln\left(\frac{G_0}{G}\right)}{G-1},
$$

kde $G$ je zisk na jeden průchod a $G_0$ je efektivní zisk ($G_0 = I_{out}/I_{in}$) → získáme tak výkonový zisk pevnolátkových laserů v ustáleném režimu.

Když máme hodně velký zisk → saturace → při saturaci klesá efektivní zisk na 1/e 

</aside>

<aside>
🧑‍🔬

# Režim zesílené krátkého impulzu

Pokud délka impulzu $\Delta t$ je kratší než fluorescenční doba života AP $\tau_f,$ pak je ze zesilovače extrahována energie, která byla akumulována v aktivním médiu před příchodem impulzu.

**Zisk tedy závisí na hustotě energie**

Zanedbatelný účinek spontánní emise a čerpání

## Rychlostí rovnice

Když předpokládáme krátký impulz co je menší jako fluorescenční doba a čerpací rychlost → zesilovací proces je potom závislý na energii (nahromaděná na horní laserové hladině).

Proces zesílení se normálně popíše rychlostníma rovnicemi, jejichž zlehčený tvar je

 

$$
\dfrac{\partial n}{\partial t} = -\gamma \sigma c n \phi \quad \quad\dfrac{\partial \phi}{\partial t} = \sigma c n \phi - \frac{\partial \phi }{\partial x}
$$

Z nich se dá potom odvodit vztah pro **zisk** 

$$
G = \dfrac{E_S}{E_{in}} \ln\left(1  + G_0(e^{E_{in}/E_S}-1)\right); \quad E_{S} = \dfrac{h\nu}{\gamma \sigma}.
$$

Parametr $E_S$ (storovaná energie) je závislý na vstupní energii čerpání, délce čerpacího impulzu, účinnosti čerpání a geometrii aktivního prostředí.

Dále se dá odvodit vztah pro výstupní energii

$$
E_{out} = {E_S} \cdot\ln\left(1  + e^{\beta E_{st}l}(e^{E_{in}/E_S}-1)\right); \quad \beta = \sigma_{21}/h\nu,
$$

kde $\beta$ je materiálový parametr.

</aside>

# Problémy zesilovačů

## Deformace/distorze pulzu

### Prostorové deformace

- **Nehomogenní čerpání**
    
    Rozložení [storované energie](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059.md) v AP není homogenní. Načerpanost daného AP postupně klesá od povrchu.
    
- **Nehomogenita aktivního prostředí**
    
    I přes výtečné optické kvality → místa se stresem, změnou indexu, gradienty v koncentracích aktivní iontů, nečistoty …
    
- **Saturace zisku**
    
    Slabší části signálu jsou zesilovány více než ty části s větší intenzitou
    
    Maximální deformace → vstupní signál je srovnatelný se saturační intenzitou.
    
    Minimální → $I_{in}<<I_S\, \vee\, I_{in}>>I_{S}$  (pro silné signály je zesilovač tak saturován → nepřidává moc energie → deformace minimální.
    
- **Difrakční efekty**
    
    Zesilovač je pro vstupní signál limitující aparatura → vznik Fresnelovským kroužkům (narušení homogenity svazku).
    
    Minimalizace těchto defektů je využití svazku s **Gaussovským tvarem**.
    
    Vhodné kombinace poloměru apertury $a$ a poloměru svazku $w$.
    
    Pro $w=a$ je amplituda redukována na 1/e a jen 86,5% energie projde aperturou.
    
    Pro $a\geq 2w$ , pak je struktura zanedbatelná a příčný profil zůstává blízký Gaussovskému.
    
    K minimalizaci difrakčních jevů se využívají i prostorové filtry (2 čočky a clonka v jejich ohnisku) → nicméně u vysoko-výkonných zesilovačů → nutnost dát filtr do vakuu (jinak vznikne jiskra)
    
- **Teplotní deformace**
    
    Nehomogenní čerpání vede na existenci většího koeficientu zisku, tak také vede na nejednotné rozložení teplotního profilu → vznik negativní tepelný čočky, která deformuje čelo vlny svazku → může vzniknout i dvojlom → silné optické aberace
    
- **Nelineární index (změny indexu lomu)**
    
    Pro vysoké intenzity máme
    
    $$
    n = n_0 + n_2\cdot I,
    $$
    
    kde $n_0$ je lineární, $n_2$ nelineární index lomu a $I$ je intenzita. Takže procházející intenzita indukuje nárůst indexu lomu → způsobuje to samo-indukované aberace svazku (celková fázová distorze svazku).
    

### Časové deformace

- **Deformace tvaru impulsu**
    
    Pustíme-li čtvercový signál → jeho čelo se zesílí víc (stimuluje přechod atomů dolu) než jeho zadní části (nižší hodnota populace horní laserové hladiny)
    
    Máme exp. zesílení → pak může výstupní signál vypadat
    
    ![1 je vstupující; 2-3 jsou po průchodu ruznými zesilovači](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_154946.png)
    
    1 je vstupující; 2-3 jsou po průchodu ruznými zesilovači
    
    Obecně platí, že při průchodu zesilovačem → dochází k dopřednému posunu píku impulzu
    
- **Frekvenční deformace**
    
    Deformace je závislá na intenzitě impulzu
    
    Se snižující se délkou pulsu → zvětšení frekvenční změny
    

## Stabilita zesilovače

Sem se může řadit mechanická stabilita atd.

## Omezení zisku

Důležité je **dosažitelné zesílení.**

Dosažitelné zesílení je podmíněno velikostní možné populace inverse, ale s větší inverzí roste počet možných mechanismů, které depopulují horní laserovou hladinu

### Zesílená spontánní emise - ASE

Podmínky pro ASE jsou dány vysokým ziskem v kombinaci s délkou aktivního prostředí.

Občas se využívá jako zdroj výstupního záření (rentgenové lasery, měděné laser,…) → avalanche lasers

### Před-laserová činnost a parasitní oscilace

Laserová akce probíhající během fáze čerpání zesilovače je výsledkem zesílení zpětných odrazů a následných zesílení → můžeme zde zase napsat podmínku pro stabilní oscilace v rezonátoru → zamezíme vzniku ASE a prelasing 

$$
r_1r_2\exp(2gL)< 1,
$$

neboli dáme podmínku na délku aktivního prostředí.

Vnitřní reflexe na rozhraních AP mohou zvýšit intenzitu ASE→ existují vnitřní radiální módy dané totálním vnitřním odrazem → šeptavé módy.

Tedy vnitřní módy, které se šíří pomocí odrazů v AP.

Kolem zesíleného impulzu jsou nežádoucí pre/post-pulzy (nazývají se občas satelitní).

![Snímek obrazovky 2025-08-08 164424.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_164424.png)

# Typy zesilovacích systémů

- **Jedno-průchodové**
    
    Nutnost správného načasování 
    
    ![Snímek obrazovky 2025-08-08 162144.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_162144.png)
    
- **Více-průchodové 💘**
    
    Využívá se mnoha odrazů od načerpaného AP - jiné dráhy, takže není takový tlak na jednotlivých elementech → ale nutnost hodně elementů
    
    ![Snímek obrazovky 2025-08-08 162229.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_162229.png)
    
    ![Snímek obrazovky 2025-08-08 162657.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_162657.png)
    
- **Regenerativní**
    
    Vpodstatě taky více průchodové, ale opakují se tam stejné dráhy nabuzeným AP.
    
    Po dostatečných průchodech se sepne nějaký element (Pockels, polarizátory…) a vyjde zesílený impulz.
    
    ![Snímek obrazovky 2025-08-08 162544.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_162544.png)
    
- **CPA - Chirped Pulse Amplification**
    
    Prvně se impulz prodlouží (difrakce světla na mřížce) → zesílí → komprimuje → BUM
    
    Jak se prodlužuje:
    
    ![Snímek obrazovky 2025-08-08 163036.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_163036.png)
    
    Zkracuje se to mřížkovým kompresorem → zavádí negativní chirp → modrá “barva” má kratší dráhu 
    
    ![Schéma](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_162849.png)
    
    Schéma
    
- **OPCPA - Optical Parametrical Chirped Pulse Amplification**
    
    Založeno na nelineární procesu OPA (Optical parametrical amplification)
    
    Hrubé schéma jde vidět na následujícím obrázku
    
    ![Snímek obrazovky 2025-08-08 163914.png](Laserov%C3%BD%20zesilova%C4%8D%20245ae1c2f20880d1b95fdbbb262f1059/Snmek_obrazovky_2025-08-08_163914.png)
    
    Dvě podmínky vpravo jsou nutnosti, které se musí splnit → zákon zachování energie fotonů a zákon zachování hybnosti fototů (fázový synchronizmus) (idleru se říká jalová část)
    
    $$
    E_{pump} = E_{signal}+E_{idler}, \quad \vec{k}_{pump} = \vec{k}_{signal} + \vec{k}_{idler}.
    $$