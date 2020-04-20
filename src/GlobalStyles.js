import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    vertical-align: baseline;
    color:#fff;
    background-color: #000;
  }

  h1 {
    font-size: 3rem;
    font-weight: 100;
    line-height: 4rem;
  }

  p {
    font-weight: 100;
    color: rgba(255,255,255,0.6);
  }
`
