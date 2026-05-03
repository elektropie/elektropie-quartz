# Poznámky z ČSN EN IEC 62305-1 ed. 3 — Ochrana před bleskem, Část 1: Obecné principy

> POZOR! Jde o poznámky pro osobní studium. Parafrázovaný obsah, nejde o kopií originálu. Ověř proti originální ČSN! 
> ČSN EN IEC 62305-1 ed. 3, Česká agentura pro standardizaci, vydání 2025, idt IEC 62305-1:2024.
> Nahrazuje ČSN EN 62305-1 ed. 2 ze září 2011. Souběžná platnost do **2027-10-31**.

---

## Změny oproti předchozímu vydání (ed. 2 → ed. 3)

Toto třetí vydání přináší tyto technické změny:
- Příloha D nově odkazuje na soubor IEC 62561 (součásti LPS).
- Management rizika zavádí pojem **typy ztrát s ohledem na veřejný prostor**.
- Zaveden nový pojem **četnost škod (F)** — roční počet škod způsobených LEMP ve vnitřních systémech.
- Rázové proudy způsobené bleskem jsou přesněji definovány pro dimenzování SPD v napájecích a telekomunikačních systémech.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+62305-1+ed+3+změny+nová+norma)

---

## 1 Rozsah platnosti

Norma stanoví obecné zásady ochrany staveb před bleskem — včetně jejich instalací, vybavení a osob.

**Mimo rozsah platnosti jsou:**
- železniční systémy;
- instalace ve vozidlech, lodích, letadlech, na moři;
- podzemní vysokotlaká potrubí;
- potrubní, elektrická a telekomunikační vedení oddělená od stavby;
- jaderné elektrárny.

Pro tyto případy platí soubor IEC 62305 jako minimální požadavek. Parametry bleskového proudu z tohoto dokumentu lze prozatím použít i pro instalace na moři (do vydání dalších informací CIGRE).

> POZNÁMKA 2: Ochrana větrných elektráren — viz IEC 61400-24.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+62305-1+rozsah+platnosti+blesk)

---

## 2 Citované dokumenty

- **IEC 62305-3:2024** — Hmotné škody na stavbách a ohrožení života
- **IEC 62305-4:2024** — Elektrické a elektronické systémy ve stavbách

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+IEC+62305+soubor+normy+blesk)

---

## 3 Termíny a definice

### Typy blesků a výbojů

**3.1 Úder blesku do země** — elektrický výboj atmosférického původu mezi oblakem a zemí, složený z jednoho nebo více výbojů.

**3.2 Sestupný blesk** — začíná sestupným lídrem z oblaku k zemi. Skládá se z prvního krátkého výboje, po němž mohou následovat další výboje a dlouhý výboj. Typický pro rovinaté území a nižší stavby.

**3.3 Vzestupný blesk** — začíná vzestupným lídrem z uzemněného objektu do oblaku. Typický pro exponované nebo vyšší stavby. Skládá se z prvního dlouhého výboje s možnými superponovanými vícenásobnými výboji.

**3.4 Výboj blesku** — jednotlivý elektrický výboj v úderu blesku do země.

**3.5 Krátký výboj blesku** — část blesku odpovídající impulznímu proudu, doba půltýlu T₂ zpravidla < 2 ms.

**3.6 Dlouhý výboj blesku** — část blesku odpovídající kontinuálnímu proudu, doba trvání T_LONG zpravidla 2 ms až 1 s.

**3.7 Vícenásobné výboje blesku** — blesk složený průměrně ze 3–4 výbojů, typický interval mezi nimi ~50 ms (hlášeny i desítky výbojů s intervaly 10–250 ms).

**3.8 Místo úderu** — místo, kde blesk zasáhne zemi nebo stavbu. Blesk může mít více než jedno místo úderu.

### Parametry bleskového proudu

**3.9 Bleskový proud (i)** — proud tekoucí v místě úderu.

**3.10 Vrcholová hodnota proudu (I)** — maximální hodnota bleskového proudu.

**3.11 Průměrná strmost čela proudu (di/dt)** — maximální proud I dělený časem čela T₁.

**3.12 Doba čela impulzního proudu (T₁)** — virtuální parametr: 1,25násobek časového intervalu mezi okamžiky dosažení 10 % a 90 % vrcholové hodnoty.

**3.13 Efektivní počátek impulzního proudu (O₁)** — průsečík časové osy s přímkou 10%–90%, předcházející okamžiku 10 % hodnoty o 0,1 T₁.

**3.14 Doba půltýlu impulzního proudu (T₂)** — časový interval mezi O₁ a okamžikem poklesu proudu na 50 % vrcholové hodnoty.

**3.15 Doba trvání blesku (T)** — celková doba průtoku bleskového proudu v místě úderu.

**3.16 Doba trvání proudu dlouhého výboje (T_LONG)** — od 10 % vrcholové hodnoty při nárůstu do 10 % při poklesu kontinuálního proudu.

**3.17 Náboj blesku (Q_FLASH)** — časový integrál bleskového proudu za celou dobu trvání blesku.

**3.18 Náboj krátkého výboje (Q_SHORT)** — časový integrál proudu impulzu.

