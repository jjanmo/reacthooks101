import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root{
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  body{
    font-family: 'Sansita', sans-serif;
  }
  a,
  button {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  input {
    padding: 0;
    color: inherit;
    border-width: 0.1rem;
  }
`

export default GlobalStyles
