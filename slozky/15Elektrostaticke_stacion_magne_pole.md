# Elektrostatické a stacionární magnetické pole

<aside>
🔋

### Elektrostatika

Náboj je v klidu → je to rozumná aproximace → i přes jejich neustály pohyb, jelikož můžeme vystředovat ty jejich chaotické pohyby

</aside>

<aside>
🔌

### Elektrický náboj

je vlastnost hmoty a fyzikální veličina zprostředkující a popisující působení elektromagnetické interakce

- Je vždy vázán na nabitou částici
- Kladný a záporný
- Nevzniká ani nezaniká, zachovává se při všech dějích v elektricky izolované soustavě
- Je relativisticky invariantní (ve všech VS je stejný)
- Je kvantován
- Může se přenášet třením a dotykem
- Jednotkou je coulomb a elementární hodnota náboje je e =1
</aside>

<aside>
🏐

# Coulombův zákon

Bodové náboje $Q_1,Q_2$ na sebe ve vzdálenosti $r$ působí elektrostatickou (Coulombovou) silou

$$
F_c = k \frac{\vert Q_1\vert \vert Q_2\vert}{r^2} \qquad k= \frac{1}{4\pi\varepsilon_0}= 9\cdot10^9\,\text{Nm}^2\text{C}^{-1}
$$

Vektor síly leží na spojnici bodů (síla centrální) a jeho směr závisí na znaménku nábojů.

$$
\vec F_{12} = k \frac{Q_1Q_2}{\vert \vec R_{12}\vert^2}\cdot \frac{\vec R_{12}}{\vert \vec R_{12} \vert}
$$

Že $F_C \thicksim 1/r^2$ → experimentálně pomocí torzních kyvadel

![Snímek obrazovky 2025-08-20 090022.png]15Elektrostaticke_stacion_magne_pole/Snmek_obrazovky_2025-08-20_090022.png)

Máme-li více nábojů → jejich výsledná síla je dána principem superpozice

</aside>

<aside>
🧠

# Energie elektrostatického pole

Je to práce potřebná k přemístění bodových nábojů z nekonečna do daného uspořádání (k vytvoření soustavy)

Hodnota je kladná, když se překonává odpudivá síla

Hodnota je záporná, když působí přitažlivá síla

$$
\begin{split}W &= \frac{kqQ}{r}\\W &= \frac{1}{2}\sum_{i,j,i\neq j} \frac{q_iq_j}{r_{ij}}\end{split}
$$

q značí bodový náboj

Coulombovy síly jsou konzervativní → $\vec F_C = -\nabla W$

.

</aside>

<aside>
😮

# Intenzita elektrostatického pole

Síla působící na jednotku náboje

$$
\vec E = \frac{\vec F_c}{q} \qquad E=k\frac{Q}{r^2}
$$

kde $Q$ je náboj vytvářející pole

Směr intenzity uvažujeme stejný jako směr síly působící na kladně nabitou částici

Elektrostatické pole jde znázornit siločarami (křivky, jejichž tečna má v každém bode směr síly působící na kladný jednotkový náboj) a hustota siločar je úměrná velikosti této síly

Ze ZZ náboje → celkový počet siločar vycházejících z náboje se zachovává a nemění se ani při pohybuju náboje

![Snímek obrazovky 2025-08-20 091715.png]15Elektrostaticke_stacion_magne_pole/Snmek_obrazovky_2025-08-20_091715.png)

![Snímek obrazovky 2025-08-20 091750.png]15Elektrostaticke_stacion_magne_pole/Snmek_obrazovky_2025-08-20_091750.png)

.

</aside>

<aside>
🎴

### Tok intenzity elektrostatického pole

Tok je definován

$$
\Phi = \int_S \vec E \cdot d\vec S
$$

Díky němu se dá formulovat obecný Gaussův zákon → pro pohybující náboje a časově proměnná elektrická pole

.

</aside>

<aside>
🛻

# Elektrostatický potenciál

Je-li $\nabla\times\vec E = 0$ → pak je toto pole $\vec E$ potenciální → tedy existuje skalární pole $\varphi$

$$
\vec E = -\nabla\varphi
$$

Mínus se píše → páč tam je potenciální rozdíl, který vyjadřoval práci vnějších sil při přemístění jednotkového náboje proti silám → jeli práce kladná, tak se zvětšuje potenciál náboje →opačná veličina je napětí $U =\varphi_{AB}=\frac{\Delta W}{q}$ - vyjadřuje práci sil pole

