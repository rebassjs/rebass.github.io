import React from 'react'
import { width } from 'styled-system'
import { Helmet as Head } from 'react-helmet'
/*
import {
  Link,
  StyleProvider,
  Layout,
  NavLinks,
  NavLink,
  Pagination,
  ScrollTop,
} from 'mdx-go/styled-components'
*/
import * as Rebass from 'rebass'
import {
  Box,
  Text,
} from 'rebass'

export const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
export const docs = '/getting-started'
export const install = 'npm i rebass@next'
export const github = 'https://github.com/rebassjs/rebass'

export const scope = {
  ...Rebass,
  photo
}

const theme = {
  colors: {
    blue: '#33e',
    lightgray: '#f6f6ff',
  },
  buttons: {
    primary: {
      color: 'black',
      backgroundColor: 'magenta',
    },
    outline: {
      color: 'magenta',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    }
  },
  cards: {
    basic: {
      borderRadius: '4px',
      boxShadow: '0 0 24px rgba(0, 0, 0, 0.25)'
    }
  },
  LiveEditor: {
    color: '#c0c'
  },
  pre: {
    color: '#c0c'
  },
  code: {
    color: '#c0c'
  }
}

const nav = [
  'Rebass',
  'Getting Started',
  'Props',
  'Extending',
  'Theming',
  'Box',
  'Flex',
  'Text',
  'Heading',
  'Button',
  'Link',
  'Image',
  'Card',
  'Advanced',
  'Examples',
]

export const Container = props =>
  <Box
    {...props}
    px={4}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />

export const Pre = props =>
  <Text
    {...props}
    css={{
      fontFamily: 'Menlo, monospace'
    }}
  />

/*
export const PageLayout = props =>
  <Layout>
    <Layout.MenuToggle m={3} />
    <Layout.Sidebar>
      <NavLinks
        {...props}
        py={1}
        order={nav}
        filter={route => nav.includes(route.name)}
      />
      <NavLink
        width={1}
        mt={4}
        px={3}
        href={github}
        children='GitHub'
      />
      <NavLink
        width={1}
        px={3}
        href='https://jxnblk.com'
        children='Made by Jxnblk'
      />
    </Layout.Sidebar>
    <Layout.Main>
      {props.children}
      <Pagination
        {...props}
        order={nav}
        filter={route => nav.includes(route.name)}
      />
    </Layout.Main>
  </Layout>
*/

// move to layouts
export const Root = props => {
  // const Layout = [ '/', '/home' ].includes(props.location.pathname)
  //   ? props => props.children
  //   : PageLayout

  return (
    <React.Fragment>
      <Head>
        {ga}
        <title>Rebass</title>
        <meta name='description' content='React UI component library & design system, built with styled-components and styled-system' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@jxnblk' />
        <meta name='twitter:title' content='Rebass' />
        <meta name='twitter:description' content='React UI component library & design system, built with styled-components and styled-system' />
        <meta name='twitter:image' content='https://rebassjs.org/card.png' />
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Roboto+Mono' />
      </Head>
      {props.children}
      {/*
      <StyleProvider
        theme={theme}
        components={scope}>
        <Layout {...props}>
          {props.children}
        </Layout>
      </StyleProvider>
      <ScrollTop {...props} />
      */}
    </React.Fragment>
  )
}

const ga = [
  <script
    key='ga1'
    async
    src='https://www.googletagmanager.com/gtag/js?id=UA-4603832-13'
  />,
  <script
    key='ga2'
    dangerouslySetInnerHTML={{
      __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-4603832-13');`
    }}
  />
]

export const features = [
  '8 foundational UI components',
  'Super small (~1KB)',
  'Responsive, themeable style props',
  'Flexbox grid with the Box and Flex components',
  'Support for styled-components & emotion',
  'Extensible base components',
  'Design-system based consistency',
  'Built for responsive web design',
]

export const quotes = [
  {
    text: '“One of the best React component libs out there”',
    name: 'Max Stoiber',
    href: 'https://twitter.com/mxstbr/status/882657561111080960'
  },
  {
    text: '“Rebass is the Bootstrap of React.”',
    name: 'Jori Lallo',
    href: 'https://twitter.com/jorilallo/status/882990343225868289'
  },
  {
    text: '“A whopper component library built on styled-components. Responsive, systematic, scalable...the business!”',
    name: 'Colm Tuite',
    href: 'https://twitter.com/colmtuite/status/882715087936606210'
  },
  {
    text: '“Why the hell are we now putting CSS in Javascript? I’m losing my mind with web developers trying to control everything in the world with client-side javascript. What a mess.”',
    name: 'alttab',
    href: 'https://news.ycombinator.com/item?id=14705579'
  }
]

export const demo = `<Flex
  px={4}
  py={4}
  alignItems='center'>
  <Heading
    fontSize={[ 4, 5 ]}
    color='blue'>
    Live Demo
  </Heading>
  <Box mx='auto' />
  <Button>
    Beep
  </Button>
  <Button ml={2}>
    Boop
  </Button>
</Flex>`
