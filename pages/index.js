import { Container, Box, Heading, useColorModeValue } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="red"
        p={3}
        mb={6}
        align="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a software engineer based in Sydney.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jeremy Yiu
          </Heading>
          <p>Quality Assurance Engineer / Software Engineer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