Potenciál elektrostatického pole se definuje jako

$$
\varphi = \frac{W}{q}
$$

Pokud na [rovnic]15Elektrostaticke_stacion_magne_pole.md)i zapůsobíme divergencí →využijeme definici Laplaceova operátoru ($\Delta = \nabla\cdot \nabla$) a Gaussovu větu ($\nabla\cdot \vec E = \frac{\rho}{\varepsilon_0}$)

$$
-\Delta \varphi = \frac{\rho}{\varepsilon_0}
$$

Hledání potenciálu splňující tuto rovnici na základně daných PP se nazývá základní úloha elektrostatiky

.

</aside>

<aside>
🙂

## Hustota elektrostatické energie

Máme objem nabitý s hustotou náboje $\rho$ (je to obecně závislý na poloze) → limitní přechodem ke spojitému náboji se [rovnice]15Elektrostaticke_stacion_magne_pole.md) změní na

$$
W = \frac{1}{2} \int_V\int_V \frac{\rho_1 dV_1 \rho_2dV_2}{\vert \vec r_2-\vec r_1\vert} 
$$

S využitím definice potenciálu získáme

$$
W = \frac{1}{2} \int_V \varphi \rho dV
$$

To se dá všelijak upravovat až na tvar

$$
W = \int_\infty w dV\qquad w = \frac{\varepsilon_0 E^2}{2}
$$

kde nová veličina se nazývá hustota elektrostatické energie →energii prostorově rozložených statických nábojů lze vyjádřit pomocí nábojů a jejich vzdáleností nebo ekvivalentně ze znalosti elektrostatického pole, které vytvářejí

.

</aside>

<aside>
⚖️

# Biotův-Savartův zákon

Máme krásný vzorec pro magnetickou indukci (magnetickou indukcí je popsáno magnetické pole)

$$
\vec B = \frac{1}{c^2} \vec v \times \vec E =\frac{\mu_0}{4\pi} Q \frac{\vec v\times \vec r}{r^3}
$$

→ samotný náboj nemůže vytvořit stacionární magnetické pole → nutný uzavřený stacionární proud

Když chceme získat vektor magnetické indukce vodiče s proudem →vodič se rozkrájí na úseky $dl$ (orientace se volí shodná se směrem protékajícího proudu)  a z principu superpozice se sečtou všechny příspěvky

$\vec R$ - vektor spojující počátek elementu délky vodiče a místem, kde chceme zjistit indukci

Element indukce získáme [z]15Elektrostaticke_stacion_magne_pole.md)  a bude

$$
d\vec B= \frac{\mu_0}{4\pi}\frac{dQ}{dt} \frac{d\vec l \times \vec R }{R^3}
$$

![Snímek obrazovky 2025-08-20 102306.png]15Elektrostaticke_stacion_magne_pole/Snmek_obrazovky_2025-08-20_102306.png)

Finální integrací se získá Biotův-Savartův zákon

$$
\vec B = \frac{\mu_0 I}{4\pi} \int_l \frac{d\vec l \times \vec R}{R^3} = \frac{\mu_0}{4\pi} \int_V \frac{\vec j \times \vec R}{R^3} dV \qquad \vec j = \frac{I}{S}d\vec l \qquad dV = Sd\vec l 
$$

Umožňuje to najít magnetické pole různých stacionárních proudových obvodů.

</aside>

<aside>
🎶

# Multipólový rozvoj

Motivací bylo nalezení vzorce, co popíše potenciál daného tělesa v obecném bodě v závislosti jen na vlastnostech tělesa a polohách v libovolném souřadném systému → tohle popíše multipólový rozvoj elektrostatického potenciálu (aplikace Taylorova rozvoje)

Uvažuje se objem $V^\prime$ nabitý nehomogenní nábojovou hustotou $\rho(\vec r^\prime)$ - spočítat $\varphi_A$ v bodě $A$ o polohovém vektoru $\vec r$

$\vec R = \vec r - \vec r^\prime$  - odvodí se

$$
R =\sqrt{r^2+{r^\prime}^2 +2rr^\prime\cos\Theta}
$$

$(\frac{r^\prime}{r})^2 - \frac{2r^\prime \cos \Theta}{r} = \alpha$

