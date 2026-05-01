---
title: "Druhý mozek — Karpathyho dvouvrstvý model znalostní báze"
tags: [druhý-mozek, Obsidian, Karpathy, agenti, knowledge-management, PKM]
datum: 2025-11-08
zdroj: přepis podcastu — Václav Šlajs + Filip; + post Andreje Karpathyho
typ: MOC
---

# Druhý mozek — Karpathyho dvouvrstvý model znalostní báze

## Co to je
Model organizace znalostí navržený Andrejem Karpathym, který rozděluje informace do dvou vrstev: surová data a vyčištěná znalostní báze připravená pro AI agenty. Navazuje na širší koncept „druhého mozku" (Building a Second Brain, Tiago Forte), ale přidává klíčový prvek — explicitní přípravu dat pro nelidské čtenáře.

## Jádro myšlenky
Většina firem i jednotlivců hromadí data, ale nerozlišuje mezi surovou informací a znalostí. Surová data (přepisy porad, tikety, interní dokumenty, emaily) jsou pro agenty nepoužitelná bez předzpracování — agent je jen tak dobrý, jak jsou data která dostane. Karpathyho model říká: potřebuješ dvě oddělené složky. První je vstupní proud — tam padají věci tak jak přicházejí. Druhá je čistá znalostní báze — tam AI přepracovává surové vstupy do strukturovaných zápisků, ze kterých mohou agenti spolehlivě čerpat. Zajímavé je, že Karpathy poprvé nezveřejnil kód, ale pouze popis konceptu — s tím, že agent si kód postaví sám. Tím demonstroval princip: záměr (intent) nahrazuje detailní specifikaci. Stačí popsat co chceš, ne jak to udělat.

## Jak to funguje v praxi
Václav Šlajs to zatím řeší přes Claude Projects: ručně vytahuje informace ze systémů a dává je do projektů, kde má napojeny MCP konektory na systémy kde je pořádek. Filip zmínil systém PACT (Projects, Agents, Context, Tools) kde se složky pojmenují a AI dostane readme popis — agenti pak pracují řádově lépe. Obsidian je příklad nástroje který toto umožňuje nativně: textové soubory lokálně = plný přístup pro AI agenty.

## Propojení
- [[Obsidian]] — nástroj postavený na principu textových souborů; AI ho dokáže číst, prohledávat a reorganizovat
- [[MCP protokol]] — technický most mezi AI agentem a externími systémy s daty
- [[Datový nepořádek ve firmách]] — Microsoft Copilot nad nepořádným SharePointem nefunguje; garbage in, garbage out
- [[GitLab Handbook]] — vzorový příklad firmy která má všechny interní znalosti v jednom přístupném místě
- [[Incident management s AI]] — praktická ukázka jak předzpracovaná data ušetří čas při řešení výpadků

## Otevřené otázky
- Jak automatizovat přesun ze surové vrstvy do čisté bez manuálního zásahu?
- Jak poznat, která surová data stojí za zpracování a která jsou jen šum?
- Kdy AI nástroje zvládnou samy rozpoznat zastaralá data a vyřadit je z báze?

---
*Zápisek je živý dokument — doplňuj při nových poznatcích.*
