# Jevy optické, interference a difrakce

# Interference

<aside>
<img src="https://www.notion.so/icons/exclamation-mark_green.svg" alt="https://www.notion.so/icons/exclamation-mark_green.svg" width="40px" />

## Definice

Interference světla je **proces konstruktivní/destruktivní superpozice vlnových jevů** (z linearity vlnové rovnice). Vede ke vzniku **stojatého vlnění** a projevuje se **vznikem interferenční struktury** (lokálního stacionárního přerozdělení hustoty energie elektrického pole → u optických vln dochází k modulace intenzity světla)

</aside>

<aside>
<img src="https://www.notion.so/icons/friends_brown.svg" alt="https://www.notion.so/icons/friends_brown.svg" width="40px" />

## Dvouvlnová interference monochromatických vln

Dvě vlny s komplexními amplitudami ($U_1(r), U_2(r)$) se složí → složením se dostaneme monochromatická vlna o stejné frekvenci (komplexní amplitudu bude součet těch původních dvou)

![Snímek obrazovky 2025-08-13 115500.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_115500.png)

Okamžitá intenzita výsledné vlny bude

$$
\begin{split}I &= \vert U_1 \vert^2 +\vert U_2 \vert^2 + U_1^*U_2 + U_1U_2^* = I_1 +I_2 + 2\sqrt{I_1I_2}\cos(\mathbf K \cdot\mathbf r + \psi) \end{split}
$$

kde jsme zadefinovali lokální interferenční vektor $\mathbf K = \mathbf k_1-\mathbf k_2$, lokální interferenční struktura má harmonický prostorový průběh

$\mathbf K\cdot \mathbf r = konst$ - roviny v prostoru kolmé na interferenční vektor

Pro prostorovou periodu interferenční struktury jde odvodit vztah

$$
\Lambda = \dfrac{\lambda}{2n\sin(\theta/2)}
$$

![Snímek obrazovky 2025-08-13 115237.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_115237.png)

![interference dvou divergujících vln; divergující a konvergující; rovinné a divergující](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_121642.png)

interference dvou divergujících vln; divergující a konvergující; rovinné a divergující

### Na jednoduché vrstvě

Uvažuje se planparalelní tenká vrstva a dvě odražené vlny (jako na obrázku)

Fázový rozdíl dvou odražených vln záleží na indexu lomu, tloušťce vrstvy a úhlu dopadu + fázová podmínka při odrazu (z Fresnelových vztahů)

**Fázové zpoždění způsobené dráhovým rozdílem na vrstvě** 

$$
\Psi = 2k_0n^\prime d\cos\theta^\prime
$$

Fázový posun při interakci s rozhraním se liší → $n_1<n_2<n_3\quad  \phi=0$ nebo $n_1<n_2>n_3 \quad \phi=\pi$

![Snímek obrazovky 2025-08-13 122157.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_122157.png)

Celkový fázový rozdíl při reflexi pak je $\psi_R = \Psi + \phi$

Integrální projev interference tedy závisí na konkrétních parametrech vrstvy a také na osvětlujícím svazku.

Jde to tedy využít k měření rovinnosti vrstvy, modulace indexu lomu…

![Snímek obrazovky 2025-08-13 123800.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_123800.png)

### Využití - interferometry

**Michelsonů, Mach-Zehnderův, Sagnacův**

![Snímek obrazovky 2025-08-13 124418.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_124418.png)

![Snímek obrazovky 2025-08-13 124735.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_124735.png)

</aside>

<aside>
<img src="https://www.notion.so/icons/mandir_yellow.svg" alt="https://www.notion.so/icons/mandir_yellow.svg" width="40px" />

## Vícevlnová interference

U dvouvlnové vzniká harmonická interferenční struktura → u více vlnovlnové lze docílit jiného než harmonického průběhu

Cílem je dosáhnout úzkých interferenčních píků —> hodně interferujících vln

Z Fresnelových vztahů platí 

$$
\begin{split}r_{01}=-r_{10} &\to R=\vert r_{01}\vert^2 \\t_{01}\neq t_{10} &\to T = t_{01}t_{10} \end{split}
$$

