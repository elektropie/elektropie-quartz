// Extrahuje elektrotechnické pojmy z content/*.md a vytváří content/rejstrik/
// Bez externího API — čistě regex/textová analýza.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');
const REJSTRIK_DIR = path.join(CONTENT_DIR, 'rejstrik');

// ----- helpers -----

const DIACRITICS = {
  á:'a',č:'c',ď:'d',é:'e',ě:'e',í:'i',ň:'n',ó:'o',ř:'r',š:'s',ť:'t',ú:'u',ů:'u',ý:'y',ž:'z',
  Á:'a',Č:'c',Ď:'d',É:'e',Ě:'e',Í:'i',Ň:'n',Ó:'o',Ř:'r',Š:'s',Ť:'t',Ú:'u',Ů:'u',Ý:'y',Ž:'z',
};

function slugify(text) {
  return text
    .replace(/[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/g, (c) => DIACRITICS[c] || c)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function googleLink(term) {
  const q = encodeURIComponent(
    `(site:elektrika.cz OR site:diskuse.elektrika.cz OR site:zdroje.elektrika.cz OR site:elektrika.tv) ${term}`
  );
  return `https://www.google.com/search?q=${q}`;
}

function electropediaLink(term) {
  return `https://www.electropedia.org/iev/iev.nsf/SearchView?SearchView&SearchOrder=4&Query=${encodeURIComponent(term)}`;
}

function quartzSlug(filePath) {
  return path.relative(CONTENT_DIR, filePath).replace(/\.md$/, '').replace(/\\/g, '/');
}

// Odstraní markdown formátování ze stringu
function stripMd(s) {
  return s
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`/g, '')
    .trim();
}

// Vrátí true pokud řetězec vypadá jako elektrotechnický pojem (ne číslo, ne příliš krátký)
const SKIP_WORDS = new Set([
  'poznámka','příloha','článek','norma','strana','obrázek','tabulka','příklad',
  'viz','také','nebo','pokud','podle','které','tento','tato','toto','všechny',
  'hodnota','podmínky','požadavky','systém','část','bod','odstavec','písmeno',
  'note','see','and','for','the','with',
]);

function isValidTerm(raw) {
  const t = stripMd(raw).trim();
  if (t.length < 4 || t.length > 80) return false;
  if (/^\d/.test(t)) return false;           // začíná číslem → číslo článku
  if (/^[A-Z]{1,3}\d/.test(t)) return false; // zkratka s číslem (EN61140)
  const lower = t.toLowerCase();
  if (SKIP_WORDS.has(lower)) return false;
  if (/^[a-z]{1,2}$/i.test(t)) return false; // jednopísmenné zkratky
  return true;
}

// ----- extrakce z jednoho souboru -----

function extractTerms(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const titleMatch = raw.match(/^title:\s*"?(.+?)"?\s*$/m);
  const sourceTitle = titleMatch ? titleMatch[1] : path.basename(filePath, '.md');

  // odstraní frontmatter a markdown links/images
  const body = raw
    .replace(/^---[\s\S]*?---\n/, '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[🔍[^\]]*\]\([^)]+\)/g, ''); // přeskočí existující Google/Electropedia linky

  const found = new Map(); // term → definition

  // --- Pravidlo 1: **pojem** — definice (pomlčka za tučným) ---
  const ruleInline = /\*\*([^*\n]{4,70})\*\*\s*[—–]\s*([^\n*]{10,300})/g;
  let m;
  while ((m = ruleInline.exec(body)) !== null) {
    const term = stripMd(m[1]);
    const def = stripMd(m[2]).replace(/[,;]$/, '').trim();
    if (isValidTerm(term) && def.length >= 10) {
      found.set(term, def);
    }
  }

  // --- Pravidlo 2: Definice v závorce za tučným: **pojem** (definice) ---
  const ruleParen = /\*\*([^*\n]{4,70})\*\*\s*\(([^)]{10,200})\)/g;
  while ((m = ruleParen.exec(body)) !== null) {
    const term = stripMd(m[1]);
    const def = stripMd(m[2]).trim();
    if (isValidTerm(term) && !found.has(term)) {
      found.set(term, def);
    }
  }

  // --- Pravidlo 3: tučné pojmy bez definice — vezmi větu ve které se vyskytují ---
  const ruleBold = /\*\*([^*\n]{4,70})\*\*/g;
  while ((m = ruleBold.exec(body)) !== null) {
    const term = stripMd(m[1]);
    if (!isValidTerm(term) || found.has(term)) continue;

    // najdi větu okolo výskytu
    const start = Math.max(0, m.index - 300);
    const end = Math.min(body.length, m.index + 300);
    const window = body.slice(start, end).replace(/\n+/g, ' ');

    // rozděl na věty a najdi tu s pojmem
    const sentences = window.split(/(?<=[.!?])\s+/);
    const sentence = sentences.find((s) => s.includes(term) || s.includes(m[1]));
    if (sentence) {
      const def = stripMd(sentence).trim();
      if (def.length >= 20 && def.length <= 400) {
        found.set(term, def);
      }
    }
  }

  // --- Pravidlo 4: ## Nadpisy jako pojmy (level 2-3) — definice = první odstavec ---
  const ruleHeading = /^#{2,3}\s+(.{5,80})$/gm;
  while ((m = ruleHeading.exec(body)) !== null) {
    const term = stripMd(m[1]).replace(/^\d[\d.]*\s+/, '').trim(); // odstraní číslo článku
    if (!isValidTerm(term) || found.has(term)) continue;

    // první neprázdný odstavec po nadpisu (ne další nadpis, ne blockquote)
    const after = body.slice(m.index + m[0].length);
    const paraMatch = after.match(/\n\n([^#>\n][^\n]{20,400})/);
    if (paraMatch) {
      const def = stripMd(paraMatch[1]).trim();
      if (def.length >= 20) {
        found.set(term, def.slice(0, 350));
      }
    }
  }

  return { terms: found, sourceTitle };
}

// ----- zápis souboru rejstříku -----

function writeRejstrikFile(term, definition, slug, sourceFilePath, sourceTitle) {
  const filename = path.join(REJSTRIK_DIR, `${slug}.md`);
  if (fs.existsSync(filename)) {
    console.log(`  ↩ ${slug}.md (existuje)`);
    return false;
  }

  const sourceSlug = quartzSlug(sourceFilePath);
  const content = `---
title: "${term.replace(/"/g, "'")}"
---

## ${term}

${definition}

**Zdroj:** [[${sourceSlug}|${sourceTitle}]]

---

[🔍 Electropedia](${electropediaLink(term)})

[🔍 Hledat na elektrika.cz](${googleLink(term)})
`;

  fs.writeFileSync(filename, content, 'utf8');
  console.log(`  ✓ ${slug}.md`);
  return true;
}

// ----- procházení souborů -----

function getAllMdFiles(dir, excludeDirs = []) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!excludeDirs.includes(entry.name)) result.push(...getAllMdFiles(full, excludeDirs));
    } else if (entry.name.endsWith('.md') && entry.name !== 'index.md') {
      result.push(full);
    }
  }
  return result;
}

// ----- main -----

function main() {
  fs.mkdirSync(REJSTRIK_DIR, { recursive: true });

  const files = getAllMdFiles(CONTENT_DIR, ['rejstrik']);
  console.log(`\nNalezeno ${files.length} souborů.\n`);

  // slug → { term, definition, source, sourceTitle }
  const allTerms = new Map();

  for (const filePath of files) {
    const rel = path.relative(CONTENT_DIR, filePath);
    const { terms, sourceTitle } = extractTerms(filePath);
    console.log(`📄 ${rel}  (${terms.size} pojmů)`);

    for (const [term, definition] of terms) {
      const slug = slugify(term);
      if (slug && !allTerms.has(slug)) {
        allTerms.set(slug, { term, definition, source: filePath, sourceTitle });
      }
    }
  }

  console.log(`\n📝 Celkem ${allTerms.size} unikátních pojmů. Zapisuji...\n`);

  let created = 0;
  for (const [slug, { term, definition, source, sourceTitle }] of allTerms) {
    if (writeRejstrikFile(term, definition, slug, source, sourceTitle)) created++;
  }

  // index
  const indexPath = path.join(REJSTRIK_DIR, 'index.md');
  if (!fs.existsSync(indexPath)) {
    const links = [...allTerms.keys()]
      .sort()
      .map((s) => `- [[rejstrik/${s}|${allTerms.get(s).term}]]`)
      .join('\n');
    fs.writeFileSync(
      indexPath,
      `---\ntitle: "Rejstřík pojmů"\n---\n\n# Rejstřík elektrotechnických pojmů\n\n${links}\n`,
      'utf8'
    );
    console.log('\n✓ rejstrik/index.md');
  }

  console.log(`\n✅ Hotovo — vytvořeno ${created} nových souborů.`);
}

main();