**3.19 Náboj dlouhého výboje (Q_LONG)** — časový integrál proudu dlouhého výboje.

**3.20 Měrná energie (W/R)** — časový integrál druhé mocniny bleskového proudu za celou dobu trvání. Představuje energii rozptýlenou v jednotkovém odporu.

**3.21 Měrná energie impulzního proudu** — integrál i² za dobu trvání impulzu (příspěvek dlouhého výboje je zanedbatelný).

### Stavby a vedení

**3.22 Chráněná stavba** — jakékoli místo, zařízení nebo budova vhodná k pobytu osob, zvířat, materiálů nebo systémů. Může být částí rozsáhlejší stavby.

**3.23 Vedení** — vnější elektrické nebo telekomunikační vedení připojené ke chráněné stavbě.

**3.26–3.29 Typy úderů podle polohy:**
- Úder do stavby (S1)
- Úder v blízkosti stavby (S2)
- Úder do vedení (S3)
- Úder v blízkosti vedení (S4)

**3.30 Nebezpečná událost** — jakýkoli úder blesku do nebo v blízkosti stavby nebo vedení, který může způsobit škody.

**3.31 Nebezpečné jiskření** — jiskra uvnitř stavby způsobující požár, výbuch nebo mechanické/chemické účinky.

### Systémy a ochrana

**3.32 Elektrický systém** — součásti nízkonapěťového napájení.

**3.33 Elektronický systém** — citlivá zařízení (telekomunikace, počítače, řídicí systémy, rádiové systémy, výkonová elektronika).

**3.34 Vnitřní systémy** — elektrické a elektronické systémy stavby (smějí být i na střeše, jsou-li vnitřně spojeny).

**3.35 Hmotná škoda** — poškození stavby mechanickými, tepelnými, chemickými nebo výbušnými účinky blesku.

**3.36 Zranění osob** — zranění nebo ztráty na životech způsobené bleskem.

**3.37 Porucha vnitřních systémů** — poškození způsobené LEMP.

**3.38 LEMP (elektromagnetický impulz způsobený bleskem)** — rychle se měnící elektromagnetické pole vyzařované bleskem, způsobující přepětí odporovou, indukční a kapacitní vazbou.

**3.39 Přepětí** — přechodový jev způsobený LEMP na vedeních nebo zařízeních (přepětí nebo nadproud nebo obojí).

**3.40 LPZ — Zóna ochrany před bleskem** — zóna se stanoveným elektromagnetickým prostředím blesku. Hranice LPZ nemusí být fyzické stěny.

**3.41 Četnost škod (F)** — roční počet škod způsobených LEMP ve vnitřních systémech stavby (nový pojem v ed. 3).

**3.42 Přípustná četnost škody (F_T)** — maximální tolerovatelná hodnota četnosti škod.

**3.43 Ztráta (L)** — průměrná hodnota stanoveného druhu ztráty v důsledku nebezpečné události.

**3.44 Ztráta veřejného významu** — ztráta s důsledky přesahujícími účastníky rozhodovacího procesu (zranění lidí, nedostupnost veřejných služeb, škody prostředí).

**3.47 Riziko (R)** — pravděpodobná průměrná roční ztráta způsobená bleskem ve stavbě.

**3.48 Přípustné riziko (R_T)** — maximální přípustná hodnota rizika pro chráněnou stavbu.

**3.49 LPL — Hladina ochrany před bleskem** — číslo vztažené k souboru parametrů bleskového proudu, odpovídající pravděpodobnosti nepřekročení maximálních a minimálních návrhových hodnot.

**3.51 LP — Ochrana před bleskem** — opatření k ochraně staveb, jejich systémů a osob, obecně sestávající z LPS a SPM.

**3.52 LPS — Systém ochrany před bleskem** — úplný systém ke snížení zranění osob a hmotných škod. Skládá se z vnějšího a vnitřního LPS.

**3.53 Vnější LPS** — část LPS: jímací soustava + soustava svodů + uzemňovací soustava.

**3.54 Vnitřní LPS** — část LPS: pospojování proti blesku nebo elektrické oddělení od vnějšího LPS nebo obojí.

**3.55 Jímací soustava** — kovové prvky (tyče, stožáry, mřížová soustava, závěsná lana) k zachycení blesků.

**3.56 Soustava svodů** — vedení bleskového proudu z jímací soustavy do uzemňovací soustavy.

**3.57 Uzemňovací soustava** — svedení a rozptyl bleskového proudu do země.

**3.58 Vnější vodivé části** — prodloužené kovové prvky vstupující do stavby nebo z ní vystupující (potrubí, kovové části kabelů, kanály), schopné přenášet bleskový proud.

**3.59 Pospojování proti blesku (EB)** — připojení oddělených kovových částí k LPS za účelem snížení rozdílů potenciálů způsobených bleskovým proudem.

**3.61 SPM — Ochranná opatření před přepětím** — opatření k ochraně vnitřních systémů před LEMP.

**3.62 Elektromagnetické stínění** — stínění z vodivého materiálu ke snížení pronikání časově proměnného elektromagnetického pole.

**3.63 SPD — Přepěťové ochranné zařízení** — přístroj s alespoň jedním nelineárním prvkem, určený k omezení přechodných přepětí a svedení rázových proudů.

