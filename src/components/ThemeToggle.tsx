import React from 'react'
import { useColorMode, Box, Button } from '@chakra-ui/core'
import { FaMoon, FaSun } from 'react-icons/fa'

export default () => {
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
