// @ts-ignore
import script from "./scripts/randomquote.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const RandomQuote: QuartzComponent = () => <></>

RandomQuote.afterDOMLoaded = script

export default (() => RandomQuote) satisfies QuartzComponentConstructor
