# Vlny v disperzním a nedisperzním prostředí

<aside>
🌊

## Stojaté vlny a vlnění

Vlnění popsané rovnicí

$$
X(z) \cos(\omega t +\Phi)
$$

→ Amplituda stálého tvaru vlny $X(z)$ se harmonicky mění 

Aby se mohlo vlnění šířit v látkovém prostředí, tak tam musí existovat pružná vazba, která umožní šíření tohoto vlnění/vibrací 

.

</aside>

<aside>
🧵

# Řetízek atomů → odvození vlnové rovnice

Je to vpodstatě 1D model krystalu/diskrétní model struny/lana… → spousto závaží spojených pružinami o tuhosti $k$

Uvažují se příčné kmit → pohybová rovnice $k$-tého závaží bude

$$
m\ddot x_k = -\vert F_1\vert \sin \vartheta_1 +\vert F_2\vert \sin \vartheta_2
$$

V rovnovážném stavu jsou pružiny napjaté na napětí 

$$
T = k(a-a_0)
$$

<aside>
🧵

- Aproximace malých výchylek
    
    $$
    T \approx \vert F_{1/2}\vert
    $$
    
</aside>

Z malých výchylek ještě vyplývá aproximace sinus atd..

![Délka nenatažené pružiny je $a_0$](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_123359.png)

Délka nenatažené pružiny je $a_0$

![Snímek obrazovky 2025-08-21 123405.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_123405.png)

<aside>
🔎

## Řešení

Hledá se řešení ve tvaru

$$
\vec x (t) = \vec a e^{i\omega t}
$$

Pak se bude předpokládat → na řetízku jdou vybudit harmonické vlny

$$
a_l = \cos(kla +\varphi) \qquad k = \frac{2\pi}{\lambda}
$$

Vše se to dá do pohybové rovnice → dostaneme disperzní vztah

$$
\omega^2= \frac{4T}{am} \sin^2\frac{ka}{2}
$$

Tím pádem  $\omega$ a vlnové číslo $k$ musí tuto rovnici splňovat, aby řešení pohybových rovnic bylo ve tvaru stojaté vlny

$$
x_l(t) = \cos(kla + \varphi) \cos\omega t
$$

.

</aside>

<aside>
🔥

## Spojitá limita

Co se stane, když $a\to 0$; Zavádí se pojmy jako počet závaží na pevnou délku $L$ → $N= \frac{L}{a}$, tuhost pružiny při konst. napětí $T$ → $k^\prime = \frac{T}{a}$, délková hustota $\rho= \frac{M}{L}$ ($M$ je celková hmotnost struny)

Pak se zavede spojitý popis polohy →funkce dvou proměnných $\psi(z,t)$, která popisuje výchylku závaží na místě $z$ v čase $t$ →tahle funkce mezi závažími nabývá různých hodnot, jen na pozicích kde jsou závaží $z = la, l\in\mathbb Z$ má hodnotu

$$
x_l(t) =\psi(la,t)
$$

Dosadí se to do pohybových rovnic → udělají se kouzla 🪄 (úpravy, Lagrangeova věta o přírůstku) → pak se vzdálenost mezi dvěma závažími pošle k 0 →**Vlnová rovnice**

![Snímek obrazovky 2025-08-21 125508.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_125508.png)

$$
\rho \frac{\partial^2 \psi}{\partial t^2}(z,t) = T \frac{\partial^2 \psi}{\partial z^2}(z,t)
$$

.

</aside>

**Zvuk je podélné vlnění (podélné vlnění jde líp vybudit než příčné, páč podélné má menší efektivní tuhost)**

.

</aside>

<aside>
🔥

# Kmity struny

Při řešení těchto případů se pracuje s [vlnovou rovnicí](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3.md)

## Pevné konce

Zde se pracuje s okrajovými podmínkami (struna je na koncích nepohyblivě upevněna)

$$
\psi (0,t) = 0 = \psi (L,t) \qquad \forall t\in \mathbb R
$$

Řeší se to separací proměnných

$$
\psi(z,t) = Z(z)T(t)
$$

Po dosazení do vlnové rovnice a následným úpravám, kdy se na každou stranu dají jednotlivé funkce → obě strany musí platit vždycky a všude → musí se rovnat konstantě

