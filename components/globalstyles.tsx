import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    width: 100%;
    heih: 100%;
    overflow-x: hidden;
    

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Orbitron', sans-serif;
  }
`

export default GlobalStyle
