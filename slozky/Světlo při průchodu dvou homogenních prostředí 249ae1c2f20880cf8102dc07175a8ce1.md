# Světlo při průchodu dvou homogenních prostředí

# **Světlo při průchodu dvou homogenních prostředí**

<aside>
🪓

## Rozhraní dvou homogenních prostředí

Rozhraní dvou homogenních prostředí → nespojitost optické homogenity

Skoková změna $\varepsilon,\mu,\sigma$.

Odvození jen pro stacionární rozhraní → řeší se [MR v integrálním tvaru](Formy%20popisu%20sv%C4%9Btla,%20Vliv%20materi%C3%A1lu,%20rovinn%C3%A9%20vlny%20249ae1c2f20880f7b60fdd56f0c24ccd.md) (ale pro materiálové prostředí) → objemové integrály jdou k nule → u povrchových integrálů nás zajímá jen integrace přes horní a dolní podstavu

### Magnetická indukce

Řeší se to tím, že se na rozhraní představí válec

$$
\oint_S \mathcal B \cdot dS = 0
$$

Dále se tenhle integrál rozdělí na příspěvky z pláště (půjde k nule) a obou podstav → po vyjádření $dS$ jako $\nu d\text{S}$ → dostaneme vztah

$$
\nu\cdot(\mathcal B_2 - \mathcal B_1) =0 
$$

![Snímek obrazovky 2025-08-12 155827.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_155827.png)

Skalární součin kolmých složek je roven nule

**Spojitost kolmých složek magnetické indukce**

### Elektrická intenzita

Řeší se to využitím virtuální smyčky a řešením rovnice

$$
\oint_l \mathcal E\cdot dl = -\dfrac{\partial}{\partial t}\int_S \mathcal B \cdot dS
$$

Integrál přes plochu půjde k 0 → dostaneme vztah

$$
\nu\times(\mathcal E_2-\mathcal E_1)=0
$$

![Snímek obrazovky 2025-08-12 160935.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_160935.png)

Vektorový součin rovnoběžných složek je roven nule.

**Tečné složky elektrického pole jsou na rozhraní dvou homogenních prostředí spojité**

### Shrnutí vztahů

$$
\begin{split}\nu \times (\mathcal E_2-\mathcal E_1)= 0 &\qquad \nu\cdot (\mathcal D_2 - \mathcal D_1)= \rho_S\\
\nu \times (\mathcal H_2 - \mathcal H_1)= \mathcal J_S &\qquad \nu \cdot (\mathcal B_2 - \mathcal B_1)= 0\end{split}
$$

kde označení $S$ znamená plošná. Pro dielektrika a vodiče s konečnou vodivostí jsou tyhle plošné proměnné nulové.

### Nestacionární rozhraní

Když  se rozhraní bude pohybovat rychlostí $v$ (rovnoběžná s normálou rozhraní) → vztahy pak budou vypadat

$$
\begin{split}\nu \times (\mathcal E_1 - \mathcal E_2) - (\nu \cdot v)(\mathcal B_1 - \mathcal B_2) &= 0 \\\nu \times (\mathcal H_1 - \mathcal H_2) + (\nu \cdot v)(\mathcal D_1 - \mathcal D_2) &= \mathcal J_S \\\nu \cdot (\mathcal B_1 - \mathcal B_2) &= 0 \\\nu \cdot (\mathcal D_1 - \mathcal D_2) &= \rho_S\end{split}
$$

</aside>

<aside>
⚖️

## Snellovy zákony

Odvozují se z okrajové podmínky pro **tečné** složky elektrického pole

$$
\mathcal E_1^T + \mathcal E_1^{T\prime} = \mathcal E_2^T
$$

Plynou z toho dvě podmínky(prvně se využije komplexního zápisu $\mathcal E = \text{Re}(\mathbf E e^{\ldots})$) (musí to platit v každém čase a místě rozhraní) → **podmínka spojitosti okamžitého průběhu fází** a **podmínku spojitosti amplitud**    

![Snímek obrazovky 2025-08-12 162318.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/c6168071-4d58-4199-a9fd-e04113894a7d.png)

