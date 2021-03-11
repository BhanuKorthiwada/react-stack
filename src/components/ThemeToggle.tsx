import { useColorMode, Box, Button } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box textAlign="right" py={4} mr={12}>
      <Button
        aria-label={colorMode === 'light' ? 'moon' : 'sun'}
        leftIcon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        colorScheme="teal"
        variant="ghost"
        onClick={toggleColorMode}
      ></Button>
    </Box>
  )
}

export default ThemeToggle