$$
\frac{Z^{\prime\prime}}{Z}(z) = C = \frac{\rho}{T_{napeti}}\frac{\ddot T}{T}(t)
$$

→ dvě diferenciální rovnice + naše dvě OP (které platí pro všechny časy → podmínky na funkce $Z$ - je to nula na začátku a konci struny)

Z řešení 1 difky vypadne

$$
Z_m(z) = b_m \sin(k_mz) \qquad k_m = \frac{m\pi}{L} \qquad m\in \mathbb N
$$

Z druhé difky vypadne (díky podmínkám na konstantu $C$)

$$
T_m (t) = a_m \sin\left( \frac{m\pi}{L} \sqrt{\frac{T_{napeti}}{\rho}}t + \varphi_m\right)\qquad \omega_m = \sqrt{\frac{T_{napeti}}{\rho}}k_m
$$

zadefinovali jsme úhlovou frekvenci $\omega_m$.

Takhle jsme našli řešení $\psi_m$ tvaru stojatých vln → vlnová rovnice je ale lineární, takže i lineární kombinace těch řešení je řešení (mnoho módů tam kmitá)

$$
\psi(z,t) = \sum_{m=1}^{+\infty}\psi_m(z,t) = \sum_{m=1}^{+\infty} A_m \sin(k_mz ) \sin(\omega_m t + \varphi_m)
$$

Konstanty $A_m, \varphi_m$  jsou dány PP, vztahy mezi $k_m$ a $\omega_m$ → disperzní vztahy →dány vlastnostmi fyzikálního systému

![4 módy, které kmitají ve struně →tečkovaný jsou módy posunuté o polovinu časové periody](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_141908.png)

4 módy, které kmitají ve struně →tečkovaný jsou módy posunuté o polovinu časové periody

### Řešení počátečních podmínek

PP jsou tvořeny počáteční polohou struny a počáteční rychlostí struny (v nějakém čase) → hledá se konkrétní tvar struny - jak se to bude pohybovat

PP jsou tedy zadány funkcí počáteční polohy a funkcí počáteční rychlosti (na intervalu $\langle 0, L \rangle$)  - obě se rozepíšou v lichém rozšíření

Konkrétní řešení musí splnit

$$
\psi (z,0) = f(z) \qquad \frac{\partial \psi}{\partial t}(z,0) = g(z)
$$

Využije se tedy [obecného řešení](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3.md) → najdou se ty koeficienty

## Volné konce

$$
\frac{\partial\psi}{\partial z} (0,t) = 0 = \frac{\partial\psi}{\partial z} (L,t) \qquad \forall t\in \mathbb R
$$

Okrajové podmínky → na upevnění v daném bodě nepůsobí žádná příčná síla → struna do místa upevnění přichází vodorovně

$$
\psi(z,t) = \sum_{m=1}^{+\infty}\psi_m(z,t) = \sum_{m=1}^{+\infty} A_m \cos(k_mz ) \cos(\omega_m t + \varphi_m)
$$

.

</aside>

<aside>
🧵

### Fourierovy řady

Existuje-li periodická funkce $f: \mathbb R \to \mathbb R$ s periodou $2L$ → pak její fourierovu řadu označíme $f_F$

$$
f_F(z) = \frac{a_0}{z} + \sum_{m=1}^{+\infty} \left(a_m \cos \frac{m\pi z}{L}  + b_m \sin \frac{m\pi z }{L} \right)
$$

kde

$$
\begin{split}a_m &= \frac{1}{L} \int_{-L}^{+L} f(z) \cos \frac{m\pi z}{L} dz  \qquad m\in \mathbb N_0  \\  b_m &= \frac{1}{L} \int_{-L}^{+L} f(z) \sin \frac{m\pi z}{L} dz  \qquad m\in \mathbb N  \end{split}
$$

V bodech nespojitosti má fourierova řada tvar (pro funkci po částech diferencovatelnou)

$$
f_F (z_0) = \frac{1}{2} \left( \lim_{z\to z_{0}+}f(z) +\lim_{z\to z_{0}-}f(z)\right)
$$

Pro sudé funkce je $b_m =0$  a pro liché je $a_m = 0$

.

</aside>

<aside>
🔎

### d’Alembertovo řešení vlnové rovnice