**3.64 Koordinovaný SPD systém** — soubor vhodně zvolených a koordinovaných SPD ke snížení poruchovosti vnitřních systémů.

**3.66 Dostatečná vzdálenost (s)** — vzdálenost mezi vodičem přenášejícím bleskový proud a jinými vodivými částmi, při níž nedochází k nebezpečnému jiskření.

**3.67 Bezpečná vzdálenost (d_s)** — vzdálenost od stínění LPZ, při níž platí stínicí účinek LPZ vůči magnetickému poli.

> NP: V legislativních dokumentech ČR se vyskytuje termín „bezpečný odstup" ve stejném smyslu.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+LEMP+LPZ+LPS+SPD+termíny+definice+blesk)

---

## 4 Parametry bleskového proudu

Parametry jsou podrobně uvedeny v přílohách A–E. Přehled:
- Příloha A — statistické parametry (CIGRE data)
- Příloha B — časové funkce pro analytické účely
- Příloha C — simulování pro zkušební účely
- Příloha D — zkušební parametry pro součásti LPS
- Příloha E — rázové proudy v různých místech instalace

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+parametry+bleskového+proudu+LPL+měrná+energie)

---

## 5 Škody způsobené bleskem

### 5.1 Škody na stavbě

#### 5.1.1 Obecně

Blesk může způsobit škody na stavbě, jejích uživatelích a vybavení, poruchy vnitřních systémů, a tyto účinky se mohou šířit i do okolí stavby.

Relevantní vlastnosti stavby z hlediska účinků blesku zahrnují: konstrukci, účel, obyvatele a vybavení, připojená vedení (vč. FV systémů, nabíječek vozidel, mobilních sítí), existující ochranná opatření a rozsah nebezpečí.

#### 5.1.2 Účinky blesku na různé typy staveb

| Typ stavby | Hlavní účinky blesku |
|---|---|
| Obytný dům | Průraz elektrických instalací, požár, porucha elektroniky (TV, PC, telefony) |
| Zemědělská stavba | Požár, kroková napětí, porucha řízení větrání a krmení zvířat |
| Divadlo, hotel, škola | Poškození osvětlení, panika, zpoždění požárního zásahu |
| Banka, IT firmy | + ztráta komunikace, dat, počítačové poruchy |
| Nemocnice, věznice | + problémy se záchranou imobilních osob |
| Průmysl | Škody závislé na výrobní náplni |
| Muzea, kostely | Ztráta nenahraditelného kulturního dědictví |
| Telekomunikace, elektrárny | Nepřípustná ztráta veřejných služeb |
| Chemické závody, rafinérie | Požár s dopadem na prostředí |
| Pyrotechnické provozy | Výbuch s dopadem na okolí |
| Povrchový/podzemní důl | Kroková napětí, riziko výbuchu metanu |

#### 5.1.3 Zdroje a příčiny škod

Příčinou všech škod je bleskový proud. Čtyři situace podle místa úderu:

- **S1** — úder do stavby
- **S2** — úder v blízkosti stavby
- **S3** — úder do vedení připojeného ke stavbě
- **S4** — úder v blízkosti vedení připojeného ke stavbě

Důsledky jednotlivých zdrojů:

**S1 (úder do stavby):**
- přímé mechanické poškození, požár nebo výbuch (plazmový oblouk, odporový ohřev, oblouková eroze);
- požár nebo výbuch způsobený jiskrami od přepětí odporovou nebo indukční vazbou;
- zranění osob;
- porucha vnitřních systémů (LEMP).

**S2 (úder v blízkosti stavby):**
- porucha vnitřních systémů (LEMP).

**S3 (úder do vedení):**
- požár nebo výbuch od přepětí přenesených vedeními;
- zranění osob dotykovými napětími;
- poruchy vnitřních systémů.

**S4 (úder v blízkosti vedení):**
- poruchy vnitřních systémů od indukovaných přepětí.

> POZNÁMKA 2: Pouze jiskry nesoucí bleskový proud se považují za schopné vyvolat požár.
> POZNÁMKA 3: Blesky do přívodních potrubí připojených k přípojnici pospojování stavby nezpůsobí škody (viz IEC 62305-3).

**Čtyři typy škod:**
- **D₁ₜ** — zranění osob odporovou a indukční vazbou
- **D₁_D** — zranění osob přímým zásahem
- **D₂** — nebezpečné jiskření (požár, výbuch, mechanické/chemické účinky)
- **D₃** — přepětí způsobující poruchy vnitřních systémů

### 5.2 Typy ztrát

Pro účely souboru IEC 62305 se uvažují tři typy ztrát:

| Typ | Popis | Příčiny |
|---|---|---|
| **L₁** | Ztráta v důsledku zranění osob | D₁_D, D₁ₜ, D₂, D₃ (kde porucha systémů ohrožuje životy — nemocnice, výbušné prostory) |
| **L₂** | Ztráta hmotného poškození stavby a vybavení | D₂, D₃ (výbušné prostory) |
| **L₃** | Ztráta poruch vnitřních systémů | D₃ |

Vztah zdroj škody → příčina → typ ztráty (tabulka 2 normy):

