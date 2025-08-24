# Speciální teorie relativity

<aside>
❔

# Proč?

Na přelomu 19. a 20. století → Maxwelky a Galileiho princip už dávno byli → Galileiho transformaci prostoru a času nebylo možné aplikovat na Maxwelky (MR nejsou vůči této transformaci kovariantní - při přechodu k veličinám z druhé souřadné soustavy nezachovávají formálně svůj tvar) → tím pádem MR nejsou v souladu s Newtonovými pohybovými zákony 

Lorentzovy transformace (vůči MR jsou kovariantní) → čas přestává být absolutní neměnnou veličinou ve všech inerciálních systémech

1905 - Bern - Albert Einstein - *Elektrodynamik bewegter Körper* → objasňuje vznik magnetického pole coby relativistický důsledek pole elektrostatického

</aside>

STR je formulována pro 1 částici (resp. soubor více neinteragujících částic, které můžou být v elektromagnetickém poli)

<aside>
⚖️

# Postuláty STR

1. **(Postuluje se) Existence IVS:** Existuje IVS, vůči které se každý hmotný bod pohybuje rovnoměrně přímočaře nebo je v klidu (volny - nepůsobí na něj žádné pravé síly) → Existuje VS ve které platí 1 NZ
2. **Einsteinův princip relativity/princip relativity**: Všechny fyzikální děje probíhají ve všech IVS podle stejných zákonů
3. **Princip konstantní rychlosti světla**: Ve vakuu se šíří světlo vůči všem IVS rovnoměrně přímočaře konečnou rychlostí $c$ = 299 792 458 ms$^{-1}$
</aside>

<aside>
🛻

# Lorentzovy transformace

Nutnost, aby mezi dvěma VS platily postuláty → aby měl 1. NZ smysl → IVS se transformuje na IVS → rovnoměrně přímočarý pohyb se transformuje na to stejný → musí to být transformace lineární (předpoklad homogenity a izotropie času a prostoru) + transformace musí mít stejný tvar tam i zpět (změna znaménka rychlosti)

Obrázek dobře popisuje náš začátek → S$^\prime$ se pohybuje rychlostí $\vec V$ (BÚNO - $\vec V = (V,0,0)$) a v $t=t^\prime=0$ splývají jejich počátky → díky tomu se stačí koukat na změnu v $x$ a $t$ (takže $y,z=y^\prime,z^\prime$)

V počátku obou soustav jsou hodiny, které měří časy ($t$ a $t^\prime$)

V S se světlo šíří po vlnoplochách: $x^2+y^2+z^2 = c^2t^2$ → podobně v S$^\prime$

![Snímek obrazovky 2025-08-19 140206.png](Speci%C3%A1ln%C3%AD%20teorie%20relativity%2024eae1c2f20880208e7fff546d49e791/Snmek_obrazovky_2025-08-19_140206.png)

<aside>
❓

## Odvození

Veličiny v obou soustavách jsou lineárně provázané

$$
\begin{split}x^\prime &= Ax + Bt\\y^\prime &= y\\z^\prime &= z\\t^\prime &= Cx + Dt\\\end{split}
$$

Kdybychom měli jen Galileiho transformaci

$$
\begin{split}x^\prime &= x - vt\\y^\prime &= y\\z^\prime &= z\\t^\prime &= t\\\end{split}
$$

Z ní bychom dostali 

$$
x^2+y^2+z^2 +v^2t^2-2xvt = c^2 {t^{\prime}}^2
$$

No jo, ale tohle nedopovídá rovnici vlnoplochy → musíme změnit na

$$
\begin{split}x^\prime &= x - vt\\y^\prime &= y\\z^\prime &= z\\t^\prime &= \alpha x + t\\\end{split}
$$

Následně dostaneme 

$$
x^2+y^2+z^2 +v^2t^2 {\color{red}{-2xvt}} = c^2\alpha^2x^2 + {\color{red}2 c^2t\alpha x} + c^2t^2 
$$

Položí se $\alpha = -\frac{v}{c^2}$

$$
y^2+z^2+x^2\left(1-\frac{v^2}{c^2}\right) = c^2t^2 \left(1-\frac{v^2}{c^2}\right)
$$

Pak Lorentzovy transformace budou

$$
x^\prime = \frac{x-vt}{\sqrt{1-(\frac{v}{c})^2}}\qquad t^\prime = \frac{t- \frac{v}{c^2}x}{\sqrt{1-(\frac{v}{c})^2}}
$$

Označuje se pak ($\gamma$ -  Lorentzův faktor)

$$
\beta = \frac{v}{c} \qquad \gamma = \frac{1}{\sqrt{1-\beta^2}}
$$

$$
\begin{split}x^\prime &= \gamma(x - vt)\\y^\prime &= y\\z^\prime &= z\\t^\prime &= \gamma\left(t-\frac{\beta}{c} x\right)\\\end{split}
$$

</aside>

Tvar Lorentzových transformací (podrobně v [Odvození](Speci%C3%A1ln%C3%AD%20teorie%20relativity%2024eae1c2f20880208e7fff546d49e791.md)) je

$$
\begin{pmatrix}
ct\\
x\\
y\\
z\\
\end{pmatrix}^\prime = \begin{pmatrix}
\gamma & -\beta\gamma & 0& 0\\
-\beta\gamma  & \gamma & 0& 0\\
0&0&1&0\\
0&0&0&1\\

\end{pmatrix} \begin{pmatrix}
ct\\
x\\
y\\
z\\
\end{pmatrix}
$$

