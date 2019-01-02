
export const name = 'Examples'

# Examples


```.jsx
<Flex mx={-2}>
  <Box width={1/2} px={2}>
    <Text p={1} color='white' bg='blue'>
      Half
    </Text>
  </Box>
  <Box width={1/2} px={2}>
    <Text p={1} color='white' bg='blue'>
      Half
    </Text>
  </Box>
</Flex>
```

```.jsx
<Flex flexWrap='wrap' mx={-2}>
  <Box px={2} py={2} width={1/2}>
    <Text p={1} color='white' bg='blue'>
      1/2
    </Text>
  </Box>
  <Box px={2} py={2} width={1/2}>
    <Text p={1} color='white' bg='blue'>
      1/2
    </Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='white' bg='blue'>
      1/3
    </Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='white' bg='blue'>
      1/3
    </Text>
  </Box>
  <Box px={2} py={2} width={1/3}>
    <Text p={1} color='white' bg='blue'>
      1/3
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
  <Box px={2} py={2} width={1/4}>
    <Text p={1} color='white' bg='blue'>
      1/4
    </Text>
  </Box>
</Flex>
```

```.jsx
<Flex alignItems='center'>
  <Box width={1/3}>
    <Heading
      py={4}
      fontSize={[ 5, 6 ]}
      color='white'
      bg='blue'>
      Hello
    </Heading>
  </Box>
  <Box width={1/3} ml='auto'>
    <Text>Grid</Text>
  </Box>
</Flex>
```

```.jsx
<Flex>
  <Card
    width={[ 256, 320 ]}
    mx='auto'
    p={2}
    variant='basic'>
    <Image
      src='https://source.unsplash.com/random/512x384'
      borderRadius={2}
    />
    <Text>
      Image Card
    </Text>
  </Card>
</Flex>
```

```.jsx
<Flex
  px={2}
  color='white'
  bg='black'
  alignItems='center'>
  <Text p={2} fontWeight='bold'>Rebass</Text>
  <Box mx='auto' />
  <Link
    href='#!'
    p={2}
    color='white'>
    Profile
  </Link>
</Flex>
```

```.jsx
<Box
  width={1}
  css={{
    height: 0,
    paddingBottom: (900 / 16) + '%',
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
  }}>
  <iframe
    width='560'
    height='315'
    src='https://www.youtube.com/embed/GNCd_ERZvZM'
    frameBorder='0'
    allowFullScreen
  />
</Box>
```

```.jsx
<Card
  p={4}
  py={6}
  backgroundImage='url(https://source.unsplash.com/random/1024x768)'
  backgroundSize='cover'
  borderRadius={8}
  color='white'
  bg='darkgray'
  >
  <Heading
    textAlign='center'
    fontSize={[ 5, 6 ]}>
    Background Image
  </Heading>
</Card>
```