| Místo úderu | Zdroj | Příčiny → Ztráty |
|---|---|---|
| Stavba | S1 | D₁ₜ→L₁, D₁_D→L₁, D₂→L₁L₂, D₃→L₁ᵃL₂ᵇ |
| V blízkosti stavby | S2 | D₃→L₁ᵃL₂ᵇ |
| Vedení ke stavbě | S3 | D₁ₜ→L₁, D₂→L₁L₂, D₃→L₁ᵃL₂ᵇ |
| V blízkosti vedení | S4 | D₃→L₁ᵃL₂ᵇ |

ᵃ Pouze pro stavby, kde porucha systémů ohrožuje životy (výbušná prostředí, nemocnice).
ᵇ Pouze pro stavby s nebezpečím výbuchu.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+škody+blesk+zdroj+S1+S2+S3+S4+riziko)

---

## 6 Potřeba ochrany před bleskem

### 6.1 Riziko a četnost

**Riziko R** se hodnotí s ohledem na bezpečnost osob (L₁) a stavby/vybavení (L₂). Vyjadřuje se jako součet složek rizika:

> Složka rizika = N (počet nebezpečných událostí/rok) × P (pravděpodobnost škody) × L (míra ztráty)

**Četnost škod F** se hodnotí pro vybavení stavby s ohledem na dostupnost poskytovaných služeb (L₃). Vyjadřuje se jako součet dílčích četností: N × P pro každý zdroj škody.

### 6.2 Potřeba ochrany pro snížení rizika R

Ochrana je potřebná, pokud: **R > R_T**

V tom případě musí být přijata opatření, která sníží R ≤ R_T. Hodnoty přípustného rizika R_T stanovují příslušné orgány.

### 6.3 Potřeba ochrany pro snížení četnosti škod F

Ochrana je potřebná, pokud: **F > F_T**

Je-li služba ve veřejném zájmu, hodnoty F_T stanovují příslušné orgány. V ostatních případech rozhoduje vlastník nebo správce stavby.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+riziko+blesk+potřeba+ochrany+výpočet)

---

## 7 Ochranná opatření

### 7.1 Obecně

Nejčastěji používaná ochranná opatření:
- ke snížení zranění osob elektrickým proudem (viz 7.2);
- ke snížení hmotných škod (viz 7.3);
- ke snížení poruch vnitřních systémů (viz 7.4).

Doplňkově lze použít **TWS (výstražný systém před bouřkou)** dle IEC 62793 jako preventivní opatření aktivované varováním — zkrácení doby vystavení hrozbě nebo odpojení vedení:
- zastavení nebezpečné činnosti;
- přemístění osob do bezpečného úkrytu;
- odpojení od vnějších služeb a přechod na místní zdroje.

> POZNÁMKA: Oblast sledovaná TWS musí pokrývat nejen stavbu, ale i příchozí vedení (kvůli S3 a S4).

### 7.2 Ochranná opatření ke snížení zranění osob elektrickým proudem

- LPS (systém ochrany před bleskem);
- dostatečná izolace exponovaných vodivých části;
- pospojování;
- fyzická omezení a varovná upozornění.

### 7.3 Ochranná opatření ke snížení hmotných škod

LPS dle IEC 62305-3.

Doplňkově: požární ucpávky, hasicí přístroje, hydranty, hlásiče, hasicí zařízení.

### 7.4 Ochranná opatření ke snížení poruch vnitřních systémů

SPM (ochranná opatření před přepětím) dle IEC 62305-4:
- uzemňovací a spojovací opatření;
- elektromagnetické stínění;
- trasování vedení;
- izolační rozhraní;
- koordinované SPD systémy.

> POZNÁMKA 1: Pro zdroj S1 jsou ochranná opatření účinná pouze u staveb chráněných LPS nebo s průběžnou kovovou/železobetonovou konstrukcí (náhodný LPS).

### 7.5 Výběr ochranných opatření

Výběr provede návrhář ochranných opatření s vlastníkem stavby s ohledem na typ stavby, výši škod, technické a ekonomické aspekty a výsledky posouzení rizik (viz IEC 62305-2).

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+ochranná+opatření+blesk+LPS+SPM+TWS)

---

## 8 Základní kritéria pro ochranu staveb

### 8.1 Obecně

Ideální ochrana = uzavřít chráněnou stavbu do uzemněného dokonale vodivého stínění s odpovídající tloušťkou a zajistit pospojování vedení na vstupu do stínění. V praxi to není vždy možné ani ekonomicky efektivní.

Nedostatečnost stínění (spojitost nebo tloušťka) umožňuje bleskovému proudu proniknout a způsobit hmotné škody, ohrožení života nebo poruchy vnitřních systémů.

### 8.2 Hladiny ochrany před bleskem (LPL)

Ochranná opatření musí být navržena pro stanovený soubor parametrů bleskového proudu — hladinu ochrany před bleskem (LPL). Norma definuje **čtyři LPL (I až IV)**. LPL se volí jako výsledek posouzení rizik.

**Maximální hodnoty parametrů blesku dle LPL (tabulka 3):**

