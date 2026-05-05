import type { ContentDetails } from "../../plugins/emitters/contentIndex"
import { FullSlug, getFullSlug, resolveRelative, simplifySlug } from "../../util/path"

function pickSentence(content: string): string {
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 40 && !l.startsWith("#") && !l.startsWith("-") && !l.startsWith(">"))
  if (lines.length === 0) return content.trim().slice(0, 220)
  // Skip the first few lines (usually headings/intro) and pick randomly from the rest
  const offset = Math.min(3, Math.floor(lines.length / 2))
  const pool = lines.length > offset ? lines.slice(offset) : lines
  const line = pool[Math.floor(Math.random() * pool.length)]
  return line.length > 220 ? line.slice(0, 220) + "…" : line
}

document.addEventListener("nav", async () => {
  const widget = document.getElementById("random-quote-widget")
  if (!widget) return

  const fullSlug = getFullSlug(window)
  const data: Record<FullSlug, ContentDetails> = await fetchData

  const entries = Object.entries(data).filter(
    ([, v]) =>
      v.content &&
      v.content.trim().length > 60 &&
      !v.slug.includes("index") &&
      !v.slug.startsWith("tags/"),
  ) as [FullSlug, ContentDetails][]

  if (entries.length === 0) return

  const [entrySlug, entry] = entries[Math.floor(Math.random() * entries.length)]
  const sentence = pickSentence(entry.content)
  const href = resolveRelative(fullSlug, simplifySlug(entrySlug))

  widget.innerHTML = `
    <div class="random-quote-inner">
      <p class="random-quote-label">Náhodný zápisek</p>
      <blockquote class="random-quote-text">${sentence}</blockquote>
      <p class="random-quote-source">— <a href="${href}">${entry.title}</a></p>
    </div>
  `

  window.addCleanup(() => {
    widget.innerHTML = ""
  })
})
