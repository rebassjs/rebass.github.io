
export const name = 'Extending'

# Extending

Rebass components are great to use as base components that can be extended for various purposes in your design system.

There are two primary ways to extend Rebass components:

```jsx
// React-based extension
import React from 'react'
import { Box } from 'rebass'

const Container = props =>
  <Box
    {...props}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />
```

```js
// styled-components based extension
import styled from 'styled-components'
import { Box } from 'rebass'

const Container = styled(Box)({
  maxWidth: '1024px'
})

Container.defaultProps = {
  mx: 'auto'
}
```

## Example Extensions

### Container

```jsx
const Container = props =>
  <Box
    {...props}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />
```

### Badge

```jsx
const Badge = props =>
  <Card
    color='white'
    bg='blue'
    {...props}
    px={3}
    py={1}
    borderRadius={9999}
    css={{
      display: 'inline-block'
    }}
  />
```

### Avatar

```jsx
const Avatar = props =>
  <Image
    width={48}
    height={48}
    borderRadius={9999}
    {...props}
  />
```

### BlockLink

```jsx
const BlockLink = props =>
  <Link
    color='inherit'
    {...props}
    css={{
      display: 'block',
      textDecoration: 'none'
    }}
  />
```

### NavLink

```jsx
const NavLink = props =>
  <Link
    px={2}
    py={1}
    color='inherit'
    {...props}
    css={{
      display: 'block',
      fontWeight: 'bold',
    }}
  />
```

### Embed

```jsx
const Embed = props =>
  <Box
    {...props}
    width={1}
    css={{
      height: 0,
      paddingBottom: (9 / 16) + '%',
      position: 'relative',
      overflow: 'hidden',
      '& > iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0
      }
    }}
  />
```

### Pre

```jsx
const Pre = props =>
  <Text
    {...props}
    as='pre'
    fontFamily='Menlo, monospace'
    p={2}
    bg='lightgray'
  />
```

### Fixed

```jsx
const Fixed = props =>
  <Box
    {...props}
    css={{
      position: 'fixed'
    }}
  />
```

### Divider


```jsx
const Divider = props =>
  <Box
    {...props}
    as='hr'
    bg='gray'
    css={{
      border: 0,
      height: 1
    }}
  />
```

### Caps

```jsx
const Caps = props =>
  <Text
    fontSize={1}
    {...props}
    css={{
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }}
  />
```

### Toolbar

```jsx
const Toolbar = props =>
  <Flex
    px={2}
    color='white'
    bg='black'
    alignItems='center'
    {...props}
  />
```
