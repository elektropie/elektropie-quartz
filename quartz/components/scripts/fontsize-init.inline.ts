const savedSize = localStorage.getItem("quartz-font-size")
if (savedSize) {
  document.documentElement.style.fontSize = `${savedSize}px`
}