Inverzní transformace musí mít tvar (díky principu relativity $v^\prime = -v, \gamma^\prime=\gamma$)

$$
\begin{pmatrix}
ct\\
x\\
y\\
z\\
\end{pmatrix} = \begin{pmatrix}
\gamma & \beta\gamma & 0& 0\\
\beta\gamma  & \gamma & 0& 0\\
0&0&1&0\\
0&0&0&1\\

\end{pmatrix} \begin{pmatrix}
ct\\
x\\
y\\
z\\
\end{pmatrix}^\prime
$$

<aside>
😮

## Důsledky

### Relativita soumístnosti a současnosti

2 události ($t_i,x_i,y_i,z_i$) s časovým intervalem mezi nimi $\Delta t= t_2-t_1$, vzdálenost mezi nimi $\Delta l = \sqrt{\Delta x^2+\Delta y^2+\Delta z^2 }$, kde $\Delta x = x_2-x_1$ 

Vzhledem k tomu, že je LT lineární → dají se zjistit tyhle veličiny v soustavě S$^\prime$

$$
\Delta t^\prime = \gamma(\Delta t - (\beta/c) \Delta x ) \qquad \Delta x^\prime = \gamma(\Delta x - v \Delta t )
$$

Jsou-li tyto dvě události soumístné v S ($\Delta x =0$) → nemusí být soumístné v soustavě S$^\prime$

Pokud se události stanou v S ve stejném čase ($\Delta t =0$) → nemusí být současné v S$^\prime$

### Dilatace času

Čas probíhá v těchto dvou soustavách různě → v pohybující se soustavě čas probíhá pomaleji než v nehybné(klidová soustava spojená s částicí - S) - tzv. dilatace času

Všechny události soumístné → $\Delta x^\prime =0$ - vlastní čas částice bude $t^\prime =\tau$

$$
\tau = \gamma^{-1}t = t\sqrt{1-\frac{v^2}{c^2}}
$$

### Kontrakce délek

Délky se v klidové a pohybující soustavě liší (pohybující se těleso se vzhledem ke klidové soustavě zkracuje)

$$
\Delta x^\prime = \gamma \Delta x \qquad l = \frac{1}{\gamma} l_0
$$

$l_0$ je vlastní délka (v klidové soustavě)

### Skládání rychlostí

Platí [toto](Speci%C3%A1ln%C3%AD%20teorie%20relativity%2024eae1c2f20880208e7fff546d49e791.md) a stejný pro $\Delta x$ a $\Delta t$ (jen mínuska jdou pryč) —> udělý se poměr $\Delta x$ a $\Delta t$ a označí se $\frac{\Delta x}{\Delta t} = u_x$ a podobně $u_x^\prime$ a získá se

$$
u_x = \frac{u_x^\prime+v}{1+\frac{u^\prime v}{c^2}}
$$

pro rychlosti v $y$ a $z$ (velice podobné vztahy)

$$
u_y^\prime = \frac{u_y}{\gamma(1-\frac{\beta u_x}{c})}
$$

.

</aside>

.

</aside>

<aside>
🇫🇷

## Minkowského prostoročas a interval

Narozdíl od Newtonovské mechaniky se nezachovává délka $\Delta l$, ale tzv.  interval $\Delta s$

Bude platit 

$$
(\Delta s )^2 = c^2 (\Delta t )^2- (\Delta l )^2 = c^2 (\Delta t^\prime )^2- (\Delta l^\prime )^2
$$

je to invariantní → **$(\Delta s)^2$ může být kladný/záporný/nulový**

Zavádí se čtyřrozměrný prostor událostí = prostoročas, se souřadnicemi $ct,x,y,z$ - čtyř-vektor polohy

**Minkowského prostoročas** (pseudoeukleidovský prostor)

Světobody - body v prostoročasu (reprezentují události charakterizované časem těmi souřadnicemi)

Interval může být

- $(\Delta s)^2 >0$ interval je časupodobný
    - Vždy existuje VS, v níž lze 2 události učinit soumístnými;
    - Spojuje kauzálně souvislé události
    - příčinné spojení → platí sled příčin a následků
- $(\Delta s)^2 =0, \Delta l = \pm c\Delta t$ - interval je světlopodobný
    - spojuje události vyslání a přijetí světelného paprsku
- $(\Delta s)^2 <0$ - interval je prostoru podobný
    - vždy existuje VS, v níž lze 2 události učinit součásnými
    - tyto dvě události nemohou být v příčinném spojení a nemohou se týkat stejného tělesa
    - spojuje události, které nemohou být kauzálně spojeny, protože existuje IVS, kde jsou současné

![Vpravo je prostoročasový diagram](Speci%C3%A1ln%C3%AD%20teorie%20relativity%2024eae1c2f20880208e7fff546d49e791/Snmek_obrazovky_2025-08-19_160315.png)

Vpravo je prostoročasový diagram

.

</aside>

<aside>
🔋

## Relativistická energie a hybnost

Důležitý pojem je relativistická hmotnost - charakterizuje setrvačný odpor vůči urychlování: $m = \gamma m_0$

Relativistická hybnost: 

$$
\vec p = m\vec v = \gamma m_0 \vec v
$$

Pro relativistickou sílu platí $\vec F = \frac{d\vec p}{dt}$

Vztah mezi energii a hybností 

$$
E^2 = p^2c^2 + m_0^2c^4
$$

Pro nehmotné částice platí $E =  p c = h\nu$

Nakonec známej vztah $E = mc^2$

.

</aside>