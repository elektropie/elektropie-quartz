---
title: "Multi-agent code review — kód který nikdy nečte člověk"
tags: [AI-vývoj, code-review, agenti, Claude-Code, kvalita-kódu, workflow]
datum: 2025-11-08
zdroj: přepis podcastu — Václav Šlajs, Wysoft
typ: atomický
---

# Multi-agent code review — kód který nikdy nečte člověk

## Co to je
Vývojový workflow kde jeden AI agent píše kód a druhý ho okamžitě reviduje v cyklu — bez zapojení člověka do samotného procesu psaní a kontroly. Vznikl jako praktická odpověď na otázku: jak dodat dostatečnou kvalitu kódu když ho nikdo nečte?

## Jádro myšlenky
Tradiční code review předpokládá, že člověk zkontroluje co jiný člověk napsal. V AI-first vývoji toto přestává dávat smysl — pokud kód píše agent, proč by ho kontroloval člověk a ne jiný agent specializovaný na hledání chyb? Václav Šlajs nastavil smyčku: Claude Code napíše kód, commituje ho na GitHub, Code Rabbit (agent specializovaný na review) najde chyby, Claude Code je opraví, cyklus se opakuje. Cílem není vibe coding (rychlé prototypování bez záruky kvality), ale spolehlivý výstup pro interní aplikace. Klíčové omezení: pro produkční systémy s SLA 99,999% a zákaznickými daty tento přístup zatím nestačí — ale Šlajs říká, že přijde.

## Jak to funguje v praxi
Code Rabbit je SaaS nástroj natrénovaný specificky na hledání chyb v kódu — nezáleží na tom, jaký model pod ním běží, protože je optimalizovaný na jeden úkol. Claude Code workflow: napíše → commituje → Code Rabbit reviduje → Claude Code opravuje → commituje → cyklus. Člověk vstupuje jen na začátku (zadání) a na konci (schválení výstupu nebo nasazení).

## Propojení
- [[Claude Code]] — primární nástroj pro agentic vývoj; 1 milion tokenů kontext, Opus 4.6
- [[Code Rabbit]] — specializovaný review agent; analogie k senior vývojáři zaměřenému jen na kontrolu
- [[Vibe coding vs agentic vývoj]] — vibe coding je prototyp; multi-agent review je produkce
- [[Interní aplikace jako sandbox]] — nižší SLA = více prostoru pro experimenty s AI vývojem
- [[Cursor]] — alternativní IDE s AI; Wysoft ho používá pro vývojáře (40 USD/měsíc team plán)

## Otevřené otázky
- Kdy bude multi-agent review dostatečně spolehlivý pro produkční systémy s vysokým SLA?
- Jak se mění role senior vývojáře v týmu kde agenti dělají review za něj?
- Jak nastavit smyčku tak aby se nezacyklila na neopravitelné chybě?

---
*Zápisek je živý dokument — doplňuj při nových poznatcích.*
