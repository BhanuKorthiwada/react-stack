import React from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import customTheme from 'misc/theme'
import { Header } from 'components'

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <ColorModeProvider>
                <CSSReset />
                <Header />
            </ColorModeProvider>
        </ThemeProvider>
    )
}

export default App