Amplitudy prošlých (odražených) vlny se dají lehce napočítat pomocí odvozených vztahů + znalostí [fázového rozdílu](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e.md)

Jednotlivé vlny budou tvořit geometrickou řadu → půjde to sečíst → nalezneme vzorce pro celkovou transmitance/reflektanci (bezeztrátové vrstvy).

![Snímek obrazovky 2025-08-13 125159.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_125159.png)

Zavádíme pojem **činitele jakosti vrstvy** (velikost rozdílu mezi min a max transmitancí)→ pak dostaneme ty vzorce ve formě *Airyho vzorců*

$$
Q = \frac{4R}{(1-R)^2} \quad T_c = \frac{1}{1+Q\sin^2(\Psi/2)} \quad R_C = \frac{Q\sin^2(\Psi/2)}{1+Q\sin^2(\Psi/2)}
$$

Když se vykreslí celková transmitance v závislosti na fázovém zpoždění → bude to vypadat takto.

Funkce dosahuje maxim pro $\Psi=2m\pi$

Minim dosahuje pro $\Psi = 2(m+1)\pi/2$

Může se zadefinovat i pojem jemnosti proužků (finessa)

$$
F = \frac{\pi \sqrt{R}}{1-R}
$$

![Snímek obrazovky 2025-08-13 125235.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_125235.png)

### Fabry-Perotův interferometr

Je podstatou laserových rezonátorů a frekvenčních etalonů.

Optické zařízení založené na vícevlnové interferenci na tlusté vrstvě s vysokým činitelem jakosti (vysoká reflektivita s nízkými ztrátami)

