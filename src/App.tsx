import { ChakraProvider } from '@chakra-ui/react'
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