![Snímek obrazovky 2025-08-20 105646.png]15Elektrostaticke_stacion_magne_pole/Snmek_obrazovky_2025-08-20_105646.png)

Dále se upraví 

$$
\frac{1}{R} = \frac{1}{r} \frac{1}{\sqrt{1+(\frac{r^\prime}{r})^2 - \frac{2r^\prime \cos \Theta}{r}}} = \ldots = \frac{1}{r} \left( 1-\frac{\alpha}{2} + \ldots \right)
$$

Potenciál má totiž tvar →

$$
\varphi_A = \int_{V^\prime} k \frac{\rho(\vec r^\prime)}{R} dV^\prime
$$

dosadí se tam ten rozvoj pro $R$ a znalost $\vec r^\prime \vec r = rr^\prime \cos \Theta$ ⇒ $r^\prime \cos \Theta = \frac{\vec r^\prime \vec r}{r}$

Rozepsaný potenciál pak bude

$$
\varphi_A \approx k \int_{V^\prime}\frac{\rho}{r}dV^\prime + k \int_{V^\prime}\frac{\rho r^\prime \cos\Theta}{r^2}dV^\prime + k\int_{V^\prime}\frac{\rho {r^\prime}^2}{2r^3}(3\cos^2\Theta -1)dV^\prime
$$

A naposledy

$$
\varphi_A \approx k \frac{Q}{r}+ k \int_{V^\prime}\frac{\rho \vec r \cdot \vec r^\prime}{r^3}dV^\prime + k\int_{V^\prime}\frac{\rho }{2}\left[ \frac{3(\vec r \cdot \vec r^\prime)^2}{r^5} - \frac{{r^\prime}^2}{r^3} \right]dV^\prime
$$

## Potenciál monopólového momentu

$$
\varphi_A^{(1)} = k\frac{Q}{r}
$$

Odpovídá potenciálu bodového či sféricky symetricky rozloženého náboje

## Potenciál dipólového momentu

Zavádí se dipólový moment

$$
\vec p = \int_{V^\prime} \rho\vec r dV^\prime
$$

Pak tedy potenciál dipólového momentu je

$$
\varphi_A^{(2)} = k\frac{\vec p \cdot \vec r}{r^3}
$$

Dipólový moment elektricky neutrálního tělesa nezávisí na volbě VS.

(ukazuje se to na soustavě dvou opačně nabitých nábojů stejné velikosti)

$$
\vec p = q_i\vec r_i^\prime = q(\vec r_2^\prime - \vec r_1^\prime) = q(\vec r_2 - \vec r_1)
$$

## Potenciál kvadrupólového momentu

Zase se zavádí kvadrupólový moment (tenzor)

$$
Q_{ij} = \int_{V^\prime} \rho (3x_i^\prime x_j^\prime - \delta_{ij} x_i^\prime x_j^\prime)dV^\prime
$$

Pak potenciál kvadrupólového momentu je

$$
\varphi_A^{(3)}= \frac{k}{2r^5}Q_{ij}x_ix_j
$$

Kvadrupólový moment elektricky neutrálního tělesa s nulovým dipólovým momentem nezávisí na volně souřadnic → je možné najít takovou souřadnou soustavu → tenzor bude mít diagonální tvar 

Dalo by se pokračovat i dál → s rostoucí symetrií rozložení náboje se uplatňují vyšší multipóly

.

</aside>

<aside>
🔋

# Elektrický dipól

Vztah pro potenciál dipólu máme [ZDE]15Elektrostaticke_stacion_magne_pole.md) → elektrická intenzita bude mít tvar

$$
\vec E = -\nabla \varphi = k\left(\frac{3(\vec p \cdot \vec r)\vec r}{r^5} - \frac{\vec p}{r^3}\right)
$$

Příkladem jsou polární molekuly, které lze aproximovat dvojicí bodových nábojů stejné velikosti ve stejné vzdálenosti (je orientován od záporného ke kladnému)

Dva případy působení pole na elektrický dipól

## Homogenní pole

Zde bude moment síly

$$
\vert \vec N\vert = p E \sin\alpha
$$

Když ještě budeme brát, že síla $\vec F$ má stejný směr jako $\vec E$ (díky $\vec F = q\vec E$), pak

$$
\vec N = \vec p \times \vec E
$$

→ dochází k natáčení dipólu a konání práce

![Snímek obrazovky 2025-08-20 173821.png]15Elektrostaticke_stacion_magne_pole/Snmek_obrazovky_2025-08-20_173821.png)

