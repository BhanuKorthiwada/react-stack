import React from 'react'
import { ChakraProvider } from '@chakra-ui/core'
import customTheme from 'misc/theme'
import { Header } from 'components'

function App() {
    return (
        <ChakraProvider resetCSS theme={customTheme}>
            <Header />
        </ChakraProvider>
    )
}

export default App