Z **podmínku spojitosti amplitud plynou [Fresnelovy vzorce](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1.md)**

$$
\begin{split}e^{i(\omega_1 t - k_1 \cdot r)} &= e^{i(\omega_2 t - k_2 \cdot r)} = e^{i(\omega_1^\prime t - k_1^\prime \cdot r)}\\\mathbf E_1^{T} + \mathbf E_1^{T\prime} &= \mathbf E_2^T\end{split}
$$

Pro Snellovy zákony nás zajímá jen první podmínka → ta má platit v každém místě a čase → získáme $\omega_1 = \omega_2 =\omega_1^\prime$ → frekvence odražené, prošlé a dopadající vlny jsou stejné

Nakonec nám zbývá rovnost $k_1\cdot r= k_2\cdot r =k_1^\prime\cdot r$ → zvolíme si počátek v rovině rozhraní pak poslední rovnost je nula → vlnové vektory dopadající, prošlé a odražené jsou v jedné rovině → **rovina dopadu** (kolmá na rovinu rozhraní)

Když se pak zajímáme o **Snellovy zákony odrazu a lomu**, tak dostaneme  (uvedené vztahy berou i komplexní hodnoty a vlnové číslo se dá zapsat jako $k_j = k_0 n_j$)

$$
k_1 r \sin \theta_1 = k_1^\prime r\sin \theta_1^\prime = k_2 r \sin \theta_2
$$

### Vektorová forma

$$
\begin{split}(\mathbf k_1^\prime - \mathbf k_1)\times \nu = \mathbf0 \\ (\mathbf k_2 - \mathbf k_1)\times \nu = \mathbf0  \\\end{split}
$$

Tečné složky vlnových vektorů jsou na rozhraní spojité.

![Snímek obrazovky 2025-08-12 170400.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/9e9c4428-13be-4ab7-93e1-7271a334d23c.png)

### Skalární forma

$$
\begin{split}\theta_1 &= \theta_1^\prime\\ n_1 \sin \theta_1 &= n_2 \sin \theta_2\end{split}
$$

</aside>

<aside>
🔋

## Fresnelovy vzorce

Dopadající vektor pole se rozkládá do dvou vhodných komponent → **p (TM polarizace)** a **s (TE polarizace)**

![U **s** je vektor E kolmý k rovině dopadu a u **p** je zase paralelní](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_171048.png)

U **s** je vektor E kolmý k rovině dopadu a u **p** je zase paralelní

Fresnelovy vzorce se odvozují z **podmínky spojitosti komplexních amplitud**

$$
\mathbf E_1^{T} + \mathbf E_1^{T\prime} = \mathbf E_2^T
$$

### Amplitudové koeficienty

![Snímek obrazovky 2025-08-12 172820.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_172820.png)

Amplitudové koeficienty transmise/reflexe se liší pro TE a TM polarizace

$$
\begin{split}t_S &= \frac{E_{S2} }{E_{S1}} = \dfrac{2\sin\theta_2\cos\theta_1}{\sin(\theta_1+\theta_2)} \\r_S &= \frac{E_{S1}^\prime }{E_{S1}} = \dfrac{-\sin(\theta_1-\theta_2)}{\sin(\theta_1+\theta_2)} \\t_P &= \frac{E_{P2} }{E_{P1}} = \dfrac{2\cos \theta_1\sin\theta_2}{\sin(\theta_1+\theta_2)\cos(\theta_1-\theta_2)} \\r_P &= \frac{E_{P1}^\prime }{E_{P1}} = \dfrac{\tan(\theta_1-\theta_2)}{\tan(\theta_1+\theta_2)} \end{split}
$$

### Přenos energie rozhraním

Výkonové poměry vztahujeme k toku definovanou hraniční plochou, která je dána normálovými složkami Poyntingova vektoru

$$
\mathcal S \cdot \nu = \frac{n}{2}\sqrt{\frac{\varepsilon_0}{\mu_0}}\vert E^2\vert \cos \theta
$$

Dají se pak odvodit vztahy pro výkonovou reflektanci a transmitanci.

$$
\begin{split}R &= \vert r \vert^2 \\T &= \left( \frac{n_2}{n_1} \right)\frac{\cos\theta_2}{\cos \theta_1}\vert t \vert ^2\end{split}
$$