## Nehomogenní pole

Odsud vyplyne 

$$
\vec F = (\vec p \nabla)\vec E
$$

![Snímek obrazovky 2025-08-20 173829.png]15Elektrostaticke_stacion_magne_pole/Snmek_obrazovky_2025-08-20_173829.png)

Atomy a molekuly mohou mít vlastní dipólové moment závislé na vnitřním uspořádání nábojů, nebo mohou mít momenty indukované - zpolarizují se ve vnějším poli; indukovaný jev je ale o několik řádů menší

Díky 

$$
q \vec l = \vec p = \alpha \vec E \qquad \alpha = 4\pi\varepsilon_0 R^3
$$

máme, že dipólový moment je přímo úměrný intenzitě, která jej vyvolala.

</aside>

<aside>
🎶

# Vektor polarizace

Popisuje prostorové rozložení elektrických dipólů 

$$
\vec P = N\vec p
$$

$N$ je hustota dipólů.

Má stejný rozměr jako plošná hustota elektrického náboje

$$
\sigma_v = \vec P \cdot \vec n \qquad \rho_v = -\nabla\cdot \vec P
$$

Plošná a objemová hustota vázaných nábojů.

.

</aside>

<aside>
🎴

# Magnetický dipól

Vektorový potenciál $\vec A$ lze na vzdálenostech mnohem větších než jsou rozměry objemu rozložit do multipólů (zase se pracuje s tím $1/R$)

$$
\vec A (\vec r) = \frac{\mu_0}{4\pi} \int_V \frac{\vec j (\vec r)}{R} dV 
$$

První člen multipólového rozvoje bude 0 → neexistence magnetického monopólu.

Druhý člen má tvar

$$
\vec A ^{(2)} = \frac{\mu_0}{4\pi r^3}\vec m\times \vec r
$$

a nadefinovali jsme magnetický dipólový moment

$$
\vec m = \frac{1}{2} \int_{V^\prime} \vec r\times \vec j dV^\prime
$$

Dipólový moment míří ve směru normály plochy.

Magnetickým dipólovým momentem rozumíme malou rovinnou smyčku s plochou $\Delta S$ a protékajícím proudem $I$ (pak $\vec m = \Delta S I$)

Platí podobné vztahy jako u elektrického dipólu

$$
\vec F = (\vec m \nabla)\vec B \qquad \vec D = \vec m \times \vec B\qquad W = -\vec m \times \vec B
$$

Silový moment natáčí magnetický moment do směru pole a nehomogenní magnetické pole vztahuje dipól do oblasti silnějšího pole

Je-li indukován vnějším pole → je orientován ve směru pole

Nabitá částice obíhající po kružnici vytváří smyčkový proud → má magnetický dipólový moment -- je vázán s momentem hybnosti částice; z QM: moment hybnosti orbitálního pohybu elektronu v atomu je kvantován (a projekce ve směru může nabývat pouze násobků $h$) → magnetický orbitální moment elektronu je také kvantován a může nabývat pouze násobků $\mu_B$ -- Bohrův magneton 

.

</aside>

<aside>
🎶

# Vektor magnetizace

Vektor magnetizace: $\vec{M} = n \vec{m}$ (pokud jsou dipóly souhlasně orientovány); obecně je to magnetický dipólový moment jednotky objemu; magnetizovaný objem: $\vec{M} \neq 0$; vektorový potenciál buzený magnetizovaným objemem je ekvivalentní potenciálu pole buzeného plošným proudem hustoty $\vec{\alpha}_m$ vázaným na povrch tělesa a objemovým proudem hustoty $\vec{j}_m$ vázaným uvnitř tělesa (magnetizační proudy): $\vec{\alpha}_m = \vec{M} \times \vec{n},$ a $\vec{j}_m = \nabla\times \vec{M}$ → je-li v objemu  $\,\vec{M}$ konstantní, pak objem budí pole totožné s polem plošného proudu na povrchu
Pokud na soustavu magnetických dipólů nepůsobí magnetické pole, tak je $\vec{M} = 0$ → jsou orientovány náhodně; po přiložení magnetického pole podél povrchu: nabité částice začnou kroužit → uvnitř materiálu se proudy vyruší, zbude pouze povrchový proud
**Průběh siločar elektrického a magnetického dipólu na velkých vzdálenostech je skutečně shodný** 

.

</aside>