Vlnová rovnice se uvažuje ve tvaru 

$$
\frac{\partial^2 \psi}{\partial  t^2} = v ^2 \frac{\partial^2 \psi}{\partial  z^2}
$$

→ přepíše se do tvaru a využije se d’Alembertova operátoru

$$
\left( \frac{1}{v^2} \frac{\partial^2}{\partial t^2} - \frac{\partial^2}{\partial z^2} \right) \psi = 0 \to \square\psi = 0
$$

Zavedou se nové proměnné(kvůli zjednodušení - k čemu jinýmu taky že jo)

$$
\xi = z-vt\qquad \eta = z+vt\qquad  \hat \psi(\xi,\eta) = \psi(z(\xi,\eta),t(\xi,\eta))
$$

Vlnová rovnice bude mít tvar

$$
\frac{\partial^2 \hat \psi}{\partial \xi\partial \eta} =0
$$

Tohle už má lehce nalezitelný řešení → přejde se do původní vlnové rovnice

$$
\psi(z,t)= F(z-vt)+ G(z+vt)
$$

Nazývá se to d’Alembertovo řešení vlnové rovnice → superpozice dvou proti sobě postupujících vln

![Snímek obrazovky 2025-08-21 151147.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_151147.png)

.

</aside>

<aside>
🛻

## Postupné vlny

Vycházíme z d’Alemberova řešení

Vznikají postupným rozkmitáváním bodů v pružném prostředí

Máme dvě podmínky 

- okrajová podmínka - udáváme stav systému pro danou polohu - určuje tvar řešení na okraji studovaného systému
- podmínka vyzařování - z nekonečna nepřichází žádné vlny (funkce $G = 0$)

Po dosazení těhlech podmínek dostaneme

$$
\psi(z,t) = y\left(t-\frac{z}{v}\right)
$$

V argumentu je tzv. retardovaný čas  → zlomek odpovídá době, za kterou signál vyzářený v $z=0$ došel do $z$ → vlna co pozoruje v $t$ a $z$ → vyzářila se v $t-\frac{z}{v}$

<aside>
🧵

### Harmonická postupná vlna

Zdroj kmitá harmonicky podle předpisu

$$
y(t) = A \cos(\omega t + \varphi)
$$

Vyzářená vlna je ve tvaru 

$$
\psi(z,t) = A \cos\left( \omega t - \frac{\omega}{v} z + \varphi \right)
$$

Člen $\frac{\omega}{v}$ se označuje jako vlnové číslo.

Pošlu-li proti sobě jde postupně vlny →stojaté vlnění

.

</aside>

.

</aside>

<aside>
🔋

# Energie vlnění

ZZE platí pouze na soustavy, na které nepůsobí vnější  → na úsek struny působí vnější síly od zbytku struny → energie se nebude zachovávat → **bude se přelévat**

Kinetická energie malého úseku struny (hmotnostní element je $dm = \rho dz$)

$$
dT = \frac{1}{2} dm v^2 = \frac{1}{2} \rho\left( \frac{\partial \psi}{\partial t} \right)^2 dz
$$

Dále se definuje hustota energie $\varepsilon$  (J$\cdot$m$^{-1}$), hustota kinetické energie $\tau$ a hustota potenciální energie $u$

$$
dE = \varepsilon dz\qquad \tau = \frac{1}{2} \rho\left( \frac{\partial \psi}{\partial t} \right)^2 \qquad u = \frac{1}{2} T \left(\frac{\partial \psi}{\partial z}\right)^2
$$

Hustota energie je prostým součtem obou zbývajících hustot. 

Energie v jistém úseku struny a změna této energie bude

$$
E (t) = \int_A^B \varepsilon(z,t) dz \qquad \frac{d E}{dt} = T \left[ \frac{\partial\psi}{\partial t}\frac{\partial\psi}{\partial z}\right]^B_A
$$

Zavádí se tok energie (výkon sil na struně)

$$
S(z,t) = - T\frac{\partial\psi}{\partial t}\frac{\partial\psi}{\partial z} \quad  \to \quad \frac{d E}{dt} =S(A,t) - S(B,t)
$$

Časová změna energie v daném úseku struny je dána bilancí vtoku a výtoku energie na jeho koncích (kladné $S(A)$ zvyšuje energii a kladné $S(B)$ snižuje energii)

