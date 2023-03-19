import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'

function App() {  

  return (
    <ThemeProvider theme={defaultTheme}>
    <h1>ok</h1>

    <GlobalStyle />
  </ThemeProvider>
  )
}

export default App
