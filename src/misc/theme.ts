import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      '50': '#f3f8f9',
      '100': '#eaf6f9',
      '200': '#c0e1f9',
      '300': '#9acaf8',
      '400': '#62a2f5',
      '500': '#3a76f2',
      '600': '#3055ee',
      '700': '#2d44e0',
      '800': '#2a36b7',
      '900': '#222f8e',
    },
  },
})
export default theme
