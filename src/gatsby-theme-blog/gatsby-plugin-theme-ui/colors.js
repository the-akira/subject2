import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */
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
