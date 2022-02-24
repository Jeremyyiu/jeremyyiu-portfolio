import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  // useColorMode function grabs the system preference for color theme.
  // Upon selecting the color mode, Chakra stores the color mode in localStorage
  // This updated theme will be used on the next page load as well.
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      // Toggles the color mode from light or dark and vice versa
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