**Poslední rovnice vyjadřuje integrální zákon zachování energie na struně.**

Diferenciální ZZE na struně má tvar (rovnice kontinuity v 1D)

$$
\frac{\partial \varepsilon}{\partial t} - \frac{\partial S}{\partial z} = 0
$$

Časová změna hustoty energie je dána prostorovou změnou toku energie v daném místě.

Všechny tyhle energetické veličiny jsou kvadratické ve výchylce $\psi$ → nebude platit princip superpozice.

<aside>
🔋

## Energie v postupné vlně

Vlna postupující v jednom směru má tvar

$$
\psi(z,t) = F(z-vt)
$$

Hustota potenciální a kinetické energie jsou stejné → $\varepsilon = 2\tau$

Tok energie v této vlně bude

$$
S = Z \left(\frac{\partial \psi}{\partial t}\right)^2\qquad Z = \sqrt{T\rho}\qquad v = \sqrt{\frac{T}{\rho}}
$$

Kde nová funkce se nazývá impedance - jak přepočítat rychlost v daném bodě na tok energie → díky impedanci (konstanta úměrnosti)

.

</aside>

.

</aside>

<aside>
😮

# Disperzní relace

Postupná vlna $\psi = A \cos(\omega t - kz)$ či $\hat \psi = Ae^{i(\omega t -kz)}$ se dá hezky nakreslit

![Vlna se pohybuje s fázovou rychlostí $v_\varphi$](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_175547.png)

Vlna se pohybuje s fázovou rychlostí $v_\varphi$

Obecně fáze takové vlny je $\varphi(t) = \omega t - kz = \varphi_0$ → když chceme znát vztah pro rychlosti pohybu místa konstantní fáze (FÁZOVÁ RYCHLOST), pak

$$
z(t) = \frac{\omega}{k}t - \frac{\varphi_0}{k} \qquad v_\varphi = \frac{\omega}{k}
$$

Parametry fázové rychlosti chceme kladné → chceme-li vybudit harmonickou postupnou vlnu v nějakém prostředí → je nutná vhodná kombinace $\omega$ a $k$

<aside>
🤦‍♂️

### Příklad

Když postupnou vlnu tvaru

$$
\psi = A \cos(\omega t - kz)
$$

dosadím do vlnové rovnice → dostanu

$$
(\omega^2-v^2k^2)\psi= 0
$$

Chceme-li netriviální řešení → musí být ta závorka nulová

</aside>

Disperzní rovnice je obecně závislost $\omega$ na $k$ (či obráceně) → dává přípustné kombinace těchto parametrů, pro které je postupná vlna řešením vlnové rovnice →udává vlnové vlastnosti daného prostředí (jaké přípustné harmonické vlny se šíří tímto prostředím)

To jak jsou závislé na sobě je dáno fyzikálním prostředím ($k(\omega), \omega(k)$) → tyhle dva inverzní vztahy mají dvě různé interpretace

- Je zdroj vlnění o úhlové frekvenci a $k(\omega)$  udává vlnové číslo vzniklého vlnění (vlnovou délku)
- V prostředí se vybudí stojaté vlny o vlnovém čísle $k$, pak $\omega(k)$ řekne, s jakou úhlovou frekvencí budou kmitat

![Snímek obrazovky 2025-08-21 202342.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_202342.png)

![Snímek obrazovky 2025-08-21 202315.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_202315.png)

<aside>
🙂

### Reaktivní prostředí

Otázka → zdroj o úhlové frekvenci v daném prostředí, ALE neexistuje žádné reálné vlnové číslo (splňující disperzní vztah) ⇒ REAKTIVNÍ PROSTŘEDÍ

Nejde zde vybudit postupnou vlnu o této úhlové frekvenci (opakem je **transparentní prostředí**)

Vlnové číslo bude komplexní v tomto prostředí (například $k= i\kappa$) → pak vlna v tomhle prostředí bude mít tvar

$$
\psi = e^{\mp \kappa z}e^{i\omega t}
$$

→ bude to exponenciálně tlumená vlna → evanescentní vlny

Definuje se zde hloubka pronikání → $\delta =\frac{1}{\kappa}$ - vzdálenost, za kterou amplituda klesne na $1/e$