| Parametr | Označení | Jednotka | LPL I | LPL II | LPL III/IV |
|---|---|---|---|---|---|
| **První kladný krátký výboj** | | | | | |
| Vrcholový proud | I | kA | 200 | 150 | 100 |
| Náboj | Q_SHORT | C | 100 | 75 | 50 |
| Měrná energie | W/R | MJ/Ω | 10 | 5,6 | 2,5 |
| Časové parametry | T₁/T₂ | μs/μs | 10/350 | 10/350 | 10/350 |
| **První záporný krátký výboj** (jen výpočty) | | | | | |
| Vrcholový proud | I | kA | 100 | 75 | 50 |
| Průměrná strmost | di/dt | kA/μs | 100 | 75 | 50 |
| Časové parametry | T₁/T₂ | μs/μs | 1/200 | 1/200 | 1/200 |
| **Následný krátký výboj** | | | | | |
| Vrcholový proud | I | kA | 50 | 37,5 | 25 |
| Průměrná strmost | di/dt | kA/μs | 200 | 150 | 100 |
| Časové parametry | T₁/T₂ | μs/μs | 0,25/100 | 0,25/100 | 0,25/100 |
| **Dlouhý výboj** | | | | | |
| Náboj | Q_LONG | C | 200 | 150 | 100 |
| Doba trvání | T_LONG | s | 0,5 | 0,5 | 0,5 |
| **Blesk** | | | | | |
| Náboj | Q_FLASH | C | 300 | 225 | 150 |

**Minimální hodnoty parametrů blesku a poloměry valivé koule (tabulka 4):**

| Parametr | LPL I | LPL II | LPL III | LPL IV |
|---|---|---|---|---|
| Minimální vrcholový proud (kA) | 3 | 5 | 10 | 16 |
| Poloměr valivé koule r (m) | 20 | 30 | 45 | 60 |

**Pravděpodobnosti pro mezní parametry bleskového proudu (tabulka 5):**

| Pravděpodobnost | LPL I | LPL II | LPL III | LPL IV |
|---|---|---|---|---|
| Parametry < maximální hodnoty (tab. 3) | 0,99 | 0,98 | 0,95 | 0,95 |
| Parametry > minimální hodnoty (tab. 4) | 0,99 | 0,97 | 0,91 | 0,84 |

> POZNÁMKA: Maximální hodnoty LPL I jsou sníženy na 75 % pro LPL II a na 50 % pro LPL III a IV (lineárně pro I, Q, di/dt; kvadraticky pro W/R). Časové parametry se nemění.

### 8.3 Zóny ochrany před bleskem (LPZ)

Ochranná opatření (LPS, stínicí vodiče, magnetická stínění, SPD) definují zóny LPZ. Čím vyšší číslo zóny, tím nižší parametry elektromagnetického prostředí.

| Zóna | Charakteristika |
|---|---|
| **LPZ 0A** | Přímý úder blesku + plné elektromagnetické pole. Systémy vystaveny plnému nebo dílčímu bleskovému proudu. |
| **LPZ 0B** | Žádný přímý úder, plné elektromagnetické pole. Systémy vystaveny dílčím rázovým proudům. |
| **LPZ 1** | Rázový proud omezen rozdělením proudu + izolačním rozhraním nebo SPD. Prostorové stínění může zeslabit elektromagnetické pole. |
| **LPZ 2, ..., n** | Rázový proud dále omezen dalším dělením + dalšími SPD nebo stíněními. |

Chráněná stavba musí být v LPZ, jejíž elektromagnetické charakteristiky jsou kompatibilní se schopností stavby vydržet škody, která mají být omezena.

### 8.4 Ochrana staveb

#### 8.4.1 Ochrana pro snížení hmotných škod a ohrožení života

Chráněná stavba musí být uvnitř LPZ 0B nebo vyšší — dosáhne se pomocí LPS (vnějšího + vnitřního).

**Funkce vnějšího LPS:**
- zachytit úder blesku (jímací soustava);
- bezpečně svést bleskový proud do země (soustava svodů);
- rozptýlit proud do země (uzemňovací soustava).

**Funkce vnitřního LPS:** zabránit nebezpečnému jiskření uvnitř stavby pomocí pospojování nebo dostatečné vzdálenosti s.

Čtyři hladiny LPS (I–IV) obsahují pravidla závislá na hladině (poloměr valivé koule, rozpětí mříže) i nezávislá (průřezy, materiály).

Ochrana před dotykovým a krokovým napětím:
- vně stavby: izolace neživých částí, mřížová uzemňovací soustava, výstražné tabulky nebo fyzická omezení;
- uvnitř stavby: pospojování vedení v místech vstupu.

#### 8.4.2 Ochrana pro snížení poruch vnitřních systémů

Ochrana proti LEMP musí omezovat:
- přepětí od S1 (odporová a indukční vazba);
- přepětí od S2 (indukční vazba);
- přepětí přenesená vedeními od S3 a S4;
- elektromagnetická pole přímo svázaná s přístrojem.

Chráněný systém musí být v LPZ 1 nebo vyšším, pomocí SPM: magnetická stínění, vhodné trasování spojů (minimalizace indukčních smyček), pospojování na hranicích LPZ, SPD nebo izolační rozhraní.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+LPL+LPZ+hladina+ochrana+blesk+parametry)