Využívá se jako spektrální analyzátor pro kvazimonochromatické zdroje. Více [ZDE](https://www.rp-photonics.com/fabry_perot_interferometers.html)

### Aplikace tenkých vrstev

Vhodným výběrem vrstevnatého systému lze docílit požadované reflektance/transmitance na dané vlnové délce/úhlu dopadu/polarizace

Využívají se indexy lomu vrstev, tloušťky vrstev, počet vrstev…

- **reflexní vrstvy** - poskytují vysokou reflektivitu a malé ztráty při daném úhlu dopadu
- **antireflexní vrstvy** - snižují reflektivitu za účelem snížení energetických ztrát nebo potlačení nežádoucích odrazů
- **děliče světla** - prvky s definovaným poměrem transmise a reflexe
- **optické interferenční filtry** - realizují bezeztrátové dělení ve spektru
- **polarizační filtry** - oddělují jednotlivé polarizační směry **p** a **s**

### Reflektance obecné dielektrické vrstvy

Daný případ vypadá jako na obrázku

Výsledná reflektance bude vypadat

$$
R_C = \frac{r_1^2+r_2^2 + 2r_1r_2\cos\Psi}{1+r_1^2r_2^2+2r_1r_2\cos\Psi}
$$

V závislosti na vlnové délce to bude vypadat

![Snímek obrazovky 2025-08-13 151247.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_151247.png)

![Snímek obrazovky 2025-08-13 151128.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_151128.png)

</aside>

<aside>
<img src="https://www.notion.so/icons/exclamation-mark_pink.svg" alt="https://www.notion.so/icons/exclamation-mark_pink.svg" width="40px" />

## Interference kvazimonochromatických vln

Interference se pozoruje u částečně koherentních světel, ale i u téměř nekoherentních

Tento proces je zásadně ovlivněn statistickými vlastnostmi použitého vlnění.

Největší význam má sledování fáze vlnění → na tuhle veličinu jsou citlivé všechny superpoziční úlohy. 

Statistika (náhodnost) fáze se tedy u daného signálu projevuje **mírou schopnosti interferovat s podobným zářením.**

Uvažujme signály $\mathbf u (\mathbf r,t)$, jejichž spektrum se rozkládá v okolí hlavní frekvence $\nu_0$ (kvazimonochromatický signál)

$$
\mathbf u (\mathbf r, t ) = \mathbf a(\mathbf r,t)e^{i(2\pi\nu_0 t+ \phi(t))}
$$

Pro monochromatický signál jsou $\mathbf a$ a  $\phi$ konstanty.

Intenzitní interferenční struktura má tvar 

$$
i(\mathbf r, t) = i_1 + i_2 + 2\text{Re}\left[\mathbf u_1 \mathbf u_2^* \right]
$$

Provedeme středování (dlouhodobé) přes mnoho zdrojů →

$$
I(\mathbf r) = I_1 + I_2 + 2\text{Re}\left[\Gamma_{12} \right], \quad \Gamma_{12} = \langle u_1(t)u_2^*(t) \rangle, \quad \gamma_{12}= \Gamma_{12}/(\sqrt{I_1I_2})
$$

Zavedli jsme tzv. korelační funkci a její normalizaci.

Interferenční rovnice má pak tvar 

$$
I = (I_1 + I_2)\cdot \left[  1+m_I\vert \gamma_{12}\vert \cos (2\pi\nu_0\tau+ \arg\Gamma_{12})\right]
$$

Fázový  člen $\arg \Gamma_{12}$ označuje fázi korelačního integrálu a $m_I$ je intenzitní modulační faktor (popisuje různý poměr intenzit interferujících svazků)

$$
m_I = \frac{2\sqrt{I_1/I_2}}{I_1/I_2+1}
$$

Vizibilita interferenční struktury (kontrast interferenční struktury) se definuje jako 

$$
V = m_I\vert \gamma_{12}\vert = \frac{I_{max}-I_{min}}{I_{max}+I_{min}}
$$

**Fyzikální význam stupně koherence → jeho modul vyjadřuje maximálně dosažitelný kontrast modulace interferujících vln stejné intenzity při dané koherenci →vyjadřuje schopnost vlnoploch interferovat. ($\gamma_{12} = 0$ - dvě kompletně nekorelované vlny)**

</aside>

<aside>
<img src="https://www.notion.so/icons/mandir_blue.svg" alt="https://www.notion.so/icons/mandir_blue.svg" width="40px" />

## Statistické vlastnosti optické vlny

Statistické vlastnosti ovlivňují jevy (difrakce, interference), které jsou citlivé na fázi signálu, vlnovou délku, polarizaci…

Předpokládají se **stacionární signály** - stejné statistické vlastnosti v dostatečně dlouhém časovém intervalu bez ohledu na absolutní hodnotu času 

A navíc že jsou signály **ergodické** - lze nahradit souborovou střední hodnotu časovou střední hodnotou.

![Snímek obrazovky 2025-08-13 162113.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_162113.png)

Statistická vlna má projev $A_{náhl}\exp(\omega_{náh}t - k_{náh}r)$

Obecně se statistiky rozdělují

- **V časovém průběhu signálu** - sledování náhodnosti \omega_{náh} → zjistit odchylku od monochromazie → sledujeme *časovou koherenci*
- **V prostorovém průběhu signálu** - náhodnost $k_{náh}$, tedy fáze v závislosti na prostorovém původu generace, kdy různé prostorové části signálu spolu interferují. Výsledek vede na *prostorovou koherenci*
- **V polarizaci pole** - všímáme si statistiky vektorového uspořádání průběhu pole $A_{náhl}$

Youngův experiment (prostorová koherence), Michelson (časová koherence).

Za příčnou/podélnou koherenční délko již nepozorujeme interferenci.

### Prostorová koherence

Představuje míru odlišnosti vlny na vlnoploše v závislosti na příčné prostorové vzdálenosti obou vln superponované v daném bodě.

Udává míru korelovanosti v různých místech na vlnoploše, je spojena s distribucí vlnových vektorů vlnoplochy

Příčná koherenční délka - vzdálenost mezi aperturami, při které zmizí interferenční proužky

![Snímek obrazovky 2025-08-13 163038.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_163038.png)

### Časová koherence

Představuje míru odlišnosti tvaru vlny v čase ve stejném bodě na vlnoploše.

Udává míru korelace v závislosti na časovém zpoždění

Spojeno s frekvenční distribucí zdroje

Existuje vztah mezi šířkou spektra a koherenční časem $\tau_c$, podélna kohereční délka $l_c = \tau_c c = \frac{\lambda^2}{\Delta\lambda}$

![Snímek obrazovky 2025-08-13 163032.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_163032.png)

### Částečně koherentní vlna

Taková vlna, kdy pravidelnost chodu vlnoploch v čase se postupně ztrácí (vztah bodů na vlnoploše se vzrůstající vzdáleností bodů se stává chaotickým)

Interference může probíhat i s těmito vlnami

Prostorovou koherenci zlepšíme tím, že necháme vlnu projít malou aperturou, nebo se zvětšuje i prostým šířením vlny v prostoru

Časovou koherenci zlepšíme, že vlnu necháme projít spektrální filtrem

</aside>

# Difrakce

Difrakce/ohyb - **Proces libovolného vlnění, při kterém nastává odchylka od přímé dráhy, jež není způsobena odrazem ani lomem**

Nastává při omezení příčného rozměru šířící se vlny (nejvíc výrazný když rozměry omezení $\approx \lambda$)

Obecně problematiku řeší **difrakční úloha** - řeší se vlnová rovnice při zadaných okrajových podmínkách úlohy, přičemž známe rozložení vlny na určité ploše a hledáme stav vlnění v jiném místě.

<aside>
<img src="https://www.notion.so/icons/binoculars_brown.svg" alt="https://www.notion.so/icons/binoculars_brown.svg" width="40px" />

## Metody řešení difrakční úlohy

Podle přístupu:

### Řešení difrakčního integrálu

Částečná integrace úlohy; integrační oblast plošného integrálu zachycuje vliv okrajových podmínek na hranici

Skalární metody Kirchoffa, skalární formulace pomocí Huygensova principu, vektorová metoda Kottlera

### Přímé řešení diferenciální vlnové rovnice

U komplikovanějších úloh → nelze splnit předpoklad velikosti apertury…

Podle přesnosti

### Rigorózní metody

Vycházejí z vektorového elektrodynamického charakteru okrajových podmínek pro pole za rozhraním. Stínítko má nějaké definované vlastnosti. Vzniká difrakční pole před i za stínítkem → komplikované → metody řešení diferenciální či integrální

### Metody přibližného řešení

Nejčastější případy →všechny skalární metody (definuje se pojem nepropustného stínítka) + metody kde se využívá paraxiálních přiblížení (kulové vlny atd.) 

</aside>

# Skalární teorie difrakce

Předpokládáme-li prostředí bez volných proudů, nábojů, které je navíc lineární, izotropní, homogenní a nemagnematické → lze úlohu řešit skalárně → jednotlivé složky nejsou provázané 

Stínítko s aperturou představuje nehomogenitu a vlnová rovnice nabude tvaru

$$
\varepsilon = \varepsilon(r) \qquad \nabla^2\mathcal E - \frac{1}{c^2}\frac{\partial^2 \mathcal E}{\partial t^2} + 2\nabla(\mathcal E \cdot \nabla\ln n) = 0
$$

Platnost **skalární aproximace** (SA) tedy závisí na velikosti příspěvku z okrajů apertury.

Lze SA využít:

- apertura, na které dochází  k difrakci, je velká ve srovnání s vlnovou délkou
- difrakci pozorujeme v dostatečné vzdálenosti od apertury

Předpokládáme-li prostředí bez volných proudů, nábojů, které je navíc lineární, izotropní, homogenní a nemagnematické → lze úlohu řešit skalárně → jednotlivé složky nejsou provázané 

Stínítko s aperturou představuje nehomogenitu a vlnová rovnice nabude tvaru

$$
\varepsilon = \varepsilon(r) \qquad \nabla^2\mathcal E - \frac{1}{c^2}\frac{\partial^2 \mathcal E}{\partial t^2} + 2\nabla(\mathcal E \cdot \nabla\ln n) = 0
$$

Platnost **skalární aproximace** (SA) tedy závisí na velikosti příspěvku z okrajů apertury.

Lze SA využít:

- apertura, na které dochází  k difrakci, je velká ve srovnání s vlnovou délkou
- difrakci pozorujeme v dostatečné vzdálenosti od apertury

Máme k dispozici taky integrální teorém Helmholze-Kirchoffa - umožňuje vyjádřit pole v libovolném bodě P pomocí hraničních hodnot vlny na libovolné uzavřené ploše, jež obklopuje uvažovaný body

$$
U(P) = \frac{1}{4\pi} \oint_S \left[ \frac{\partial U}{\partial n}\left(\frac{e^{ikr}}{r} \right)-U \frac{\partial }{\partial n}\left(\frac{e^{ikr}}{r} \right) \right]dS
$$

A difrakční integrál může mít tvar

$$
a(x,y,z) = \frac{i}{\lambda}\iint_\infty a(\overline x,\overline y, 0)\frac{e^{-ikr}}{r}\cos\theta d\overline x d\overline y
$$

![Snímek obrazovky 2025-08-13 195650.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_195650.png)

<aside>
<img src="https://www.notion.so/icons/archive_yellow.svg" alt="https://www.notion.so/icons/archive_yellow.svg" width="40px" />

## Huygensův princip a Huygens-Fresnelův difrakční integrál

Každý bod, do kterého dospělo vlnění, se stává sekundárním zdrojem sférické vlny, výsledná vlnoplocha je obálkou těchto sekundárních vln

Předpokládá se skalární popis pole

Pro případ se stínítkem uvažujeme sekundární zářiče v místě apertury → výsledné pole bude superpozicí těchto zářičů → příspěvky mají tvar sférické vlny

Předpokládáme skalární řešení a harmonickou (monochromatickou) vlnu.

Počáteční problém je znázorněn na obrázku

Každý element dopadající vlny → generuje do druhého poloprostoru sekundární kulovou vlnu, která přispívá do bodu $P$ diferenci

$$
dU(P) = \left(U_0\frac{e^{-ikr_0}}{r_0} K(\chi)dA \right)\frac{e^{-ikr}}{r}
$$

$K(\chi)$ je inklinační faktor a charakterizuje úhlovou závislost vyzařování sekundární vlny v závislosti na normále úhlu dopadající vlnoplochy

![Snímek obrazovky 2025-08-13 194531.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_194531.png)

Následnou superpozicí těchto výsledků dostaneme Huygens-Fresnelův difkrační integrál

$$
U(P) = U_0\iint_A \frac{e^{-ik(r+r_0)} }{rr_0}K(\chi)dA
$$

</aside>

<aside>
<img src="https://www.notion.so/icons/arrow-up-line_brown.svg" alt="https://www.notion.so/icons/arrow-up-line_brown.svg" width="40px" />

## Paraxiální přiblížení difrakčního integrálu

Difrakce blízky osy a bez ohledu na vzdálenost.

Využívá se paraxiálního přiblížení kulové vlny

Zanedbává se existence úhlové závislosti difraktované vlny u inklinačního faktoru

Zavádí se transmisní funkce (funkce propustnosti transparentu)

$$
t(x,y,z) = \frac{u_2(x,y,z_+)}{u_1(x,y,z_-)}
$$

plusem a minusem jsou popsány stavy za a před nekonečně tenkého transparentu.

Pak integrál vypadá

$$
u(x,y,z) \approx \frac{iU_0}{\lambda z} \iint_A t(\overline x, \overline y, 0)e^{-i\frac{k}{2z}\left[(x-\overline x)^2 - (y-\overline y)^2 \right]}d\overline xd\overline y
$$

Stínítko je umístěno v rovině $(\overline x, \overline y, 0)$

Nahrazovala se obecná kulová vlna parabolickou vlnou.

</aside>

<aside>
<img src="https://www.notion.so/icons/archive_yellow.svg" alt="https://www.notion.so/icons/archive_yellow.svg" width="40px" />

## Fresnelova aproximace - blízká zóna

Užívá v tzv. blízké zóně, kdy difrakci již nelze zanedbat.

Difrakční obrazec se značně mění (složitá interference mezi jednotlivými částmi vlnoplochy)

Intenzita je ovlivněna dráhovými rozdíly mezi částmi vlny.

Zavádí se Fresnelovo číslo

$$
N_F = \frac{\overline{x}_{max}^2+ \overline{y}_{max}^2}{\lambda z } 
$$

(maximální rozměry stínítka)

![Jak se mění difrakční obrazec (v blízké zóně se hodně mění)](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_200949.png)

Jak se mění difrakční obrazec (v blízké zóně se hodně mění)

</aside>

<aside>
<img src="https://www.notion.so/icons/apple_red.svg" alt="https://www.notion.so/icons/apple_red.svg" width="40px" />

## Fraunhoferova aproximace - vzdálená zóna

Předpoklad, že jsme daleko od apertury.

Podmínka, že Fresnelovo číslo musí být < 1/2 → **konečná velikost stínítka $A$ je nutná! (u Fresnela tohle nebylo)**

$$
u(x,y,z) = \frac{iU_0}{\lambda z} e^{-i\frac{k}{2z}(x^2+y^2)}\mathcal T\left(\frac{x}{\lambda z},\frac{y}{\lambda z} \right),
$$

kde $\mathcal T\left(\frac{x}{\lambda z},\frac{y}{\lambda z} \right)$ označujeme Fourierovu transformaci funkce transparentu

Ve vzdálené zóně je difrakční pole úměrné tvaru Fourierovy transformace pole těsně za stínítkem.

Difrakční obrazec je 2D Fourierova transformace komplexní amplitudy na aparatuře.

Nahrazení sekundárních zářičů pomocí rovinných vln.

![Snímek obrazovky 2025-08-13 202403.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_202403.png)

![Snímek obrazovky 2025-08-13 202256.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_202256.png)

</aside>

<aside>
<img src="https://www.notion.so/icons/question-mark_blue.svg" alt="https://www.notion.so/icons/question-mark_blue.svg" width="40px" />

Možná někdy difrakční mřížky?

</aside>

# Holografie

Metoda záznamu optického signálu, která zohledňuje jeho komplexní charakter

Hologram - obecná difraktivní struktura, která dokáže rekonstruovat obecnou vlnoplochu

Záznam hologramu vychází ze záznamu interferenčního pole (signální vlny s vlnou referenční) a je následován procesem rekonstrukce této signální vlny 

Směrovost signálu je ve fázi vlny - fotografie to nerespektují - reagují pouze na intenzitu dopadajícího záření

Schématicky je tento proces docela ez.

Signální vlna se nechá interferovat s referenční vlnou → interferenční pole odráží i jejich vzájemné fázové poměry

Hustota proužků závisí na vlnové délce a posun proužků je dán fázovým posuvem jedné z vln.

Orientace proužků je dána orientací interferenčního vektoru.

Pokud zaznamenáme intenzitní pole na záznamový materiál → dostaneme transparent s transmitanční funkcí.

![Snímek obrazovky 2025-08-13 204313.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_204313.png)

Při rekonstrukci se uvažuje osvícení vyvolaného transparentu rekonstrukční vlnou identickou s referenční → výsledek je rekonstrukce signální vlny

Nebo se využívá  rekonstrukce konjugovanou vlnou (k vlně referenční - šíří se opačným směrem) → vzniklý obraz objektu, který vystupuje z desky a fokusuje se v místě objektu

![Snímek obrazovky 2025-08-13 204331.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_204331.png)

V daném místě hologramu je uložena informace o celém objektu při pohledu z tohoto místa hologramu (informace o celém objektu ale z různých směrů) → když roztrhnu hologram → pořád ho uvidím, ale jen z jisté úhlu

Jde se rekonstruovat i bílým světlem → dochází k nízké selektivitě transmisního hologramu vůči vlnové délce  → hologram vznikne pro všechny vlnové délky

![Snímek obrazovky 2025-08-13 205602.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_205602.png)

Vytvořím hologram (podobný jako objemová mřížka) nebo reflexní mřížky - filtr bude vybírat moji vlnovou délku - ostatní vlnové délky projdou bez difrakce

 

![Snímek obrazovky 2025-08-13 205716.png](Jevy%20optick%C3%A9,%20interference%20a%20difrakce%20249ae1c2f208804b8e6fc9274f8e981e/Snmek_obrazovky_2025-08-13_205716.png)