
export const name = 'Theming'

# Theming

To apply themes to Rebass components, add a [ThemeProvider][] component to the root of your application and pass a `theme` object as a prop.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

An example theme could look like the following:

```js
// example theme.js

export default {
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff'
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  }
}
```

## Theme Object

Rebass and [styled-system][] allow global font sizes, colors, spacing, button variants, and other values to be set with a theme object.

The following keys will be picked up by styled-system props:

Key | Type | Description
---|---|---
`breakpoints` | Array | Array of viewport widths to use for min-width media queries
`fontSizes` | Array | Array of numbers to use as a typographic scale
`colors` | Object | Color names that can be used in `color`, `bg`, and `borderColor` props
`space` | Array | Array of numbers for use as margin and pixel values
`fonts` | Array or Object | Values for the `fontFamily` prop
`fontWeights` | Array or Object | Values for `fontWeight` prop
`lineHeights` | Array or Object | Values for `lineHeight` prop
`letterSpacings` | Array or Object | Values for `letterSpacing` prop
`shadows` | Array or Object | Values for `boxShadow` prop
`borders` | Array or Object | Values for `border` props
`radii` | Array or Object | Values for `borderRadius` props
`opacity` | Array or Object | Values for `opacity` props

Additionally, each Rebass component can be themed with
CSS objects and added to the theme with a key corresponding to its name.

```js
// example theme
const theme = {
  Heading: {
    fontFamily: '"Roboto Condensed", sans-serif',
    lineHeight: 1.25
  }
}
```

## Button & Card Variants

The Button and Card components accept a `variant` prop to pick up predefined styles in the theme.

```js
// example theme.js
const blue = '#07c'

export default {
  buttons: {
    primary: {
      color: '#fff',
      backgroundColor: blue,
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    }
  }
}
```

With the above `buttons` object, the Button component can apply styles based on the `variant` prop.

```jsx
<Button variant='primary' />
<Button variant='outline' />
```


[ThemeProvider]: https://www.styled-components.com/docs/advanced#theming
[styled-system]: https://github.com/jxnblk/styled-system
