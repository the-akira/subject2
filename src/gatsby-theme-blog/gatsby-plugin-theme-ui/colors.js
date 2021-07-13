import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const blueGray = `#282c35`
const white = `#cccccc`

export default merge(defaultThemeColors, {
    heading: white,
    text: white,
    background: blueGray,
    primary: white,
    highlight: white,
  modes: {
    dark: {
      text: blueGray,
      primary: blueGray,
      heading: blueGray,
      highlight: blueGray,
      background: white,
    },
  },
})