---

## Příloha A (informativní) — Parametry bleskového proudu

### A.1 Úder blesku do země

Dva základní typy blesků:
- **Sestupné** — rovinaté území, nižší stavby; první krátký výboj + eventuálně další výboje + dlouhý výboj.
- **Vzestupné** — exponované nebo vyšší stavby; první dlouhý výboj + eventuálně superponované impulzy.

Parametry vzestupných blesků jsou nižší než u sestupných — považují se za pokryté maximálními hodnotami sestupných blesků.

### A.2 Parametry bleskového proudu (CIGRE data)

Statistické rozdělení parametrů se předpokládá jako **lognormální**. Poměr polarit: **10 % kladných, 90 % záporných** (místně se může lišit).

Klíčové hodnoty pro LPL I (přibližné 1% hodnoty z CIGRE statistik):

**První kladný výboj:**
- I = 200 kA, Q_FLASH = 300 C, Q_SHORT = 100 C, W/R = 10 MJ/Ω, di/dt = 20 kA/μs
- Odvozená doba čela: T₁ ≈ 10 μs, doba půltýlu: T₂ ≈ 350 μs
- Q_LONG = Q_FLASH – Q_SHORT = 200 C, T_LONG ≈ 0,5 s

**První záporný výboj (pro indukční vazbu):**
- I = 100 kA, di/dt = 100 kA/μs → T₁ ≈ 1,0 μs, T₂ ≈ 200 μs

**Následný záporný výboj (pro indukční jiskření):**
- I = 50 kA, di/dt = 200 kA/μs → T₁ ≈ 0,25 μs, T₂ ≈ 100 μs

### A.4 Poloměr valivé koule

Elektrogeometrický model (IEEE):

> **r = 10 × I^0,65** (m)

kde r je poloměr valivé koule (m) a I je vrcholový proud (kA). Blesky s vrcholovými hodnotami vyššími než odpovídající minimální I budou zachyceny jímacími soustavami.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+parametry+blesk+CIGRE+poloměr+valivá+koule)

---

## Příloha B (informativní) — Časové funkce bleskového proudu

Matematický tvar proudu prvních kladných/záporných a následných záporných výbojů dle rovnice B.1:

> i(t) = (I/k) × (t/τ₁)¹⁰ / (1 + (t/τ₁)¹⁰) × exp(−t/τ₂)

Parametry pro různé typy výbojů a LPL (tabulka B.1):

| Výboj | LPL | I (kA) | k | τ₁ (μs) | τ₂ (μs) |
|---|---|---|---|---|---|
| První kladný | I | 200 | 0,93 | 19 | 485 |
| První kladný | II | 150 | 0,93 | 19 | 485 |
| První kladný | III–IV | 100 | 0,93 | 19 | 485 |
| První záporný | I | 100 | 0,986 | 1,82 | 285 |
| První záporný | II | 75 | 0,986 | 1,82 | 285 |
| Následný záporný | I | 50 | 0,993 | 0,454 | 143 |
| Následný záporný | II | 37,5 | 0,993 | 0,454 | 143 |

Dlouhý výboj = obdélníkový tvar s průměrným proudem I a dobou T_LONG dle tabulky 3.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+tvar+proudu+blesk+impulz+10+350+1+200)

---

## Příloha C (informativní) — Simulování bleskového proudu pro zkušební účely

### C.1 Obecně

Při úderu blesku do stavby se proud rozděluje. Zkušební parametry musí zohledňovat toto rozdělení — vyžaduje se systémová analýza.

### C.2 Zkušební parametry — první kladný výboj a dlouhý výboj (tabulka C.1 a C.2)

**Tabulka C.1 — První kladný výboj:**

| Parametr | LPL I | LPL II | LPL III–IV | Tolerance |
|---|---|---|---|---|
| Vrcholový proud I (kA) | 200 | 150 | 100 | ±10 % |
| Náboj Q_SHORT (C) | 100 | 75 | 50 | −10 až +20 % |
| Měrná energie W/R (MJ/Ω) | 10 | 5,6 | 2,5 | −10 až +45 % |

**Tabulka C.2 — Dlouhý výboj:**

| Parametr | LPL I | LPL II | LPL III–IV | Tolerance |
|---|---|---|---|---|
| Náboj Q_LONG (C) | 200 | 150 | 100 | ±20 % |
| Doba trvání T_LONG (s) | 0,5 | 0,5 | 0,5 | ±10 % |

> První záporný výboj se pro zkušební účely nepoužívá.

### C.3 Simulování strmosti proudu v čele výboje (tabulka C.3)

**Tabulka C.3 — Strmosti proudu:**

| Výboj | LPL I (kA/μs) | LPL II (kA/μs) | LPL III–IV (kA/μs) | Tolerance |
|---|---|---|---|---|
| První kladný | 20 | 15 | 10 | ±30 % |
| Následné záporné | 200 | 150 | 100 | ±30 % |

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+zkušební+parametry+blesk+LPS+simulování+proud)

---

## Příloha D (informativní) — Zkušební parametry pro součásti LPS

### D.1 Obecně