Pro bezeztrátové prostředí platí

$$
R+ T= 1
$$

![Snímek obrazovky 2025-08-12 172525.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_172525.png)

</aside>

<aside>
<img src="https://www.notion.so/icons/arrow-up-line_green.svg" alt="https://www.notion.so/icons/arrow-up-line_green.svg" width="40px" />

## Kolmý dopad

Když $\theta_1,\theta_2 \to 0$ (paraxiální přiblížení), pak nezáleží na polarizaci (vztahy pro **s** a **p** jsou stejné) → zákon lomu má tvar $n_1\theta_1=n_2\theta_2$ a dá se odvodit vztah pro výkonovou reflektanci

$$
r=r_S = \dfrac{n_1-n_2}{n_1+n_2} \qquad\to\qquad R = \left(\dfrac{n_1-n_2}{n_1+n_2} \right)^2
$$

Při odrazu od hustšího prostředí se mění fáze odraženého světla o $\pi$

Při odrazu od řidšího prostředí se fáze odraženého světla nemění

![Snímek obrazovky 2025-08-12 174010.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_174010.png)

</aside>

<aside>
⛹️

## Totální odraz

Ze Snella plyne, že při průchodu z hustšího do řidšího → $\sin\theta_2 = 1$ → podmínka pro mezní úhel pak bude 

$$
\sin\theta_{1T} = \frac{n_2}{n_1}
$$

Pro větší úhly dopadu se světlo pouze odráží a do řidšího se světelný tok reálně nešíří.

Prošlá vlna se dá popsat pomocí evansecentních vln (není hned nula, ale rychle to klesá)

$$
\mathbf E_2(r) = \mathbf E_2 e^{-i(k_0n_2x\sin\theta_2 + k_0n_2z \cos\theta_2)}
$$

[Frustrated internal reflection](https://www.youtube.com/watch?v=fOqF6t6A4O4#ddg-play) - když je těsně za přechodem zase další prostředí - tak ty evanescentní vlny rychle neumřou, ale stihnou se přehodit na “druhý břeh”

Vlna v řidším prostředí se šíří pouze podél rozhraní - v kolmém je exp. tlumena a soufázová.

![Snímek obrazovky 2025-08-12 181131.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_181131.png)

</aside>

<aside>
🕶️

## Brewsterův úhel

Z [čtvrtého vztahu](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1.md) plyne, že může být nulová reflexe pro **p** polarizaci

![Snímek obrazovky 2025-08-12 174948.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_174948.png)

Podmínkou splnění je $\theta_1+\theta_2 = \frac{\pi}{2}$ → dosazením do [zákona lomu](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1.md) dostaneme 

$$
\tan \theta_{1B} = \frac{n_2}{n_1}
$$

Vlnový vektor odražené a lomené vlny svírají $90^{\circ}$ úhel

Odražená vlna má tedy pouze **s** polarizaci a dochází ke skokové změně fáze u **p** polarizace (sekundární vyzařování dipólů se dostává druhé poloroviny, kde je opačné znaménko a fáze vlny se proto mění na opačnou).

Složitá interpretace: BÚ je stav, kdy dipóly materiálu, které jsou zodpovězené za vznik odražené vlny, kmitají ve směru odražené vlny, a tudíž nemohou vyzařovat 

![Snímek obrazovky 2025-08-12 175457.png](Sv%C4%9Btlo%20p%C5%99i%20pr%C5%AFchodu%20dvou%20homogenn%C3%ADch%20prost%C5%99ed%C3%AD%20249ae1c2f20880cf8102dc07175a8ce1/Snmek_obrazovky_2025-08-12_175457.png)

</aside>

# Světelné svazky

Většina informací je [ZDE](Otev%C5%99en%C3%A9%20rezon%C3%A1tory%20241ae1c2f208806cacdbcac45ac21383.md).

Optický svazek - prostorově omezená vlna

| Kolik přenáší výkonu | Jaký je poloměr |
| --- | --- |
| 86% | $w$ |
| 98.9% | $1.5w$ |
| 99.9% | $2w$ |