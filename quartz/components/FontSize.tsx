// @ts-ignore
import initScript from "./scripts/fontsize-init.inline"
// @ts-ignore
import script from "./scripts/fontsize.inline"
import style from "./styles/fontsize.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const FontSize: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "font-size-controls")}>
      <button id="font-size-decrease" aria-label="Zmenšit text" title="Zmenšit text">
        A−
      </button>
      <button id="font-size-increase" aria-label="Zvětšit text" title="Zvětšit text">
        A+
      </button>
    </div>
  )
}

FontSize.css = style
FontSize.beforeDOMLoaded = initScript
FontSize.afterDOMLoaded = script

export default (() => FontSize) satisfies QuartzComponentConstructor