Příloha D stanoví parametry pro laboratorní simulování účinků bleskového proudu na součásti LPS. Používá se společně se souborem IEC 62561.

### D.2 Parametry proudu v místě úderu

Každý parametr blesku má tendenci dominovat jiným mechanismem poruchy:

| Parametr | Mechanismus poruchy |
|---|---|
| Vrcholový proud I | Mechanické účinky, přeskok jiskřišť |
| Náboj Q | Tepelné účinky v místě připojení oblouku (eroze) |
| Měrná energie W/R | Odporový ohřev, mechanické namáhání |
| Strmost di/dt | Indukční napěťové jiskření |
| Doba trvání T | Přenos tepla, ablace materiálu |

**Zkušební parametry pro jednotlivé součásti LPS (tabulka D.1 — výběr):**

| Součást | Hlavní problém | Klíčový parametr (LPL I) |
|---|---|---|
| Jímač (tenká kovová oplechování) | Eroze od oblouku | Q_LONG = 200 C, T < 1 s |
| Jímač a svod (odporový ohřev) | Ohřev W/R | W/R = 10 000 kJ/Ω (adiabaticky) |
| Jímač a svod (mechanické účinky) | Elektrodyn. síly | I = 200 kA, W/R = 10 000 kJ/Ω |
| Spojovací součásti (komb. účinky) | Tepelné + mech. + oblouk | I = 200 kA, W/R = 10 000 kJ/Ω, T < 2 ms |
| Zemniče | Eroze v místě připojení | Q_LONG = 200 C, T < 1 s |

### D.3 Rozdělení proudů

Pro odhad parametrů v konkrétních součástech se používají koeficienty:
- **kc** — pro vnější LPS (viz IEC 62305-3, 6.3);
- **ke, k'e** — pro vnější vodivé části a vedení (viz příloha E).

Vztahy pro výpočet dílčích parametrů:
- I_p = k × I
- Q_p = k × Q
- (W/R)_p = k² × (W/R)
- (di/dt)_p = k × (di/dt)

### D.4 Účinky bleskového proudu způsobující možné škody

#### D.4.1 Tepelné účinky

**Odporový ohřev** — jev je adiabatický (krátká doba trvání, teplo se nestihne rozptýlit). Oteplení vodiče:

> θ − θ₀ = (1/α) × [exp((W/R × α × ρ₀) / (q² × γ × Cw)) − 1]

Fyzikální charakteristiky materiálů LPS (tabulka D.2):

| Materiál | ρ₀ (Ωm) | α (1/K) | γ (kg/m³) | Cw (J/kgK) |
|---|---|---|---|---|
| Hliník | 29 × 10⁻⁹ | 4,0 × 10⁻³ | 2 700 | 908 |
| Měkká ocel | 120 × 10⁻⁹ | 6,5 × 10⁻³ | 7 700 | 469 |
| Měď | 17,8 × 10⁻⁹ | 3,92 × 10⁻³ | 8 920 | 385 |
| Nerezová ocel (austen.) | 700 × 10⁻⁹ | 0,8 × 10⁻³ | 8 000 | 500 |

Oteplení vodičů dle průřezu a W/R (tabulka D.3 — výběr, W/R = 10 MJ/Ω):

| Průřez (mm²) | Hliník (K) | Měkká ocel (K) | Měď (K) | Nerezová ocel (K) |
|---|---|---|---|---|
| 25 | 283 | — | 98 | — |
| 50 | 52 | 211 | 22 | 938 |
| 100 | 12 | 37 | 5 | 188 |

**Tepelné poškození v místě připojení oblouku** (model anodového/katodového úbytku napětí):

> V = (u_{a,c} × Q) / (γ × (Cw × (θs − θu) + Cs))

kde ua,c = anodový/katodový úbytek napětí (několik desítek voltů), Q = náboj, Cs = skupenské teplo tavení.

#### D.4.2 Mechanické účinky

Elektrodynamická síla mezi dvěma rovnoběžnými vodiči délky l ve vzdálenosti d:

> F(t) = (μ₀/2π) × i(t)² × l/d = 2 × 10⁻⁷ × i(t)² × l/d (N)

Maximální mechanické zatížení u typických LPS konstrukcí nastane **po zániku proudového impulzu** (perioda vlastních kmitů > délka impulzu). Plastická deformace nastane, překročí-li zatížení mez pružnosti materiálu.

#### D.4.3–D.4.5 Další účinky

- **Kombinované účinky:** tepelné + mechanické současně; při ohřevu na měknutí materiálu může nastat explozivní roztavení.
- **Jiskření:** tepelné (vysoká hustota proudu + nízký tlak na rozhraní) a napěťové (indukované napětí > průrazné napětí).
- **Ionizace půdy:** při vysokých proudech intenzita el. pole překročí ionizační hodnotu → zdánlivé zvětšení průměru zemniče → snížení impedance uzemnění.

### D.5 Součásti LPS a zkušební parametry

**Jímače:** nejkritičtější je dlouhý výboj (eroze), krátké výboje jsou pro ně zanedbatelné.

**Svody — odporový ohřev:** adiabatický proces, první kladný výboj (konzervativní přístup).

