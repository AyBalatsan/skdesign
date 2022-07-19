import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
  box-sizing: border-box;
  outline: none;
}
a {
  text-decoration: none;
}
img, video {
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  padding: 0;
  background: transparent;
  border: none;
}
button, input {
  font-family: inherit;
}
p,h1,h2,h3,h4,h5 {
  margin: 0;
}
ul,ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
body{
  font-weight: 400;
  padding: 0;
  margin: 0;
  position: relative;
  min-width: 320px;
  overflow-X: hidden;
  width: 100%;   
  font-family: 'Open Sans';
  font-weight: 400;
}
.container {
  max-width: 1500px;
  padding: 0 30px;  
  margin: 0 auto;
  
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}