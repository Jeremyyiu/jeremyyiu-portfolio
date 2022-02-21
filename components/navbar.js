import Logo from './logo'
import NextLink from 'next/link'
import Image from 'next/image'
import {
    Container,
    Box, 
    Link,
    Stack,
    Heading,
    Flex, 
    Menu, 
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href = {href}>
            <Link
            p = {2}
            bg = {active ? 'glassTeal' : undefined}
            color = {active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    const githubLogo = `/images/github_logo${useColorModeValue('', '-dark')}.png`

    return (
        <Box
        position = "fixed"
        as = "nav"
        w = "100%"
        bg = {useColorModeValue('#ffffff40', '#2020380')}
        style = {{backdropFilter: 'blur(10px)'}}
        zIndex = {1}
        {...props} >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                 <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                    <Logo />
                </Heading>
                </Flex>
                <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt = {{ base: 4, nmd: 0}}
                >
                    <LinkItem href="/works" path = {path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path = {path}>
                        Posts
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/Jeremyyiu"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <Image src = {githubLogo} width = {20} height = {20} alt="logo" />
                        View Github
                    </LinkItem>
                </Stack>
            <Box flex = {1} align = "right">
                <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                    </Menu>
                    <MenuList>
                        <NextLink href = "/" passHref>
                            <MenuItem as={Link}>About</MenuItem>
                        </NextLink>
                        <NextLink href = "/" passHref>
                            <MenuItem as={Link}>Works</MenuItem>
                        </NextLink>
                        <NextLink href = "/" passHref>
                            <MenuItem as={Link}>Posts</MenuItem>
                        </NextLink>
                        <MenuItem as={Link} href="https://github.com/Jeremyyiu">View Github</MenuItem>
                    </MenuList>
                </Box>
            </Box>
          </Container>
        </Box>

      
    )
}

export default Navbar