</aside>

.

</aside>

<aside>
🤦‍♂️

## **Fourierova transformace**

Je to vylepšení Fourierovy řady →tam jsme měli diskrétní hodnoty frekvencí (nejmenší byla $2\pi/T$) a periodickou funkci

TEĎ budeme pracovat s neperiodickou funkcí (koeficienty $a_m,b_m$ necháme stejný) → bude to jako limita Fourierových řad kdy $T\to+\infty$ ($\omega_1 \to 0$) → z diskrétních frekvencí budeme mít spojité kontinuum

$$
f(t)= \sum_{m=0}^{+\infty}\left(  \frac{a_m(T)}{\omega_1(T)}\cos(m\omega_1 t) +\frac{b_m(T)}{\omega_1(T)}\sin(m\omega_1 t) \right) \omega_1(T)
$$

V lepším formátu se to dá zapsat

$$
f(t) = \int_0^{+\infty}A(\omega) \cos\omega t + B(\omega) \sin(\omega t)d\omega
$$

Funkce $A$ a $B$ se nazývají spektrální funkce či jen spektra funkce $f$ → udávají amplitudy harmonických vln tvořících funkci $f$

V komplexním zápise to vypadá

$$
f(t)= \int_{-\infty}^{+\infty}C(\omega) e^{i\omega t}d\omega
$$

Tamto je komplexní spektrální funkce

</aside>

<aside>
📦

# Vlnové balíky

Monochromatické vlnění - zdroj kmitající čistě harmonickým průběhem po neomezenou dobu (ideální model) → jeho spektrum má jen jednu frekvenci

Kvazimonochromatické vlny už mají tvar

$$
\psi = A(t_r) \cos(\omega_0(t_r)t-k_0(t_r)z +\varphi(t_r))
$$

Jejich vlnové balíky dostaneme jako spojitou superpozici harmonických vln

$$
x(t) = \int_{-\infty}^{+\infty}C(\omega)e^{i\omega t}d\omega \qquad \psi = x\left(t-\frac{z}{v}\right)
$$

Spektra těchto dvou stavů vypadají 

![Snímek obrazovky 2025-08-21 205845.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_205845.png)

---

**Vlnovým balíkem** rozumíme časově a prostorově ohraničené vlnění →vlnění mimo balík nemusí vymizet → hlavní část je soustředěna do omezeného intervalu (prostoro-časového)

Definují se pojmy časová a prostorová šířka balíku $\Delta t$ a $\Delta z$ - pro balík pohybující se rychlostí $v$ → $\Delta z = v \Delta t$

Vlnový balík má tvar nosné harmonické vlny o frekvenci $\omega_0$ → tahle vlna je modulována amplitudovou obálkou popsanou jistou funkcí $A$

<aside>
🎓

## Příklad

Máme obdélníkové spektrum

![Snímek obrazovky 2025-08-21 210933.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_210933.png)

Spočítá se fourierova transformace tohoto spektra [pomocí](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3.md)  → následně se zjistí jak vypadá vlna po vyslání ze zdroje

$$
\psi(z,t) = A\Delta \omega \frac{\sin\left(\frac{\Delta\omega}2{t_r}\right)}{\frac{\Delta\omega}{2}t_r} \cos(\omega_0 t - k_0 z) \qquad t_r = t\frac{z}{v}
$$

![Snímek obrazovky 2025-08-21 210946.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_210946.png)

</aside>

Obecně je frekvenční a prostorová šířka balíku k sobě v nepřímé úměře → Relace neurčitosti (ovlivňuje přenosové rychlosti - slití signálů)

$$
\Delta t\cdot \Delta \omega \geq \pi
$$

Obecný vlnový balík mění svůj tvar → rozplývá se 

V teorii se disperzní vztah rozvine do Taylora (okolo nějakého středu) → vyšší řády, které v sobě mají druhé derivace, způsobují, že postupující amplitudová obálka je ještě závislá na čase → to dělá to rozplývání 

Signály se rozplynou a překryjou → znehodnocení informací

.

</aside>

<aside>
👥

## Grupová rychlost

Superpozice dvou postupných harmonických vln v prostředí s disperzní vztahem → bereme dvě $k_1,k_2$ → sečteme harmonické vlny → dostaneme výsledek, který bude součinem dvou postupných harmonických vln

