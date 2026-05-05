const FONT_STORAGE_KEY = "quartz-font-size"
const FONT_MIN = 12
const FONT_MAX = 24
const FONT_DEFAULT = 16

function getFontSize(): number {
  const stored = localStorage.getItem(FONT_STORAGE_KEY)
  return stored ? parseInt(stored, 10) : FONT_DEFAULT
}

function applyFontSize(size: number) {
  document.documentElement.style.fontSize = `${size}px`
}

document.addEventListener("nav", () => {
  applyFontSize(getFontSize())

  const dec = document.getElementById("font-size-decrease")
  const inc = document.getElementById("font-size-increase")

  function decrease() {
    const next = Math.max(FONT_MIN, getFontSize() - 1)
    localStorage.setItem(FONT_STORAGE_KEY, String(next))
    applyFontSize(next)
  }

  function increase() {
    const next = Math.min(FONT_MAX, getFontSize() + 1)
    localStorage.setItem(FONT_STORAGE_KEY, String(next))
    applyFontSize(next)
  }

  dec?.addEventListener("click", decrease)
  inc?.addEventListener("click", increase)

  window.addCleanup(() => {
    dec?.removeEventListener("click", decrease)
    inc?.removeEventListener("click", increase)
  })
})