**Svody — mechanické účinky:** jsou-li elektrodynamické síly nižší než třecí síly uchycovacích prvků, laboratorní zkouška není nutná (pokud jsou splněny požadavky na průřez).

**Spojovací součásti:** tepelné + mechanické působení nelze oddělit — celkové namáhání se aplikuje jedinou elektrickou zkouškou (I, W/R, T).

**Zemniče:** klíčový je náboj dlouhého výboje a doba trvání 0,5–1 s.

### D.6 SPD — Přepěťové ochranné zařízení

**Jiskřiště** — pět parametrů (I, Q, T, W/R, di/dt) se musí aplikovat jedinou elektrickou zkouškou.

**Varistory z oxidů kovů** — dva typy poruchy:
- přetížení (příliš velká absorbovaná energie) → klíčový parametr: náboj Q;
- přeskok/popraskání (I překročí kapacitu) → klíčové: vrcholová hodnota I a doba trvání T.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+zkušební+parametry+součásti+LPS+jímač+svod+zemnič+SPD)

---

## Příloha E (informativní) — Rázové proudy způsobené bleskem v různých místech instalace

### E.1 Obecně

Pro dimenzování vodičů, SPD a přístrojů je nutné stanovit přepětí v konkrétních místech instalace. Přepětí vznikají z (dílčích) bleskových proudů a indukčních účinků do smyček.

### E.2 Rázové proudy — úder do stavby (S1)

#### E.2.1 Rozdělení proudu mezi vedení a uzemňovací soustavu

Při přímém úderu do stavby se bleskový proud I dělí mezi uzemňovací soustavu, n vnějších vodivých části a vedení:

> **IF = ke × I / n**

kde ke = koeficient rozdělení proudu (přibližně **ke = 0,5** pro stavby s uzemňovací soustavou dle IEC 62305-3).

#### E.2.3 Rázové proudy ve vodičích vedení připojených ke stavbě

Nestíněná vedení — každý z n' vodičů nese část:

> I'F = k'e × I, kde k'e = ke / n'

Stíněná vedení:

> k'e = ke × RS / (n' × RS + RC)

kde RS = odpor stínění/m, RC = odpor vnitřního vodiče/m.

#### E.2.4 Proudy ve vnitřních vedeních připojených k LPS

Jsou-li vnitřní vedení připojena k LPS i k přípojnici pospojování:

> I'F = k'c × I, kde k'c = kc / (2 n')

### E.3 Rázové proudy — úder do vedení (S3)

Proud se šíří z místa úderu oběma směry vedení. Hodnoty I'F závisejí na typu vedení, stínění, izolaci, počtu vodičů a zemnicí impedanci stožárů.

### E.6 Obvyklé rázové proudy (tabulky E.1 a E.2)

**Tabulka E.1 — Sítě nízkého napětí (na každý vodič vedení):**

| LPL | S3 (10/350 μs) kA | S4 (8/20 μs) kA | S2 (8/20 μs) kA | S1 indukční (8/20 μs) kA | S1 odporová (10/350 μs) kA |
|---|---|---|---|---|---|
| III–IV | 5 | 2,5 | 0,1 | 5 | 12,5 |
| II | 7,5 | 3,75 | 0,15 | 7,5 | 18,75 |
| I | 10 | 5 | 0,2 | 10 | 25 |

**Tabulka E.2 — Telekomunikační sítě (na každý vodič vedení):**

| LPL | S3 (10/350 μs) kA | S4 (8/20 μs) kA | S2 (8/20 μs) kA | S1 indukční (8/20 μs) kA | S1 odporová (10/350 μs) kA |
|---|---|---|---|---|---|
| III–IV | 1 | 0,3 | 0,1 | 5 | 1,25 |
| II | 1,5 | 0,45 | 0,15 | 7,5 | 1,875 |
| I | 2 | 0,6 | 0,2 | 10 | 2,5 |

> Pro stíněné vodiče lze hodnoty z tabulek E.1 a E.2 snížit koeficientem 0,5.
> Pro SPD zkoušení typ I a II (IEC 61643-11) se používají impulzy 10/350 μs a 8/20 μs.
> SPD navržené pro S1 (indukční vazba) obvykle pokrývají i potřebu pro S2 a S4.

[🔍 Hledat na elektrika.cz](https://www.google.com/search?q=(site:elektrika.cz+OR+site:diskuse.elektrika.cz+OR+site:zdroje.elektrika.cz+OR+site:elektrika.tv)+rázový+proud+blesk+SPD+dimenzování+vedení+nn)

---

## Křížové odkazy

- [[ČSN EN IEC 62305-2]] — Ochrana před bleskem, Část 2: Management rizik
- [[ČSN EN 62305-3 ed. 2]] — Ochrana před bleskem, Část 3: Hmotné škody na stavbách
- [[ČSN EN IEC 62305-4]] — Ochrana před bleskem, Část 4: Elektrické a elektronické systémy ve stavbách
- [[EN IEC 62561]] — Součásti systému ochrany před bleskem (LPSC)
- [[EN IEC 62793]] — Výstražné systémy před bouřkou (TWS)
- [[IEC 61400-24]] — Větrné elektrárny, ochrana před bleskem
- [[EN IEC 61643]] — Přepěťové ochrany nízkého napětí