Nosná vlna, která má vysokou úhlovou frekvenci $\omega_0$ a velký vlnový číslo $k_0$

Modulační vlna, která moduluje amplitudu nosné vlny - tvoří její obálku - fázová rychlost této vlny se nazývá grupová → značí se $v_g$

$$
v_\varphi = \frac{\omega_0}{k_0} \qquad v_g = \frac{d\omega}{d k}(k_0)
$$

Pro lineární disperzní vztahy jsou tyto rychlosti stejné

![Snímek obrazovky 2025-08-21 214530.png](Vlny%20v%20disperzn%C3%ADm%20a%20nedisperzn%C3%ADm%20prost%C5%99ed%C3%AD%2024eae1c2f20880f0bfaec65cdff738f3/Snmek_obrazovky_2025-08-21_214530.png)

Fázová rychlost je obecně rychlejší než grupová → grupová rychlost přenáší informaci (ten balík) → nemůže být rychlejší než rychlost světla

.

</aside>

# Prostorové vlny

Harmonické postupné vlny jsou řešením jednorozměrné vlnové rovnice

$$
\frac{\partial^2 \psi }{\partial t ^2} = v^2 \frac{\partial ^2 \psi}{\partial z^2 }
$$

Tyhle vlny můžou jít vpravo či vlevo → v komplexním zápisu

$$
\psi = e^{i(\omega t - kz )} \qquad\psi = e^{i(\omega t + kz )} 
$$

K více rozměrným řešením přejdeme zavedeném vektor šíření $\vec n$, polohový vektor $\vec r$ a vlnový vektor $\vec k = k \vec n$ → pak postupná vlna dostane tvar → **toto je tvar harmonické rovinné postupné vlny**

$$
\psi = e^{i(\omega t - \vec k \cdot \vec r)}
$$

Zavádí se zde pojem vlnoplochy → množina bodů s konstantní hodnotou fáze (ve 2D to jsou přímky s vektorem $\vec n$→ $\frac{1}{k}(\varphi_0-\omega t ) = n_y y + n_z z$)

Rychlost postupu místa konstantní fáze je dán fázovou rychlostí

**Harmonické rovinná postupná vlna je řešením** 

$$
\frac{\partial ^2 \psi }{\partial t^2} = v^2 \Delta \psi
$$

Ve více dimenzích jsou rozměry šíření dané jednotkovým vektorem $\vec n$ → pak 

$$
\psi = F(\vec n\cdot \vec r - vt)
$$

Zobecněné d’Alembertovo řešení  bude

$$
\psi = \int_{(\vec n)} F_{(\vec n)} (\vec n \cdot \vec r - vt)d^3n
$$

<aside>
🌊

## Sférické vlny

Harmonickou postupnou vlnu se sférickými vlnoplochami popisuje

$$
\psi(r,t) = e^{i(\omega t - kr)}
$$

Doopravdy?

$$
\varphi_0 = \omega - k \sqrt{x^2+y^2+z^2}
$$

Dále se to upraví na

$$
\left(\frac{1}{k}(\omega t  -\varphi_0)\right)^2 = x^2+y^2+z^2 \quad R(t)^2 = (vt - r_0)^2 = \left(\frac{1}{k}(\omega t  -\varphi_0)\right)^2
$$

$R(t)$  se nazývá poloměr a zvětšuje se s normální fázovou rychlostí.

Sférická vlna splňuje novou vlnovou (ve smyslu úprav) rovnici

$$
\frac{\partial^2 (r\psi)}{\partial t^2} = v^2 \frac{\partial^2 (r\psi)}{\partial r^2}
$$

Je to jednorozměrná vlnová rovnice v prostorové souřadnici $r$ → můžu si vnitřek derivace označit jako $\Psi$ → získat 1D d’Alembertovo řešení → získat zpět řešení pro čistě $\psi$ → neboli řešení vlnové rovnice pro sférickou vlnu bude

$$
\psi = \frac{1}{r}F(r-vt) +\frac{1}{r}G(r+vt)
$$

První je sférická vlna šířící se z počátku a druhá je sférická šířící se z nekonečna do počátku (tahle se většinou zanedbá)

.

</aside>